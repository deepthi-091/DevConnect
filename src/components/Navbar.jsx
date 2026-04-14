import { NavLink } from "react-router-dom";
import Style from "../Styles/Navbar.module.css";
export default function Navbar(){
  const theme = () =>{
    const currenttheme=localStorage.getItem("theme") || "light";
    const newtheme = currenttheme === "light" ? "dark" : "light";

    localStorage.setItem("theme",newtheme);
    document.body.className = newtheme;
  }
    return(
      <>
      <h3>Developers</h3>
        <div className={Style.navbar}>
        <div className={Style.left}>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/users">Developers</NavLink>
        </div>
        <div className={Style.right}>
            <button onClick={theme}>Toggle</button>
        </div>
      </div>
      </>
    )
}