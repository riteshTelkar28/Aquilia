import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import Button from "./Button";
import { Typewriter } from "react-simple-typewriter";


const Footer = () => {
  const property = "hover:text-[#E26D5A]";
  return (
    <>
      <div className="w-full bg-[#172933]  h-[420px] grid grid-cols-4 gap-4">
        {/* 1st column footer  */}
        <div className=" pt-[50px] rounded  text-left pl-[120px] ">
          <h1 className="text-[#E26D5A] text-3xl font-bold ">Aquila</h1>
          <br />
          <p className="text-base/[24px]">
            <Typewriter
              words={[
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at.",
              ]}
              loop={0} // 0 = infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>
          <div className="socialicon flex gap-4 mt-4">
            <FaLinkedinIn
              style={{ backgroundColor: "white" }}
              className="text-[#E26D5A] p-3 w-[50px] h-[50px] rounded-2xl hover:scale-110 transition-transform duration-300 ease-in"
            />
            <FaInstagram
              style={{ backgroundColor: "white" }}
              className="text-[#E26D5A] p-3 w-[50px] h-[50px] rounded-2xl hover:scale-110 transition-transform duration-300 ease-in"
            />
            <FaFacebookF
              style={{ backgroundColor: "white" }}
              className="text-[#E26D5A] p-3 w-[50px] h-[50px] rounded-2xl hover:scale-110 transition-transform duration-300 ease-in"
            />
            <FaTwitter
              style={{ backgroundColor: "white" }}
              className="text-[#E26D5A] p-3 w-[50px] h-[50px] rounded-2xl hover:scale-110 transition-transform duration-300 ease-in"
            />
          </div>
        </div>

        {/* 2nd column footer  */}
        <div className=" rounded  text-left pt-[50px] ml-[70px]  ">
          <h1 className="text-2xl font-bold">Services</h1>
          <br />
          <ul className="text-left gap-3 leading-11  text-base/[24px]">
            <li className={property}>Web Design/Development</li>
            <li className={property}>App Development</li>
            <li className={property}>UI/UX Degion</li>
            <li className={property}>HubSpot Integration</li>
            <li className={property}>Email Marketing</li>
            <li className={property}>Website Migration</li>
          </ul>
        </div>

        {/* 3rd column footer  */}
        <div className=" rounded  text-left pt-[50px] ml-[6px] mr-[71px] ">
          <h1 className="text-2xl font-bold">Location</h1>
          <br />
          <div className="text-left gap-3 leading-10">
            <div className="flex items-center text-[16px]">
              <TfiEmail size={20} /> &nbsp; Email: Aquila@gmail.com
            </div>
            <div className="flex items-center">
              <MdOutlinePhoneInTalk size={20} />
              &nbsp; Phone: 12345678901
            </div>
            <div className="flex items-center">
              <GrMapLocation size={50} />
              Aquila Tech Solutions Pvt Ltd B3 -226-227, SPAZE iTech Park, sec
              49 ,Gurugram - 122018
            </div>
          </div>
        </div>

        {/* 4th column footer  */}
        <div className=" rounded  text-left pt-[50px] mr-[120px]">
          <h1 className="text-2xl font-bold  hover:text-[#E26D5A]">
            Subscribe Us
          </h1>
          <br />
          <p className="text-[20px] ">
            Stay updated with the latest listings and rental tips.
          </p>
          <br />
          <input
            type="email"
            placeholder="Email Address"
            className="border-[#E26D5A] border text-[#E26D5A] w-[275px] pl-1 h-[48px] rounded-[47px] "
          />
          <br />
          <br />
          <button className="bg-[#E26D5A] border-[#E26D5A] text-white items-center text-center border w-[275px] h-[48px] rounded-[47px] hover:border-white ">
            Subscribe
          </button>
        </div>
      </div>

      <div className="copy w-full h-[50px] bg-[#313B41] text-center justify-center flex  items-center">
        Copyright 2025 Aquila Tech Solutions | All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
