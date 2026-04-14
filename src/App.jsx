import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Developers from "./Pages/Developers";
import DeveloperProfile from "./Pages/DeveloperProfile";
import PageNotFound from "./Pages/PageNotFound";
import RegisterPage from "./Pages/RegisterPage";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
export default function App(){
  useEffect(()=>{
    const theme = localStorage.getItem("theme") || "light";
    document.body.className = theme;
  },[])
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Developers />}></Route>
          <Route path="/users/:id" element={<DeveloperProfile />} />
          <Route path="/register" element={<RegisterPage  />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}