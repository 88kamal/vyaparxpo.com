import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import Navbar2 from '../../components/Navbar2'

function AboutOrganizer() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
            <div className=" container mx-auto px-4 mt-28">
               
               <h1 className=' text-4xl font-bold fonts2 mb-3'>VYAPAR <span className=' text-orange-500'>.</span> <span className=' text-indigo-500'>.</span> <span className=' text-green-500'>.</span> <span className=' text-pink-500'>INDIA 2023</span></h1>
            
                <p className=' text-justify'>Starting operation in the year 2023, VYAPAR...INDIA is a leading business exhibition company which is conducting B2B, B2C , D2C exhibitions , conference franchise meet with a competitive edge across Indian market .
                    <br />
                    <br />
                    Vyapar Expo 2023 is the sole event in the globe where one can find all solutions related to the Food & Agriculture industry. From Brand & technologies of automation to packaging machinery to packaging materials, from raw materials for all kinds of ingredients to knowledge of ideas and from relations to business deals, Vyapar Expo 2023 Varanasi is the only place where entire industry comes under one roof.
                    <br />
                    <br />
                    Vyapar Expo 2023 Varanasi is expected to host more than 300+ Exhibitors and approximately 20,000+ visitors and delegates from all over India .Food and Agriculture segment is at the nascent stage of branding and its true potential is still to be explored.
                    <h1 className=' text-2xl font-bold underline text-red-600 text-center mt-10 mb-3'>VYAPAR EXPO 2023 MISSION</h1>

                    <span className=' font-bold'> VYAPAR...INDIA PVT.LTD established with a mission to build a platform where leading manufacturer, brand players and stakeholders from the Agriculture &Food industry can showcase the latest technologies & new product development to tap business opportunities for all the Small, Medium &Micro Food & Agriculture Entrepreneur to uplifting the Indian economy growth.</span>
                    <br />
                    <span className=' text-green-500 font-bold'> VYAPAR EXPO 2023 will be Influencing Small, Medium, and Micro Food & Agriculture Entrepreneur.</span> <br />
                    <span className=' font-bold text-xl'>JOIN US AT VYAPAR EXPO 2023</span>
                </p>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-2 mx-auto flex flex-col">
                        <div className="lg:w-4/6 mx-auto">
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div className=" rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <img src="image/kunal.jpg" alt="" />
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg"> KUNAL MISHRA <br /> FOUNDER
                                            VYAPAR INDIA</h2>
                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                        <Link to={'/adminlogin'}>
                                         <button type="button" className="text-white bg-violet-600 hover:bg-purple-800  font-medium rounded-full text-sm px-10 py-2 ">Admin</button>
                                        </Link>
                                       

                                    </div>
                                </div>
                                <div className="sm:w-full sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                    <p className="leading-relaxed text-lg mb-4 text-justify bg-slate-50 p-3 rounded-xl border italic">Food & Agriculture Vyapar  Expo 2023  aims to gather India  leading manufacturer , brand  players and stakeholders from the India  agri-food industry to share best practices, showcase the latest technologies, to tap business opportunities, and to collaborate towards greater security and sustainability in  India
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default AboutOrganizer