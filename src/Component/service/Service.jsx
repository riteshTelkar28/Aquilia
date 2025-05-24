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
      className='w-full max-w-[1440px] h-[796px] mx-auto flex justify-between flex-row px-30 items-center  bg-cover '
    >
      <div className='text-left w-1/2 flex flex-col gap-6'>
        <br /><br /><br /><br /><br /><br />
        <h1 className='text-3xl font-bold text-[#E26D5A]'>Services</h1>
        <p className='text-3xl'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using
        </p>
        <div className='address text-black bg-[#172933] flex leading-8  px-9 gap-2 items-center w-[515px] h-[240px] rounded-[29.93px]'>
          <div className='data text-white'>
            <h2 className='text-2xl'>Fuel Your Digital-First Idea</h2>
            <br />
            <p className='text-sm'>
              With 1600+ page when looking at its layout. The point of using
            </p>
            <br />
            <Button />
          </div>
        </div>
      </div>
      <div>
      <ServiceCard head="Degion" detail={card1}  />
      <ServiceCard head="Development" detail={card2}/>
      <ServiceCard  head="Website SEO" detail={card3} />

      </div>
    </div>
  )
}

export default Service
