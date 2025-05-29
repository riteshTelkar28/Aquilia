

import React from "react";
import CountUp from "react-countup";
const Counter = () => {
  return (
    <div className="bg-[#13252F] w-full h-[500px] flex items-center justify-center ">
      <div className="grid grid-cols-3  gap-0 w-full max-w-5xl  border-white">


        <div className="flex flex-col items-center justify-center  text-white border-r-2 border-b-2 border-white">
          <h2 className="text-7xl font-extrabold text-[#F6765E] ">
            <CountUp start={0} end={14} duration={5}/>+
          </h2>
          <p className="mt-2 text-base text-white font-medium">
            Years Experience
          </p>
        </div>

     
        <div className="flex flex-col items-center justify-center p-6 text-white border-r-2 border-b-2 border-white">
          <h2 className="text-7xl font-extrabold text-[#F6765E] drop-shadow-[4px_4px_0px_rgba(19,37,47,1)]">
            <CountUp start={0} end={700} duration={5}/>+
          </h2>
          <p className="mt-2 text-base text-white font-medium">
            Completed Projects
          </p>
        </div>

        
        <div className="p-6 border-b invisible">     </div>
        
        <div className="p-6 border-r invisible">     </div>

       
        <div className="flex flex-col items-center justify-center p-6 text-white border-l-2 border-white">
          <h2 className="text-7xl font-extrabold text-[#F6765E] ">
            <CountUp start={0} end={500} duration={5}/>+
          </h2>
          <p className="mt-2 text-base text-white font-medium">
            Happy Clients
          </p>
        </div>

     
        <div className="flex flex-col items-center border-t-2 border-l-2 justify-center p-6 text-white">
          <h2 className="text-7xl font-extrabold  text-[#F6765E] ">
            <CountUp start={0} end={20} duration={5}/>+
          </h2>
          <p className="mt-2 text-base text-white font-medium">
            Team Strength
          </p>
        </div>

      </div>
    </div>
  );
};

export default Counter;
