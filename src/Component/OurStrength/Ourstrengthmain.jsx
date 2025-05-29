
import React from 'react';
import Ourstrengthchild from './Ourstrengthchild';
import { images } from '../../../public/images/image'; 

const Ourstrengthmain = () => {
  return (
    <>
      <div className=' w-full h-[638px] py-[100px] px-[120px]  flex flex-col items-center'>
       
        <h1 className='text-4xl font-extrabold text-[#E57373] mb-[40px]'>Our Strength</h1>
        
     
        <div className='text-white flex flex-row  justify-center w-full px-[64px]'>
          <Ourstrengthchild
            number="01"
            title="Research"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            icon={images.servicelogo} 
          />
          
         
           <img src={images.Arrow} alt="" className='w-20 h-3 mt-24 animate-glow' />
        

          <Ourstrengthchild
            number="02"
            title="Design"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            icon={images.servicelogo2} 
          />
          
          
          <img src={images.Arrow} alt="" className='w-16 h-3 scale-y-[-1] mt-20' />

          <Ourstrengthchild
            number="03"
            title="Develop"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            icon={images.servicelogo3} 
          />
          
           <img src={images.Arrow} alt="" className='w-20 h-3 mt-24' />


          <Ourstrengthchild
            number="04"
            title="Test"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
            icon={images.servicelogo4}
          />
        </div>
      </div>
    </>
  );
};

export default Ourstrengthmain;