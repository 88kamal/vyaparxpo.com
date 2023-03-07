import React from 'react'

function Message() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                    <div className="lg:max-w-[32.7em] lg:w-full md:w-1/2 w-5/6">
                        <h1 className=' text-center font-bold text-2xl md:text-3xl'>MESSAGE FROM  <span className=" text-[#FF0000]">ORGANIZER</span></h1>
                        <div className=' flex justify-center md:mt-[-0.5em] mt-[-0.4em] z-10 '>  <img className='md:w-[22em] w-[10em]' src="image/des.png" alt="" /></div>
                        <img className="object-cover object-center " alt="hero" src="https://dummyimage.com/720x600" />
                        <div className=' bg-red-700'>
                            <h1 className=' text-white font-medium text-center text-2xl'>Mr. Kunal Mishra</h1>
                        </div>
                    </div>
                </div>

                <div className="lg:max-w-[34.4em] lg:w-full md:w-1/2 w-5/6">
                    <h1 className=' text-center font-bold text-2xl md:text-3xl'><span className=" text-[#FF0000]">PRODUCT </span>CATEGORY</h1>
                    <div className=' flex justify-center md:mt-[-0.5em] mt-[-0.4em] z-10 '>  <img className='md:w-[15em] w-[15em]' src="image/des.png" alt="" /></div>
                    <img className="object-cover object-center " alt="hero" src="https://dummyimage.com/720x600" />

                </div>
            </div>
        </section>
    )
}

export default Message