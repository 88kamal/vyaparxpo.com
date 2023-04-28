import React from 'react'
import { Link } from 'react-router-dom'


function RegBox() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container md:px-0 px-5 py-5 mx-auto">

                <div className="flex flex-wrap ">
                    <div className="p-2 sm:w-1/5 w-full">
                        <Link to={'/exhibitorregistration'}>
                            <div className="bg-gradient-to-br  hover:shadow-xl hover:shadow-rose-300 bg-[#ff0000] text-white  flex p-8  md:p-8  lg:p-8   justify-center rounded-xl ">
                                <span className="title-font font-medium text-center text-lg sm:text-xs md:text-[15px]  lg:text-lg  fonts2">REGISTRATION <br />
                                    FOR EXHIBITOR</span>
                            </div>
                        </Link>

                    </div>
                    <div className="p-2 sm:w-1/5 w-full">
                        <Link to={'/visitorregistration'}>
                            <div className="bg-gradient-to-br  hover:shadow-xl hover:shadow-rose-300 bg-[#ff0000] text-white  flex p-8  md:p-8  md:py-[36px] lg:p-8 justify-center rounded-xl">

                                <span className="title-font font-medium text-center text-lg sm:text-sm md:text-[15px] lg:text-lg fonts2">REGISTRATION <br />
                                    FOR VISITOR</span>
                            </div>
                        </Link>

                    </div>
                    <div className="p-2 sm:w-1/5 w-full">
                        <Link to={'/registrationforsponsorship'}>
                             <div className="bg-gradient-to-br  hover:shadow-xl hover:shadow-rose-300 bg-[#ff0000] text-white  flex p-8  md:p-8  md:py-[26px] lg:p-8 justify-center rounded-xl">

                            <span className="title-font font-medium text-center text-lg sm:text-sm md:text-[15px] lg:text-lg fonts2">REGISTRATION <br />
                                FOR SPONSORSHIP</span>
                        </div>
                        </Link>
                       
                    </div>
                    <div className="p-2 sm:w-1/5 w-full">
                        <a href='pdf/Vyapar Expo Bkup.pdf'>
                          <div className="bg-gradient-to-br  hover:shadow-xl hover:shadow-rose-300 bg-[#ff0000] text-white  flex p-8  md:p-8  md:py-[26px]  lg:p-8 justify-center rounded-xl">

                            <span className="title-font font-medium text-center text-lg sm:text-sm md:text-[15px] lg:text-lg  fonts2">E-BROCHURE <br />
                                DOWNLOAD</span>
                        </div>   
                        </a>

                       
                    </div>
                    <div className="p-2 sm:w-1/5 w-full">
                        <a href='pdf/01.OPTIONS0_sign (2).pdf'>
                             <div className="bg-gradient-to-br hover:shadow-xl hover:shadow-rose-300 bg-[#ff0000] text-white  flex p-[45.5px]  md:p-8  md:py-[35px]  lg:p-8 lg:py-[45px]  justify-center rounded-xl">

                            <span className="title-font font-medium text-center text-lg sm:text-sm md:text-[15px] lg:text-lg  fonts2"> FLOOR PLAN</span>
                        </div>
                        </a>
                       
                    </div>

                </div>

            </div>
        </section>
    )
}

export default RegBox