

export default function Contact(){
    return(
        <>
        <div className="w-[20em] bg-[#040a1d] text-white mx-auto my-[3em] p-[20px] text-lg rounded-xl ">
            <p className="text-4xl font-[600] text-center mb-[1.5em] mt-[1em]">Contact Us</p>
            <div className="border-b-[1.5px] mb-[2em] border-white ml-[1em] mt-[2em] flex justify-start gap-6 border-dashed pb-[1.5em]">
                <img src="Images/location.png" className="ml-[-10px] w-[3em]" alt="" />
                <div>
                <p>123 Anywhere St.,Any </p>
                <p>City, St 12345</p>
                </div>
            </div>
            <div className="border-dashed border-b-[1.5px] pb-[1.5em]  ml-[1em] flex  justify-start gap-6 mb-[2em]">
                <img className="w-[2em]" src="Images/phone.png" alt="" />
                <p>123-456-7890</p>
            </div>
            <div className=" border-dashed border-b-[1.5px] pb-[1.5em] flex  ml-[1em] justify-start gap-6 mb-[2em]">
                <img className="w-[2em]" src="Images/mail.png" alt="" />
                <p>arockiavimal@student.tce.edu</p>
            </div>
            <div className="border-dashed border-b-[1.5px] pb-[1.5em] flex  ml-[1em] justify-start gap-6 mb-[2em]">
                <img className="w-[2em]" src="Images/globe.png" alt="" />
                <p>www.redstor.com</p>
            </div>
        </div>
        </>
    )
}