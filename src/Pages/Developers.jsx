import { useEffect, useState } from "react"
import { getUsers } from "../api/Userapi";
import Loader from "../components/Loader";
import Style from "../Styles/Developers.module.css";
import UserList from "../components/UserList";
import Searchbar from "../components/Searchbar";
export default function Developers(){
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
            setUsers(response.data);
            
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
    return(
        <>
            {loading ? <Loader /> :
               <div>
                <Searchbar onSearch={handleSearch} />
                <UserList users={filterusers} />
               </div>
            }
        </>
    )
}