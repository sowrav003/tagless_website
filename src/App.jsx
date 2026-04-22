import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Marquee from './Components/Marquee'
import Product from './Components/Product'
import Process from './Components/Process'
import Gallery from './Components/Gallery'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Product />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}

export default App