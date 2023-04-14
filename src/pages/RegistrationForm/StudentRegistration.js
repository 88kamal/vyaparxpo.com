import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { ToastContainer, toast } from 'react-toastify'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/FireBaseConfig';

function StudentRegistration() {
    const [sname, setSname] = useState('');
    const [college, setcollege] = useState('');
    const [department, setdepartment] = useState('');
    const [cName, setcName] = useState('');
    const [mobile, setmobile] = useState('');
    const [selectedProduct, setSetSelectedProduct] = useState([]);

    function handleSelectChangeOne(event) {
        setSetSelectedProduct(event.target.value);
    }
    const Register = async () => {
        // validation
        if (sname===""|| college === "" || department === "" || cName==="" || mobile === "" || selectedProduct==="") {
            return toast.error('Please Fill All Fields', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        const studentregistrationRef = collection(db, "studentregistration")

        try {
            await addDoc(studentregistrationRef, {
                sname: sname,
                college:college,
                department: department,
                cName:cName,
                mobile: mobile,
                selectedProduct:selectedProduct,
                createdAt: new Date().toLocaleString(),
            })
            toast.success('Student Registration Success', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (error) {
            console.log(error)
        }
        // navigate('/visitorpass')
    }

    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto  flex flex-col px-5 py-24 justify-center items-center">
                    <img className="lg:w-2/4 md:w-3/6 w-5/6 mb-5 object-cover object-center rounded" alt="hero" src="pass/Pasted Graphic.png" />
                    <div className="w-full md:w-2/3 flex flex-col mb-16 ">

                        <div className="container mx-auto px-4 mt-10 mb-10">
                            <div className="outbgform bg-violet-200 p-5 md:p-10  rounded-lg shadow-lg  ">
                                <div className="left mb-5">
                                    <div className="">
                                        <div className=" flex justify-center">
                                            <img className='w-28 ' src="image/logot.png" alt="" />
                                        </div>
                                        <h1 className=' mb-5 text-center text-xl fonts1 font-bold'>
                                            1ST NATIONAL FOOD & AGRICULTURE <br />
                                            VYAPAR EXPO 2023 <br />
                                            16-17-18-19-20 OCTOBER 2023 </h1>
                                    </div>
                                    <h1 className=' text-center text-2xl underline fonts1 font-bold'>
                                        Student Registration</h1>
                                </div>
                                <div className="right">
                                    <div className="inner">
                                        <div className=" p-5 md:p-10 bg-violet-100 border border-gray-400 rounded-tl-3xl rounded-br-3xl rounded-lg ">
                                            <form>
                                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                    <div>
                                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Student Name *</label>
                                                        <input type="text" id="name" value={sname} onChange={(e) => setSname(e.target.value)} className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">College Name *</label>
                                                        <input type="text" id="college" value={college} onChange={(e) => setcollege(e.target.value)} className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Department *</label>
                                                        <input type="text" id="department" value={department} onChange={(e) => setdepartment(e.target.value)} className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Course Name *</label>
                                                        <input type="text" id="cname" value={cName} onChange={(e) => setcName(e.target.value)} className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Mobile Number *</label>
                                                        <input type="text" id="mobile" value={mobile} onChange={(e) => setmobile(e.target.value)} className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Product To Presented</label>
                                                        <select name="source" value={selectedProduct} onChange={handleSelectChangeOne} id="countries" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5 ">
                                                            <option class="hidden" selected="" disabled="">Select</option>
                                                            <option value="Poster Presentation">Poster Presentation</option>
                                                            <option value="Product Presentation">Product Presentation</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </form>
                                            <div className=" flex justify-end">
                                                <button onClick={Register} type="submit" className="text-white w-full bg-violet-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm sm:w-auto px-10 py-2.5 text-center ">Register</button>
                                                <ToastContainer />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default StudentRegistration