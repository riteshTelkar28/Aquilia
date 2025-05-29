import React from 'react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const TestimonialCard = ({ text, name }) => (
  <div className="bg-white rounded-2xl h-[452px]  w-full max-w-sm flex flex-col items-center text-center hover:scale-110 transition-transform duration-300 ease-in px-[33px] ">
    <div className="bg-[#172933] flex items-center justify-center w-[96px] h-[96px] rounded-full mt-[50px]  text-white">
      <FaQuoteRight className="text-5xl " />
    </div>
    <p className="text-gray-700  px-[33px] pt-[33px]   ">
      {text}
    </p>
    <div className="text-yellow-500 flex justify-center mt-[40px] mb-[19px] "> 
   
      <FaStar />
      <FaStar />  
      <FaStar />
      <FaStar />
      <FaStar />
    </div>
    <p className="font-semibold text-gray-700 mb-[26px] ">{name}</p>
  </div>
);

export default TestimonialCard;