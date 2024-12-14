"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Social from "./Social";
import { motion } from "framer-motion";
import Link from "next/link"; 

const HeroSection = () => {
  const downloadResume = () => {
    window.open("/RAJCV.pdf", "_blank"); 
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 mt-10 mb-20 ">
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
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(45)">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#7FFF00" />
                <stop offset="100%" stopColor="#004526" />
              </linearGradient>
            </defs>
            <motion.circle
              cx="200"
              cy="200"
              r="198"
              stroke="url(#gradient)"
              strokeWidth="8"
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
                WebkitMaskImage: `radial-gradient(circle at bottom, black 60%, transparent 100%)`,
                maskImage: `radial-gradient(circle at bottom, black 60%, transparent 100%)`,
                WebkitMaskSize: "100% 100%",
                maskSize: "100% 100%",
              }}
              width={400}
              height={400}
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
              "FullStack Developer",
              1000,
              "Data Analyst",
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
          I am a passionate software developer with a knack for creating
          efficient and innovative solutions. With a strong background in web
          development and a keen eye for detail, I strive to deliver
          high-quality projects that exceed expectations. Let's connect and
          build something amazing
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <div className="flex flex-row gap-4">
            {/* Smooth Scroll to Contact Section */}
            <Link
              href="#contact"
              className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full"
            >
              Contact Me
            </Link>

            {/* Download CV Button */}
            <button
              onClick={downloadResume} 
              className="bg-gradient-to-br from-primary-500 to-secondary-500 px-1 py-1 text-white rounded-full"
            >
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
