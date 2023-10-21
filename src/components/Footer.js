import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div>
            <footer className=" bg-red-100">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <img className='w-20 md:w-28' src="footer/logo.png" alt="" />

                        </a>
                        <p className="mt-2 text-sm text-gray-900">The only show unveiling the next ear of food & agriculture manufacturing technology
                            , digital adoption and breakthrough innovations in Indian manufacturing chain
                        </p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2> */}
                            <nav className="list-none mb-10">
                                <li className=' my-5'>
                                    <Link to={'/'} className="text-gray-900 hover:text-green-500 cursor-pointer">Home</Link>
                                </li>
                                <li className=' my-5'>
                                    <Link to={'/aboutvayparexpo'} className="text-gray-900 hover:text-green-500 cursor-pointer">About</Link>
                                </li>
                                <li className=' my-5'>
                                    <Link to={'/whytoExhibit'} className="text-gray-900 hover:text-green-500 cursor-pointer">Exhibitor</Link>
                                </li>
                                <li className=' my-5'>
                                    <Link to={'/whyvisit'} className="text-gray-900 hover:text-green-500 cursor-pointer">Visitor</Link>
                                </li>
                                <li className=' my-5'>
                                    <Link to={'/aboutvayparexpo'} className="text-gray-900 hover:text-green-500 cursor-pointer">
                                        About Vypar Expo
                                    </Link>
                                </li>
                                {/* <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Get Your Pass</a>
                                </li> */}
                            </nav>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <nav className="list-none mb-10">
                                <li className=' my-5'>
                                    <Link to={'/visitorregistration'} className="text-gray-900 hover:text-green-500 cursor-pointer">Interested To Participate</Link>
                                </li>
                                <li className=' my-5'>
                                    <Link to={'/profilevisitor'} className="text-gray-900 hover:text-green-500 cursor-pointer">Visitor Profile</Link>
                                </li>
                                <li className=' my-5'>
                                    <Link to={'/visitorregistration'} className="text-gray-900 hover:text-green-500 cursor-pointer">
                                        Visitor Registration
                                    </Link>
                                </li>
                                <li className=' my-5'>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">
                                        Marketing Campaign
                                    </a>
                                </li>
                                {/* <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Book your Stand</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Get Your Pass</a>
                                </li> */}
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <nav className="list-none mb-10">
                                <li className=' my-5'>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">
                                        Catalogue
                                    </a>
                                </li>
                                <li className=' my-5'>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">
                                        FloorPlan
                                    </a>
                                </li>
                                <li className=' my-5'>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">
                                        Contract From
                                    </a>
                                </li>
                                <li className=' my-5'>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">
                                        Contact Us
                                    </a>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full">
                            <p className=' font-semibold'>16 to 20 ocotber 2023
                                AGRICULTURE GROUND , BANARAS HINDU UNIVERSITY ,VARANASI UTTARPRADESH 221005 <br />
                                <span className=' font-bold'> CONTACT </span>: +91-8160480947 | 8881077703 <br />
                                <span className=' font-bold'>EMAIL ID:</span> vyaparxpo.india@gmail.com vyaparxpo.akash@gmail.com
                            </p>
                        </div>

                    </div>

                </div>
                <div className="container px-5 mb-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:space-x-10 lg:space-x-10 md:mt-0 mt-10 md:text-left">
                        <div className="lg:w-1/5 md:w-1/2 w-full ">
                            <h2 className="title-font font-bold text-gray-900 underline tracking-widest text-sm mb-3"> ORAGANISED BY</h2>
                            <nav className="list-none mb-10">
                                <li className=' my-5'>
                                    <div className="text-gray-900 flex gap-2 hover:text-green-500 ">
                                        <a href="">
                                            <img className=' w-32 ' src="footer/logo.png" alt="" />
                                        </a>
                                        
                                    </div>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/5 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 underline tracking-widest text-sm mb-3">                                   ASSOCIATION WITH
                            </h2>
                            <nav className="list-none mb-10">
                                <li className=' my-5'>
                                    <div className="text-gray-900 flex gap-2 hover:text-green-500 ">
                                        <a href="https://www.mofpi.gov.in/">
                                            <img className=' w-80 ' src="footer/mof.png" alt="" />
                                        </a>
                                        <div className=" border-l-2 border-black"></div>
                                        <a href="https://msme.gov.in/">
                                            <img className=' ' src="footer/ms.png" alt="" />
                                        </a>
                                    </div>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/5 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 underline uppercase tracking-widest text-sm mb-3">                                  Media partner 

                            </h2>
                            <nav className="list-none mb-10">
                                <li className=' my-5'>
                                    <div className="text-gray-900 flex gap-2 hover:text-green-500 ">
                                        <a href="https://www.iid.org.in/">
                                            <img className=' w-80 ' src="footer/in.png" alt="" />
                                        </a>
                                        <div className=" border-l-2 border-black"></div>
                                        <a href="https://www.udyogprerana.net/">
                                            <img className='  w-80' src="footer/ud.png" alt="" />
                                        </a>
                                        <a href="https://www.businessworth.in/">
                                            <img className=' w-80 ' src="footer/b.png" alt="" />
                                        </a>
                                    </div>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/5 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 underline uppercase tracking-widest text-sm mb-3">                                  Event partner 

                            </h2>
                            <nav className="list-none mb-10">
                                <li className=' my-5'>
                                    <div className="text-gray-900 flex gap-2 hover:text-green-500 ">
                                        <a href="https://www.facebook.com/theproductiongroup?mibextid=ZbWKwL">
                                            <img className=' w-32 ' src="footer/event.jpeg" alt="" />
                                        </a>
                                       
                                    </div>
                                </li>
                            </nav>
                        </div>
                    </div>

                </div>
                <div className="bg-red-800">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-white text-sm text-center sm:text-left ">Copyright © 2023 <span className='fonts2 text-white'>VyaparExpo India, All right reserved.</span>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-100">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                                {/* #4267B2 */}
                            </a>
                            <a className="ml-3 text-gray-100">
                                <IoLogoWhatsapp size={20} />
                            </a>
                            <a className="ml-3 text-gray-100">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>


            </footer>
        </div>
    )
}

export default Footer
