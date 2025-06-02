import React from 'react'
import { images } from '../../../public/images/image'
import Button from '../Button'
import ServiceCard from './ServiceCard'

const Service = () => {
  var card1 = {
    item1:"Integrated Custom Web Design",
    item2:"Customized Logo Design",
    item3:"Scalable E-commerce Solutions",
    item4:"Seamless UI/UX"
  }

  var card2 = {
    item1:"Component wise",
    item2:"Resposive web",
    item3:"Scalable E-commerce Solutions",
    item4:"Seamless UI/UX"
  }

  var card3 = {
    item1:"Integrated Custom Web Design",
    item2:"Customized Logo Design",
    item3:"Scalable E-commerce Solutions",
    item4:"Seamless UI/UX"
  }

  return (
    <div 
      style={{ backgroundImage: `url(${images.servicebg})` }}
      className='w-full max-w-[1440px] h-[796px] mx-auto flex justify-between flex-row px-[120px] items-center bg-cover'
    >
      <div className='text-left w-1/2 flex flex-col gap-6 mt-[250px]'>
        <h1 className='text-4xl font-bold text-[#E26D5A]'>Services</h1>
        <p className='text-4xl/[49px] font-medium mb-[67px]'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
        </p>
        <div className='address text-black bg-[#172933] flex leading-8 py-[47px] pl-[30px] pr-[65px] gap-2 items-center w-[582px] h-[274px] rounded-[29.93px] mb-[300px] hover:scale-110 transition-transform duration-300 ease-in'>
          <div className='data text-white'>
            <h2 className='text-4xl'>Fuel Your Digital-First Idea</h2>
            <br />
            <p className='text-lg/[49px] '>
              With 1600+ page when looking at its layout. The point of using
            </p>
            <br />
            <Button />
          </div>
        </div>
      </div>

      {/* Scrollable right container */}
      <div
        className="scroll-container w-1/2 max-h-[600px] overflow-y-auto "
        style={{ marginRight: '-90px' }}
      >
        <ServiceCard head="Design" detail={card1} />
        <ServiceCard head="Development" detail={card2} />
        <ServiceCard head="Website SEO" detail={card3} />
        <ServiceCard head="Website SEO" detail={card3} />
        <ServiceCard head="Website SEO" detail={card3} />
        <ServiceCard head="Website SEO" detail={card3} />
      </div>
    </div>
  )
}

export default Service
