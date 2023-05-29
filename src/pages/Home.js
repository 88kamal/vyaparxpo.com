import React from 'react'
import About from '../components/About'
import AboutOrganizer from '../components/AboutOrganizer'
import AboutVyaparxpo from '../components/AboutVyaparxpo'
import Exhibitor from '../components/Exhibitor'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Icons from '../components/Icons'
import Layout from '../components/Layout'
import Map from '../components/Map'
import Message from '../components/Message'
import Navbar from '../components/Navbar'
import Organizer from '../components/Organizer'
import Product from '../components/Product'
import RegBox from '../components/RegBox'
import Statistics from '../components/Statistics'
import Team from '../components/Team'
import Try from '../components/Try'
import WhyVaranasi from '../components/WhyVaranasi'
import ScrollBtn from '../ScrollBtn/ScrollBtn'
import Bye from '../components/Bye'
import BhuTeam from '../components/BhuTeam'

function Home() {
    return (
        <Layout>
            <Hero />
            <Icons />
            <RegBox />
            <About />
            <Product />
            <Organizer />
            <WhyVaranasi />
            {/* <Highlights/> */}
            {/* <Statistics/> */}
            <Exhibitor />
            <BhuTeam />
            <Team />
            <ScrollBtn />
            <Map />
            {/* <Footer/> */}
        </Layout>
    )
}

export default Home