import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Map from '../components/Map'
import Navbar2 from '../components/Navbar2'
import ScrollBtn from '../ScrollBtn/ScrollBtn'

function Stallinformation() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Layout>
           
            <div className="main container mx-auto px-4 mt-28">
                <h1 className=' text-3xl font-bold text-center fonts2 mb-2'>VYAPR <span className=' text-[#ff0000]'>EXPO 2023
                    STAND INFORMATION GUIDE </span>

                </h1>
                <h3 className=' text-xl font-bold text-center mb-3 fonts2'>1ST NATIONAL
                    FOOD & <span className='text-[#ff0000]'>AGRICULTURE VYAPAR EXPO 2023
                        <br />
                        16-17-18-19-20 OCTOBER, 2023 <br /> AGRICULTURE GROUND (BHU CAMPUS), <br /> VARANASI Uttarpardesh </span>
                </h3>
            </div>

            <section className="text-black body-font container mx-auto">
                <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src="image/Pasted Graphic.png" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium fonts2 text-gray-900">STALL SPECIFICATION

                        </h1>
                        <p className=" fonts text-lg "> <u>Rs.6500/-Per Sqm + GST 18% </u> <br />
                        OTHER UTILITIES <br />
                            <b> <u>BOOTH ACCESSORIES:</u></b> One Table, <br /> Two Chairs, 3 Spot Light, Dust Bin, <br /> Fascia, Carpet, Electric Point , Brochure stand , <br /> Entry on catalogue  listing & entry pass <br />
                           
                        </p>

                    </div>
                </div>
            </section>
           <div className=" container mx-auto px-4">
           <ul className=' list-disc mx-5 mb-5'>
              <li className=' text-lg fonts4'>Exhibitor should pay additional charges for any other utilities  
              </li>
              <li className=' text-lg fonts4'>Flex branding , Digital display , Air compressor & Electricity 
              </li>
            </ul>
            <h1 className=' text-xl font-bold mb-8'>Space is available in 6 Sq.Mtr , 9 Sq.Mtr , 12 & 15 Sq.Mtr and above as per requirements 
</h1>
           </div>
           <ScrollBtn/>
           
        </Layout>
    )
}

export default Stallinformation