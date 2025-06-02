import React, { useEffect, useState } from "react";

const LoopingCount = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    let pauseTimeout;

    const startCounting = () => {
      let current = 0;
      const increment = end / (duration * 1000 / 50); // update every 50ms

      interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          clearInterval(interval);
          setCount(end);
          pauseTimeout = setTimeout(() => {
            setCount(0);
            startCounting(); // restart after 5 seconds
          }, 2000);
        } else {
          setCount(Math.floor(current));
        }
      }, 50);
    };

    startCounting();

    return () => {
      clearInterval(interval);
      clearTimeout(pauseTimeout);
    };
  }, [end, duration]);

  return <>{count}+</>;
};

const Counter = () => {
  return (
    <div className="bg-[#13252F] w-full h-[500px] flex items-center justify-center">
      <div className="grid grid-cols-3 gap-0 w-full max-w-5xl pt-14 border-white">
        <div className="flex flex-col items-center justify-center text-white border-r-2 border-b-2 border-white">
          <h2 className="text-7xl font-extrabold text-[rgb(246,118,94)]">
            <LoopingCount end={14} duration={7} />
          </h2>
          <p className="mt-2 text-base text-white font-medium">Years Experience</p>
        </div>

        <div className="flex flex-col items-center justify-center p-6 text-white border-r-2 border-b-2 border-white">
          <h2 className="text-7xl font-extrabold text-[#F6765E] drop-shadow-[4px_4px_0px_rgba(19,37,47,1)]">
            <LoopingCount end={700} duration={7} />
          </h2>
          <p className="mt-2 text-base text-white font-medium">Completed Projects</p>
        </div>

        <div className="p-6 border-b invisible"></div>

        <div className="p-6 border-r invisible"></div>

        <div className="flex flex-col items-center justify-center p-6 text-white border-l-2 border-white">
          <h2 className="text-7xl font-extrabold text-[#F6765E]">
            <LoopingCount end={500} duration={7} />
          </h2>
          <p className="mt-2 text-base text-white font-medium">Happy Clients</p>
        </div>

        <div className="flex flex-col items-center border-t-2 border-l-2 justify-center p-6 text-white">
          <h2 className="text-7xl font-extrabold text-[#F6765E]">
            <LoopingCount end={20} duration={7} />
          </h2>
          <p className="mt-2 text-base text-white font-medium">Team Strength</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Counter);
