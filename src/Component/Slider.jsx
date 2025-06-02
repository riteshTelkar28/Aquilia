import React from "react";
import { images } from "../../public/images/image";

const Slider = () => {
  const logos = [
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
    <div className="w-full bg-[#172933] overflow-hidden h-[70px] flex items-center">
      <div
        className="flex whitespace-nowrap  "
        style={{
          animation: "scroll 20s linear infinite",
          width: "fit-content",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-8 mx-8 hover:bg-[#E26D5A] hover:scale-110 ease-in  hover:rounded-3xl"
          />
        ))}
      </div>
      <style>
        {`
    @keyframes scroll {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
  `}
      </style>
    </div>
  );
};

export default Slider;
