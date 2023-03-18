import React from 'react'
import { Link } from 'react-router-dom'

function About() {

    return (
        <div className=' '>
            <section className="bg-white container mx-auto md:py-10 mb-10">
                <h1 className=' text-center font-bold text-2xl md:text-3xl fonts2 mb-2'>WELCOME TO <span className=' text-[#ff0000] '>VARANASI</span></h1>
                <h1 className='text-center px-4 md:px-0 font-bold text-lg md:text-xl fonts1 mb-7 md:mb-14'>1ST NATIONAL FOOD & AGRICULTURE VYAPAR EXPO 2023</h1>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-1 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-900">Before they sold out
                                <br className="hidden lg:inline-block" />readymade gluten
                            </h1>
                            <p className="mb-8 leading-relaxed text-justify fonts4">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis libero, culpa consectetur harum explicabo ab voluptates optio blanditiis itaque, et amet, pariatur enim. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, minu.</p>
                            <Link to={'/registrationfrom'} ><button type="button" class="text-white bg-[#ff0000] hover:bg-purple-800font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 fonts2 ">BOOK YOUR STAND</button></Link>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
                            {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
                            <video className="min-w-full min-h-full rounded-xl  object-cover" src="https://firebasestorage.googleapis.com/v0/b/videos-5c17d.appspot.com/o/My%20Video%203.mp4?alt=media&token=43cde305-bb2a-4bd9-aa45-582c7d67be3b" type="video/mp4" autoPlay muted loop />
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default About