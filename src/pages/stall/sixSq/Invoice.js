// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom';
// // import ReactToPrint from 'react-to-print';

// function Invoice() {
//   const stallAndPaymentInfo = JSON.parse(sessionStorage.getItem("paymentId"));
//   console.log(stallAndPaymentInfo)

//   const { name, email, phone, stall, branding, digitalDisplay, electricitySupply, airCompressor, fooding, hotelAccomodation, paymentId, selectDay, travel, totalWithoutGst, totalWithGst, hotelPlusGst,
//     brandingWithPerDay,
//     digitalDisplayPerDay,
//     electricitySupplyPerDay,
//     airCompressorPerDay,
//     numberOfStaffPlusNumberOfDays,
//     hotelPerDay,
//     travelPerDay,
//     GrandTotal,
//     createdAt,
//     selectedStall

//   } = stallAndPaymentInfo

//   const capturePdf = async () => {
//     window.print()
//   }

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])
//   return (
//     <div className='pay Voice container mx-auto px-4 m-5'>
//       <div className="pdf border border-black p-5">
//         <div className=" flex justify-center">
//           <img className=' w-32' src="image/logot.png" alt="" />
//         </div>
//         <h1 className=' text-center font-bold underline text-2xl mb-2'>Stall And Payment Detail</h1>
//         <div className="flex flex-col">
//           <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//             <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
//               <div className="overflow-hidden">
//                 <table className="min-w-full border text-sm font-light dark:border-neutral-500 mb-3">
//                   <tbody>
//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Selected Stall
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-normal dark:border-neutral-500">
//                         {selectedStall}
//                       </td>
//                     </tr>
//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Date
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-normal dark:border-neutral-500">
//                         {createdAt}
//                       </td>
//                     </tr>
//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Payment Id
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-normal dark:border-neutral-500">
//                         {paymentId}
//                       </td>
//                     </tr>
//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Name
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-normal dark:border-neutral-500">
//                         {name}
//                       </td>
//                     </tr>
//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Email
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-normal  dark:border-neutral-500">
//                         {email}
//                       </td>
//                     </tr>
//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Phone
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4  font-normal dark:border-neutral-500">
//                         {phone}
//                       </td>
//                     </tr>

//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Stall
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4  font-normal dark:border-neutral-500">
//                         ₹{stall}
//                       </td>
//                     </tr>
//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Branding
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4  font-normal dark:border-neutral-500">
//                         ₹{brandingWithPerDay} (For {branding} Days)
//                       </td>
//                     </tr>

//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Digital Display
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4  font-normal font-normal dark:border-neutral-500">
//                         ₹{digitalDisplayPerDay} (For {digitalDisplay} Days)
//                       </td>
//                     </tr>

//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Electricity Supply
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-normal font-normal dark:border-neutral-500">
//                         ₹{electricitySupplyPerDay} (For {electricitySupply} Days)
//                       </td>
//                     </tr>


//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Air Compressor
//                       </td>
//                       <td className="whitespace-nowrap border-r font-normal font-normal px-6 py-4  dark:border-neutral-500">
//                         ₹{airCompressorPerDay} ( For {airCompressor} Days)
//                       </td>
//                     </tr>
//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Total Without GST
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-normal  dark:border-neutral-500">
//                         ₹{totalWithoutGst}
//                       </td>
//                     </tr>
//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r font-bold px-6 py-4  dark:border-neutral-500">
//                         Total With GST <span>(Gst(18%) ₹10,040.4)</span>
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-normal dark:border-neutral-500">
//                         ₹{totalWithGst}
//                       </td>
//                     </tr>

//                     <tr className="border-b dark:border-neutral-500">
//                       <h1 className=' px-6 py-4 underline fonts text-2xl font-bold'>Other Facilities</h1>
//                     </tr>
//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-bold  dark:border-neutral-500">
//                         Hotel Accomodation (GST ₹216)
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-normal  dark:border-neutral-500">
//                         ₹{hotelPlusGst} (For {hotelAccomodation} Days ₹{hotelPerDay})
//                       </td>
//                     </tr>
//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-bold  dark:border-neutral-500">
//                         Travel
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-normal dark:border-neutral-500">
//                         ₹{travelPerDay} (For {travel} Days)
//                       </td>
//                     </tr>
//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r px-6 py-4  font-bold dark:border-neutral-500">
//                         Fooding
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-normal  dark:border-neutral-500">
//                         ₹{numberOfStaffPlusNumberOfDays} (number of Staff {fooding} And For {selectDay} Days)
//                       </td>
//                     </tr>


//                     <tr className="border-b dark:border-neutral-500">
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-bold dark:border-neutral-500">
//                         Grand Total
//                       </td>
//                       <td className="whitespace-nowrap border-r px-6 py-4 font-normal  dark:border-neutral-500">
//                         ₹{GrandTotal}
//                       </td>
//                     </tr>

//                   </tbody>
//                 </table>
//               </div>
//               <div className=" flex justify-center gap-2">
//                 <Link to={'/'}>
//                   <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">Home</button></Link>
//                 <button type="button" onClick={capturePdf} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Download</button>
//               </div>


//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Invoice


