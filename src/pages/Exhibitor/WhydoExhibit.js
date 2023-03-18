import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Layout from '../../components/Layout'
import Map from '../../components/Map'
import Navbar2 from '../../components/Navbar2'

export default function WhydoExhibit() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <Navbar2/>
            <div>
                <div className="">
                <img className=' mt-20' width={1500} src='https://rencotools.com/placeholder/600x300/D5D5D5/584959' />
                </div>

                <div className=' container mx-auto p-5'>
                    <h1 className=' text-center text-4xl mb-2 fonts2'>Why to Exhibit Vyapar Expo?</h1>
                    <h2 className=' text-center mb-5 text-xl fonts2'> Platform in high-growth manufacturing market under one roof </h2>
                    <p className=' mb-5 fonts4'>The momentum of doing high-value business, swapping and networking face-to-face is greater then ever. Vyapar Xpo  unveiling the next of food manufacturing, agriculture manufacturing  digital adoption and breakthrough innovations in a critical year for the manufacturing chain</p>
                    <div className=' text-center'>
                        <Link to={'/registrationfrom'}>
                           <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">BOOK YOUR STAND AS EXHIBITOR </button>
                        </Link>
                     
                    </div>

                </div>


                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                                <br className="hidden lg:inline-block" />readymade gluten
                            </h1>
                            <ul className='list-decimal mx-5'>
                                <li>Access the biggest business matchmaking programme dedicated to Food & Agro  Manufacturin</li>
                                <li>Access the biggest business matchmaking programme dedicated to Food & Agro  Manufacturin</li>
                                <li>Access the biggest business matchmaking programme dedicated to Food & Agro  Manufacturin</li>
                                <li>Access the biggest business matchmaking programme dedicated to Food & Agro  Manufacturin</li>

                            </ul>

                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                        </div>
                    </div>
                </section>

                <div>
                    <h1 className=' text-3xl text-center'>Gain direct access to the Varanasi Food &Agriculture processing & packaging market</h1>
                    <section className="text-gray-600 body-font mb-10">
                        <div className="container md:px-0 px-5 mx-auto">

                            <div className="flex flex-wrap ">
                                <div className="p-2 md:w-1/4 w-1/2">
                                    <div className=" text-black  flex p-2   justify-center rounded-lg ">
                                        <div className=' text-center'>
                                            <div className="h-full flex items-center  p-4 rounded-lg">
                                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />

                                            </div>
                                            <span className=' text-lg font-bold'>Exhibitor</span>
                                        </div>


                                    </div>
                                </div>
                                <div className="p-2 md:w-1/4 w-1/2">
                                    <div className=" text-black  flex p-2  justify-center rounded-lg">
                                        <div className=' text-center'>
                                        <div className="h-full flex items-center  p-4 rounded-lg">
                                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />

                                            </div>
                                            <span className=' text-lg font-bold'>Visitor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/4 w-1/2">
                                    <div className=" text-black  flex p-2  justify-center rounded-lg">
                                        <div className=' text-center'>
                                        <div className="h-full flex items-center  p-4 rounded-lg">
                                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />

                                            </div>
                                            <span className=' text-lg font-bold'>Brand</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/4 w-1/2">
                                    <div className=" text-black  flex p-2  justify-center rounded-lg">

                                        <div className=' text-center'>
                                        <div className="h-full flex items-center  p-4 rounded-lg">
                                                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />

                                            </div>
                                            <span className=' text-lg font-bold'>Floor Plan</span>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </section>
                </div>
            </div>
            <Map/>
            <Footer/>
        </div>
    )
}
