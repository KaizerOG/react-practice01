import "./App.css";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Blogs from "./componenets/Blog";
import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
import Navbar from "./componenets/navbar";
import Notfound from "./componenets/Notfound";
import Details from "./componenets/Deatail";

function App() {
  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Blogs" element={<Blogs />}></Route>
          <Route path="*" element={<Notfound/>}>Not Found</Route>
          <Route path="/home" element={<Navigate to = "/"/>}></Route>
          <Route path="/Blog/:id" element={<Details/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
