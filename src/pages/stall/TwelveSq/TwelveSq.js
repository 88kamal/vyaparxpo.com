// import { addDoc, collection } from 'firebase/firestore';
// import React, { useContext, useEffect, useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { db } from '../../../firebase/FireBaseConfig'

// function TwelveSq() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [stall, setStall] = useState(78000);
//   const [branding, setBranding] = useState(5);
//   const [digitalDisplay, setDigitalDisplay] = useState(5);
//   const [electricitySupply, setElectricitySupply] = useState(5);
//   const [airCompressor, setAirCompressor] = useState(5);
//   const [hotelAccomodation, setHotelAccomodation] = useState(5);
//   const [travel, setTravel] = useState(5);
//   const [fooding, setFooding] = useState(1);
//   const [selectDay, setSelectedDay] = useState(1);
//   const [selectedStall, setSelectedStall] = useState('12 Sq. Meter (3x4)');

//   //  const context = useContext(allContext);
//   //  const {names} = context;
//   function handleSelectChangeOne(event) {
//     setSelectedDay(event.target.value);
//   }

//   const gst = 17400.6;
//   const hotelGst = 216;
//   const s1 = parseInt(stall)
//   const b1 = parseInt(branding)
//   const d1 = parseInt(digitalDisplay)
//   const e1 = parseInt(electricitySupply)
//   const a1 = parseInt(airCompressor)
//   const h1 = parseInt(hotelAccomodation);
//   const t1 = parseInt(travel);
//   const f1 = parseInt(fooding);
//   const day = parseInt(selectDay);

//   // top total value
//   const brandingWithPerDay = (b1 * 2034);
//   const digitalDisplayPerDay = (d1 * 700);
//   const electricitySupplyPerDay = (e1 * 500);
//   const airCompressorPerDay = (a1 * 500);
//   // top total value


//   // total WithGst and Without Gst 
//   const totalWithoutGst = (s1 + brandingWithPerDay + digitalDisplayPerDay + electricitySupplyPerDay + airCompressorPerDay)
//   const totalWithGst = parseFloat(s1 + brandingWithPerDay + digitalDisplayPerDay + electricitySupplyPerDay + airCompressorPerDay + gst)
//   // total WithGst and Without Gst 

//   //  bottom grand total 
//   const numberOfStaffPlusNumberOfDays = (day * 350 * f1);
//   const hotelPerDay = (h1 * 360)
//   const travelPerDay = (t1 * 600)
//   const hotelPlusGst = (hotelGst + hotelPerDay)

//   const GrandTotal = parseFloat(totalWithGst + hotelPerDay + travelPerDay + numberOfStaffPlusNumberOfDays + hotelGst);

//   const pay = async () => {
//     if (name === "" || email === "" || phone === "" || stall === "") {
//       return toast.error('name,email,phone,stall required', {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       })

//     }

//     const twelveSquareMeterRef = collection(db, "twelveSquareMeterPayment")

//     // payment integration 
//     var options = {
//       key: "rzp_test_PD6roQopOBtgKs",
//       key_secret: "2K0JsliZpH7SDeFzMet",
//       amount: parseInt(GrandTotal * 100),
//       currency: "INR",
//       order_receipt: 'order_rcptid_' + name,
//       name: "Vaypar Expo India",
//       description: "for testing purpose",
//       handler: function (response) {
//         toast.success('Payment Successful', {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "colored",
//         })
//         setTimeout(() => {
//           window.location.href = '/invoicetwelve'
//         }, 2000);
//          addDoc(twelveSquareMeterRef, {
//           name: name,
//           email: email,
//           phone: phone,
//           stall: stall,
//           branding: branding ? branding : "N/A",
//           digitalDisplay: digitalDisplay ? digitalDisplay : "N/A",
//           electricitySupply: electricitySupply ? electricitySupply : "N/A",
//           airCompressor: airCompressor ? airCompressor : "N/A",
//           hotelAccomodation: hotelAccomodation ? hotelAccomodation : "N/A",
//           travel: travel ? travel : "N/A",
//           fooding: fooding ? fooding : "N/A",
//           selectDay: selectDay ? selectDay : "N/A",
//           createdAt: new Date().toLocaleString(),
//           paymentId: pay.id,
//           selectedStall: selectedStall,
//           brandingWithPerDay,
//           digitalDisplayPerDay,
//           electricitySupplyPerDay,
//           airCompressorPerDay,
//           numberOfStaffPlusNumberOfDays,
//           hotelPerDay,
//           travelPerDay,
//           GrandTotal,
//           totalWithoutGst, 
//           totalWithGst, 
//           hotelPlusGst,
//         })
//       },

//       theme: {
//         color: "#3399cc"
//       }
//     };
//     var pay = new window.Razorpay(options);
//     pay.open();



//     // setPayId(id)
 

//     setName("");
// setEmail("");
// setPhone("");


//     // database firbase
//     // try {
//     //   await addDoc(nineSquareMeterRef, {
//     //     name: name,
//     //     email: email,
//     //     phone: phone,
//     //     stall: stall,
//     //     branding: branding ? branding : "N/A",
//     //     digitalDisplay: digitalDisplay ? digitalDisplay : "N/A",
//     //     electricitySupply: electricitySupply ? electricitySupply : "N/A",
//     //     airCompressor: airCompressor ? airCompressor : "N/A",
//     //     hotelAccomodation: hotelAccomodation ? hotelAccomodation : "N/A",
//     //     travel: travel ? travel : "N/A",
//     //     fooding: fooding ? fooding : "N/A",
//     //     selectDay: selectDay ? selectDay : "N/A",
//     //     createdAt: new Date().toLocaleString(),
//     //     paymentId: pay.id,
//     //     selectedStall: selectedStall
//     //   })
//     // } catch (error) {
//     //   console.log(error)
//     // }

//     const exhibitorDetail = {
//       name: name,
//       email: email,
//       phone: phone,
//       stall: stall,
//       branding: branding,
//       digitalDisplay: digitalDisplay,
//       electricitySupply: electricitySupply,
//       airCompressor: airCompressor,
//       hotelAccomodation: hotelAccomodation,
//       travel: travel,
//       fooding: fooding,
//       selectDay: selectDay,
//       paymentId: pay.id,
//       createdAt: new Date().toLocaleString(),
//       brandingWithPerDay: brandingWithPerDay,
//       digitalDisplayPerDay: digitalDisplayPerDay,
//       electricitySupplyPerDay: electricitySupplyPerDay,
//       airCompressorPerDay: airCompressorPerDay,
//       numberOfStaffPlusNumberOfDays: numberOfStaffPlusNumberOfDays,
//       hotelPerDay: hotelPerDay,
//       travelPerDay: travelPerDay,
//       hotelPlusGst: hotelPlusGst,
//       totalWithoutGst: totalWithoutGst,
//       totalWithGst: totalWithGst,
//       GrandTotal: GrandTotal,
//       selectedStall: selectedStall
//     }

//     const id = sessionStorage.setItem("paymentId", JSON.stringify(exhibitorDetail));
//     // console.log()
//     // const id = sessionStorage.setItem("paymentId", pay.id);
//     // setpayId(id)

//   }

//   // setpayId(paymentId)
//   // useEffect(() => {
//   // const paymentId = sessionStorage.getItem("paymentId");
//   //   setpayId(paymentId)
//   //   console.log(paymentId)
//   // }, []);


//   useEffect(() => {
//     window.scrollTo(0, 0)
// }, [])

//   return (
//     <div>
//       {/* {names} */}
//       <div className=" text-center mb-5">
//         <input className=' text-xl text-center fonts1 bg-green-500 text-white' disabled type="text" name='6 Sq. Meter' value={selectedStall} onChange={(e) => setSelectedStall(e.target.value)} />
//       </div>
//       {/* {!paymentId ? */}
//       <div className="">
//         <div className="right">
//           <div className="inner">
//             <div className=" p-5 md:p-10 bg-green-100 border border-gray-400 rounded-tl-3xl rounded-br-3xl rounded-lg ">
//               <form>
//                 <div className="grid gap-6 mb-6 md:grid-cols-2">
//                   <div>
//                     <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name *</label>
//                     <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
//                   </div>
//                   <div>
//                     <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Email *</label>
//                     <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
//                   </div>
//                   <div>
//                     <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Mobile *</label>
//                     <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Stall *</label>
//                     <input disabled type="number" value={stall} onChange={(e) => setStall(e.target.value)} id="email" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
//                   </div>
//                   <div>
//                     <label htmlFor="branding" className="block mb-2 text-sm font-medium text-gray-900 ">Branding (Per day ₹1656)</label>
//                     <input type="number" value={branding} onChange={(e) => setBranding(e.target.value)} id="branding" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
//                   </div>
//                   <div>
//                     <label htmlFor="digitalDisplay" className="block mb-2 text-sm font-medium text-gray-900 ">Digital Display (Per day ₹700)</label>
//                     <input type="number" value={digitalDisplay} onChange={(e) => setDigitalDisplay(e.target.value)} id="digitalDisplay" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
//                   </div>
//                   <div>
//                     <label htmlFor="electricitySupply" className="block mb-2 text-sm font-medium text-gray-900 ">Electricity Supply (Per day ₹500)</label>
//                     <input type="number" value={electricitySupply} onChange={(e) => setElectricitySupply(e.target.value)} id="electricitySupply" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
//                   </div>
//                   <div>
//                     <label htmlFor="airCompressor" className="block mb-2 text-sm font-medium text-gray-900 ">Air Compressor (Per day ₹500) </label>
//                     <input type="number" value={airCompressor} onChange={(e) => setAirCompressor(e.target.value)} id="airCompressor" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
//                   </div>
//                   <div className=' border border-green-300 p-2'>
//                     {/* <hr className=' text-black' /> */}
//                     {/* <div className=' border border-black'></div> */}
//                     <h1><span className=' font-bold'>Total Without Gst :</span> ₹ {totalWithoutGst}</h1>
//                     <label htmlFor="airCompressor" className="block text-sm text-gray-900  font-semibold">Gst (18%) ₹17400.6</label>
//                     <h1><span className=' font-bold'>Total With Gst :</span> ₹ {totalWithGst}</h1>
//                   </div>
//                 </div>
//                 <h1 className=' text-2xl fonts2 mb-5 underline'>Other Facilities</h1>
//                 <div className="grid gap-6 mb-3 md:grid-cols-2">
//                   <div>
//                     <label htmlFor="hotelAccomodation" className="block mb-2 text-sm font-medium text-gray-900 ">Hotel Accomodation  (Per day ₹360)</label>
//                     <input type="number" value={hotelAccomodation} onChange={(e) => setHotelAccomodation(e.target.value)} id="hotelAccomodation" className="bg-green-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
//                     <label htmlFor="airCompressor" className="block text-sm text-gray-900  font-semibold">Gst ₹216 <span className=' font-bold'>Total: </span> ₹ {hotelPlusGst}</label>
//                   </div>
//                   <div>
//                     <label htmlFor="travel" className="block mb-2 text-sm font-medium text-gray-900 ">Travel (Per day ₹600)</label>
//                     <input type="number" value={travel} onChange={(e) => setTravel(e.target.value)} id="travel" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
//                   </div>
//                   <div>
//                     <label htmlFor="fooding" className="block mb-2 text-sm font-medium text-gray-900 ">Fooding
//                       (Enter Number Of staff)</label>
//                     <input type="number" value={fooding} onChange={(e) => setFooding(e.target.value)} id="fooding" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5  mb-5  " placeholder='Enter Number Of Staff Member' required />

//                   </div>
//                   <div className="">
//                     <label htmlFor="selectDay" className="block mb-2 text-sm font-medium text-gray-900 ">Enter Days For Food (₹350 per plate)</label>
//                     <input type="number" value={selectDay} onChange={handleSelectChangeOne} id="fooding" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5  mb-5  " required />
//                   </div>
//                 </div>
//                 <div>
//                   <div className=" border border-green-300 mb-2"></div>
//                   <h1 className=' mb-2'><span className=' font-bold'>Grand Total : </span> ₹ {GrandTotal}</h1>
//                   <div className=" border border-green-300 mb-2"></div>

//                 </div>
//               </form>
//               <div className=" flex my-5">
//                 <button onClick={pay} type="submit" className="text-white w-full bg-green-500 hover:bg-blue-800 focus:ring-4 outline-0 focus:ring-blue-300 font-medium rounded-xl text-sm sm:w-auto px-10 py-2.5 text-center ">Pay Now</button>
//                 <ToastContainer />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TwelveSq




