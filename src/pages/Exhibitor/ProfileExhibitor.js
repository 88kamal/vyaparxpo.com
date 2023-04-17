import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Layout from '../../components/Layout'
import Map from '../../components/Map'
import Navbar2 from '../../components/Navbar2'
import ScrollBtn from '../../ScrollBtn/ScrollBtn'

export default function ProfileExhibitor() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      {/* <div className="img">
      <img className='mt-20 mb-6' src="image/reg2.jpg" alt="" />
    </div> */}
     <div className="main container mx-auto px-4 md:mt-32 lg:mt-32 mt-40">
        <div className="flex mb-5 gap-2 justify-between items-center">
          <h1 className=' text-3xl font-bold  fonts2 mb-8'>VYAPAR <span className='text-[#ff0000]'>
            EXPO 2023</span><br /> EXIHIBITOR  <span className='text-[#ff0000]'> PROFILE</span> </h1>
          <p className=' text-center bg-gray-200 shadow-xl flex items-center p-4 fonts2 font-bold rounded-xl'>1ST NATIONAL
            <br /> FOOD & AGRICULTURE VYAPAR EXPO 2023 <br /> 16-17-18-19-20 OCTOBER, 2023 <br /> AGRICULTURE GROUND (BHU CAMPUS), VARANASI</p>
        </div>
        </div>
      <div className="visitor container mx-auto px-4 mb-6">
        <div className="md:flex md:justify-center md:gap-32 mt-10">
          <div className=" ">
            <h2 className=' text-3xl font-bold mb-2 text-center '>AGRICULTURE <span className='text-[#ff0000]'>PROFILE</span></h2>
            <div className=" bg-green-200 p-3 rounded-[2em]">
              <ul className=' list-disc mx-5'>
                <li className=' text-lg fonts4'>Agricultural Machineries,
                </li>
                <li className=' text-lg fonts4'>Irrigating Systems</li>
                <li className=' text-lg fonts4'>Greenhouses & Equipment
                </li>
                <li className=' text-lg fonts4'>Hydroponic Systems
                </li>
                <li className=' text-lg fonts4'>Harvesting Machineries
                </li>
                <li className=' text-lg fonts4'>Manufacturing Processing Companies
                </li>
                <li className=' text-lg fonts4'>Chemicals, Fertilizers
                </li>
                <li className=' text-lg fonts4'>Agro-Food, Organic Food
                </li>
                <li className=' text-lg fonts4'>Agro-Processing Technology
                </li>
                <li className=' text-lg fonts4'>Tractor & Tractor parts
                </li>
                <li className=' text-lg fonts4'>Sprayers Pumps
                </li>
                <li className=' text-lg fonts4'>Greenhouse Equipment
                </li>
                <li className=' text-lg fonts4'>Agriculture Nets
                </li>
                <li className=' text-lg fonts4'>Drones</li>
                <li className=' text-lg fonts4'>Irrigation System
                </li>
                <li className=' text-lg fonts4'>Fungicides
                </li>
                <li className=' text-lg fonts4'>Pesticides
                </li>
                <li className=' text-lg fonts4'>Fertilizer</li>
                <li className=' text-lg fonts4'>Seeds</li>
                <li className=' text-lg fonts4'>Farm machinery
                </li>
                <li className=' text-lg fonts4'>Rotavator Blades
                </li>
              </ul>
            </div>
          </div>
         
          <div className=" my-10 md:my-0">
            <h2 className=' text-3xl font-bold mb-2 text-center '> FOOD <span className='text-[#ff0000]'>PROFILE</span></h2>
            <div className="bg-yellow-200 p-3 rounded-[2em]">
              <ul className=' list-disc mx-5'>
                <li className=' text-lg fonts4'>Food processing & machinery
                </li>
                <li className=' text-lg fonts4'>Spices .Herbs .Condiments
                </li>
                <li className=' text-lg fonts4'>Seasoning products / HOREC
                </li>
                <li className=' text-lg fonts4'>Tea/Coffee
                </li>
                <li className=' text-lg fonts4'>Beverages</li>
                <li className=' text-lg fonts4'>Dairy Technology
                </li>
                <li className=' text-lg fonts4'>Milk &Milk Products
                </li>
                <li className=' text-lg fonts4'>Grain Milling Technology
                </li>
                <li className=' text-lg fonts4'>Flour mill Technology
                </li>
                <li className=' text-lg fonts4'>Flavor Ingredients
                </li>
                <li className=' text-lg fonts4'>Grading & Sorting Machinery
                </li>
                <li className=' text-lg fonts4'>Organic Food Products
                </li>
                <li className=' text-lg fonts4'>Food and Dry Fruits
                </li>
                <li className=' text-lg fonts4'>Packaging Technology
                </li>
                <li className=' text-lg fonts4'>Frozen & Functional Food
                </li>
                <li className=' text-lg fonts4'>Ready To Cook Food
                </li>
                <li className=' text-lg fonts4'>Herbal Food Product
                </li>
                <li className=' text-lg fonts4'>Bar Coding , Ink & Material
                </li>
                <li className=' text-lg fonts4'>Edible Oil
                </li>
                <li className=' text-lg fonts4'>Juice Processing & Filling Machinery
                </li>
                <br />
              </ul>
            </div>
          </div>
        </div>

      </div>
      <ScrollBtn />
      <Map />
    </Layout>
  )
}
