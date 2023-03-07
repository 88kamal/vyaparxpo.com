

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../styleSheet/Navbar.css'




function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const [navSize, setnavSize] = useState("10rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("black") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("5rem") : setnavSize("10rem");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);


    return (
        <div>

            <nav className=" md:bg-transparent bg-[#807e7e]  fixed top-0 w-full z-30" style={{
                backgroundColor: navColor,
                //   height: navSize,
                transition: "all 0.9s"
            }} >
                <div className=' overlayNav '>
                    <div className="justify-between px-4 mx-auto  lg:max-w-7xl md:items-center md:flex md:px-8   ">
                        <div>
                            <div className="flex items-center justify-between py-3 md:block">
                                <div className=' flex'>
                                    <img className=' rounded-xl w-20 md:w-32' src="image/logo4.png" alt="" />

<span className=' ml-2 border-r-2'></span>
                                    <p className='fonts2 text-sm ml-3 font-bold text-white'>10TH – 15TH JULY 2023
                                        <br />
                                        IIT – BHU CAMPUS
                                        <br />
                                        VARABASI, UTTAR PRADESH</p>
                                </div>


                                <div className="md:hidden">
                                    <button
                                        className="p-2  rounded-md outline-none "
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8"
                                                viewBox="0 0 20 20"
                                                fill="white"

                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                    className=' text-white'

                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="white"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                    className=' text-white '


                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-1 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 p-5 md:p-0">
                                    <li className="text-gray-100 font-semibold text-sm hover:text-[yellow] uppercase md:border border-white md:px-5 md:rounded-full hover:border-[yellow]">
                                        <a className=' flex' href='/' > Home</a>
                                    </li>
                                    <li className="text-gray-100 font-semibold text-sm hover:text-[yellow] uppercase "><div className="dropdown inline-block  ">
                                        <button className=" text-gray-100 hover:text-[yellow] font-semibold md:py-2  rounded inline-flex items-center">
                                            <span className="mr-1 md:hover:border-b-2 py-[1px] border-[yellow] ">ABOUT</span>
                                            {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg> */}
                                        </button>
                                        <ul className="dropdown-menu absolute hidden text-gray-700 md:pt-5 border-b-2 border-red-600 ">
                                            <li className><a className=" bg-white text-sm font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Covid-19 Information</a></li>
                                            <hr />
                                            <li className><a className="bg-white text-sm font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">About Vyapar Xpo</a></li>
                                            <hr />
                                            <li className><a className=" bg-white text-sm font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Our staff</a></li>
                                            <hr />
                                            <li className><a className=" bg-white text-sm font-medium  hover:text-red-600  border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Food & Agro Vyapar Expo</a></li>


                                        </ul>
                                    </div>


                                    </li>
                                    <li className="text-gray-600 font-semibold text-sm   ">

                                        <div className="dropdown inline-block  ">
                                            <button className=" text-gray-100 hover:text-[yellow] font-semibold md:py-2  rounded inline-flex items-center">
                                                <span className="mr-1 md:hover:border-b-2 py-[1px] border-[yellow] ">EXHIBITOR</span>
                                                {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg> */}
                                            </button>
                                            <ul className="dropdown-menu absolute hidden text-gray-700 md:pt-5 border-b-2 border-red-600 ">
                                                <li className><Link to={'/whytoExhibit'} className=" bg-white text-sm font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Why To Exhibit</Link></li>
                                                <hr />
                                                <li className><a className="bg-white text-sm font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Profile Exibitor</a></li>
                                                <hr />
                                                <li className><a className=" bg-white text-sm font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Contract Form</a></li>
                                                <hr />
                                                <li className><a className=" bg-white text-sm font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Registration Exibitor</a></li>
                                                <hr />
                                                <li className><a className=" bg-white text-sm font-medium  hover:text-red-600  border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Hotel Transportation</a></li>
                                                <hr />
                                                {/* <li className><a className=" bg-white text-sm font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#"></a></li>
                                                <hr />
                                                <li className><a className=" bg-white text-sm font-medium  hover:text-red-600  py-2 px-4 block whitespace-no-wrap" href="#"></a></li> */}
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="text-gray-100 font-semibold text-sm  ">

                                        <div className="dropdown inline-block  ">
                                            <button className=" text-gray-100 hover:text-[yellow] font-semibold md:py-2  rounded inline-flex items-center">
                                                <span className="mr-1 md:hover:border-b-2 py-[1px] border-[yellow] ">VISITOR</span>
                                                {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg> */}
                                            </button>
                                            <ul className="dropdown-menu absolute hidden text-gray-700 md:pt-5 border-b-2 border-red-600 ">
                                                <li className><a className=" bg-white text-sm font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Visitor Profile</a></li>
                                                <hr />
                                                <li className><a className="bg-white text-sm font-medium  hover:text-red-600  py-2 px-4 block whitespace-no-wrap" href="#">Visitor Registration</a></li>

                                            </ul>
                                        </div>
                                    </li>
                                    {/* <li className="text-gray-600 font-semibold text-sm hover:text-[yellow] uppercase">
                                        <div className="dropdown inline-block  ">
                                            <button className=" text-gray-100 hover:text-[yellow] font-semibold md:py-2  rounded inline-flex items-center">
                                                <span className="mr-1 md:hover:border-b-2 py-[1px] border-[yellow] ">GLIMPSES</span>
                                                
                                            </button>
                                            <ul className="dropdown-menu absolute hidden text-gray-100 md:pt-5 border-b-2 border-red-600 ">
                                                <li className><a className=" bg-white text-sm font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Media Coverage</a></li>
                                                <hr />
                                                <li className><a className="bg-white text-sm font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Gallery</a></li>
                                                <hr />
                                                <li className><a className="bg-white text-sm font-medium  hover:text-red-600  py-2 px-4 block whitespace-no-wrap" href="#">Videos</a></li>

                                            </ul>
                                        </div>
                                    </li> */}
                                    <li className="text-gray-100 font-semibold text-sm hover:text-[yellow] uppercase">
                                        <a href='/' className='md:hover:border-b-2 py-[1px] border-[yellow] ' >BOOK YOUR STAND</a>
                                    </li>
                                    <li className="text-gray-100 font-semibold text-sm hover:text-[yellow] uppercase">
                                        <a href='/' className='md:hover:border-b-2 py-[1px] border-[yellow] '>GET YOUR PASS</a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Navbar


