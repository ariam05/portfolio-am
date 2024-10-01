"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-0 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start">
        <div className="col-span-7 place-self-center text-center sm:text-left -mt-6"> 
          <h1 className="text-white mb-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-600">
              Hi! I'm Ariam{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Full Stack Engineer',
                2000,
                'Data Scientist',
                2000,
                'UI/UX Designer',
                2000,
                'Data Analyst',
                2000,
                'Mobile Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <br />
        </div>
        
        <div className="col-span-5 place-self-center lg:mt-0 -mt-6">
          <div className="rounded-full bg-[#0d0625] w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="/images/400.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400} // Adjust width for scaling
              height={400} // Adjust height for scaling
              style={{ borderRadius: '50%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
