import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import {BrowserRouter , Routes, Route} from "react-router-dom";

const Dashboard = () => {


  return (
    <div>
        <Nav />

        <BrowserRouter>
          <Routes>
            <Route path = "/" element={<Home/>} />
            <Route path = "/about" element={<About/ >}/>
          </Routes>
        </BrowserRouter>

       

    </div>
  )
}

export default Dashboard;