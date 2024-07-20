import { useContext } from "react"
import { MyContext } from "./App"
import { Link } from "react-router-dom";

export default function Detail(){

    const {latest,setLatest,cart,setCart} = useContext(MyContext);
    
    return(
        <>
        {
        
            latest.map((book)=>{
                return(
                    <>
                    
                    <div className="m-[3em_2em] md:flex gap-10 my-[5em]" >
                    <img className=" w-[20em]  mt-[2em] md:w-[17em] " src={book.img} alt="" />
                    <div>
                    <p className="font-[600] text-3xl mt-[1em] ">{book.name} By {book.author}</p>
                    <p className="mt-[1em] text-xl opacity-75 font-[600] ">{book.Prize}.00</p>
                    <div className="flex mr-[2em] gap-10 mt-[2em]">
                        <p className=" flex justify-center items-center font-[600] opacity-75 border-black border-[1px] w-[50px]">{book.rating}</p>
                        {cart.includes(book) ? (<button onClick={()=>setCart(cart.filter((c)=>c.id!=book.id))}  className="bg-red-600 text-white p-[8px_10px] rounded-lg">Remove from Cart</button>):(<button onClick={()=>setCart([...cart,book])} className="bg-[#040a1d] text-white p-[8px_10px] rounded-lg">Add to cart</button>)}
                    </div>
                    <div>
                        <p className="mt-[2em] font-[600] mb-[1em]">PRODUCT DETAILS</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati dolorem, quasi mollitia delectus reiciendis in, recusandae ex dicta ullam exercitationem tenetur officiis ipsam quibusdam. Praesentium consequuntur neque molestias atque.</p>
                    </div>
                    <Link to="/"><button className=" bg-[#040a1d] text-white p-[10px_15px] rounded-lg mt-[2em]">Back to Home</button></Link>
                    </div>
            </div>  
            </>          
                )
            })
        }
        </>
    )
}