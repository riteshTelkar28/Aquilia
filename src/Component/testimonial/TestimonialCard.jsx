import React from 'react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const TestimonialCard = ({ text, name }) => (
  <div className="bg-white rounded-2xl  p-6 w-full max-w-sm flex flex-col items-center text-center hover:scale-110 transition-transform duration-300 ease-in  ">
    <div className="bg-[#172933] p-4 rounded-full text-white mb-4">
      <FaQuoteRight className="text-3xl" />
    </div>
    <p className="text-gray-700 mb-4">
      {text}
    </p>
    <div className="text-yellow-500 flex justify-center mb-2"> 
   
      <FaStar />
      <FaStar />  
      <FaStar />
      <FaStar />
      <FaStar />
    </div>
    <p className="font-semibold text-gray-700">{name}</p>
  </div>
);

export default TestimonialCard;