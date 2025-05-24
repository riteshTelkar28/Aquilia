import React from 'react'
import Blogcard from './Blogcard'
import { images } from '../../../public/images/image'

const Blogx = () => {
  return (
<>
     <div className="bg-[#1a1a1a] py-16 px-4 text-white flex flex-col items-center">
     <h2 className="text-3xl font-bold mb-12 text-[#F6765E]  border-[#F6765E] pb-1">
        Blog
      </h2>
    <div className='flex flex-col md:flex-row gap-8 justify-center items-center '>
        <Blogcard image={images.ajay}/>
        <Blogcard image={images.ram}/>
        <Blogcard image={images.herobg}/>
    </div>
    </div>
</>
  )
}

export default Blogx