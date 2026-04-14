import { useEffect, useState } from "react"
import { addUser, getUsers } from "../api/Userapi";
import Loader from "../components/Loader";
import Style from "../Styles/Developers.module.css";
import UserList from "../components/UserList";
import Searchbar from "../components/Searchbar";
import { getLocalUsers } from "../utils/localStorageUsers";
import { useLocation, useNavigate } from "react-router-dom";
export default function Developers(){
    const navigate = useNavigate();
   // const location= useLocation();
    const[users,setUsers] = useState([]);
    const[loading,setLoading] = useState(false);
    const [filterusers,setfilterusers] = useState(users);
    useEffect(()=>{
        fetchusers();
        
    },[]);
    useEffect(()=>{
        setfilterusers(users);
    },[users]);
    const fetchusers = async ()=>{
        setLoading(true);
        try{
            const response = await getUsers();
            const localusers = getLocalUsers();
            setUsers([...response.data,...localusers]);
            
        }
        catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    };
    const handleSearch = (query)=>{
        setfilterusers(users.filter((user)=>
            user.name.toLowerCase().includes(query.toLowerCase())
        ));
    }
    const handleAdd = ()=>{
       navigate("/register")
    }
    return(
        <>
            {loading ? <Loader /> :
               <div>
                <div>
                    <Searchbar onSearch={handleSearch} />
                    <button onClick={handleAdd}>AddUser</button>
                </div>
                <UserList users={filterusers} />
               </div>
            }
        </>
    )
}