import React, { useState, useEffect } from 'react';
import c1 from '../../public/images/c1.jpg';
import c2 from '../../public/images/c2.jpg';
import c3 from '../../public/images/c3.jpg';

const images = [c1, c2, c3];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden py-6 mt-[80px] h-[550px] flex flex-col items-center">
      <div className="flex justify-center items-center gap-10 h-[400px]">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className={`transition-all duration-700 rounded-2xl object-cover 
              w-[350px] h-[350px] md:w-[300px] md:h-[300px] 
              ${idx === current ? 'scale-130 shadow-xl shadow-white z-10' : 'scale-90 opacity-60'}
            `}
          />
        ))}
      </div>

      {/* Dots container */}
      <div className="flex mt-6 space-x-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-white scale-125' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
