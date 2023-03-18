import React from 'react'
import '../styleSheet/Hero.css'
import { IoLogoWhatsapp } from 'react-icons/io'
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
            <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src="https://firebasestorage.googleapis.com/v0/b/videos-5c17d.appspot.com/o/My%20Video%203.mp4?alt=media&token=43cde305-bb2a-4bd9-aa45-582c7d67be3b" type="video/mp4" autoPlay  muted loop />
            </div>

            <div className="video-content space-y-2 mt-28 md:mt-16 ">
                <h1 className="md:text-5xl text-3xl font-bold mb-5 fonts2 " style={{ transform: 'translate(0px, 0%) opacity: 1' }}>1ST NATIONAL FOOD & AGRICULTURE VYAPAR EXPO 2023</h1>
                <div className=" ">
                    <h3 className="font-bold text-xl md:text-2xl mb-5 fonts1 ">JOIN THE LEADING BRAND AND MANUFACTURER OF FOOD & AGRICLTURE</h3>
                    <h2 className=' text-lg md:text-lg mb-5 fonts1 font-bold '>10TH – 15TH JULY 2023 | IIT – BHU CAMPUS, VARANASI</h2>
                </div>
                <div className=' py-5 md:py-0'>
                    <button type="button" class="text-white bg-rose-600 hover:bg-purple-800font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 fonts2 ">BOOK YOUR STAND</button>
                    <Link to={'/registrationfrom'}>
                     <button type="button" class="text-white bg-indigo-600 hover:bg-purple-800font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 fonts2 ">VISITOR REGISTRATION</button>
                    </Link>
                   
                </div>

                <div className=" flex justify-center space-x-2 ">
                    <div className="icon">
                        <IoLogoWhatsapp color='#25D366'  size={30}/>
                    </div>
                    <div className="icon">
                        <BsFacebook color='#4267B2'  size={30}/>
                    </div>
                    <div className="icon">
                        <AiFillInstagram color='rgb(192 32 62)' size={30} />
                    </div>
                </div>

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