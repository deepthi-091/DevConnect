import Style from "../Styles/Loader.module.css"
export default function Loader(){
    return(
        <div className={Style.overlay}>
            <div className={Style.spinner}></div>
        </div>
    )
}