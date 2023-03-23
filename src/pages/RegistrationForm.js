import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import Map from '../components/Map'
import Navbar2 from '../components/Navbar2'
import ScrollBtn from '../ScrollBtn/ScrollBtn'

function RegistrationForm() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <Navbar2 />
      <div className="img">
        <img className=' mt-20' src="image/reg.jpg" alt="" />
      </div>
      <div className=' container mx-auto px-4 my-5'>
        <h1 className=' text-center text-3xl md:text-4xl mb-2 font-bold '>Registration Form</h1>
        <h2 className=' text-center mb-2 md:text-lg text-red-600'>(Fields marked as * mandatory)</h2>
        <div className="field flex justify-center gap-5 mb-6">
          <div className="flex items-center">
            <input defaultChecked id="default-radio-2" type="radio" defaultValue name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
            <label htmlFor="default-radio-2" className="ml-2 text-lg md:text-xl font-medium text-gray-900 ">EXHIBITOR</label>
          </div>
          <div className="flex items-center">
            <input defaultChecked id="default-radio-2" type="radio" defaultValue name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
            <label htmlFor="default-radio-2" className="ml-2 text-lg md:text-xl font-medium text-gray-900 ">VISITOR</label>
          </div>
        </div>
        <div className="form">
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Name *</label>
              <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="full name" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email *</label>
              <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@example.com" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Designation *</label>
              <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Mobile *</label>
              <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Company Name *</label>
              <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Company Website *</label>
              <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Country *</label>
              <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">State *</label>
              <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">City *</label>
              <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
           <div className="mb-6">
           <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Type of User *</label>
            <select id="countries" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
              <option selected>Choose a user</option>
              <option value="US">Exporter</option>
              <option value="CA">Distributor</option>
              <option value="FR">Traders</option>
              <option value="DE">Services</option>
              <option value="DE">other</option>
            </select>
           </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Source *</label>
              <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>


            <button type="submit" className="text-white w-full md:w-full bg-green-700 mb-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center ">Submit</button>
          </form>
        </div>
      </div>
      <ScrollBtn/>
      <Map />
    </Layout>
  )
}

export default RegistrationForm