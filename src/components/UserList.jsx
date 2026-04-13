import { Link } from "react-router-dom"
import Style from "../Styles/UserList.module.css";
export default function UserList({users}){
    return(
        <>
            <div className={Style.container}>
                {users.map((user)=>(
                    <div className={Style.card}>
                        <Link to={`/users/${user.id}`} key={user.id}>
                        <li>{user.name}</li>
                        <li>{user.username}</li>
                        <li>{user.email}</li>
                    </Link>
                    </div>
                ))}
            </div>
        </>
    )
}