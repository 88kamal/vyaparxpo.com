// import React, { useEffect } from 'react'
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import Above from './Above';
// import FifteenSq from './FifteenSq/FifteenSq';
// import NineSq from './nineSq/NineSq';
// import SixSq from './sixSq/SixSq';
// import TwelveSq from './TwelveSq/TwelveSq';

// function AllStall() {
//     useEffect(() => {
//         window.scrollTo(0, 0)
//     }, [])
//     return (
//         <div className=' '>
//             {/* <h1>Home</h1> */}
// <div className="tab  bg-slate-200 p-5  ">
//     <div className="">
//         <h1 className=' text-center border border-black text-white  bg-gray-700 p-5 mb-10 text-3xl mt-0 fonts1 '>Select Your Stall</h1>
//     </div>
//     <Tabs defaultIndex={0} className="  " >
//         <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
//             <Tab>
//                 <button type="button" className="font-medium border-b shadow-2xl bg-gray-200 hover:shadow-purple-700 border-purple-500 border-t text-purple-500  text-xl   px-5 py-1.5 text-center ">6 Sq. Meter</button>
//             </Tab>
//             <Tab>
//                 <button type="button" className="font-medium border-b border-pink-500 bg-gray-200 text-pink-500 shadow-2xl hover:shadow-pink-700 border-t  text-xl    px-5 py-1.5 text-center ">9 Sq. Meter</button>
//             </Tab>
//             <Tab>
//                 <button type="button" className="font-medium border-b border-green-500 bg-gray-200 text-green-500  text-xl shadow-2xl border-t hover:shadow-green-700   px-5 py-1.5 text-center ">12 Sq. Meter</button>
//             </Tab>
//             <Tab>
//                 <button type="button" className="font-medium border-b border-orange-500 bg-gray-200 text-orange-500  text-xl shadow-2xl border-t hover:shadow-orange-700   px-5 py-1.5 text-center ">15 Sq. Meter</button>
//             </Tab>
//             <Tab className="">
//                 <button type="button" className="font-medium border-b border-sky-500 bg-gray-200 text-sky-500  text-xl shadow-2xl hover:shadow-sky-700 border-t  px-5 py-1.5 text-center ">Above</button>
//             </Tab>
//         </TabList>
//         <TabPanel>
//             <SixSq />
//         </TabPanel>

//         <TabPanel>
//             <NineSq />
//         </TabPanel>
//         <TabPanel>
//             <TwelveSq />
//         </TabPanel>
//         <TabPanel>
//             <FifteenSq />
//         </TabPanel>
//         <TabPanel>
//             <Above />
//         </TabPanel>
//     </Tabs>
// </div>
//         </div>
//     )
// }



// export default AllStall


import React from 'react'
import { useState } from 'react';
import { db } from '../../firebase/FireBaseConfig'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection } from 'firebase/firestore';

function AllStall() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [selectedStallSpace, setSelectedStallSpace] = useState([]);
    const [selectedBranding, setSelectedBranding] = useState([]);
    const [yesnoElectricity, setYesNoElectricity] = useState();
    const [yesnoDisplay, setYesNoDisplay] = useState();
    const [yesnoHotel, setYesNoHotel] = useState();
    const [noOfRoom, setnoOfRoom] = useState('');
    const [yesnoFood, setYesNoFood] = useState();
    const [noOfStaff, setNoOfStaff] = useState('');
    const [selectedDay, setSelectedDay] = useState([]);

    function handleSelectChange(event) {
        setSelectedStallSpace(event.target.value);
    }
    function handleSelectBrandingChange(event) {
        setSelectedBranding(event.target.value);
    }
    const handleChangeElectricity = e => {
        const target = e.target;
        if (target.checked) {
            setYesNoElectricity(target.value);
        }
    };
    const handleChangeDisplay = e => {
        const target = e.target;
        if (target.checked) {
            setYesNoDisplay(target.value);
        }
    };
    const handleChangeHotel = e => {
        const target = e.target;
        if (target.checked) {
            setYesNoHotel(target.value);
        }
    };
    const handleChangeFood = e => {
        const target = e.target;
        if (target.checked) {
            setYesNoFood(target.value);
        }
    };
    function handleSelectDayChange(event) {
        setSelectedDay(event.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(selectedStallSpace + selectedBranding + yesnoElectricity + yesnoDisplay + yesnoHotel + noOfRoom + yesnoFood + noOfStaff + selectedDay);
        if (name === '' || email === '' || selectedStallSpace === '' || selectedBranding === '' || yesnoElectricity === '' || yesnoDisplay === '' || yesnoHotel === '' || noOfRoom === '' || yesnoFood === '' || noOfStaff === '' || selectedDay === '') {
            return toast.error('All are required', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        const selectedStallDetailsRef = collection(db, "selectedStallDetails")

        try {
            await addDoc(selectedStallDetailsRef, {
                name: name,
                email: email,
                selectedStallSpace: selectedStallSpace,
                selectedBranding: selectedBranding,
                yesnoElectricity: yesnoElectricity,
                yesnoDisplay: yesnoDisplay,
                yesnoHotel: yesnoHotel,
                noOfRoom: noOfRoom,
                yesnoFood: yesnoFood,
                noOfStaff: noOfStaff,
                selectedDay: selectedDay,
                createdAt: new Date().toLocaleString(),


            })
            toast.success('Exhibitor Registration Success', {
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

    };


    return (
        <div>
            <div className=" container mx-auto px-4">
                <div className="my-5">
                    <h1 className=' text-center text-3xl font-semibold mb-2 md:mb-5 underline'>Select Stall</h1>
                </div>
                <div className="inner">
                    <div className=" ">
                        <form >
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="exhibitingCompanysName" className="block mb-2 text-sm font-medium text-gray-900 ">Name *</label>
                                    <input type="text" value={name} onChange={(e) => setname(e.target.value)} id="exhibitingCompanysName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                </div>
                                <div>
                                    <label htmlFor="gstno" className="block mb-2 text-sm font-medium text-gray-900 ">Email *</label>
                                    <input type="email" value={email} onChange={(e) => setemail(e.target.value)} id="companyName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                </div>


                            </div>
                        </form>
                    </div>
                </div>
                <div className=' mb-5'>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Size of stall (₹6500 RUPEES PER SQ.MTR + 18 % GST )</label>
                    <select value={selectedStallSpace} onChange={handleSelectChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Size of stall </option>
                        <option value="6 SQ.MTR ">6 SQ.MTR </option>
                        <option value="9 SQ.MTR ">9 SQ.MTR </option>
                        <option value="12 SQ.MTR ">12 SQ.MTR </option>
                        <option value="15 SQ.MTR ">15 SQ.MTR </option>
                        <option value="ABOVE AS PER REQUIREMNET">ABOVE AS PER REQUIREMNET</option>

                    </select>
                </div>
                <div className=' mb-5'>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900"> BRANDING FOR THE STALL
                        BRANDING COAST – ₹35 RUPEES SQ.FT
                    </label>
                    <select value={selectedBranding} onChange={handleSelectBrandingChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                        <option selected>Select your branding</option>
                        <option value="6 SQ.MTR – 216 SQ.FT FOR ALL THE SIDE OF STALL">6 SQ.MTR – 216 SQ.FT FOR ALL THE SIDE OF STALL</option>
                        <option value="9 SQ.MTR – 243 SQ.FT FOR ALL THE SIDE OF STALL">9 SQ.MTR – 243 SQ.FT     FOR ALL THE SIDE OF STALL</option>
                        <option value="12 SQ.MTR – 270 SQ.FT FOR ALL THE SIDE OF STALL">12 SQ.MTR – 270 SQ.FT FOR ALL THE SIDE OF STALL</option>
                        <option value="15 SQ.MTR -297 SQ.FT FOR ALL THE SIDE OF STALL">15 SQ.MTR -297 SQ.FT     FOR ALL THE SIDE OF STALL</option>
                    </select>
                </div>

                <div className="inner">
                    <div className="rounded-tl-3xl rounded-br-3xl rounded-lg ">
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <fieldset>
                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">ELECTRICITY SUPPLY                                                                                               ₹3000 RUPEES
                                    CHARGES FOR 5 DAYS

                                </label>
                                <div className="flex gap-2">
                                    <div className="flex items-center mb-4">
                                        <input type="radio" value="yes" checked={yesnoElectricity == 'yes'} onChange={handleChangeElectricity} className="w-4 h-4 " />
                                        <label htmlFor="country-option-1" className="block ml-2 text-sm font-medium text-gray-900">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input type="radio" value="no" checked={yesnoElectricity == 'no'} onChange={handleChangeElectricity} className="w-4 h-4 " />
                                        <label htmlFor="country-option-2" className="block ml-2 text-sm font-medium text-gray-900 ">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">DIGITAL DISPLAY CHARGES FOR 5 DAYS                                                             ₹5000 RUPEES
                                </label>
                                <div className="flex gap-2">
                                    <div className="flex items-center mb-4">
                                        <input type="radio" value="yes" checked={yesnoDisplay == 'yes'} onChange={handleChangeDisplay} className="w-4 h-4 " />
                                        <label htmlFor="country-option-1" className="block ml-2 text-sm font-medium text-gray-900">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input type="radio" value="no" checked={yesnoDisplay == 'no'} onChange={handleChangeDisplay} className="w-4 h-4 " />
                                        <label htmlFor="country-option-2" className="block ml-2 text-sm font-medium text-gray-900 ">
                                            No
                                        </label>
                                    </div>
                                </div>
                            </fieldset>



                        </div>
                    </div>
                </div>
                <div className="inner">
                    <div className="rounded-tl-3xl rounded-br-3xl rounded-lg ">
                        <h1 className=' mb-3 text-2xl underline font-bold '>OTHER FACILITIES FOR EXHIBITOR
                        </h1>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <fieldset>
                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">HOTEL FACILITIES (₹2000 RUPEES PER DAY )
                                </label>
                                <div className="flex gap-2">
                                    <div className="flex items-center mb-4">
                                        <input type="radio" value="yes" checked={yesnoHotel == 'yes'} onChange={handleChangeHotel} className="w-4 h-4 " />
                                        <label htmlFor="country-option-1" className="block ml-2 text-sm font-medium text-gray-900">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input type="radio" value="no" checked={yesnoHotel == 'no'} onChange={handleChangeHotel} className="w-4 h-4 " />
                                        <label htmlFor="country-option-2" className="block ml-2 text-sm font-medium text-gray-900 ">
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="exhibitingCompanysName" className="block mb-2 text-sm font-medium text-gray-900 ">NUMBER OF ROOM REQUIRED </label>
                                    <input type="number" value={noOfRoom} onChange={(e) => setnoOfRoom(e.target.value)} id="exhibitingCompanysName" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                </div>
                            </fieldset>
                            <fieldset>
                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">FOODING FACILITIES (PER PLATE ₹350 RUPEES )
                                </label>
                                <div className="flex gap-2">
                                    <div className="flex items-center mb-4">
                                        <input type="radio" value="yes" checked={yesnoFood == 'yes'} onChange={handleChangeFood} className="w-4 h-4 " />
                                        <label htmlFor="country-option-1" className="block ml-2 text-sm font-medium text-gray-900">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input type="radio" value="no" checked={yesnoFood == 'no'} onChange={handleChangeFood} className="w-4 h-4 " />
                                        <label htmlFor="country-option-2" className="block ml-2 text-sm font-medium text-gray-900 ">
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div className=' mb-3'>
                                    <label htmlFor="exhibitingCompanysName" className="block mb-2 text-sm font-medium text-gray-900 ">NUMBER OF STAFF </label>
                                    <input type="number" value={noOfStaff} onChange={(e) => setNoOfStaff(e.target.value)} id="exhibitingCompanysName" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-violet-600 focus:border-violet-600 block w-full p-2.5   " required />
                                </div>
                                <div className=' mb-5'>
                                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">SELECT THE DAYS FOR LUNCH
                                    </label>
                                    <select value={selectedDay} onChange={handleSelectDayChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                        <option selected>Day</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        {/* <option value="19">All Day</option> */}

                                    </select>
                                </div>
                            </fieldset>



                        </div>
                        {/* <div className=" flex justify-end">
                                        <button onClick={Register} type="submit" className="text-white w-full bg-violet-500 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm sm:w-auto px-10 py-2.5 text-center ">Register</button>
                                        <ToastContainer />
                                    </div> */}
                    </div>
                </div>
                <div className=" flex justify-end">
                    <button onClick={handleSubmit} type="submit" className="text-white w-full bg-violet-500 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm sm:w-auto px-10 py-2.5 text-center ">Book Now</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default AllStall



