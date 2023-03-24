import React from 'react';
import Pdf from "react-to-pdf";
import { MdSimCardDownload } from 'react-icons/md'
const ref = React.createRef();

const PDF = ({ all, fname, email, designation, mobile, companyName, companyWebsite, country, state, city, source }) => {
    return (
        <div className='container mx-auto px-4 mb-10'>
            <div className="Post" ref={ref}>
                <div className="pdf ">

                    <img className=' rounded-xl ' src="image/logo4.png" alt="" />
                    <div className="w-full h-1 bg-gray-400 mt-2 mb-4" />
                    <h2 className=' text-xl  p-2 my-2 font-bold '>{all}</h2>
                    <h2 className=' text-xl  p-2 my-2'><span className=' font-bold'>Name:</span> {fname}</h2>
                    <h2 className=' text-xl  p-2 my-2'><span className=' font-bold'>Email:</span> {email}</h2>
                    <h2 className=' text-xl  p-2 my-2'><span className=' font-bold'>Designation:</span> {designation}</h2>
                    <h2 className=' text-xl  p-2 my-2'><span className=' font-bold'>Mobile:</span> {mobile}</h2>
                    <h2 className=' text-xl  p-2 my-2'><span className=' font-bold'>Company Name:</span> {companyName}</h2>
                    <h2 className=' text-xl  p-2 my-2'><span className=' font-bold'>Company Website:</span> {companyWebsite}</h2>
                    <h2 className=' text-xl  p-2 my-2'><span className=' font-bold'>Country:</span> {country}</h2>
                    <h2 className=' text-xl  p-2 my-2'><span className=' font-bold'>State:</span> {state}</h2>
                    <h2 className=' text-xl  p-2 my-2'><span className=' font-bold'>City:</span> {city}</h2>
                    <h2 className=' text-xl  p-2 my-2'><span className=' font-bold'>Source:</span> {source}</h2>
                </div>


            </div>
            <button type="button" class="text-white bg-[#ff0000] hover:bg-purple-800font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 fonts2 ">
                <Pdf targetRef={ref} filename="registration.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>
                        <div className="flex items-center gap-2">
                            <span className=' text-sm'>Download</span> <MdSimCardDownload size={20} />
                        </div>
                    </button>}
                </Pdf>
            </button>

        </div>
    );
}

export default PDF;