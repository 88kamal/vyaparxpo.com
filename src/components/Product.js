import React from 'react'

function Product() {
    return (
        <div>
            <section className="bg-white container px-4 mx-auto mb-10 md:mb-20">
                <h1 className=' container mx-auto  font-bold text-2xl md:text-3xl fonts2 mb-5'>VYAPAR... <span className=' text-[#ff0000]  '>INDIA 2023</span></h1>
                <section className="text-gray-600 body-font">
                    <div className=" md:flex md:gap-3 md:justify-between md:items-center">
                        <div className="left mb-5 md:m-0">
                            <div className="lg:max-w-[100%]  lg:w-full md:w-full w-full">
                                <video className="min-w-full min-h-full rounded-xl  object-cover" src="https://res.cloudinary.com/dkjgzcnzu/video/upload/v1680684071/My_Video1_sxwbks.mp4" type="video/mp4" autoPlay muted loop />
                            </div>
                        </div>
                        <div className="mid mb-5 md:m-0">
                            <h1 className=' container  mx-auto font-bold text-2xl md:text-3xl fonts2 mb-2'>Content</h1>
                            <p className=' text-justify fonts4'>Starting operation in the year 2023, VYAPAR...INDIA is a leading business exhibition company which is conducting B2B, B2C , D2C exhibitions , conference franchise meet with a competitive edge across Indian market .
<br />
                                Vyapar Expo 2023 is the sole event in the globe where one can find all solutions related to the Food & Agriculture industry. From Brand & technologies of automation to packaging machinery to packaging materials, from raw materials for all kinds of ingredients to knowledge of ideas and from relations to business deals, Vyapar Expo 2023 Varanasi is the only place where entire industry comes under one roof.
<br />
                                Vyapar Expo 2023 Varanasi is expected to host more than 300+ Exhibitors and approximately 20,000+ visitors and delegates from all over India .Food and Agriculture segment is at the nascent stage of branding and its true potential is still to be explored.
                            </p>
                        </div>
                        <div className="right mb-5 md:m-0">
                            <div className="lg:max-w-[100%] lg:w-full md:w-full w-full">
                                <video className="min-w-full min-h-full rounded-xl  object-cover" src="https://res.cloudinary.com/dkjgzcnzu/video/upload/v1680684042/My_Video2_n9ammy.mp4" type="video/mp4" autoPlay muted loop />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Product