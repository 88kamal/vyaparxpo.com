import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Layout from '../../components/Layout'
import Map from '../../components/Map'
import Navbar2 from '../../components/Navbar2'
import ScrollBtn from '../../ScrollBtn/ScrollBtn'

export default function ProfileVisitor() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      {/* <div className="img">
      <img className='mt-20 mb-6' src="image/reg2.jpg" alt="" />
    </div> */}
      <div className="main container mx-auto px-4 md:mt-32 lg:mt-32 mt-40">
        <div className="flex mb-5 justify-between items-center">
          <h1 className=' text-3xl font-bold  fonts2 mb-8'>VYAPAR <span className='text-[#ff0000]'>
            EXPO 2023</span> VISITOR <br /> <span className='text-[#ff0000]'> PROFILE</span> </h1>
          <p className=' text-center bg-yellow-600 shadow-xl flex items-center p-4 fonts2 font-bold rounded-xl'>1ST NATIONAL
            <br /> FOOD & AGRICULTURE VYAPAR EXPO 2023 <br /> 16-17-18-19-20 OCTOBER, 2023 <br /> AGRICULTURE GROUND (BHU CAMPUS), VARANASI</p>
        </div>
        {/* <h1 className=' text-3xl font-bold text-center fonts2 mb-2'>Exhibitor Profile Vyapar Xpo?
        </h1>
        <h3 className=' text-xl font-bold text-center mb-3 fonts2'>Most Influential Food &Agriculture Manufacturing Event In Varanasi</h3>
        <p className=' mb-6 fonts4'>Located at Varanasi IIT BHU Campus the exhibition will play host to over 300+ companies from around the region and beyond showcasing the latest products and services and will include:
        </p> */}
      </div>

      {/* <div className="main container mx-auto px-4 mt-28">
        <h1 className=' text-3xl font-bold text-center fonts2 mb-2'>Exhibitor Profile Vyapar Xpo?
        </h1>
        <h3 className=' text-xl font-bold text-center mb-3 fonts2'>Most Influential Food &Agriculture Manufacturing Event In Varanasi</h3>
        <p className=' mb-6 fonts4'>Located at Varanasi IIT BHU Campus the exhibition will play host to over 300+ companies from around the region and beyond showcasing the latest products and services and will include:
        </p>
      </div> */}

<div className="visitor container mx-auto px-4 mb-6">
        <div className="md:flex md:justify-center md:gap-32 mt-10">
          <div className=" ">
            <h2 className=' text-3xl font-bold mb-2 text-center '>AGRICULTURE <span className='uppercase text-[#ff0000]'>Visitor PROFILE</span></h2>
            <div className=" bg-green-200 p-3 rounded-[2em]">
              <ul className=' list-disc mx-5'>
                <li className=' text-lg fonts4'>Agricultural Progressive Farmers
                </li>
                <li className=' text-lg fonts4'>Supplier , Distributor & Dealer</li>
                <li className=' text-lg fonts4'>Agricultural Machineries &
Equipment Dealer</li>
                <li className=' text-lg fonts4'> Farm Owner</li>
                <li className=' text-lg fonts4'>Wholesaler and Retailer</li>
                <li className=' text-lg fonts4'>Agriculture Consultant</li>
                <li className=' text-lg fonts4'>Honey Bee Farmer</li>
                <li className=' text-lg fonts4'>Dairy Machinery</li>
                <li className=' text-lg fonts4'>Agronomist & Expert
Researcher
</li>
                <li className=' text-lg fonts4'>Potential Buyers</li>
                <li className=' text-lg fonts4'>Regional Distributors Of
Importing Companies</li>
                <li className=' text-lg fonts4'>Agriculture-Related Trade
Associations Investors</li>
              </ul>
            </div>
          </div>
         
          <div className=" my-10 md:my-0">
            <h2 className=' text-3xl font-bold mb-2 text-center '> FOOD <span className='text-[#ff0000] uppercase'>Visitor PROFILE</span></h2>
            <div className="bg-yellow-200 p-3 rounded-[2em]">
              <ul className=' list-disc mx-5'>
                <li className=' text-lg fonts4'>General Retailer , Distributor , Wholesaler
                </li>
                <li className=' text-lg fonts4'>Food Manufacturer
                </li>
                <li className=' text-lg fonts4'>Grocery & Convenience Store Owner
                </li>
                <li className=' text-lg fonts4'>New startup Foodpreneurs
                </li>
                <li className=' text-lg fonts4'>Hotel , Restaurant , Bar Owner
                </li>
                <li className=' text-lg fonts4'>Fast Food Cart owner
                </li>
                <li className=' text-lg fonts4'>Food Importer / Exporter
                </li>
                <li className=' text-lg fonts4'>Bakery Owner
                </li>
                <li className=' text-lg fonts4'>Packaging & Distribution Center
                </li>
                <li className=' text-lg fonts4'>Logistic & Warehousing
                </li>
                <li className=' text-lg fonts4'>Government Agencies
                </li>

                <li className=' text-lg fonts4'>Hotel Supplier Dealer
                </li>
                <li className=' text-lg fonts4'>Retail Outlet / Malls
                </li>
                <li className=' text-lg fonts4'>Snack Producer
                </li>
                <li className=' text-lg fonts4'>Chefs / Restaurant Manager
                </li>
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
