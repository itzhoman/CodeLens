import React from 'react';
import hero1 from '../assets/hero2.png';

const Hero = () => {
    return (
        <div>
            <div className='relative flex flex-col xs:flex-col md:flex-row md:justify-between 
                overflow-hidden md:min-h-[500px] xs:min-h-[00px] sm:min-h-[550px] md:gap-16 lg:min-h-[550px]
                bg-gray-100 items-center duration-200 p-4 xs:p-6 sm:p-10 md:p-20'>
                
                <div className='flex flex-col items-center md:items-start  md:text-left md:-ml-12 xs:ml-0'>
                    <h2 className='text-3xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
                        Unleash Your Digital Potential</h2>
                    <p className='text-base xs:text-sm sm:text-lg md:text-xl lg:text-2xl font-thin mt-4 
                        md:mt-6 max-w-[90%] md:w-[400px] lg:w-[500px] xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit iste repellendus tempore fugiat qui natus optio distinctio, sit nemo, debitis facilis molestias, vel praesentium nam ea a libero? Molestias, dignissimos.
                    </p>
                    <div className='mt-6 flex flex-col xs:flex-row xs:gap-4 md:flex-row gap-4'>
                        <button className='w-[120px] xs:w-[130px] sm:w-[150px] h-[40px] xs:h-[45px] sm:h-[50px] text-white  bg-primary/90 hover:bg-stone-200 hover:text-black hover:translate-y-2 duration-200 font-medium'>
                            Explore My Work
                        </button>
                        <button className='w-[120px] xs:w-[130px] sm:w-[150px] h-[40px] xs:h-[45px] sm:h-[50px]  text-black bg-white hover:bg-primary hover:translate-y-2 duration-200 hover:text-white font-medium'>
                            Get in Touch
                        </button>
                    </div>
                </div>

                <div className="md:h-[400px] md:w-[400px] xs:mt-20 lg:h-[600px] lg:w-[600px] xs:h-[350px] xs:w-[350px] mt-10 md:mt-0 mr-0 lg:mr-16 bg-primary right-0 md:right-10 rounded-3xl rotate-45 flex items-center">
                    <img src={hero1} alt="Hero Image" className='-rotate-45 absolute right-6 transform z-10' />
                </div>
            </div>
        </div>
    );
}

export default Hero;
