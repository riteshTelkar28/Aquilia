import React from "react";
import { FaPaintBrush, FaCode, FaSearch } from "react-icons/fa";

const ServiceCard = (props) => {

  return (
    <div className="text-left  py-3 px-2">
      
      {/* Card 1 - Design */}
      <div className="bg-white rounded-2xl shadow-md  max-w-md p-4 w-[370px]">
        <h2 className="text-4xl font-bold text-[#0f0f0f] mb-3 ">{props.head}</h2>
        <ul className="font-semibold text-black leading-6 list-disc  list-inside text-lg/(100%)">
          <li>{props.detail.item1}</li>
          <li> {props.detail.item2} </li>
          <li>{props.detail.item3}</li>
          <li>{props.detail.item4}</li>
        </ul>
        
      </div>
    </div>

  );
};

export default ServiceCard;
