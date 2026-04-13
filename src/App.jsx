import { BrowserRouter ,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Developers from "./Pages/Developers";
import DeveloperProfile from "./Pages/DeveloperProfile";
import PageNotFound from "./Pages/PageNotFound";
export default function App(){
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<Developers />}></Route>
          <Route path="/users/:id" element={<DeveloperProfile />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}