
import { useState } from "react";
import Hero from "./Hero";
import popular from "./Popular.json"
import { Link } from "react-router-dom";
import Product from "./Product";


export default function Popular(){
    
    const [products] = useState(popular)
    return(
        <>
        <p className="text-blue-700 text-2xl w-[8em] mx-auto mt-[2em] mb-[1em]">Latest Collections</p>
    
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
    {
        products.map((book)=>{
            return(
                <>
                <Link  to="/detail"><Product item={book} key={book.id}></Product> </Link>
                </>
                
            )
        })
    }
    </div>
   
    </>)
}