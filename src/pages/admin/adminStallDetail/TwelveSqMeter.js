import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import AdminNav from '../components/AdminNav'

function TwelveSqMeter({ twelveSqMeter }) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className=" h-[100em]" style={{ backgroundColor: 'rgb(32, 33, 36)' }}>
                <AdminNav />
                <div className="container mx-auto px-4">
                    {/* {id} */}
                    <h1 className=' text-center text-2xl my-5 fonts2 font-bold underline text-white'>12 Sq Meter (3x4) Payment Detail</h1>
                    <div className="flex justify-between">
                        <Link to={'/admin/ninesqmeter'}>
                            <button type="button" className="text-white bg-green-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 ">Go back to 9 Sq Meter</button></Link>
                            <Link to={'/adminpanel'}>
                            <button type="button" className="text-white bg-green-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 "> Go to Admin Panel</button></Link>
                        <Link to={'/admin/fifteensqmeter'}>
                            <button type="button" className="text-white bg-green-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 ">Go to 15 Sq Meter</button></Link>

                    </div>
                    <div className="flex flex-col">
                        
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full border text-sm font-light text-white border-neutral-500">
                                        <thead className="border-b font-medium  dark:border-neutral-500" style={{ backgroundColor: 'rgb(40, 44, 52)' }}>
                                            <tr>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    S.No.
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Selected Stall 
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                   Payment Id
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                   Date
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Name
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Email
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Mobile
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Stall
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Branding (Per day ₹1656)
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Digital Display (Per day ₹700)
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Electricity Supply (Per day ₹500)
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Air Compressor (Per day ₹500)

                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Total Without Gst 
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                Total With Gst : ₹ 30720.4
                                                Gst (18%) ₹ 10,040.4
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Other Facilities

                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Hotel Accomodation
                                                    (Per day ₹360)
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Travel (Per day ₹600)
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Fooding (₹350 per plate)
                                                </th>
                                                <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500">
                                                    Grand Total
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {twelveSqMeter.map((item, index) => {
                                                const { name, email, phone, branding,brandingWithPerDay, digitalDisplay,digitalDisplayPerDay,electricitySupply,electricitySupplyPerDay,airCompressor,airCompressorPerDay,totalWithoutGst,totalWithGst,hotelAccomodation,hotelPerDay,hotelPlusGst,travel,travelPerDay,fooding,numberOfStaffPlusNumberOfDays,stall,selectedStall,selectDay,paymentId,id,createdAt,GrandTotal } = item;
                                                return (
                                                    <tr className="border-b dark:border-neutral-500">
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                            {index + 1}
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                            {selectedStall}
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                            {paymentId}
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                            {createdAt}
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                            {name}
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                            {email}
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                            {phone}
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        ₹{stall}
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        ₹{brandingWithPerDay} (For {branding} Days)
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        ₹{digitalDisplayPerDay} (For {digitalDisplay} Days)
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        ₹{electricitySupplyPerDay} (For {electricitySupply} Days)
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        ₹{airCompressorPerDay} ( For {airCompressor} Days)
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        ₹{totalWithoutGst}
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        ₹{totalWithGst}
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        -
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        ₹{hotelPlusGst} (For {hotelAccomodation} Days ₹{hotelPerDay})
                                                        </td>
                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        ₹{travelPerDay} (For {travel} Days)
                                                        </td>

                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        ₹{numberOfStaffPlusNumberOfDays} (number of Staff {fooding} And For {selectDay} Days)
                                                        </td>

                                                        <td className="whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500">
                                                        ₹{GrandTotal}
                                                        </td>
                                                    </tr>
                                                )
                                            })}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TwelveSqMeter