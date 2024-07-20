

export default function Exclusive(){
    return(
        <>
        <div className="bg-[#040a1d] flex flex-col my-[5em]">
        <p className="self-start m-[2em_1em] mb-[3em] text-2xl opacity-75 text-white">Exclusively Available on Redstor</p>
        <div className="flex flex-col sm:flex-row sm:gap-10 sm:justify-center">
            <img className="sm:mt-[-50px] sm:mb-[4em] self-center w-[10.5em] sm:w-[12em] mb-[2em]" src="Images/bg.png" alt="" />
            <div className=" self-center flex flex-col">
                <p className="text-5xl sm:text-7xl text-white font-[600] self-center">Hamlet  </p>
                <p className="text-white text-xl sm:text-2xl opacity-75  mx-[1em] mt-[1em] self-end  ">By William Shakespeare</p>
                
                <button className="bg-[#e1d9d9] w-[8em] self-center p-[10px_25px] mt-[3em] mb-[3em] rounded-xl text-[#040a1d] font-[600]" onClick={()=>{window.alert("buy now!!!")}}>Buy Now</button>
            </div>
        </div>


        </div>
        </>
    )
}