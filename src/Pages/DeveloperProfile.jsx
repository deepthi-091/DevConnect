import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../api/Userapi";
import Loader from "../components/Loader";
import { getlocaluserById } from "../utils/localStorageUsers";
export default function DeveloperProfile(){
    const {id} = useParams();
    const [user,setuser] = useState({});
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const fetchuser = useCallback(async () => {
        setLoading(true);
        try{
            const response = await getUserById(id);
            setuser(response.data);
        }
        catch(error){
            const localuser = getlocaluserById(id);
            setuser(localuser || null);
            console.log(error);
        }
        finally{
            setLoading(false);
        }
        
        
    },[id]);
     useEffect(()=>{
       fetchuser();
    },[fetchuser]);
    return(
        <>
           {loading ? <Loader /> : 
            <div key={user.id}>
                <button onClick={()=>{navigate(-1)}}>Back</button>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
            </div>}
        </>
    )
}