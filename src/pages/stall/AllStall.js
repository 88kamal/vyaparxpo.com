import React, { useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Above from './Above';
import FifteenSq from './FifteenSq/FifteenSq';
import NineSq from './nineSq/NineSq';
import SixSq from './sixSq/SixSq';
import TwelveSq from './TwelveSq/TwelveSq';

function AllStall() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className=' '>
            {/* <h1>Home</h1> */}
            <div className="tab  bg-slate-200 p-5  ">
                <div className="">
                    <h1 className=' text-center border border-black text-white  bg-gray-700 p-5 mb-10 text-3xl mt-0 fonts1 '>Select Your Stall</h1>
                </div>
                <Tabs defaultIndex={0} className="  " >
                    <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
                        <Tab>
                            <button type="button" className="font-medium border-b shadow-2xl bg-gray-200 hover:shadow-purple-700 border-purple-500 border-t text-purple-500  text-xl   px-5 py-1.5 text-center ">6 Sq. Meter</button>
                        </Tab>
                        <Tab>
                            <button type="button" className="font-medium border-b border-pink-500 bg-gray-200 text-pink-500 shadow-2xl hover:shadow-pink-700 border-t  text-xl    px-5 py-1.5 text-center ">9 Sq. Meter</button>
                        </Tab>
                        <Tab>
                            <button type="button" className="font-medium border-b border-green-500 bg-gray-200 text-green-500  text-xl shadow-2xl border-t hover:shadow-green-700   px-5 py-1.5 text-center ">12 Sq. Meter</button>
                        </Tab>
                        <Tab>
                            <button type="button" className="font-medium border-b border-orange-500 bg-gray-200 text-orange-500  text-xl shadow-2xl border-t hover:shadow-orange-700   px-5 py-1.5 text-center ">15 Sq. Meter</button>
                        </Tab>
                        <Tab className="">
                            <button type="button" className="font-medium border-b border-sky-500 bg-gray-200 text-sky-500  text-xl shadow-2xl hover:shadow-sky-700 border-t  px-5 py-1.5 text-center ">Above</button>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <SixSq />
                    </TabPanel>

                    <TabPanel>
                        <NineSq />
                    </TabPanel>
                    <TabPanel>
                        <TwelveSq />
                    </TabPanel>
                    <TabPanel>
                        <FifteenSq />
                    </TabPanel>
                    <TabPanel>
                        <Above />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}



export default AllStall