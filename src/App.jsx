import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import AddBlog from "./Pages/AddBlog";
import Navbar from "./Component/Common/Navbar";
import Footer from "./Component/Common/Footer";
import Contact from "./Pages/Contact";


const App = () => {
  return (
     <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/blogs" element={<Blogs/>} /> 
        <Route path="/add-blog" element={<AddBlog/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
      <Footer/>
     </>
  );
};

export default App;

