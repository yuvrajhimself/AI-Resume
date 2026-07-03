import React from 'react'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Features from '../components/home/feature'
import Testimonials from '../components/home/Testimonials'
import CallToAction from '../components/home/CallToAction'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <div>
      {/* <h1>Home Page</h1>
      this below we are mounting the jsx file as tag
      as jsx is js plus html so can be used as tag and html page will show whatever is returned in those file */}
      <br></br><Banner/>
    <Hero/>
    <Features/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
    </div>
  )
}

export default Home
