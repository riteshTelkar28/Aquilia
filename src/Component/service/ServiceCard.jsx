import React from "react";
import { FaPaintBrush, FaCode, FaSearch } from "react-icons/fa";

const ServiceCard = (props) => {
  console.log(props);
  console.log(props.head);
  console.log(props.detail)
  return (
    <div className="text-left  py-3 px-2">
      
      {/* Card 1 - Design */}
      <div className="bg-white rounded-2xl shadow-md  max-w-md p-4 w-[370px] hover:scale-110 transition-transform duration-300 ease-in">
        <h2 className="text-4xl font-bold text-[#0f0f0f] mb-3 ">{props.head}</h2>
        <ul className="font-semibold text-black leading-6 list-disc  list-inside text-lg/(100%)">
          <li>{props.detail.item1}</li>
          <li> {props.detail.item2} </li>
          <li>{props.detail.item3}</li>
          <li>{props.detail.item4}</li>
        </ul>
        
      </div>

      {/* Card 2 - Development */}
      {/* <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-3 relative">
        <h2 className="text-xl font-bold text-[#0f0f0f] mb-3">Development</h2>
        <ul className="text-gray-700 space-y-2 list-disc list-inside text-xs">
          <li>Integrated Custom Web Design</li>
          <li>Customized Logo Design</li>
          <li>Scalable E-commerce Solutions</li>
          <li>Seamless UI/UX</li>
        </ul>
        
      </div> */}

      {/* Card 3 - SEO */}
      {/* <div className="bg-white rounded-2xl shadow-md w-full max-w-md p-3 relative">
        <h2 className="text-xl font-bold text-[#0f0f0f] mb-3">Website SEO</h2>
        <ul className="text-gray-700 space-y-2 list-disc list-inside text-xs">
          <li>Integrated Custom Web Design</li>
          <li>Customized Logo Design</li>
          <li>Scalable E-commerce Solutions</li>
          <li>Seamless UI/UX</li>
        </ul>
       
      </div> */}

    </div>

  );
};

export default ServiceCard;
