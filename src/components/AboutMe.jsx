import React from 'react';
import photo3 from '../assets/photo3.jpg';

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start h-auto w-full bg-white mt-3 md:h-[700px]">
      {/* Image Section */}
      <div className="w-full md:w-[800px] h-[350px] md:h-[650px] bg-primary flex justify-center items-center">
        <img src={photo3} className="w-full md:w-[800px] h-full md:h-[650px] object-cover" alt="About Me" />
      </div>

      {/* Text Content Section */}
      <div className="flex flex-col md:flex-row md:justify-between bg-primary md:bg-white w-full px-6 md:px-0 py-6 md:py-0 text-gray-100 md:text-gray-800">
        {/* Left Content */}
        <div className="flex flex-col md:ml-12 mt-6 md:mt-20">
          <h1 className="text-2xl md:text-3xl">About Me</h1>
          <p className="mt-4 mb-6 text-lg md:text-xl w-full md:w-[250px]">
            Discover how I can transform your digital vision into a reality that sets you apart.
          </p>
          <a className="text-blue-300 md:text-blue-800 text-xl md:text-2xl" href="#">My Portfolio</a>

          {/* Buttons */}
          <div className="mt-12 flex flex-col">
            <button className="w-full md:w-[650px] h-[45px] text-left bg-primary/90 hover:bg-stone-400 text-gray-300 md:text-gray-400 duration-200 font-medium mb-4">
              Elevate Your Digital Presence
            </button>
            <button className="w-full md:w-[250px] h-[45px] mt-4 bg-primary/90 hover:bg-stone-400 text-white duration-200 font-medium">
              Let's Get Started
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="mt-6 md:mt-20 flex flex-col md:ml-16">
          <p className="text-lg md:text-2xl text-gray-300 md:text-gray-500 w-full md:w-[300px]">
            I'm a passionate web and mobile app developer, committed to crafting unique digital experiences.
          </p>
          <h1 className="mt-6 md:mt-8 mb-6 text-gray-200 md:text-gray-700 text-xl md:text-2xl">
            Unleash Your Digital Potential
          </h1>
          <a href="#" className="text-blue-300 md:text-blue-800 text-xl md:text-2xl">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
