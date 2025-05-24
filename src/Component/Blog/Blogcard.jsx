import React from 'react'
import { images } from '../../../public/images/image'

const Blogcard = ({image}) => {
  return (
     <div className="bg-white rounded-2xl  p-6 w-[380px] h-[380px] max-w-sm flex flex-col items-center hover:scale-110 transition-transform duration-300 ease-in  ">
        <div className="   w-[338px] h-[200px] text-white mb-4">
         <img src={image} alt="" className='rounded-2xl w-[338px] h-[200px] text-white mb-4' />
        </div>
        
        <p className="text-gray-700 text-xl w-[320px]  text-left">
        The most Popular Business <br />
        Of the Year
        </p>
        <br />

         <div className="flex items-center w-full justify-between mt-4 text-sm text-gray-600">
         <div className="flex items-center gap-2">
                    <img
                      src={images.ajay} 
                      alt="Author"
                      className="w-6 h-6 rounded-full"
                    />
         <span className="text-blue-600 font-medium">Ranold Jeff.</span>
         </div>
         <span className="text-xs text-gray-500">May 4th, 2022</span>
        </div>
        
        {/* <div className="text-yellow-500 w-[338px] flex justify-between  mb-2">
        <p className="font-semibold text-gray-700">aaja</p>
        <p>1233444</p>
        </div> */}
        
      </div>
  )
}

export default Blogcard