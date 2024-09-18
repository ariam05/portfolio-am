"use client";
import React from "react";
import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';




const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-0 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-600">Hi! I'm Ariam {" "} </span>
            <br></br>
            <TypeAnimation 
            // className="text-base sm:text-lg" 
            sequence={[
                // 'Ariam',
                // 1000,  // wait 1 sec before rendering next role
                'Full Stack Engineer',
                2000,
                'Data Scientist',
                2000,
                'Data Analyst',
                2000,
                'Mobile Developer',
                2000,
                'UI/UX Designer',
                2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
    />

          </h1>
          <br />
          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
          <strong className="text-[#ffa5d0]">UC Berkeley </strong> - B.A. Data Science, minor in Computer Science 
            <br></br>
            <strong className="text-[#ffa5d0]">Coding Dojo </strong> - Full Stack Software Development Certificate in Python, Java, MERN (2021)
          </p>
          
          <div>
          {/* <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire Me</button>
          <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 text-white mt-3">
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download</span>

            </button> */}
          
        </div>
          </div>
        
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-black w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/front-img.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
              style={{ borderRadius: '10%' }}
            />
          </div>
          </div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default HeroSection;