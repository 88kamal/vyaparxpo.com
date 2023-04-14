import React from 'react'

function Visitorpass({ name, unique_id, email, country, city, phone, setPhone }) {
    const downloadpdf = () => {
        window.print()
        window.location.href = "/"
    }
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-col px-5 py-2 justify-center items-center">
                    <img className="lg:w-2/4 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="pass/Pasted Graphic.png" />
                    <div className="w-full md:w-2/3 flex flex-col mb-16 ">
                        <div className="reg  ml-[30px] md:ml-[102px] lg:ml-[102px] mb-5">
                            <h2 className=' text-black'><span className=' font-bold'>Unique Id:</span> {unique_id}</h2>
                            <h2 className=' text-black'><span className=' font-bold'>Name:</span> {name}</h2>
                            <h2 className=' text-black'><span className=' font-bold'>Number:</span> {phone}</h2>
                            <h2 className=' text-black'><span className=' font-bold'>Email Id: </span>{email}</h2>
                            <h2 className=' text-black'><span className=' font-bold'>City: </span>{city}</h2>
                        </div>
                        <div className="ml-[30px] md:ml-[102px] lg:ml-[102px] mb-5">
                            <p className=' text-2xl font-bold mb-2 underline text-black'>Media Partner</p>
                            <div className="flex space-x-4">
                                <img src="footer/in.png" alt="" />
                                <img src="footer/ud.png" alt="" />
                                <img src="footer/b.png" alt="" />
                            </div>
                        </div>
                        <div className="download ml-[30px] md:ml-[102px] lg:ml-[102px]">
                            <button onClick={downloadpdf} className=' underline text-blue-500'>Download</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Visitorpass