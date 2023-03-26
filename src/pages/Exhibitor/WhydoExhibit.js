import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Layout from '../../components/Layout'
import Map from '../../components/Map'
import Navbar2 from '../../components/Navbar2'
import ScrollBtn from '../../ScrollBtn/ScrollBtn'

export default function WhydoExhibit() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Navbar2 />
            <div>
                <div className="">
                    <img className=' mt-20' width={1500} src='https://rencotools.com/placeholder/600x300/D5D5D5/584959' />
                </div>

                <div className=' container mx-auto p-5 py-10'>
                    <h1 className=' text-center text-2xl md:text-4xl mb-2 fonts2'>Why to Exhibit Vyapar Expo?</h1>
                    <h2 className=' text-center mb-5 text-lg md:text-xl fonts2'> Platform in high-growth manufacturing market under one roof </h2>
                    <p className=' mb-5 fonts4'>The momentum of doing high-value business, swapping and networking face-to-face is greater then ever. Vyapar Xpo  unveiling the next of food manufacturing, agriculture manufacturing  digital adoption and breakthrough innovations in a critical year for the manufacturing chain</p>
                    <div className=' text-center'>
                        <Link to={'/exhibitorregistration'} ><button type="button" class="text-white bg-[#ff0000] hover:bg-purple-800font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 fonts2 ">BOOK YOUR STAND AS EXHIBITOR</button></Link>

                    </div>

                </div>


                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 md:py-10 md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
                            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-gray-900">            Why Is Vyapar Expo Good For Business?

                            </h1>
                            <ul className='list-decimal mx-5'>
                                <li>Access the <b>biggest business matchmaking programme</b> dedicated to Food & Agro  Manufacturin</li>
                                <li><b>Meet and connect with top buyers</b> and leverage the power of face to face meetings</li>
                                <li><b>Sign major deals at the show.</b> 96% visitors said the show was important for sourcing
                                </li>
                                <li><b>Do business in one of the world’s safest and well-connected hubs for business travelers. Food & Agro Vyapar Expo 2023 is organised by Vyapar Xpo India</b> , with a proven track record of hosting the 's safest events during the pandemic
                                </li>

                            </ul>

                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5">
                            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                        </div>
                    </div>
                </section>

                <div>
                    <h1 className=' text-2xl font-bold text-center'>Gain direct access to the Varanasi Food &Agriculture processing & packaging market
                    </h1>
                    <section className="text-gray-600 body-font mb-10">
                        <div className="container md:px-0 px-5 mx-auto">

                            {/* <div className="flex flex-wrap ">
                                <div className="p-2 md:w-1/4 w-1/2">
                                    <div className=" text-black  flex p-2   justify-center rounded-lg ">
                                        <div className=' text-center'>
                                            <div className="h-full flex items-center  p-4 rounded-lg">
                                                <img alt="team" className="w-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="icons/Pasted Graphic 1.png" />

                                            </div>
                                            <span className=' text-lg font-bold'>BRAND PROMOTION</span>
                                        </div>


                                    </div>
                                </div>
                                <div className="p-2 md:w-1/4 w-1/2">
                                    <div className=" text-black  flex p-2  justify-center rounded-lg">
                                        <div className=' text-center'>
                                            <div className="h-full flex items-center  p-4 rounded-lg">
                                                <img alt="team" className="w-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="icons/Pasted Graphic 2.png" />

                                            </div>
                                            <span className=' text-lg font-bold'>Visitor</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/4 w-1/2">
                                    <div className=" text-black  flex p-2  justify-center rounded-lg">
                                        <div className=' text-center'>
                                            <div className="h-full flex items-center  p-4 rounded-lg">
                                            <img alt="team" className="w-20 bg-gray-100 object-cover object-center flex-shrink-0  mr-4" src="icons/Pasted Graphic 3.png" />
                                            </div>
                                            <span className=' text-lg font-bold'>Brand</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/4 w-1/2">
                                    <div className=" text-black  flex p-2  justify-center rounded-lg">

                                        <div className=' text-center'>
                                            <div className="h-full flex items-center  p-4 rounded-lg">
                                            <img alt="team" className=" w-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="icons/Pasted Graphic 4.png" />

                                            </div>
                                            <span className=' text-lg font-bold'>Floor Plan</span>
                                        </div>
                                    </div>
                                </div>


                            </div> */}

                            {/* <div className="flex">
                                <div className="icon">
                                    <div className="icon-inner">
                                        <div className="h-full flex items-center  p-4 rounded-lg">
                                            <img alt="team" className="w-20 flex justify-center bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="icons/Pasted Graphic 1.png" />
                                        </div>
                                        <h1 className=' text-center'>BRAND PROMOTION</h1>
                                    </div>
                                </div>
                            </div> */}
                            <section className="text-gray-600 body-font">
                                <div className="container px-5 md:py-24 mx-auto">
                                    <div className="container mx-auto px-16 md:container md:mx-auto md:px-16">
                                        <div className="flex flex-wrap md:-m-4 ">
                                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                                <div className="h-full flex flex-col items-center text-center">
                                                    <img alt="team" className="flex-shrink-0 rounded-lg w-28 h-24 mb-1" src="icons/Pasted Graphic 1.png" />
                                                    <div className="w-full">
                                                        <h2 className="title-font font-medium text-lg text-gray-900"> BRAND PROMOTION </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                                <div className="h-full flex flex-col items-center text-center">
                                                    <img alt="team" className="flex-shrink-0 rounded-lg w-28 h-24 mb-1" src="icons/Pasted Graphic 2.png" />
                                                    <div className="w-full">
                                                        <h2 className="title-font font-medium text-lg text-gray-900"> BUILDING NETWORK</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                                <div className="h-full flex flex-col items-center text-center">
                                                    <img alt="team" className="flex-shrink-0 rounded-lg w-28 h-24 mb-1" src="icons/Pasted Graphic 3.png" />
                                                    <div className="w-full">
                                                        <h2 className="title-font font-medium text-lg text-gray-900"> SHOW PRODUCT </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4 lg:w-1/4 md:w-1/2">
                                                <div className="h-full flex flex-col items-center text-center">
                                                    <img alt="team" className="flex-shrink-0 rounded-lg w-28 h-24 mb-1" src="icons/Pasted Graphic 4.png" />
                                                    <div className="w-full">
                                                        <h2 className="title-font font-medium text-lg text-gray-900">       ENTER NEW MARKET </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="text-gray-600 body-font ">
                                <div className="container px-5  mx-auto">
                                    <div className="container mx-auto px-16 md:container md:mx-auto md:px-16">
                                        <div className="flex flex-wrap md:-m-4 ">
                                            <div className="p-4 lg:w-1/3 md:w-1/2">
                                                <Link to={'/exhibitorregistration'} >
                                                    <div className="h-full flex flex-col items-center text-center">
                                                        <img alt="team" className="flex-shrink-0 rounded-lg w-20 h-16 mb-1" src="icons/pastedGraphic.png" />
                                                        <div className="w-full">
                                                            <h2 className="title-font font-medium text-lg text-gray-900"> Sponsorship Opportunities </h2>
                                                        </div>
                                                    </div>
                                                </Link>

                                            </div>
                                            <div className="p-4 lg:w-1/3 md:w-1/2">
                                                <Link to={'/exhibitorregistration'} >
                                                    <div className="h-full flex flex-col items-center text-center">
                                                        <img alt="team" className="flex-shrink-0 rounded-lg w-20 h-16 mb-1" src="icons/Pasted Graphic 5.png" />
                                                        <div className="w-full">
                                                            <h2 className="title-font font-medium text-lg text-gray-900"> Hotel Accommodation </h2>
                                                        </div>
                                                    </div>
                                                </Link>

                                            </div>
                                            <div className="p-4 lg:w-1/3 md:w-1/2">
                                                <Link to={'/exhibitorregistration'} >
                                                    <div className="h-full flex flex-col items-center text-center">
                                                        <img alt="team" className="flex-shrink-0 rounded-lg w-20 h-16 mb-1" src="icons/Pasted Graphic 6.png" />
                                                        <div className="w-full">
                                                            <h2 className="title-font font-medium text-lg text-gray-900"> Register as Visitor </h2>
                                                        </div>
                                                    </div>
                                                </Link>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex justify-center mt-10 gap-10">
                            <Link to={'/exhibitorregistration'} ><button type="button" className="text-white bg-[#ff0000] hover:bg-purple-800font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 fonts2 ">EXHIBITOR REGISTRATION</button></Link>
                            <Link to={'/visitorregistration'} ><button type="button" className="text-white my-6 md:my-0 bg-[#ff0000] hover:bg-purple-800font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 fonts2 ">FREE VISITOR REGISTRATION</button></Link>
                            </div>
                            </section>

                        </div>
                    </section>
                </div>
            </div>
            <ScrollBtn />
            <Map />
            <Footer />
        </div>
    )
}
