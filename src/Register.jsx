
export default function Register(){
    return(
        <>
        <div className="md:flex justify-center gap-6 lg:mx-[5em]">
        <div className="flex flex-col items-center gap-5 w-[20em] mx-auto shadow-[0px_2px_6px_rgba(0,0,0,0.5)] my-[3em] pb-[30px] px-[px]">
            <p className="text-[#040a1d] text-2xl mt-[2em] mb-[.5em] font-[600]">Log in</p>
            <input className="border-[1.5px] border-gray-400 w-[15em] h-[2.5em] rounded-md p-[3px]" type="text" placeholder="Email" />
            <div className="flex border-[1.5px] h-[2.5em] w-[15em] border-gray-400 rounded-md p-[2px]">
            <input type="text" className="outline-none w-[15em]  p-[3px]" placeholder="Password"/>
            <img className="w-[2em] h-[2em]" src="Images/hide1.png" alt="" />
            </div>
            <p className="text-center text-blue-600">Forgot Password?</p>
            <button className="bg-blue-600 text-white w-[15em] h-[2.5em]" >Login</button>
            <p className="text-lg">Don't have an account? <span className="text-blue-600 cursor-pointer">SignUp</span></p>
            <div className="w-[15em] h-[2.5em] flex gap-5 bg-blue-600 rounded-md">
                <img className="w-[2em] h-[2em] self-center ml-[.5em] " src="Images/face.png" alt="" />
                <p className="self-center text-white">Login with Facebook</p>
            </div>
            <div className="w-[15em] h-[2.5em] flex gap-5 border-gray-400 border-[1.5px] rounded-md ">
                <img className="w-[2em] h-[2em] self-center ml-[.5em] rounded-full " src="Images/goo.png" alt="" />
                <p className="self-center">Login with Google</p>
            </div>
            </div> 
           <div className="flex flex-col items-center gap-5 w-[20em] mx-auto shadow-[0px_2px_6px_rgba(0,0,0,0.5)] my-[3em] pb-[30px] px-[px]">
            <p className="text-[#040a1d] text-2xl mt-[2em] mb-[.5em] font-[600]">Signup</p>
            <input className="border-[1.5px] border-gray-400 w-[15em] h-[2.5em] rounded-md p-[3px]" type="text" placeholder="Email" />
            <input className="border-[1.5px] border-gray-400 w-[15em] h-[2.5em] rounded-md p-[3px]" type="text" placeholder="Create Password" />
            <div className="flex border-[1.5px] h-[2.5em] w-[15em] border-gray-400 rounded-md p-[2px]">
            <input type="text" className="outline-none w-[15em]  p-[3px]" placeholder="Confirm Password"/>
            <img className="w-[2em] h-[2em]" src="Images/hide1.png" alt="" />
            </div>
            <button className="bg-blue-600 text-white w-[15em] h-[2.5em]" >Signup</button>
            <p className="text-lg">Already have an account? <span className="text-blue-600 cursor-pointer">Login</span></p>
            <div className="w-[15em] h-[2.5em] flex gap-5 bg-blue-600 rounded-md">
                <img className="w-[2em] h-[2em] self-center ml-[.5em] " src="Images/face.png" alt="" />
                <p className="self-center text-white">Login with Facebook</p>
            </div>
            <div className="w-[15em] h-[2.5em] flex gap-5 border-gray-400 border-[1.5px] rounded-md ">
                <img className="w-[2em] h-[2em] self-center ml-[.5em] rounded-full " src="Images/goo.png" alt="" />
                <p className="self-center">Login with Google</p>
            </div>
            </div> 
            </div>
        </>
    )
}