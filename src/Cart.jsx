import { useContext } from "react"
import { MyContext } from "./App"



export default function Cart(){
    
    let count = 0;
    const {cart} = useContext(MyContext);
    

    function add(){
        count++;
    }

    return(
        <>
        <p className=" text-2xl font-[600] m-[2em_1em]">Your Cart🛒🛒...</p>

        <div className="font-[600] md:w-[700px] md:mx-auto bg-[#040a1d] text-white p-[10px_20px] text-xl flex justify-between m-[2em_1em]  ">
            <p >Book</p>
            <p>Quantity</p>
            <p>SubTotal</p>

        </div>
        {
            cart.map((book)=>{
                
                return(
                    <>
                    <div className="md:mx-auto md:w-[700px] mb-[2em] mx-[2em] flex justify-between">
                    <div>
                        <img className="w-[5em]" src={book.img} alt="" />
                        <p className="mt-2 opacity-75 font-[600]" >Price: ${book.Prize}.00</p>
                    </div>
                    <div className="self-center">
                    <div className="block text-lg text-center w-[40px] h-[40px]  border-[1.5px] border-black ">{count}</div>
                    <div className="flex gap-1 mt-[10px]">
                    <button onClick={add} className="bg-[#040a1d] text-white rounded-full w-[20px] h-[20px] text-lg flex justify-center items-center ">+</button>
                    <button className="bg-[#040a1d] text-white rounded-full w-[20px] h-[20px] text-2xl flex justify-center items-center">-</button>
                    </div>
                    </div>
                    <p className="self-center text-xl opacity-75">${book.Prize}.00</p>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}