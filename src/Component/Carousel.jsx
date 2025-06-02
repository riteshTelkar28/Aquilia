import React, { useState, useEffect, useRef } from 'react';
import c1 from '../../public/images/c1.jpg';
import c2 from '../../public/images/c2.jpg';
import c3 from '../../public/images/c3.jpg';

const images = [c1, c2, c3];
const IMAGE_WIDTH = 350;
const GAP = 45;
const STEP = IMAGE_WIDTH + GAP;

const Carousel = () => {
  const [queue, setQueue] = useState(images);
  const [offset, setOffset] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setOffset(-STEP);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const onTransitionEnd = () => {
    if (!transitionEnabled) return;

    setTransitionEnabled(false); // Turn off transition before reset

    setQueue((prevQueue) => {
      const [first, ...rest] = prevQueue;
      return [...rest, first];
    });

    // Reset offset after queue update with no transition
    setTimeout(() => {
      setOffset(0);
    }, 0);
  };

  return (
    <div className="w-full overflow-hidden py-6 mt-[80px] h-[450px] pb-[100px] flex justify-center items-center">
      <div
        ref={containerRef}
        className="flex gap-[50px]"
        style={{
          transform: `translateX(${offset}px)`,
          transition: transitionEnabled ? 'transform 1.2s ease-in-out' : 'none',
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {queue.map((img, idx) => {
          const isCenter = idx === 1;
          return (
            <div
              key={idx}
              className="flex-shrink-0 w-[390px] h-[350px] rounded-2xl overflow-hidden"
              style={{
                transition: 'transform 0.7s ease-in-out, opacity 0.7s ease-in-out, box-shadow 0.7s ease-in-out',
                transform: isCenter ? 'scale(1.1)' : 'scale(0.9)',
                opacity: isCenter ? 1 : 0.4,
                zIndex: isCenter ? 10 : 0,
                boxShadow: isCenter ? '0 10px 20px rgba(0, 0, 0, 0.5)' : 'none',
              }}
            >
              <img
                src={img}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
