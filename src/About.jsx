import { Link } from "react-router-dom"
export default function About(){
    return(
        <>
        <p className="text-3xl  font-[600] py-2 mb-[2em] m-[30px]">ABOUT US</p>
        <div className="md:flex gap-4">
            
            <img className=" w-[420px] md:w-[340px] md:h-[300px] md:ml-[2em] border-2 mx-auto shadow-[2px_4px_8px_rgba(0,0,0,0.5)]" src="Images/image.jpg" alt="" />
            <div>
            <p className="m-[2em] text-lg opacity-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, numquam tempore. Molestias temporibus, voluptatibus expedita fuga quibusdam, ipsam dolorem vel dicta modi placeat a cum eos excepturi necessitatibus, labore iusto!</p>
            <Link to='/more'><button className="bg-[#040a1d] text-white px-5 py-2 mx-[2em] mb-[2em]">Learn More</button></Link>
            </div>
        </div>
        </>
    )
}