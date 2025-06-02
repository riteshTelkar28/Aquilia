import React, { useEffect, useRef, useState } from 'react';

const Ourstrengthchild = ({ number, title, description, icon }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          // Reset animations when scrolled out
          setInView(false);
          setShowIcon(false);
          setShowText(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      const iconTimer = setTimeout(() => setShowIcon(true), 500); // icon delay
      const textTimer = setTimeout(() => setShowText(true), 1000); // text delay
      return () => {
        clearTimeout(iconTimer);
        clearTimeout(textTimer);
      };
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className='w-[257px] h-[430px] p-3 flex flex-col items-center text-center border border-transparent shadow-md transition-all duration-300 rounded-xl bg-black'
    >
      {/* Number */}
      <div
        className='relative w-[92px] h-[92px] rounded-full bg-[#E57373] flex items-center justify-center text-white text-2xl font-bold pb-9 z-1'
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.6s ease',
        }}
      >
        {number}

        {/* Icon */}
        {showIcon && (
          <div
            className='absolute mt-[210px] mb-[30px] w-[128px] h-[128px] rounded-full bg-[#C4C4C4] flex items-center justify-center z-20'
            style={{
              transform: 'scale(1)',
              opacity: 1,
              transition: 'transform 0.6s ease, opacity 0.6s ease',
            }}
          >
            <img src={icon} alt="icon" className='w-[60px] h-[60px]' />
          </div>
        )}
      </div>

      {/* Text */}
      {showText && (
        <>
          <h1
            className='text-xl font-bold text-white mt-[109px]'
            style={{
              opacity: 1,
              transform: 'translateY(0)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            {title}
          </h1>
          <p
            className='text-sm text-white mt-6 leading-relaxed'
            style={{
              opacity: 1,
              transform: 'translateY(0)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            {description}
          </p>
        </>
      )}
    </div>
  );
};

export default Ourstrengthchild;
