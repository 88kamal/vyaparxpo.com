import React from 'react'
import Layout from '../components/Layout'

function HotelAccomodation() {
    return (
        <Layout>
            <div className=" container mx-auto px-4">
                <div className="py-32">
                    <div className=" bg-yellow-400 rounded-[30px] shadow-lg border-2 mb-2 border-gray-300">
                        <div className="top">
                            <div className="main_top flex justify-around items-center">
                                <div className="logo_left">
                                    <img className='w-28' src="image/logot.png" alt="logo" />
                                </div>
                                <div className="text_mid">
                                    <h1 className=' uppercase text-lg font-semibold fonts2'>Vaypar Expo 2023</h1>
                                </div>
                                <div className="logo_right">
                                    <h1 className=''>Logo BHU</h1>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h1 className='text-center text-xl mb-2 font-semibold '>16-17-18-19-20 OCTOBER, 2023</h1>
                            <h1 className='text-center text-xl font-bold '>AGRICULTURE GROUND, BHU CAMPUS VARANASI – UTTAR PRADESH 221005</h1>
                            <h1 className='text-center text-3xl font-extrabold mb-5 '>ABOUT VYAPAR EXPO 2023</h1>
                        </div>

                    </div>
                    <div className="">
                        <h1 className='text-center text-xl font-bold '> Hotel Registration
                        </h1>
                    </div>

                    <div className="right">
                        <div className="inner">
                            <div className=" p-5 md:p-10 bg-green-100 border border-gray-400 rounded-tl-3xl rounded-br-3xl rounded-lg ">
                                <form>
                                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name *</label>
                                            <input type="text" id="name" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
                                        </div>
                                        <div>
                                            <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 ">Company Name</label>
                                            <input type="text" id="companyName" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email *</label>
                                            <input type="email" id="email" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
                                        </div>
                                        <div>
                                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                                            <select id="countries" className="bg-green-50 border border-gray-300 text-gray-900 rounded-[6px] text-sm outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5  ">
                                                <option selected>Select your Category</option>
                                                <option value="Manufacturer">Manufacturer</option>
                                                <option value="Exporter">Exporter</option>
                                                <option value="Distributor">Distributor</option>
                                                <option value="Traders">Traders</option>
                                                <option value="Services Provider">Services Provider</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                                <div className=" flex justify-end">
                                    <button type="submit" className="text-white w-full bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm sm:w-auto px-10 py-2.5 text-center ">Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default HotelAccomodation