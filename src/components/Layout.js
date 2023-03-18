import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Navbar/>
      <div>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout