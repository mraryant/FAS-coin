// import React from 'react'
import Section1 from './homepageSection/Section1'
import Topnav from '../components/TopNav'
import '../styles/Homepage.css'
import Section2 from './homepageSection/Section2'
import Section3 from './homepageSection/Section3'
import Section4 from './homepageSection/Section4'
import Section5 from './homepageSection/Section5'
import Footer from '../components/Footer'
import Section6 from './homepageSection/Section6'
// import Usecase from './homepageSection/Usecase'

const Homepage = () => {
  return (
    <>
      <Topnav />
      <Section1 />
      <Section2 />
      {/* <Usecase /> */}
      <Section3 />
      <Section4 />
      <Section6 />
      <Section5 />

      <Footer />
    </>
  )
}

export default Homepage