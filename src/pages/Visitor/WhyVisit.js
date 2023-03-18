import React from 'react'
import Footer from '../../components/Footer'
import Map from '../../components/Map'
import Navbar2 from '../../components/Navbar2'

function WhyVisit() {
  return (
    <div>
      <Navbar2 />
      <div className="img">
        <img className='mt-20 mb-6' src="image/reg2.jpg" alt="" />
      </div>
      <div className="main container mx-auto px-4">
        <h1 className=' text-3xl font-bold text-center fonts2 mb-2'>Why to Visit Vyapar Xpo?</h1>
        <h3 className=' text-xl font-bold text-center mb-3 fonts2'>Most Influential Food&Agriculture Manufacturing Event In Varanasi</h3>
        <p className=' mb-6 fonts4'>Vyapar Xpo India 2023 is set to unveil the next era of Food& Agro manufacturing including new ingredients and advanced technologies that will enable your business to reduce costs, grow and innovate. Don’t miss the chance to see all the megatrends and innovations of Ingredients, Processing, Packaging, Supply Chain Solutions and Control & Automation. Allowing the industry the opportunity to connect, learn, engage and move Food &Agro manufacturing to a more sustainable, resilient, agile and efficient future.</p>

        <h1 className=' text-2xl font-bold text-center fonts2'>PARTICIPATE IN A HIGH-GROWTH MANUFACTURING MARKET OF FOOD& AGRICULTURE :</h1>
        <p>Vyapar Xpo India will be the convening platform for the industry, as it addresses optimizing operational efficiency, driving responsible sourcing with traceable supply chains, navigating entry barriers in new markets, adopting sustainable practices, and generating new funding sources.</p>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900 fonts2">Your reason to visit Food&Agro Vyapar Expo 2023
            </h1>
            <ul className='list-decimal mx-5'>
              <li className='fonts4'>Source new opportunities and prospects from 300+ Exhibitor all over India .</li>
              <li className='fonts4'>Stay relevant with your target audience and ahead of the competition.</li>
              <li className='fonts4'>Engage with the entire value chain. Network with 2,000+ Industry professionals, make new connections and reinforce existing relationships.</li>
              <li className='fonts4'>Hear from 100+ industry leaders, learn and gain insights on the latest trends and topics.</li>
              <li className='fonts4'>Benefit from direct communication and face-to-face marketing.</li>

            </ul>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
        </div>
      </section>

      <div className="visitor container mx-auto px-4 mb-6">
        <h1 className=' text-center mb-10 text-3xl font-bold fonts2'>REGISTOR TO VISIT</h1>
        <div className="md:flex md:justify-center md:gap-72">
          <div className="">
            <h2 className=' text-lg font-semibold fonts4'>Visitors By Profile:</h2>
            <ul className=' list-disc mx-5'>
              <li className=' text-lg fonts4'>Food Technologists</li>
              <li className=' text-lg fonts4'>Product Development</li>
              <li className=' text-lg fonts4'>Plant Design & Production</li>
              <li className=' text-lg fonts4'>Manufacturing /Production</li>
              <li className=' text-lg fonts4'>Quality Control & Maintenance</li>
              <li className=' text-lg fonts4'>Purchasing</li>
              <li className=' text-lg fonts4'>Sales & Marketing</li>
              <li className=' text-lg fonts4'>Bakeries</li>
            </ul>
          </div>
          <div className=" my-10 md:my-0">
            <h2 className=' text-lg font-semibold fonts4'>Visitors by Business Type:</h2>
            <ul className=' list-disc mx-5'>
              <li className=' text-lg fonts4'>Factories and Production Plants</li>
              <li className=' text-lg fonts4'>Project Contractors</li>
              <li className=' text-lg fonts4'>Hypermarket</li>
              <li className=' text-lg fonts4'>Hotel & Resort</li>
              <li className=' text-lg fonts4'>Food Service</li>
              <li className=' text-lg fonts4'>Retail Store</li>
              <li className=' text-lg fonts4'>Industrial Kitchen</li>
            </ul>
          </div>
        </div>

      </div>
      <div className="img mb-10">
        <img className=' mt-10' src="image/reg.jpg" alt="" />
      </div>
      <Map />
      <Footer />
    </div>
  )
}

export default WhyVisit