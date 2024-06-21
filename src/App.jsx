import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Features from './components/Features'
import Topic from './components/Topic'
import OurCourses from './components/OurCourses'
import OurBenefit from './components/OurBenefit'
import TestiMonial from './components/TestiMonial'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import Slider from './components/Slider'

const App = () => {
  return (
    <main className={` max-w-[1440px] flex flex-col  m-auto `}>
    <Navbar/>
    <Hero/>
    <AboutUs/>
    <Features/>
    <Topic/>
    <OurCourses/>
    <OurBenefit/>
    <TestiMonial/>
    <Faq/>
    <Footer/>
    </main>
  )
}

export default App
