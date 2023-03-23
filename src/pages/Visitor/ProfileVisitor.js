import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Map from '../../components/Map'
import Navbar2 from '../../components/Navbar2'
import ScrollBtn from '../../ScrollBtn/ScrollBtn'

export default function ProfileVisitor() {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <div>
      <Navbar2 />
      {/* <div className="img">
      <img className='mt-20 mb-6' src="image/reg2.jpg" alt="" />
    </div> */}
      <div className="main container mx-auto px-4 mt-28">
        <h1 className=' text-3xl font-bold text-center fonts2 mb-2'>Exhibitor Profile Vyapar Xpo?
        </h1>
        <h3 className=' text-xl font-bold text-center mb-3 fonts2'>Most Influential Food &Agriculture Manufacturing Event In Varanasi</h3>
        <p className=' mb-6 fonts4'>Located at Varanasi IIT BHU Campus the exhibition will play host to over 300+ companies from around the region and beyond showcasing the latest products and services and will include:
        </p>
      </div>

      <div className="visitor container mx-auto px-4 mb-6">
        <div className="md:flex md:justify-center md:gap-72">
          <div className="">
            <h2 className=' text-xl font-bold mb-2 '> <u>AGRICULTURE EXHIBITOR PROFILE</u> </h2>
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
          <div className=" my-10 md:my-0">
            <h2 className=' text-xl font-bold mb-2 '> <u> FOOD  EXHIBITOR PROFILE
            </u></h2>
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
            </ul>
          </div>
        </div>

      </div>
      <ScrollBtn/>
      <Map />
      <Footer />
    </div>
  )
}
