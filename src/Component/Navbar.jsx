import React from 'react'
import Button from './Button'

const Navbar = () => {
  const navProperty = "hover:text-[#E26D5A]";
  return (
    <div className='bg-transparent text-white pl-[100px] pr-[100px] pt-[20px]'>
        <nav className='flex justify-between items-center'>
            <div className='text-2xl font-bold text-[#E26D5A]'>Aquila</div>
            <ul className='flex space-x-6 items-center'>
            <li><a href='#' className={navProperty}>Services</a></li>
            <li><a href='#' className={navProperty}>Portfolio</a></li>
            <li><a href='#' className={navProperty}>Careers</a></li>
            <li><a href='#' className={navProperty}>About us</a></li>
            <li><a href='#' className={navProperty}>Blog</a></li>
            <li><a href='#' className={navProperty}>Contact us</a></li>
           
            <Button/>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar