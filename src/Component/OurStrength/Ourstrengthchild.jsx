import React from 'react';

const Ourstrengthchild = ({ number, title, description, icon }) => {
  return (
    <div className='w-[257px] flex flex-col items-center text-center border border-transparent hover:border-orange-600 p-1 hover:shadow-yellow-500/50 shadow-md transition-all duration-300 rounded-xl  '>

    
      <div className='relative w-[70px] h-[70px] rounded-full bg-[#E57373] flex items-center justify-center text-white text-2xl font-bold pb-9 z-10 hover:z-0'>
        {number}
      
        <div className='absolute mt-35   w-[100px] h-[100px] rounded-full bg-[#C4C4C4] flex items-center justify-center z-20'>
          <img src={icon} className='w-[60px] h-[60px] hover:scale-110 transition-transform duration-300 ease-in' /> 
        </div>
      </div>
      
     
      <h1 className='text-xl font-bold text-white mt-[85px]'>{title}</h1> 
      
      <p className='text-sm text-white mt-6 leading-relaxed'>
        {description}
      </p>
    </div>
  );
};

export default Ourstrengthchild;