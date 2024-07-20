import { useContext } from "react";
import { MyContext } from "./App";

export default function Product({item}){
    const {latest,setLatest} = useContext(MyContext);
    console.log(item);

    function addCart(){
        setLatest([item]);
    }
    return(
        <div onClick={addCart}  className="p-[10px] cursor-pointer w-[11em] mx-auto my-[2em] shadow-[2px_4px_10px_rgba(0,0,0,0.5)] h-[26em]">
        
                <img className="w-[12em] h-[16em]" src={item.img} alt="" />
                <p className="text-lg font-[600] mt-[1em] mb-[.5em]">{item.name}</p>
                <p className="opacity-75 ]">{item.author}</p>
                <p className="mb-[.5em]">{item.rating}</p>
            </div>
        
    )
}