import React from "react";
import Navbar from "./Navbar";
import { images } from "../../public/images/image";
import Button from "./Button";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${images.herobg})`}}
      className="bg-cover bg-center h-screen w-full"
    >
      <div className="text-white min-h-screen flex flex-col items-center justify-center px-[169px] pb-[100px] gap-5">
        <h2 className="text-lg font-semibold mb-3 bg-[#E26D5A] rounded-full text-center py-1 px-4">
          INNOVATING EXPERIENCES, INSPIRING ENGAGEMENT
        </h2>

        <h1 className="text-4xl font-bold mb-5 text-center">
          <Typewriter
            words={[
              "Future-Focused and Impact-Driven Web Development",
              "Crafting Modern Web & Mobile Solutions",
              "Delivering Innovation, Not Just Code",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>

        <h3 className="text-4xl font-semibold mb-5 text-[#E26D5A]">
          Powered by Aquila Tech Solution
        </h3>

        <p className="text-lg text-center max-w-3xl mb-4">
          We don’t just develop apps — we craft intuitive digital experiences.
          At Aquila Tech Solution, every app is designed to be unique,
          user-centric, and performance-driven, combining sleek interfaces with
          seamless functionality to elevate your brand’s mobile presence.
        </p>

        {/* Fixed Animated Buttons with alignment */}
        <div className="flex space-x-4">
          <motion.div
            className=" flex justify-start"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <Button />
          </motion.div>

          <motion.div
            className="flex-1 flex justify-end"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <button className="border-b px-4 hover:text-[#E26D5A] font-semibold">
              Check Our Portfolio
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
