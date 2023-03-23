

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

            <nav className=" md:bg-transparent  fixed top-0 w-full z-30" style={{
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
                                        VARANASI, UTTAR PRADESH</p>
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
                                <ul className="items-center bg-black md:bg-transparent justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 p-5 md:p-0">
                                    <li className="text-gray-100 font-semibold text-sm hover:text-[yellow] uppercase md:border border-white md:px-5 md:rounded-full hover:border-[yellow]">
                                        <a className=' flex' href='/' > Home</a>
                                    </li>
                                    <li className="text-gray-100 font-semibold text-sm hover:text-[yellow] uppercase "><div className="dropdown inline-block  ">
                                        <button className=" text-gray-100 hover:text-[yellow] font-semibold md:py-2  rounded inline-flex items-center">
                                            <span className="mr-1 md:hover:border-b-2 py-[1px] border-[yellow] ">ABOUT</span>
                                            {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg> */}
                                        </button>
                                        <ul className="dropdown-menu absolute hidden text-gray-700 md:pt-5 border-b-2 border-red-600 ">
                                            <li className><a className=" bg-[#ff0000] text-sm font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">About Vyapar Expo 2023</a></li>
                                            <hr />
                                            <li className><Link to={'/aboutorganizer'} className="bg-[#ff0000] text-sm font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap ">About Oraganiser</Link></li>
                                            <hr />
                                            <li className><a className=" bg-[#ff0000] text-sm font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Vyapar Team</a></li>
                                            {/* <hr />
                                            <li className><a className=" bg-[#ff0000] text-sm font-medium  hover:text-yellow-300 text-white  border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Food & Agro Vyapar Expo</a></li> */}


                                        </ul>
                                    </div>


                                    </li>
                                    <li className="text-gray-100 font-semibold text-sm hover:text-[yellow] uppercase   md:rounded-full">
                                        <Link className=' flex' to={'/stallinformation'} > STALL INFO</Link>
                                    </li>
                                    <li className="text-gray-100 font-semibold text-sm hover:text-[yellow] uppercase   md:rounded-full">
                                        <a className=' flex' href='/' > VISITOR PASS</a>
                                    </li>
                                    <li className="text-gray-100 font-semibold text-sm hover:text-[yellow] uppercase   md:rounded-full">
                                        <a className=' flex' href='/' > BHU STUDENT REGISTRATION</a>
                                    </li>
                                    <li className="text-gray-600 font-semibold text-sm   ">

                                        <div className="dropdown inline-block  ">
                                            <button className=" text-gray-100 hover:text-[yellow] font-semibold md:py-2  rounded inline-flex items-center">
                                                <span className="mr-1 md:hover:border-b-2 py-[1px] border-[yellow] ">EXHIBITOR</span>
                                                {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg> */}
                                            </button>
                                            <ul className="dropdown-menu absolute hidden text-gray-700 md:pt-5 border-b-2 border-red-600 ">
                                                <li className><Link to={'/whytoExhibit'} className=" bg-[#ff0000] text-sm font-medium  hover:text-yellow-300 text-white  hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap uppercase" href="#">Why To Exhibit</Link></li>
                                                <hr />
                                                <li className><Link to={'/exhibitorprofile'} className="bg-[#ff0000] text-sm font-medium  hover:textyellow-300  hover:border-b border-yellow-300 text-white py-2 px-4 block whitespace-no-wrap" href="#">EXHIBITOR PROFILE</Link></li>
                                                <hr />
                                                <li className><Link to={'/registrationfrom'} className=" bg-[#ff0000] text-sm font-medium  hover:text-red-yellow 3ov text-white er:border-b border-red-600 py-2 px-4 block whitespace-no-wrap uppercase" >Registration Exibitor</Link></li>
                                                <hr />
                                                <li className><a className=" bg-[#ff0000] text-sm font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap uppercase" href="#">ABOUT STALL</a></li>
                                           
                                                <hr />
                                                <li className><a className=" bg-[#ff0000] text-sm font-medium  hover:text-yellow-300 text-white  border-red-600 py-2 px-4 block whitespace-no-wrap uppercase" href="#">HOTEL & TRAVEL</a></li>
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
                                                <li className><Link className=" bg-[#ff0000] text-sm font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" to={'/whyvisit'}>WHY VISIT?</Link></li>
                                                <hr />
                                                <li className><Link to={'/profilevisitor'} className=" bg-[#ff0000] text-sm font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap uppercase" href="#">Visitor Profile</Link></li>
                                                <hr />
                                                <li className><Link to={'/registrationfrom'} className="bg-[#ff0000] text-sm font-medium  hover:text-yellow-300 text-white  py-2 px-4 block whitespace-no-wrap uppercase" href="#">Visitor Registration</Link></li>
                                                <hr />
                                                <li className><Link className="bg-[#ff0000] text-sm font-medium  hover:text-yellow-300 text-white  py-2 px-4 block whitespace-no-wrap" href="#">HOTEL AND TRAVEL</Link></li>
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
                                    {/* <Link to={'/registrationfrom'} ><button type="button" class="text-white bg-[#ff0000] hover:bg-purple-800font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 fonts2 ">BOOK YOUR STAND</button></Link> */}
                                    {/* <li className="text-gray-100 font-semibold text-sm hover:text-[yellow] uppercase">
                                        <Link to={'/registrationfrom'} className='md:hover:border-b-2 py-[1px] border-[yellow] '>GET YOUR PASS</Link>
                                    </li> */}

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


