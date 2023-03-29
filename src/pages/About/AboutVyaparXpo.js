import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import IconsForAbout from './IconsForAbout'

export default function AboutVyaparXpo() {
  return (
    <div>
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
              <h1 className='text-center text-xl font-bold italic '>     It’s just beginning to new era of business and technology
              </h1>
            </div>
            <IconsForAbout />

            <div className="para my-5 ">
              <p className=' text-justify  mb-10 '>
                VISITORFood & Agro Expo is an National Exhibition on all category  Food & Agriculture Industry, which is scheduled to be held on <b>16 -17-18-19-20  OCTOBER  2023 AT AGRICULTURE BHU CAMPUS VARANASI , UTTAR PRADESH</b> .Food & Agriculture being largest sector of India with 58% population of India having it as main source of Income. In last few years, It has been a focus sector for government of India as well as states. <br />
                <br />
                <b>Held under the patronage of Ministry of Food & Agriculture, India Food & Agriculture Vyapar Expo 2023 major event under India’s G20 Presidency in Varanasi.</b> <br />
                <br />
               <b> FOOD&AGRICULTURE VYAPAR EXPO2023</b> established with a mission to build a platform where leading manufacturer, brand players and stakeholders from the agro-food industry can showcase the latest technologies & new product development to tap business opportunities for all the small, medium & micro Food & Agro Entrepreneur to uplifting the Indian economy <br />
                <br />
                As a rapidly developing country, and soon to be the world’s most populous nation, <b>FOOD & AGRICULTURE VYAPAR EXPO 2023</b> will play a pivotal role in global Food & Agriculture markets. <br /> <br />
                Book your stand space today and join more than 300 exhibiting companies from over all over India will convene together and showcase latest products, services and solutions.
              </p>
              <div className="flex justify-center mb-2">
                            <Link to={'/exhibitorregistration'} ><button type="button" className="text-black bg-yellow-400 hover:bg-purple-800font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 fonts2 ">BOOK YOUR STAND SPACE </button></Link>
                            <Link to={'/visitorregistration'} ><button type="button" className="text-black bg-yellow-400 hover:bg-purple-800font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 fonts2 ">VISIT FOR FREE </button></Link>
                            </div>
                            
            </div>
            <div className="download text-center border-2 border-black shadow-xl font-bold bg-gray-100 p-3 rounded-lg">
              <a href='pdf/Vyapar Expo Bkup.pdf' className=' '>
              DOWNLOAD BROCHURE  VYAPAR EXPO 2023
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
