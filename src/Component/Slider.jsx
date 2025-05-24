// import React from 'react'
// import { images } from '../../public/images/image'

// const Slider = () => {
//   return (
//   <>
   
//     <div className='bg-[#172933] w-full flex justify-between items-center h-[70px] px-[50px]'>
//      <marquee behavior="" direction=""> <div className='bg-[#172933] w-full flex justify-between items-center h-[70px] px-[50px]'>
//             <img src={images.sliderlogo1} alt="" />
//             <img src={images.sliderlogo2} alt="" />
//             <img src={images.sliderlogo3} alt="" />
//             <img src={images.sliderlogo4} alt="" />
//             <img src={images.sliderlogo5} alt="" />
//             <img src={images.sliderlogo6} alt="" />
//             <img src={images.sliderlogo7} alt="" />
//             <img src={images.sliderlogo8} alt="" />
//     </div>
//     </marquee>
//     </div>
  
//     </>
//   )
// }

// export default Slider

import React from 'react';
import { images } from '../../public/images/image'; 
const Slider = () => {
  
  const sliderLogos = [
    images.sliderlogo1,
    images.sliderlogo2,
    images.sliderlogo3,
    images.sliderlogo4,
    images.sliderlogo5,
    images.sliderlogo6,
    images.sliderlogo7,
    images.sliderlogo8,
  ];

  return (
    <>
    
      <div className='bg-[#172933] w-full h-[70px] flex items-center overflow-hidden'>
     
        <marquee behavior="scroll" direction="left" scrollamount="infinite" className="w-full">
        
          {sliderLogos.map((logoSrc,index) => (
            <img
              key={index}
              src={logoSrc}
             
              className='h-8 mx-8 inline-block' 
            />
          ))}
      
          {sliderLogos.map((logoSrc,index) => (
            <img
              key={index}
              src={logoSrc}
          
              className='h-8 mx-8 inline-block'
            />
          ))}
        </marquee>
      </div>
    </>
  );
};

export default Slider;