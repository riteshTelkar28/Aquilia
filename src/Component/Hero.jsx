import React from 'react'
import Navbar from './Navbar'
import { images } from '../../public/images/image'
import Button from './Button'

const Hero = () => {
  return (
    <>
   <div
  style={{ backgroundImage: `url(${images.herobg})` }}
  className="bg-cover bg-center h-screen w-full"
>
    <Navbar/>
   
    <div className=" text-white min-h-screen flex flex-col items-center justify-center px-[169px]  pb-[100px] gap-5">
            
            <h2 className="text-lg font-semibold mb-3 bg-[#E26D5A] rounded-full text-center py-1 px-4">
                INNOVATING EXPERIENCES, INSPIRING ENGAGEMENT
            </h2>
            <h1 className="text-4xl font-bold mb-5 text-center">
                Future-Focused and Impact-Driven Web Development
            </h1>
            <h3 className="text-4xl font-semibold mb-5 text-[#E26D5A]">
                Powered by Aquila Tech Solution
            </h3>
            <p className="text-lg text-center max-w-3xl mb-4">
                We don’t just develop apps — we craft intuitive digital experiences. At Aquila Tech Solution, every app is designed to be unique, user-centric, and performance-driven, combining sleek interfaces with seamless functionality to elevate your brand’s mobile presence.
            </p>
            <div className="flex space-x-4">
                <Button  />
                
                <button className="border-b  px-4 hover:text-[#E26D5A] font-semibold">
                    Check Our Portfolio
                </button>
            </div>
        </div>
    
    </div>
    </>
  )
}

export default Hero
