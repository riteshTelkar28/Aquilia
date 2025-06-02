import React from "react";
import { images } from "../../public/images/image";
// import { LuCircleUserRound } from "react-icons/lu";
import { IoIosContacts } from "react-icons/io";

const About = () => {
  return (
    <div className="bg-[#172933] w-full h-[400px] top-[250px]  flex justify-around  gap-6 items-center p-10  ">
      <div className="w-[517px] ml-[120px]">
        <img
          src={images.aboutimage}
          alt=""
          className="w-[417px] h-[466px] rounded-l-[44px] rounded-r-[46px] rounded-b-[244px] relative bottom-[30px]"
        />
      </div>
      <div className="relative border-trace text-left w-full md:w-[617px] h-[352px] flex flex-col gap-6 ml-[66px] mr-[120px] mb-[60.84px] mt-[61px] rounded-2xl p-3 pl-[30px]  transition-transform duration-300 ease-in">
        <h1 className="text-2xl text-[#E26D5A]">About us</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed It is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed
        </p>
        <div className="address text-black bg-white flex p-4 px-6 gap-2 items-center w-full md:w-[400px] h-[70px] rounded-[10px]">
          <div className="icon">
            <IoIosContacts color="#E26D5A" size={50} />
          </div>
          <div className="data">
            <h2>Get Instant Professional Advice</h2>
            <p>
              Ready to Help :{" "}
              <span className="text-[#E26D5A]">+1 356 678 7897</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
