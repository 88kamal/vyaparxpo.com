import React from 'react';

const AboutOrganizer = () => {
    return (
        <div className=' bg-[#EFEAEA] py-5 md:py-10'>
            <div className='container mx-auto '>
                <h1 className=' text-center font-bold text-2xl md:text-3xl'>ABOUT <span className=" text-[#FF0000]">ORGANIZER</span></h1>
                <div className=' flex justify-center md:mt-[-0.5em] mt-[-0.4em] z-10 '>  <img className='md:w-[15em] w-[15em]' src="image/des.png" alt="" /></div>
                <p className=' text-justify md:py-10 py-5 text-[15px] container mx-auto px-4'>Founded in 2012 with humble means and a strong desire to be the best in business, today Udan Media & Communications Pvt Ltd. is the name to bank upon for Organizing, Managing and Developing India's leading exhibitions. The organization is known for its dedicated and committed efforts in providing a strong platform to the entrepreneurs across the country and overseas.
                    <br />
                    <br />
                    Our objective is to uplift the SMEs by providing them a common platform to showcase their product, get an exposure to new technology and become competitive to face the new global challenges. Through committed endeavour and a no-compromise attitude to quality, UMCPL has become an ideal partner for new ideas, products and services.</p>
            </div>
        </div>
    );
}

export default AboutOrganizer;
