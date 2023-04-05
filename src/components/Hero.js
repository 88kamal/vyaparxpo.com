import React from 'react'
import '../styleSheet/Hero.css'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <section className="relative mt-[88px] h-screen flex flex-col md:items-start  justify-center    text-white py-0 px-3">
            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src="https://res.cloudinary.com/dkjgzcnzu/video/upload/v1680684013/My_Video4_ssvcoz.mp4" type="video/mp4" autoPlay  muted loop />
            </div>

            <div className="video-content space-y-2 mt-5 md:mt-40 md:ml-[40px]  ">
                <div className="bg-gray-300 w-[231px] md:w-[433px] ">
                    <h1 className="md:text-6xl text-[32px] font-bold  fonts2  bgh1" style={{ transform: 'translate(0px, 0%) opacity: 1' }}>1ST NATIONAL</h1>
                </div>
                <div className="bg-gray-300 w-[363px] md:w-[681px]">
                    <h1 className="md:text-6xl text-[32px] font-bold mb-5 fonts2 bgh1" style={{ transform: 'translate(0px, 0%) opacity: 1' }}> FOOD & AGRICULTURE </h1>
                </div>
                <div className="bg-gray-300 w-[306px] md:w-[574px]">
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
                    <h3 className="font-bold text-xl md:text-2xl mb-5 fonts1 uppercase ">JOIN THE LEADING BRAND AND MANUFACTURER OF FOOD & Agriculture</h3>
                    <h2 className=' text-lg md:text-lg mb-5 fonts1 font-bold '>16-17-18-19-20 OCTOBER, 2023
                        AGRICULTURE GROUND (BHU CAMPUS),
                        VARANASI</h2>
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
                <Link to={'/exhibitorregistration'}>
                        <button type="button" class="text-white bg-[#ff0000] hover:bg-purple-800font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 fonts2 ">EXHIBITOR REGISTRATION</button>
                    </Link>
                    <Link to={'/visitorregistration'}>
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