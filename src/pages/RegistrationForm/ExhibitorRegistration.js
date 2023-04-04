import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { db } from '../../firebase/FireBaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
function ExhibitorRegistration() {
    const [exhibitingCompanysName, setExhibitingCompanysName] = useState('');
    const [gstno, setGstno] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [website, setWebsite] = useState('');
    const [pin, setPin] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [panHolder, setPanHolder] = useState('');
    const [stall, setStall] = useState('');
    const [selectedCountry, setSelectedCountry] = useState([]);
    const [selectedStallSpace, setSelectedStallSpace] = useState([]);

    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    function handleSelectChange(event) {
        setSelectedCountry(event.target.value);
    }
    function handleSelectChange2(event) {
        setSelectedStallSpace(event.target.value);
    }


    const Register = async (e) => {
        // // validation
       
        // try {
        //     await addDoc(exhibitorRegistrationRef, {
        //         exhibitingCompanysName: exhibitingCompanysName,
        //         gstno: gstno,
        //         mobile: mobile,
        //         city: city,
        //         email: email,
        //         country: country,
        //         website: website,
        //         pin: pin,
        //         panNumber: panNumber,
        //         panHolder: panHolder,
        //         stall: stall,
        //         selectedCountry: selectedCountry,
        //         selectedStallSpace: selectedStallSpace,
        //         message: message,
        //         createdAt: new Date().toLocaleString(),


        //     })
        //     toast.success('Exhibitor Registration Success', {
        //         position: "top-center",
        //         autoClose: 1000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //     });
        // } catch (error) {
        //     console.log(error)
        // }

        // setExhibitingCompanysName('');
        // setGstno('');
        // setMobile('');
        // setCity('');
        // setEmail('');
        // setCountry('');
        // setWebsite('');
        // setPin('');
        // setPanNumber('');
        // setPanHolder('');
        // setStall('')
        // setSelectedCountry('');
        // setSelectedStallSpace('');
        // setMessage('')
        // setTimeout(() => {
            navigate('/allstall')
        // }, 1500);

    }


    return (
        <Layout>
            <div className="">
                <div className="container mx-auto px-4 mt-32 mb-10">
                    <div className="outbgform bg-violet-200 p-5 md:p-10  rounded-lg shadow-lg  ">
                        <div className="left mb-5">
                            <div className="">
                                {/* <div className=" flex justify-center">
                                    <img className='w-28 ' src="image/logot.png" alt="" />
                                </div> */}
                                <h1 className=' text-center text-2xl underline fonts1 font-bold'>
                                    Exihibitors Registration</h1>
                            </div>
                        </div>
                        <div className="right">
                            <div className="inner">
                                <div className=" p-5 md:p-10 bg-violet-100 border border-gray-400 rounded-tl-3xl rounded-br-3xl rounded-lg ">
                                    <form >
                                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="exhibitingCompanysName" className="block mb-2 text-sm font-medium text-gray-900 "> Exhibiting Company's Name *</label>
                                                <input type="text" value={exhibitingCompanysName} onChange={(e) => setExhibitingCompanysName(e.target.value)} id="exhibitingCompanysName" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="gstno" className="block mb-2 text-sm font-medium text-gray-900 ">GST NO. *</label>
                                                <input type="text" value={gstno} onChange={(e) => setGstno(e.target.value)} id="companyName" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 ">Mobile No *</label>
                                                <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} id="mobile" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 ">City *</label>
                                                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} id="city" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email Id *</label>
                                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                            </div>

                                            <div>
                                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 ">Country *</label>
                                                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} id="country" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 ">Website</label>
                                                <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} id="website" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="pin" className="block mb-2 text-sm font-medium text-gray-900 ">Pin/Zip Code *</label>
                                                <input type="text" value={pin} onChange={(e) => setPin(e.target.value)} id="pin" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="panNumber" className="block mb-2 text-sm font-medium text-gray-900 ">PAN No. </label>
                                                <input type="text" value={panNumber} onChange={(e) => setPanNumber(e.target.value)} id="panNumber" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="panHolder" className="block mb-2 text-sm font-medium text-gray-900 "> Name of PAN Holder</label>
                                                <input type="text" value={panHolder} onChange={(e) => setPanHolder(e.target.value)} id="panHolder" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="stall" className="block mb-2 text-sm font-medium text-gray-900 "> Name for Stall Fasia *</label>
                                                <input type="text" value={stall} onChange={(e) => setStall(e.target.value)} id="stall" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Indian / Foreign Exhibitors</label>
                                                <select id="countries" value={selectedCountry} onChange={handleSelectChange} className="bg-violet-50 border border-gray-300 text-gray-900 rounded-[6px] text-sm outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5  ">
                                                    <option selected >Select Exhibitors</option>
                                                    <option value="Indian Exhibitors"  >Indian Exhibitors</option>
                                                    <option value="Foreign Exhibitors"   >Foreign Exhibitors</option>
                                                </select>
                                            </div>
                                            <div>
                                                <h1 className=' font-bold text-sm'>STALL AREA REQUIRED</h1>
                                                <label htmlFor="stallSpace" className="block mb-2 text-sm font-medium text-gray-900 ">Choose BUILDUP STALL SPACE or RAW SPACE</label>
                                                <select name="stallSpace" value={selectedStallSpace} onChange={handleSelectChange2} id="stallSpace" className="bg-violet-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5 ">
                                                    <option className="" selected>Select</option>
                                                    <option value="BUILDUP STALL SPACE">BUILDUP STALL SPACE</option>
                                                    <option value="RAW SPACE">RAW SPACE</option>

                                                </select>
                                            </div>
                                            <div>
                                                <label for="message" class="block mb-2 text-sm font-medium text-black ">Your message</label>
                                                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-violet-50 rounded-lg border border-gray-300 frounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 " placeholder="Write your thoughts here..."></textarea>
                                            </div>
                                        </div>
                                    </form>
                                    <div className=" flex justify-end">
                                        <button onClick={Register} type="submit" className="text-white w-full bg-violet-500 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm sm:w-auto px-10 py-2.5 text-center ">Register</button>
                                        <ToastContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default ExhibitorRegistration