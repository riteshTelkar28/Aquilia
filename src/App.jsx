import Navbar from './Component/Navbar'
import './App.css'
import Hero from './Component/Hero'
import Slider from './Component/Slider'
import About from './Component/About'

import Ourstrengthmain from './Component/OurStrength/Ourstrengthmain'
import Counter from './Component/Counter'
// import Service from './Component/Service'
import Testimonials from './Component/testimonial/Testimonials'

import Service from './Component/service/Service'
import Blogx from './Component/Blog/Blogx'
import Footer from './Component/Footer'
import Carousel from './Component/Carousel'

function App() {
 
  return (
    <>
    <div className='relative text-indent-[25px]'> 
      <Navbar/>
      <Hero/>
    <Slider/>
    <Carousel/>
    <About/>
    <Ourstrengthmain/>
    <Counter/>
    <Service/>
    <Testimonials/>
    <Blogx/>
    <Footer/>       
    </div>

    </>
  )
}

export default App
