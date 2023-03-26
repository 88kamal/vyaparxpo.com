import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io'


function Footer() {
    return (
        <div>
            <footer className=" bg-red-300">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img className=' rounded-xl w-20 md:w-28' src="image/logot.png" alt="" />

                        </a>
                        <p className="mt-2 text-sm text-gray-900">Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            {/* <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2> */}
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Home</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">About</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Exhibitor</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Visitor</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Book your Stand</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Get Your Pass</a>
                                </li>
                            </nav>
                        </div>
                      
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Home</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">About</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Exhibitor</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Visitor</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Book your Stand</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Get Your Pass</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Home</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">About</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Exhibitor</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Visitor</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Book your Stand</a>
                                </li>
                                <li>
                                    <a className="text-gray-900 hover:text-green-500 cursor-pointer">Get Your Pass</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-red-800">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-900 text-sm text-center sm:text-left">© 2023 <span className='fonts2'>VyaparXpo</span>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                                {/* #4267B2 */}
                            </a>
                            <a className="ml-3 text-gray-500">
                                <IoLogoWhatsapp size={20} />
                            </a>
                            <a className="ml-3 text-gray-500">
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