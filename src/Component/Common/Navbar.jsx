import { useState } from "react";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { LuSearch, LuPhoneCall } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import MegaMenu from "../MegaMenu";


const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () =>  setClick(!click);
    
    const [inputShow, setInputShow] = useState(false)
  
    const content = <>
        <div className="lg:hidden z-50 mg:block absolute top-16 w-full left-0 right-0 bg-base backdrop-filter backdrop-blur-lg bg-opacity-30 hover:transition-all duration-150 delay-150">
            <ul className="text-center text-xl p-20">
                <Link to="/">
                    <li className="my-4 py-4 border-b border-primary font-semibold text-primary hover:text-white hover:transition-all duration-150 hover:bg-primary hover:rounded">Home</li>
                </Link >
                <Link to="Shop">
                    <li className="my-4 py-4 border-b border-primary font-semibold text-primary hover:text-white hover:transition-all duration-150 hover:bg-primary hover:rounded">Shop</li>
                </Link>
                <Link to="Blogs">
                    <li className="my-4 py-4 border-b border-primary font-semibold text-primary hover:text-white hover:transition-all duration-150 hover:bg-primary hover:rounded">Blogs</li>
                </Link>
                <Link to="Add-Blog">
                    <li className="my-4 py-4 border-b border-primary font-semibold text-primary hover:text-white hover:transition-all duration-150 hover:bg-primary hover:rounded">Add Blog</li>
                </Link>
               
                 {/* <!-- Mega menu here --> */}
        <div className="group flex justify-center">
            <button className=" text-primary font-semibold text-center flex gap-[2px] items-center"> Recipes
                <FaChevronDown className="pt-[2px]" />
            </button>
            <MegaMenu/>
        </div> 
        {/* Mega Menu End */}
        <Link to="Contact">
                    <li className="my-4 py-4 border-b bg-primary border-primary text-white hover:transition-all duration-150 rounded-full">Contact</li>
                </Link>
            </ul>
        </div>
    </>
    return (
        <nav className="z-50 bg-base">
            <div className="h-20vh flex justify-between items-center lg:py-5 px-20 py-4 border-b">
                <div className="flex items-center gap-1 flex-1">
                    <img src={logo} alt="" />
                    <span className="span text-3xl font-bold text-headTextColor">esty</span>
                </div>
                <div className="lg:flex md:flex flex-2 justify-end font-normal hidden">
                    <div className="flex-20">
                    <ul className="flex gap-8 text-[16px] text-headTextColor font-semibold justify-center items-center">
                <Link to="/" className="group">
                    <li className="hover:text-primary hover:transition-all ease-in-out delay-150 duration-150  border-b border-base hover:border-primary cursor-pointer">Home</li>
                </Link>
                <Link to="Blogs">
                    <li className="hover:text-primary hover:transition-all ease-in-out delay-150 duration-150 border-b border-base hover:border-primary cursor-pointer">Blogs</li>
                </Link>
                <Link to="Add-Blog">
                    <li className="hover:text-primary hover:transition-all ease-in-out delay-150 duration-150 border-b border-base hover:border-primary cursor-pointer">Add Blog</li>
                </Link>
                 {/* <!-- Mega menu here --> */}
        <div className="group">
            <button className=" group-hover:text-primary flex gap-[4px] items-center"> Recipes
                <FaChevronDown className="text-primary pt-[2px]" />
            </button>

            <MegaMenu/>
          
        </div> 

        <div className="w-56 relative ml-20 text-primary">
            
        
        <input className={`border border-primary ${inputShow ? 'w-56 transtion-all delay-75 duration-700 ease-in-out' : 'w-0 absolute right-0 bg-base -top-4 '}  px-4 py-[4px] rounded-full outline-none`} type="text" />

        <LuSearch onClick={() => setInputShow(true)} className={`absolute ${inputShow ? "top-2" : "-top-2"} right-2`}/>

        </div>

        
        {/* Mega Menu End */}
        <Link to="Contact">
                    <li className=" py-2 px-8 border-b bg-primary flex items-center border-primary text-white hover:transition-all duration-150 rounded-full"><span><LuPhoneCall className="mr-2" /></span> Contact</li>
                </Link>
            </ul>
                    </div>
                </div>
                <div>
                    {click && content}
                </div>



                <button className="block md:hidden hover:transition-none " onClick={handleClick}>
                    {click ? <FaTimes className="text-black"/> : <CiMenuFries className="text-black"/>}
                </button>

            </div>

        </nav>
    );
};

export default Nav;