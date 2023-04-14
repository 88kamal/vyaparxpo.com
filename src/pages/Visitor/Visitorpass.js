import React from 'react'

function Visitorpass({ name, unique_id, email, country, city }) {
    const downloadpdf = () => {
        window.print()
        window.location.href = "/"
    }
    return (
        <div>
            <div className=" container mx-auto py-4 md:py-10 px-4">
                <div className="bg-green-200 p-10 mb-2 ">
                    <h1 className=' text-center mb-5 text-xl'>Organised By</h1>
                    <div className=" flex justify-center mb-5">
                        <img className='w-32 ' src="footer/dsft.png" alt="" />
                    </div>
                    <div className=" flex justify-center items-center gap-4">
                        <img className='w-32 ' src="footer/logo.png" alt="" />
                        <h1 className=' text-5xl fonts2 font-bold'>Vypar India</h1>

                    </div>
                    <hr className=' my-5 font-bold text-black' />
                    <p className=' text-2xl font-semibold fonts1'>16-17-18-19-20 OCTOBER, 2023
                        AGRICULTURE GROUND (BHU CAMPUS),
                        VARANASI UTTARPARDESH</p>
                </div>
                <div className=" container mx-auto px-4 mb-2">
                    <h1 className=' text-2xl text-center underline mb-2'>Online Pre-Registration</h1>
                    <h2 className=' text-2xl'>Id : {unique_id}</h2>
                    <h2 className=' text-2xl'>Name: {name}</h2>
                    <h2 className=' text-2xl'>Email: {email}</h2>
                    <h2 className=' text-2xl'>Country: {country}</h2>
                    <h2 className=' text-2xl'>City: {city}</h2>
                </div>
                <div className="visitor bg-yellow-400 p-5 mb-2">
                    <h2 className=' text-center text-4xl md:text-9xl font-bold'>Visitor</h2>
                </div>

                <div className="download">
                    <button onClick={downloadpdf} className=' underline text-blue-500'>Download</button>
                </div>
            </div>
        </div>
    )
}

export default Visitorpass