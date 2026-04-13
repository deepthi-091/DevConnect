import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getUserById } from "../api/Userapi";
export default function DeveloperProfile(){
    const {id} = useParams();
    const [user,setuser] = useState({});
    useEffect(()=>{
        useCallback(()=>{fetchuser()},[]);
    },[id]);
    const fetchuser = async () => {
        try{
            const response = await getUserById(id);
            setuser(response.data);
        }
        catch(error){
            console.log(error);
        }
        finally{

        }
        
    }
    return(
        <>
            <div key={user.id}>
                <button>Back</button>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
            </div>
        </>
    )
}