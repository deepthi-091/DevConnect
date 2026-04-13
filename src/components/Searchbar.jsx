import {useRef, useState, useEffect} from "react";
export default function searchbar({onSearch}){
    const[query,setQuery]=useState("");
    const inputfocus = useRef(null);
    useEffect(()=>{
        inputfocus.current.focus();
    },[]);
    const handleChange= (e)=>{
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    }
    return(
        <input
            ref={inputfocus}
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search items.."
        />
    )
}