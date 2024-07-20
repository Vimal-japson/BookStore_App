
export default function Footer(){
    return(
        <><div className="bg-[#040a1d] p-1 mt-[3em] gap-6 lg:flex">
            <div className="lg:self-center m-6">
                <p className="text-center text-white text-2xl font-[600] mb-3">Download Our App</p>
                <p className=" text-center text-white text-lg opacity-70 mb-5">Download Our app for android and ios mobile phone.</p>
                <div className=" mt-[2em] flex gap-5 justify-center sm:justify-center">
                <div className=" rounded-xl p-[.3em_1.5em] bg-[#fcfafa] flex gap-2">
                    <img className="w-8 h-9 self-center" src="Images/google.png" alt="" />
                    <div>
                       <p> GET IT ON</p>
                       <p>Google Play</p>
                    </div>
                </div>
                <div className="rounded-xl p-[.3em_2em] bg-[#ffff] flex gap-2">
                    <img className="ml-[-12px] h-9 w-8 self-center" src="Images/apple.png" alt="" />
                    <div>
                       <p>GET IT ON</p>
                       <p>App Store</p>
                    </div>
                </div>
                </div>
            </div>

                <div className="lg:ml-[2em] lg:self-center mt-[3em] lg:m-0  gap-4 sm:flex sm:justify-center " >
                 <div className="flex gap-4 justify-center sm:flex-col">
                    <img className="w-20 sm:mb-[-20px]" src="Images/footIcon.png" alt="" />
                    <p className="self-center text-white text-3xl font-[600]">RedStor</p>
                 </div>
                 <p className=" sm:self-center sm:w-[20em]  mx-5 my-3 text-center lg:text-start text-white opacity-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ad accusamus dolore.</p>
                </div>
                <div className=" text-center lg:ml-[2em] m-[3em_1.2em]">
                    <p className="text-white text-2xl font-[600]">Useful Links</p>
                <ul className="justify-center lg:flex-col  text-lg opacity-75 mt-[1.4em] text-white flex gap-4">
                    <li>Coupons</li>
                    <li>Blog post</li>
                    <li>Return Policy</li>
                    <li>Join Attribute</li>
                </ul>
                </div>
            </div>
            
        </>
    )
}