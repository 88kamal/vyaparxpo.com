

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
                <div className=' overlayNav bg-gray-100 shadow-lg '>
                    <div className="justify-between px-2  md:items-center md:flex    ">
                        <div>
                            <div className="flex items-center justify-between py-3 md:block">
                                <div className=' flex'>
                                    <Link to={'/'}>
                                        <img className=' rounded-xl w-28 md:w-[4.4em] md:h-[4.4em]' src="image/logot.png" alt="" />
                                    </Link>

                                    <span className=' ml-2 border-r-2 border-gray-300'></span>
                                    <p className='fonts2 text-xs ml-3 mt-2 font-bold text-black uppercase'>
                                        16-17-18-19-20 OCTOBER, 2023 <br /> AGRICULTURE GROUND (BHU CAMPUS), <br /> VARANASI Uttarpardesh</p>
                                        <span className=' ml-2 border-r-2 border-gray-300'></span>
                                        <img className=' image2  w-16 ml-3' src="footer/dsft.png" alt="" />
                                        <div className=" flex image1 ">
                                        <img className=' w-5 h-5 md:h-16 md:w-16 lg:w-16 ml-3' src="footer/dsft.png" alt="" />
                                        <img className=' w-5 h-5 md:h-16 md:w-16 lg:w-16 ml-3' src="footer/ms.png" alt="" />
                                        <img className=' w-5 h-5 md:h-16 md:w-16 lg:w-16 ml-3' src="footer/g20.jpeg" alt="" />
                                        <img className=' w-5 h-5 md:h-16 md:w-16 lg:w-16 ml-3' src="footer/m.png" alt="" />
                                        <img className=' w-5 h-5 md:h-16 md:w-16 lg:w-16 ml-3' src="footer/a.png" alt="" />
                                        </div>
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
                                                fill="black"

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
                                                stroke="black"
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
                                <ul className="items-center bg-black md:bg-transparent justify-center space-y-4 md:flex md:space-x-2 md:space-y-0 p-5 md:p-0">
                                    <li className="text-white md:text-gray-900 font-semibold md:text-[11px] hover:text-[#ff0000] uppercase  md:px-5 md:rounded-full hover:border-[#ff0000]">
                                        <a className=' flex' href='/' > Home</a>
                                    </li>
                                    <li className="text-white md:text-gray-900 font-semibold md:text-[11px] hover:text-[#ff0000] uppercase "><div className="dropdown inline-block  ">
                                        <button className=" text-white md:text-gray-900 hover:text-[#ff0000] font-semibold md:py-2  rounded inline-flex items-center">
                                            <span className="mr-1 md:hover:border-b-2 py-[1px] border-[#ff0000] ">ABOUT</span>

                                        </button>
                                        <ul className="dropdown-menu absolute hidden text-gray-700 md:pt-5 border-b-2 border-red-600 ">
                                            <li className><Link to={'/aboutvayparexpo'} className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">About Vyapar Expo 2023</Link></li>
                                            <hr />
                                            <li className><Link to={'/aboutorganizer'} className="bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap ">About Oraganiser</Link></li>
                                            <hr />
                                            {/* <li className><a className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Vyapar Team</a></li> */}
                                            {/* <hr />
                                            <li className><a className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white  border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Food & Agro Vyapar Expo</a></li> */}


                                        </ul>
                                    </div>


                                    </li>
                                    <li className="text-white md:text-gray-900 font-semibold md:text-[11px] hover:text-[#ff0000] uppercase   md:rounded-full">
                                        <Link className=' flex' to={'/stallinformation'} > STALL INFORMATION</Link>
                                    </li> <li className="text-gray-600 font-semibold md:text-[11px]   ">

                                        <div className="dropdown inline-block  ">
                                            <button className=" text-white md:text-gray-900 hover:text-[#ff0000] font-semibold md:py-2  rounded inline-flex items-center">
                                                <span className="mr-1 md:hover:border-b-2 py-[1px] border-[#ff0000] ">EXHIBITOR</span>
                                                {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg> */}
                                            </button>
                                            <ul className="dropdown-menu absolute hidden text-gray-700 md:pt-5 border-b-2 border-red-600 ">
                                                <li className><Link to={'/whytoExhibit'} className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white  hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap uppercase" href="#">Why To Exhibit</Link></li>
                                                <hr />
                                                <li className><Link to={'/exhibitorprofile'} className="bg-[#ff0000] md:text-[11px] font-medium  hover:textyellow-300  hover:border-b border-yellow-300 text-white py-2 px-4 block whitespace-no-wrap" href="#">EXHIBITOR PROFILE</Link></li>
                                                <hr />
                                                <li className><Link to={'/exhibitorregistration'} className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-red-yellow 3ov text-white er:border-b border-red-600 py-2 px-4 block whitespace-no-wrap uppercase" >Registration Exibitor</Link></li>
                                                <hr />
                                                {/* <li className><a className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap uppercase" href="#">ABOUT STALL</a></li> */}

                                                <hr />
                                                <li className><a className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white  border-red-600 py-2 px-4 block whitespace-no-wrap uppercase" href="#">HOTEL & TRAVEL</a></li>
                                                <hr />
                                                {/* <li className><a className=" bg-white md:text-[11px] font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#"></a></li>
                                                <hr />
                                                <li className><a className=" bg-white md:text-[11px] font-medium  hover:text-red-600  py-2 px-4 block whitespace-no-wrap" href="#"></a></li> */}
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="text-white md:text-gray-900 font-semibold md:text-[11px]  ">

                                        <div className="dropdown inline-block  ">
                                            <button className=" text-white md:text-gray-900 hover:text-[#ff0000] font-semibold md:py-2  rounded inline-flex items-center">
                                                <span className="mr-1 md:hover:border-b-2 py-[1px] border-[#ff0000] ">VISITOR</span>

                                            </button>
                                            <ul className="dropdown-menu absolute hidden text-gray-700 md:pt-5 border-b-2 border-red-600 ">
                                                <li className><Link className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" to={'/whyvisit'}>WHY VISIT?</Link></li>
                                                <hr />
                                                <li className><Link to={'/profilevisitor'} className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap uppercase" href="#">Visitor Profile</Link></li>
                                                <hr />
                                                <li className><Link to={'/visitorregistration'} className="bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white  py-2 px-4 block whitespace-no-wrap uppercase" href="#">Visitor Registration</Link></li>
                                                <hr />
                                                <li className><Link className="bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white  py-2 px-4 block whitespace-no-wrap" href="#">HOTEL AND TRAVEL</Link></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="text-white md:text-gray-900 font-semibold md:text-[11px] hover:text-[#ff0000] uppercase   md:rounded-full">
                                        <Link className=' flex' to={'/visitor'} > VISITOR PASS</Link>
                                    </li>
                                    <li className="text-white md:text-gray-900 font-semibold md:text-[11px]  ">

                                        <div className="dropdown inline-block  ">
                                            <button className=" text-white md:text-gray-900 hover:text-[#ff0000] font-semibold md:py-2  rounded inline-flex items-center">
                                                <span className="mr-1 md:hover:border-b-2 py-[1px] border-[#ff0000] ">DSFT</span>

                                            </button>
                                            <ul className="dropdown-menu absolute hidden text-gray-700 md:pt-5 border-b-2 border-red-600 ">
                                                <li className><Link t  className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" to={'/dsft'}>DSFT-BHU</Link></li>
                                                <hr />
                                                <li className><Link to={'/studentregistration'} className=" bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap uppercase">FOR STUDENT REGEISTARTION</Link></li>
                                                <hr />
                                                {/* <li className><Link to={'/visitorregistration'} className="bg-[#ff0000] md:text-[11px] font-medium  hover:text-yellow-300 text-white  py-2 px-4 block whitespace-no-wrap uppercase" href="#">Visitor Registration</Link></li> */}
                                            </ul>
                                        </div>
                                    </li>
                                    {/* <li className="text-white md:text-gray-900 font-semibold md:text-[11px] hover:text-[#ff0000] uppercase   md:rounded-full">
                                        <Link className=' flex' to={'/studentregistration'} >DSFT-BHU</Link>
                                    </li> */}
                                    <li className="text-white md:text-gray-900 font-semibold md:text-[11px] hover:text-[#ff0000] uppercase   md:rounded-full">
                                        <Link className=' flex' to={'/gallery'} >Gallery</Link>
                                    </li>
                                    <li className="text-white md:text-gray-900 font-semibold md:text-[11px] hover:text-[#ff0000] uppercase   md:rounded-full">
                                        <Link className=' flex' to={'/contact'} >Contact Us</Link>
                                    </li>

                                    {/* <li className="text-gray-600 font-semibold md:text-[11px] hover:text-[#ff0000] uppercase">
                                        <div className="dropdown inline-block  ">
                                            <button className=" text-white md:text-gray-900 hover:text-[#ff0000] font-semibold md:py-2  rounded inline-flex items-center">
                                                <span className="mr-1 md:hover:border-b-2 py-[1px] border-[#ff0000] ">GLIMPSES</span>
                                                
                                            </button>
                                            <ul className="dropdown-menu absolute hidden text-white md:text-gray-900 md:pt-5 border-b-2 border-red-600 ">
                                                <li className><a className=" bg-white md:text-[11px] font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Media Coverage</a></li>
                                                <hr />
                                                <li className><a className="bg-white md:text-[11px] font-medium  hover:text-red-600 hover:border-b border-red-600 py-2 px-4 block whitespace-no-wrap" href="#">Gallery</a></li>
                                                <hr />
                                                <li className><a className="bg-white md:text-[11px] font-medium  hover:text-red-600  py-2 px-4 block whitespace-no-wrap" href="#">Videos</a></li>

                                            </ul>
                                        </div>
                                    </li> */}
                                    {/* <Link to={'/registrationfrom'} ><button type="button" class="text-white bg-[#ff0000] hover:bg-purple-800font-medium rounded-full md:text-[11px] px-5 py-2.5 text-center mr-2 fonts2 ">BOOK YOUR STAND</button></Link> */}
                                    {/* <li className="text-white md:text-gray-900 font-semibold md:text-[11px] hover:text-[#ff0000] uppercase">
                                        <Link to={'/registrationfrom'} className='md:hover:border-b-2 py-[1px] border-[#ff0000] '>GET YOUR PASS</Link>
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


