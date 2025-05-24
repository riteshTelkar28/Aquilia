import React from 'react'
import { images } from '../../public/images/image'
// import { LuCircleUserRound } from "react-icons/lu";
import { IoIosContacts } from "react-icons/io";

const About = () => {
  return (
    <div className='bg-[#172933] w-full h-[500px] top-[250px]  flex justify-around px-32 gap-6 items-center p-10  '>
        <div className='w-1/2'>
            <img src={images.aboutimage} alt="" className='w-[517px] h-[566px] rounded-l-[44px] rounded-r-[46px] rounded-b-[244px] relative bottom-[60px]'/>
        </div>
        <div className='text-left  w-1/2 flex flex-col gap-6 hover:border-2 rounded-2xl p-2 hover:scale-105 transition-transform duration-300 ease-in'> 
            <h1 className='text-2xl text-[#E26D5A]'>About us</h1> 
            
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
            <div className='address text-black bg-white flex p-4 px-6 gap-2 items-center w-[400px] h-[70px] rounded-[10px]'> 
                 <div className='icon'><IoIosContacts  color='#E26D5A' size={50} /></div>
                 <div className='data'>
                    <h2>Get Instant Professional Advice</h2>
                    <p>Ready to Help : <span className='text-[#E26D5A]'>+1 356 678 7897</span></p>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default About