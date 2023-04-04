import React from 'react'

function Organizer() {
    return (
        <div>
            <section className="bg-white container px-4 mx-auto  md:mb-20">
                <span className='text-indigo-600 font-semibold'>LITTLE ABOUT</span>
                <h1 className=' container mx-auto  font-bold text-2xl md:text-3xl fonts2 mb-10'>ABOUT <span className=' text-[#ff0000]   '>ORGANISER</span></h1>
                <section className="text-gray-600 body-font">
                    <div className="  md:flex md:gap-2 md:justify-between md:items-center">
                        {/* <div className="left mb-5 md:m-0">
                           
                            <div className="lg:max-w-[9800em] lg:w-full md:w-1/2 w-full">
                                <img className="object-cover object-center rounded-xl mb-2" alt="hero" src="image/kunal.jpg" />
                                <h1 className=' text-center fonts2 font-bold'>FOUNDER
                                    VYAPAR...INDIA</h1>
                            </div>
                        </div>
                        <div className="mid mb-5 md:m-0">
                           
                            <p className=' text-justify w-full md:w-[90%] fonts4'>Food & Agriculture Vyapar Expo 2023 aims to gather India leading manufacturer , brand players and stakeholders from the India agri-food industry to share best practices, showcase the latest technologies, to tap business opportunities, and to collaborate towards greater security and sustainability in India</p>
                        </div> */}
                        <section className="text-gray-600 body-font">
                    <div className="container px-5 py-2 mx-auto flex flex-col">
                        <div className="lg:w-full mx-auto">
                            <div className="flex flex-col sm:flex-row mt-10">
                                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                    <div className=" rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                        <img src="image/kunal.jpg" alt="" />
                                    </div>
                                    <div className="flex flex-col items-center text-center justify-center">
                                        <h2 className="font-medium title-font mt-4 text-gray-900 text-lg"> KUNAL MISHRA <br />  FOUNDER <br />
                                            VYAPAR...INDIA </h2>
                                        <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />

                                    </div>
                                </div>
                                <div className="sm:w-1/2 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className=" text-lg mb-4 text-justify bg-slate-50 p-3 rounded-xl border italic">Food & Agriculture Vyapar  Expo 2023  aims to gather India  leading manufacturer , brand  players and stakeholders from the India  agri-food industry to share best practices, showcase the latest technologies, to tap business opportunities, and to collaborate towards greater security and sustainability in  India
                                    </p>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                        <div className="right mb-5 md:m-0">
                            {/* <div className="lg:max-w-[100%] lg:w-full md:w-1/2 w-full">
                                <video className="min-w-full min-h-full rounded-xl  object-cover" src="video/agriculture profile video.mp4" type="video/mp4" muted loop />
                            </div> */}
                            <div className="flex flex-wrap md:-m-14">
                                <div className="p-2 md:w-1/2 w-1/2">
                                    <div className=" bg-yellow-400 py-5 md:py-8 px-5 rounded-xl">
                                        <p className="leading-relaxed fonts4 font-bold text-black text-sm md:text-lg   text-center ">16-17-18-19-20 OCTOBER, 2023</p>
                                        {/* <br /> */}
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/2 w-1/2">
                                    <div className=" bg-gray-200 py-[9px] md:py-5 px-5 rounded-xl">
                                        <p className="leading-relaxed text-center text-sm md:text-lg    fonts4 font-bold text-black">AGRICULTURE GROUND (BHU CAMPUS),
VARANASI</p>
                                        
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/2 w-1/2">
                                    <div className=" bg-gray-200 py-5 px-5 rounded-xl">
                                        <p className="leading-relaxed text-center text-sm md:text-lg    fonts4 font-bold text-black">25000+ VISITOR</p>
                                        {/* <br /> */}
                                    </div>
                                </div>
                                 <div className="p-2 md:w-1/2 w-1/2">
                                    <div className="h-full bg-yellow-400 py-5 px-5 rounded-xl">
                                        <p className="leading-relaxed text-center text-sm md:text-lg    fonts4 font-bold text-black">300+ EXHIBITOR</p>
                                        {/* <br /> */}
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Organizer