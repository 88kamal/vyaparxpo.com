import React from 'react'
import '../styleSheet/Hero.css'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <section className="relative h-screen flex flex-col md:items-start  justify-center    text-white py-0 px-3">
            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                {/* <video className="min-w-full min-h-full absolute object-cover" src="https://firebasestorage.googleapis.com/v0/b/videos-5c17d.appspot.com/o/My%20Video%203.mp4?alt=media&token=43cde305-bb2a-4bd9-aa45-582c7d67be3b" type="video/mp4" autoPlay  muted loop /> */}
            </div>

            <div className="video-content space-y-2 mt-24 md:mt-40 md:ml-[108px]  ">
                <div className="bg-white w-[231px] md:w-[433px] ">
                    <h1 className="md:text-6xl text-[32px] font-bold  fonts2  bgh1" style={{ transform: 'translate(0px, 0%) opacity: 1' }}>1ST NATIONAL</h1>
                </div>
                <div className="bg-white w-[363px] md:w-[681px]">
                    <h1 className="md:text-6xl text-[32px] font-bold mb-5 fonts2 bgh1" style={{ transform: 'translate(0px, 0%) opacity: 1' }}> FOOD & AGRICULTURE </h1>
                </div>
                <div className="bg-white w-[306px] md:w-[574px]">
                    <h1 className="md:text-6xl text-[32px] font-bold mb-5 fonts2 bgh1" style={{ transform: 'translate(0px, 0%) opacity: 1' }}>VYAPAR EXPO 2023</h1>
                </div>

                {/* <div className=" absolute left-[340px] top-[385px]    md:left-[87.1em] md:top-[17em] bg-[#ff0000] p-2 ">
                    <div className="icon my-3">
                        <IoLogoWhatsapp color='white' size={30} />
                    </div>
                    <div className="icon my-3">
                        <BsFacebook color='white' size={30} />
                    </div>
                    <div className="icon my-3">
                        <AiFillInstagram color='white' size={30} />
                    </div>
                </div> */}

                <div className=" ">
                    <h3 className="font-bold text-xl md:text-2xl mb-5 fonts1 ">JOIN THE LEADING BRAND AND MANUFACTURER OF FOOD & AGRICLTURE</h3>
                    <h2 className=' text-lg md:text-lg mb-5 fonts1 font-bold '>10TH – 15TH JULY 2023 | IIT – BHU CAMPUS, VARANASI</h2>
                </div>
                <div className=" flex space-x-2  ">
                    <div className="icon">
                        <IoLogoWhatsapp color='white' size={30} />
                    </div>
                    <div className="icon">
                        <BsFacebook color='white' size={30} />
                    </div>
                    <div className="icon">
                        <AiFillInstagram color='white' size={30} />
                    </div>
                </div>
                <div className=' py-3 '>
                    <Link to={'/registrationfrom'}>
                        <button type="button" class="text-white bg-[#ff0000] hover:bg-purple-800font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 fonts2 ">VISITOR REGISTRATION</button>
                    </Link>

                </div>

                {/* <div className=" flex space-x-2 ">
                    <div className="icon">
                        <IoLogoWhatsapp color='white' size={30} />
                    </div>
                    <div className="icon">
                        <BsFacebook color='white' size={30} />
                    </div>
                    <div className="icon">
                        <AiFillInstagram color='white' size={30} />
                    </div>
                </div> */}

                <div>
                    {/* <div className=' absolute left-[60em] p-2   bg-black'>
              <ul className=' '>
                <li className=' text-red-500'>A</li>
                <li className=' text-red-500'>A</li>
                <li className=' text-red-500'>A</li>
                <li className=' text-red-500'>A</li>
                <li className=' text-red-500'>A</li>
              </ul>
                
            </div> */}
                </div>
            </div>
            =
        </section>
    )
}

export default Hero