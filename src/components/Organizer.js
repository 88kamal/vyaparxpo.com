import React from 'react'

function Organizer() {
    return (
        <div>
            <section className="bg-white container px-4 mx-auto  md:mb-20">
                <span className='text-indigo-600 font-semibold'>LITTLE ABOUT</span>
                <h1 className=' container mx-auto  font-bold text-2xl md:text-3xl fonts2 mb-10'>ABOUT <span className=' text-[#ff0000]   '>ORGANISER</span></h1>
                <section className="text-gray-600 body-font">
                    <div className="  md:flex md:gap-2 md:justify-between md:items-center">
                        <div className="left mb-5 md:m-0">
                            {/* <div className="lg:max-w-[100%] lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src="image/kunal.jpg" />
                            </div> */}
                            <div className="lg:max-w-[9800em] lg:w-full md:w-1/2 w-full">
                                <img className="object-cover object-center rounded-xl mb-2" alt="hero" src="image/kunal.jpg" />
                                <h1 className=' text-center fonts2 font-bold'>FOUNDER
                                    VYAPAR...INDIA</h1>
                            </div>
                        </div>
                        <div className="mid mb-5 md:m-0">
                            {/* <h1 className=' container mx-auto font-bold text-2xl md:text-3xl fonts2 mb-2'>Content</h1> */}
                            <p className=' text-justify w-full md:w-[90%] fonts4'>Food & Agriculture Vyapar Expo 2023 aims to gather India leading manufacturer , brand players and stakeholders from the India agri-food industry to share best practices, showcase the latest technologies, to tap business opportunities, and to collaborate towards greater security and sustainability in India</p>
                        </div>
                        <div className="right mb-5 md:m-0">
                            {/* <div className="lg:max-w-[100%] lg:w-full md:w-1/2 w-full">
                                <video className="min-w-full min-h-full rounded-xl  object-cover" src="video/agriculture profile video.mp4" type="video/mp4" muted loop />
                            </div> */}
                            <div className="flex flex-wrap md:-m-14">
                                <div className="p-2 md:w-1/2 w-1/2">
                                    <div className=" bg-yellow-400 py-5 px-5 rounded-xl">
                                        <p className="leading-relaxed fonts4 font-bold text-black   text-center ">10<sup>TH</sup>-15<sup>TH</sup> July <br /> 2023</p>
                                        <br />
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/2 w-1/2">
                                    <div className=" bg-gray-200 py-8 md:py-5 px-5 rounded-xl">
                                        <p className="leading-relaxed text-center fonts4 font-bold text-black">IIT-BHU CAMPUS VARANSI </p>
                                        
                                    </div>
                                </div>
                                <div className="p-2 md:w-1/2 w-1/2">
                                    <div className=" bg-gray-200 py-5 px-5 rounded-xl">
                                        <p className="leading-relaxed text-center fonts4 font-bold text-black">25000+ VISITOR</p>
                                        <br />
                                    </div>
                                </div>
                                 <div className="p-2 md:w-1/2 w-1/2">
                                    <div className="h-full bg-yellow-400 py-5 px-5 rounded-xl">
                                        <p className="leading-relaxed text-center fonts4 font-bold text-black">350+ EXHIBITOR</p>
                                        <br />
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