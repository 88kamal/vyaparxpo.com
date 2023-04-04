// import React from 'react'
// import CountUp from 'react-countup';
// import { FaUser, FaUserGraduate, FaUserFriends, FaUserTie, FaUserShield } from 'react-icons/fa'
// import { AiFillCodeSandboxSquare } from 'react-icons/ai'
// import { Link } from 'react-router-dom';

// function AllStallDetails({allStallDetail}) {
//     return (
//         <section className="text-gray-600 body-font  ">
//             <div className="container px-5 py-10 mx-auto">
//                 {/* <div className="flex flex-col text-center w-full mb-10">
//                     <h1 className="sm:text-3xl text-2xl font-bold fonts2 title-font mb-4 text-gray-900">Welcome To Vaypar Expo <span className=' text-red-500 text-lg fonts1'>Admin Panel</span></h1>
//                 </div> */}
//                 <div className="flex flex-wrap -m-4 text-center">
//                     <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
//                         <Link to={'/admin/sixsqmeter'} >
//                             <div className="border-2 hover:shadow-2xl hover:shadow-purple-600  border-purple-500 px-4 py-3 rounded-xl" style={{ background: 'rgb(46, 50, 59)' }}>
//                                 <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
//                                     <AiFillCodeSandboxSquare size={50} />
//                                 </div>
//                                 <h2 className="title-font font-medium text-3xl text-gray-100 fonts1">{sixSqMeter.length}</h2>
//                                 <p className=" text-purple-500  font-bold">6 Sq. Meter Payment Success</p>
//                             </div>
//                         </Link>

//                     </div>
//                     <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
//                         <Link to={'/admin/ninesqmeter'} >
//                             <div className="border-2 hover:shadow-2xl hover:shadow-pink-600    border-pink-500 px-4 py-3 rounded-xl" style={{ background: 'rgb(46, 50, 59)' }}>
//                                 <div className="text-pink-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
//                                     <AiFillCodeSandboxSquare size={50} />
//                                 </div>
//                                 <h2 className="title-font font-medium text-3xl text-gray-100 fonts1">{nineSqMeter.length}</h2>
//                                 <p className=" text-pink-500  font-bold">9 Sq. Meter Payment Success</p>
//                             </div>
//                         </Link>

//                     </div>
//                     <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
//                         <Link to={'/admin/twelvesqmeter'} >
//                             <div className="border-2 hover:shadow-2xl hover:shadow-green-600    border-green-500 px-4 py-3 rounded-xl" style={{ background: 'rgb(46, 50, 59)' }}>
//                                 <div className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
//                                     <AiFillCodeSandboxSquare size={50} />
//                                 </div>
//                                 <h2 className="title-font font-medium text-3xl text-gray-100 fonts1">{twelveSqMeter.length}</h2>
//                                 <p className=" text-green-500 font-bold">12 Sq. Meter Payment Success</p>
//                             </div>
//                         </Link>

//                     </div>
//                     <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
//                         <Link to={'/admin/fifteensqmeter'} >
//                             <div className="border-2 hover:shadow-2xl hover:shadow-orange-600   border-orange-500 px-4 py-3 rounded-xl" style={{ background: 'rgb(46, 50, 59)' }}>
//                                 <div className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
//                                     <AiFillCodeSandboxSquare size={50} />
//                                 </div>
//                                 <h2 className="title-font font-medium text-3xl text-gray-100 fonts1">{fifteenSqMeter.length}</h2>
//                                 <p className=" text-orange-500 font-bold">15 Sq. Meter Payment Success</p>
//                             </div>
//                         </Link>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default AllStallDetails

import React from 'react'

function AllStallDetails({ allStallDetail }) {
    console.log(allStallDetail)
    return (
        <div>
            <div className="">
                <div className="">
                    {allStallDetail.map((item, index) => {
                        const { createdAt, name, email, selectedStallSpace, selectedBranding, yesnoElectricity, yesnoDisplay, yesnoHotel, noOfRoom, yesnoFood, noOfStaff, selectedDay } = item
                        return (
                            //     <div className="relative overflow-x-auto">
                            //     <table className="w-full text-sm text-left text-gray-500 ">
                            //       <tbody>
                            //       <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           S.No
                            //           </th>
                            //           <td className="px-6 py-4">
                            //             {index+1}
                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           Date:
                            //           </th>
                            //           <td className="px-6 py-4">
                            //            {createdAt}
                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           Name
                            //           </th>
                            //           <td className="px-6 py-4">
                            //             {name}
                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           Email
                            //           </th>
                            //           <td className="px-6 py-4">
                            //             {email}
                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           Size of Stall
                            //           </th>
                            //           <td className="px-6 py-4">
                            //             {selectedStallSpace}
                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           Branding For the Stall 
                            //           </th>
                            //           <td className="px-6 py-4">
                            //             {selectedBranding}
                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           ELECTRICITY SUPPLY
                            //           </th>
                            //           <td className="px-6 py-4">
                            //             {yesnoElectricity}
                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           DIGITAL DISPLAY
                            //           </th>
                            //           <td className="px-6 py-4">
                            //             {yesnoDisplay}
                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ">
                            //           OTHER FACILITIES FOR EXHIBITOR
                            //           </th>
                            //           <td className="px-6 py-4">

                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           HOTEL FACILITIES
                            //           </th>
                            //           <td className="px-6 py-4">
                            //             {yesnoHotel}
                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           NUMBER OF ROOM
                            //           </th>
                            //           <td className="px-6 py-4">
                            //             {noOfRoom}
                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           FOODING FACILITIES
                            //           </th>
                            //           <td className="px-6 py-4">
                            //             {yesnoFood}
                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           NUMBER OF STAFF
                            //           </th>
                            //           <td className="px-6 py-4">
                            //             {noOfStaff}
                            //           </td>
                            //         </tr>
                            //         <tr className=" border-b bg-gray-800 border-gray-700">
                            //           <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            //           SELECT THE DAYS FOR LUNCH
                            //           </th>
                            //           <td className="px-6 py-4">
                            //             {selectedDay}
                            //           </td>
                            //         </tr>
                            //       </tbody>
                            //     </table>
                            //   </div>
                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-white uppercase bg-gray-800 ">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                S.NO
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Date
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Size of Stall
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                BRANDING FOR THE STALL
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                ELECTRICITY SUPPLY
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                DIGITAL DISPLAY
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                OTHER FACILITIES FOR EXHIBITOR
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                HOTEL FACILITIES
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                NUMBER OF ROOM
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                FOODING FACILITIES
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                NUMBER OF STAFF
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                SELECT THE DAYS FOR LUNCH
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                               {index+1}
                                            </th>
                                            <td className="px-6 py-4">
                                                {createdAt}
                                            </td>
                                            <td className="px-6 py-4">
                                               {name}
                                            </td>
                                            <td className="px-6 py-4">
                                                {email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {selectedStallSpace}
                                            </td>
                                            <td className="px-6 py-4">
                                                {selectedBranding}
                                            </td>
                                            <td className="px-6 py-4">
                                                {yesnoElectricity}
                                            </td>
                                            <td className="px-6 py-4">
                                                {yesnoDisplay}
                                            </td>
                                            <td className="px-6 py-4">
                                            ---------
                                            </td>
                                            <td className="px-6 py-4">
                                                {yesnoHotel}
                                            </td>
                                            <td className="px-6 py-4">
                                                {noOfRoom}
                                            </td>
                                            <td className="px-6 py-4">
                                                {yesnoFood}
                                            </td>
                                            <td className="px-6 py-4">
                                                {noOfStaff}
                                            </td>
                                            <td className="px-6 py-4">
                                                {selectedDay} Days
                                            </td>
                                            

                                        </tr>
                                     
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllStallDetails