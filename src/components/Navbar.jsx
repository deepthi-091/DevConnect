import { NavLink } from "react-router-dom";
import Style from "../Styles/Navbar.module.css";
export default function Navbar(){
    return(
      <>
      <h3>Developers</h3>
        <div className={Style.navbar}>
        <div className={Style.left}>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/users">Developers</NavLink>
        </div>
        <div className={Style.right}>
            <button >Toggle</button>
        </div>
      </div>
      </>
    )
}