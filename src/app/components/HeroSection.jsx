"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Social from "./Social";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      {/* Image Section */}
      <div className="col-span-5 place-self-center mt-0 mb-5 lg:mb-5 order-1 lg:order-2">
        <motion.div
          className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] rounded-full relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Circle */}
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Define the Gradient */}
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(45)">
                <stop offset="0%" stopColor="#3b82f6" /> {/* Blue */}
                <stop offset="50%" stopColor="#7FFF00" /> {/* Purple */}
                <stop offset="100%" stopColor="#004526" /> {/* Pink */}
              </linearGradient>
            </defs>

            <motion.circle
              cx="200"
              cy="200"
              r="198"
              stroke="url(#gradient)" // use the gradient
              strokeWidth="8" //Adjust thickness
              strokeLinecap="round"
              fill="none"
              initial={{ strokeDasharray: "24 0 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 92 72 4", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </svg>

          {/* Profile Image */}
          <div className="rounded-full bg-[#181818] w-[295px] h-[295px] lg:w-[395px] lg:h-[395px] relative">
           
          <Image
            src="/images/hero.png"
            alt="hero image"
            className="rounded-full"
            style={{
              WebkitMaskImage: `radial-gradient(
                circle at bottom,
                black 60%,
                transparent 100%
              )`,
              maskImage: `radial-gradient(
                circle at bottom,
                black 60%,
                transparent 100%
              )`,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
            width={400} // Adjust the size for alignment
            height={400} // Match the container size
            priority
            quality={100}
          />
          </div>
        </motion.div>
      </div>

      {/* Text Section */}
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start order-2 lg:order-1">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Hello, I'm{" "}
          </span>{" "}
          <br />
          <TypeAnimation
            sequence={[
              "RAJ YADAV",
              2000,
              "Web Developer",
              1000,
              "FullStack Developer",
              1000,
              "Logo Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <div className="flex flex-row gap-4">
            <button className="bg-gradient-to-br  from-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full">
              Hire Me
            </button>
            <button className="bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white rounded-full">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
          <Social
            containerStyles="flex flex-row gap-4"
            iconStyles="w-12 h-12 flex items-center justify-center border border-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 border-2 rounded-full hover:bg-gradient-to-br hover:from-blue-500 hover:via-primary-500 hover:to-secondary-500 hover:text-white hover:border-transparent transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
