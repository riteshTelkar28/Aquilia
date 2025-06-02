import React from 'react';
import { images } from '../../../public/images/image';

const Blogcard = ({ image }) => {
  return (
    <div className="group bg-white hover:bg-[#172933] rounded-2xl p-6 w-[380px] h-[380px] max-w-sm flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-110">
      
      {/* Image + Hover Text */}
      <div className="relative w-[338px] h-[200px] mb-4 rounded-2xl overflow-hidden">
        {/* Image (hide on hover) */}
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-2xl transition-opacity duration-500 group-hover:opacity-1"
        />

        {/* Text appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#172933] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-lg font-semibold text-center px-4">
          Explore Top Business Trends of the Year Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, tenetur.
        </div>
      </div>

      {/* Static Title */}
      <p className="text-xl w-[320px] text-left text-gray-700 group-hover:text-white transition-all duration-500 transform group-hover:hidden">
        The most Popular Business <br />
        Of the Year
      </p>

      <br />

      {/* Author & Date */}
      <div className="flex items-center w-full justify-between mt-4 text-sm group-hover:text-white transition-colors duration-500">
        <div className="flex items-center gap-2">
          <img
            src={images.ajay}
            alt="Author"
            className="w-6 h-6 rounded-full"
          />
          <span className="text-blue-600 font-medium group-hover:text-white">Ranold Jeff.</span>
        </div>
        <span className="text-xs text-gray-500 group-hover:text-gray-300">May 4th, 2022</span>
      </div>
    </div>
  );
};

export default Blogcard;
