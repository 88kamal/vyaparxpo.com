import React from 'react'
import CountUp from 'react-countup';
import { FaUserFriends, FaUserAlt, FaUserCheck } from 'react-icons/fa'
import { TbBrandVimeo } from 'react-icons/tb'
import {GiFloorHatch} from 'react-icons/gi'

function Icons() {
    return (
        <section className="text-gray-600 body-font mt-[1.4em]">
            <div className="container md:px-0 px-5 mx-auto">

                <div className="flex flex-wrap ">
                    <div className="p-2 md:w-1/5 w-full">
                        <div className="bg-[#d1e8ff] text-black flex p-2   justify-center rounded-xl ">
                            <div className=' text-center'>
                                <div className=' flex justify-center'><FaUserFriends size={30} /></div>
                                <CountUp className=' text-2xl font-bold fonts1 text-[#ff0000]' end={300} /><span className='text-2xl  fonts1 text-[#ff0000]'>+</span> <br />
                                <span className=' text-lg font-bold uppercase  fonts1'>Exhibitor</span>
                            </div>


                        </div>
                    </div>
                    <div className="p-2 md:w-1/5 w-full">
                        <div className="bg-[#d1e8ff] text-black   flex p-2  justify-center rounded-xl">
                            <div className=' text-center'>
                                <div className=' flex justify-center'><FaUserCheck size={30} /></div>
                                <CountUp className=' text-2xl font-bold fonts1 text-[#ff0000]' end={200} /><span className='text-2xl  fonts1 text-[#ff0000]'>+</span> <br />
                                <span className=' text-lg font-bold uppercase fonts1'>Brand</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 md:w-1/5 w-full">
                        <div className="bg-[#d1e8ff] text-black  flex p-2  justify-center rounded-xl">
                            <div className=' text-center'>
                                <div className=' flex justify-center'><TbBrandVimeo size={30} /></div>
                                <CountUp className=' text-2xl font-bold fonts1 text-[#ff0000]' end={2500} /><span className='text-2xl  fonts1 text-[#ff0000]'>+</span> <br />
                                <span className=' text-lg font-bold fonts1'>Visitor</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 md:w-1/5 w-full">
                        <div className="bg-[#d1e8ff] text-black  flex p-2  justify-center rounded-xl">
                            <div className=' text-center'>
                                <div className=' flex justify-center'><TbBrandVimeo size={30} /></div>
                                <CountUp className=' text-2xl font-bold fonts1 text-[#ff0000]' end={1000} /><span className='text-2xl  fonts1 text-[#ff0000]'>+</span> <br />
                                <span className=' text-lg font-bold uppercase fonts1'>Frames</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 md:w-1/5 w-full">
                        <div className="bg-[#d1e8ff] text-black  flex p-2  justify-center rounded-xl">

                        <div className=' text-center'>
                                <div className=' flex justify-center'><GiFloorHatch size={30} /></div>
                                {/* <CountUp className=' text-lg font-light' end={200} /><br /> */}
                                <br />
                                <span className=' text-lg font-bold fonts1'>5 Days</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Icons