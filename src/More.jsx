export default function More(){
    return(
        <>
        <p className="text-3xl  font-[600] py-2 mb-[2em] m-[30px]">OUR SERVICES</p>
        <div className="grid grid-cols-2 md:grid-cols-3 my-[3em] md:mx-[2em] lg:mx-[8em]">
        <div className="w-[11em] m-4 shadow-[2px_2px_6px_rgba(0,0,0,0.5)] p-[12px] mb-[1em]">
                <img className="w-[6.5em] mb-3 mx-auto" src="Images/s1.png" alt="" />
                <p className="text-2xl font-[600]"> DELIVERY...</p>
                <p className="mt-2 opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quod porro.</p>
        </div>
        <div className="w-[11em] m-4 shadow-[2px_2px_6px_rgba(0,0,0,0.5)] p-[12px]">
                <img className="w-[6.5em] mb-3 mx-auto" src="Images/s2.png" alt="" />
                <p className="text-2xl font-[600]">QUALITY...</p>
                <p className="mt-2 opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quod porro.</p>
        </div>
        <div className="w-[11em] m-4 shadow-[2px_2px_6px_rgba(0,0,0,0.5)] p-[12px]">
                <img className="w-[7em] mb-3 mx-auto" src="Images/s3.png" alt="" />
                <p className="text-2xl font-[600]">PACKAGE...</p>
                <p className="mt-2 opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quod porro quas ut eaque, volu</p>
         </div>
         <div className="w-[11em] m-4 shadow-[2px_2px_6px_rgba(0,0,0,0.5)] p-[12px]">
                <img className="w-[7em] mx-auto mb-3" src="Images/s4.jpg" alt="" />
                <p className="text-2xl font-[600]">LATEST...</p>
                <p className="mt-2 opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quod porro quas ut eaque, volu</p>
            </div>
            <div className="w-[11em] m-4 shadow-[2px_2px_6px_rgba(0,0,0,0.5)] p-[12px]">
                <img className="w-[7em] mx-auto mb-3" src="Images/s5.jpg" alt="" />
                <p className="text-2xl font-[600]">SPECIAL...</p>
                <p className="mt-2 opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quod porro quas ut eaque, volu</p>
            </div>
            <div className="w-[11em] m-4 shadow-[2px_2px_6px_rgba(0,0,0,0.5)] p-[12px]">
                <img className="w-[7em] mx-auto mb-3" src="Images/s6.png" alt="" />
                <p className="text-2xl font-[600]">CUSTOMERS...</p>
                <p className="mt-2 opacity-80">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quod porro quas ut eaque, volu</p>
            </div>
        </div>
        </>
    )
}