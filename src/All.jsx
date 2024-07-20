
import finace from "./finance.json";
import all from "./All.json";
import Product from "./Product";
import sh from "./SH.json"
import { useState } from "react";
import { Link } from "react-router-dom";
export default function All(){
    const [isall,setIsAll] = useState(true)
    const [isfin,setIsFin] = useState();
    const [isSh,setIsSh] = useState();
    return(
        <>
        
        <div>
            <p className="text-2xl text-blue-700 m-[1em]">Popular Books</p>
            <ul className="p-[1em] flex gap-6 flex-wrap text-xl">
                <li onClick={()=>{setIsFin(false);setIsAll(true); setIsSh(false)}}  className="cursor-pointer hover:bg-[#040a21] hover:text-white hover:p-[5px_10px] hover:rounded-lg duration-300 ease-in-out">All</li>
                <li onClick={()=>{ setIsFin(true);setIsAll(false);setIsSh(false)}}  className="cursor-pointer hover:bg-[#040a21] hover:text-white hover:p-[5px_10px] hover:rounded-lg duration-300 ease-in-out">Finance</li>
                <li onClick={()=>{ setIsFin(false);setIsAll(false); setIsSh(true)}} className="cursor-pointer hover:bg-[#040a21] hover:text-white hover:p-[5px_10px] hover:rounded-lg duration-300 ease-in-out">Self-Help</li>
                <li  className="cursor-pointer hover:bg-[#040a21] hover:text-white hover:p-[5px_10px] hover:rounded-lg duration-300 ease-in-out">Stories</li>
                <li  className="cursor-pointer hover:bg-[#040a21] hover:text-white hover:p-[5px_10px] hover:rounded-lg duration-300 ease-in-out">Biographies</li>
                <li  className="cursor-pointer hover:bg-[#040a21] hover:text-white hover:p-[5px_10px] hover:rounded-lg duration-300 ease-in-out">Fantacy</li>
            </ul>
            <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {
                isall && all.map((book)=>{

                    return(
                      <Link><Product item={book} key={book.id}/> </Link> 
                    )
                })
               
            }
            {
                isfin && finace.map((book)=> {
                    return(
                        <Product item={book} key={book.id}/>
                    )
                })
            }
            {
                isSh && sh.map((book)=> {
                    return(
                        <Product item={book} key={book.id}/>
                    )
                })
            }
             </div>
            
        </div>
       
        </>
    )
}