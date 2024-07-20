import book5 from "./images/book5.jpg"
import hero from "./images/book.jpg" 
import Popular from "./Popular"

export default function Hero(){
    return(
        <>
        <div className="flex flex-col  md:flex-row-reverse from-blue-200 via-blue-100 to-blue-200 ">
            <img className="md:m-[1.5em_2em] w-[300px] rounded-full  p-[10px] mx-auto mt-3 md:w-[350px]" src={hero} alt="" />
            <div className="sm:self-center p-[20px] flex flex-col ">
                <h1 className=" text-3xl font-[600] p-[20px] text-center">Experience a journey of a thousand miles with just a single page !!!</h1>
                <p></p>
                <button className="bg-[#040a1d] text-white p-[8px_13px] w-[150px] mx-auto mt-[20px] rounded-[1.4vh]">Explore Now</button>

            </div>
            
        </div>
        
        </>
    )
}