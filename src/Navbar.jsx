import logo from "./images/logo1.png"
import cart from "./images/cart1.png"
import menu from "./images/menu1.png"
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
    const navbar = ["Home","Contacts","Products","Cart","About"];
    const [istrue,setIstrue] = useState(false);
     return(
        <>
        <div className=" bg-slate-100 flex p-[10px] justify-between">
            <img src={logo} alt="" className="w-[130px]" />
            <nav className="">
                <ul className="top-0 sticky z-[20] hidden sm:flex gap-5 p-[20px]  md:gap-9 md:text-lg  lg:gap-16">
                    <Link to="/"><li className="">Home</li></Link>
                    <Link to="/contact"><li className="">Contact</li></Link>
                    <Link to="/register"><li className="">Register</li></Link>
                    <Link to="/cart"><li className="">Cart</li></Link>
                    <Link to="/about"><li className="">About</li></Link>
                </ul>
            </nav>
            <div className="flex gap-3">
                <Link to="/cart"><img src={cart} alt="" className="w-[50px] h-[50px] self-center cursor-pointer lg:mr-[2em] mt-[7px]" /></Link>
                <img onClick={()=>setIstrue(!istrue)} src={menu} alt="" className="w-[30px] h-[30px] self-center cursor-pointer sm:hidden mt-[-8px]"/>
            </div>
        </div>
        <nav className=" bg-slate-100 text-center sm:hidden">
            {
                istrue &&
                    <>
                   <Link to='/'> <li className="p-[10px]">Home</li></Link>
                   <Link to="/contact" > <li className="p-[10px]">Contact</li></Link>
                   <Link to="/register"> <li className="p-[10px]">Register</li></Link>
                   <Link to="/cart"> <li className="p-[10px]">Cart</li></Link>
                   <Link to="/about"> <li className="p-[10px]">About</li></Link>
                    </>
                }
            
        </nav>
       
      
        </>
    )
}