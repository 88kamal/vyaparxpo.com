import React from 'react'
import CountUp from 'react-countup';
import { FaUser, FaUserGraduate, FaUserFriends, FaUserTie, FaUserShield } from 'react-icons/fa'
import { AiFillCodeSandboxSquare } from 'react-icons/ai'
import { Link } from 'react-router-dom';

function AllStallDetails({ sixSqMeter ,nineSqMeter, twelveSqMeter, fifteenSqMeter }) {
    return (
        <section className="text-gray-600 body-font  ">
            <div className="container px-5 py-10 mx-auto">
                {/* <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="sm:text-3xl text-2xl font-bold fonts2 title-font mb-4 text-gray-900">Welcome To Vaypar Expo <span className=' text-red-500 text-lg fonts1'>Admin Panel</span></h1>
                </div> */}
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Link to={'/admin/sixsqmeter'} >
                            <div className="border-2 hover:shadow-2xl hover:shadow-purple-600  border-purple-500 px-4 py-3 rounded-xl" style={{ background: 'rgb(46, 50, 59)' }}>
                                <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <AiFillCodeSandboxSquare size={50} />
                                </div>
                                <h2 className="title-font font-medium text-3xl text-gray-100 fonts1">{sixSqMeter.length}</h2>
                                <p className=" text-purple-500  font-bold">6 Sq. Meter Payment Success</p>
                            </div>
                        </Link>

                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Link to={'/admin/ninesqmeter'} >
                            <div className="border-2 hover:shadow-2xl hover:shadow-pink-600    border-pink-500 px-4 py-3 rounded-xl" style={{ background: 'rgb(46, 50, 59)' }}>
                                <div className="text-pink-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <AiFillCodeSandboxSquare size={50} />
                                </div>
                                <h2 className="title-font font-medium text-3xl text-gray-100 fonts1">{nineSqMeter.length}</h2>
                                <p className=" text-pink-500  font-bold">9 Sq. Meter Payment Success</p>
                            </div>
                        </Link>

                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Link to={'/admin/twelvesqmeter'} >
                            <div className="border-2 hover:shadow-2xl hover:shadow-green-600    border-green-500 px-4 py-3 rounded-xl" style={{ background: 'rgb(46, 50, 59)' }}>
                                <div className="text-green-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <AiFillCodeSandboxSquare size={50} />
                                </div>
                                <h2 className="title-font font-medium text-3xl text-gray-100 fonts1">{twelveSqMeter.length}</h2>
                                <p className=" text-green-500 font-bold">12 Sq. Meter Payment Success</p>
                            </div>
                        </Link>

                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <Link to={'/admin/fifteensqmeter'} >
                            <div className="border-2 hover:shadow-2xl hover:shadow-orange-600   border-orange-500 px-4 py-3 rounded-xl" style={{ background: 'rgb(46, 50, 59)' }}>
                                <div className="text-orange-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                    <AiFillCodeSandboxSquare size={50} />
                                </div>
                                <h2 className="title-font font-medium text-3xl text-gray-100 fonts1">{fifteenSqMeter.length}</h2>
                                <p className=" text-orange-500 font-bold">15 Sq. Meter Payment Success</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllStallDetails