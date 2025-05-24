import React from 'react'
import c1 from '../../public/images/c1.jpg'
import c2 from '../../public/images/c2.jpg'
import c3 from '../../public/images/c3.jpg'



const Carousel = () => {
  return (
    <>
    <div className='relative w-full h-[809px] mt-[-100px] flex justify-between items-center pt-4 pb-4 '>
      <img src={c1} className='border rounded-br-2xl rounded-tr-2xl  ' />
      <img src={c3} className='border rounded-2xl h-[400px] '  />
      <img src={c2} className='border rounded-bl-2xl rounded-tl-2xl' />
      
    </div>
    </>
  )
}

export default Carousel