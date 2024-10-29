import React from 'react';
import photo2 from '../assets/photo2.jpg';

const GetToKnow = () => {
    return (
        <div className="w-full flex flex-col md:flex-row bg-primary p-6 md:p-0">
            {/* Main Content Area */}
            <div className="bg-secondary flex flex-col md:flex-row items-center justify-around w-full md:w-[88%] h-auto md:h-[380px] py-6 md:py-0">
                <div className="flex flex-col gap-4 md:gap-6 md:ml-6 items-center md:items-start text-center md:text-left">
                    <h1 className="text-xl sm:text-2xl text-white">Get to Know Me</h1>
                    <button className="w-[140px] sm:w-[150px] h-[40px] sm:h-[45px] mt-4 bg-white rounded-xl hover:bg-primary text-black duration-200 hover:text-white font-medium">
                        Get in Touch
                    </button>
                </div>
                <div className="mt-6 md:mt-0 text-center md:text-left">
                    <h1 className="text-lg sm:text-xl text-gray-600">Explore My Skills</h1>
                    <p className="mt-4 sm:mt-5 w-[240px] sm:w-[280px] tracking-wide text-white text-sm sm:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                        repellendus exercitationem ducimus quas sequi illum reiciendis pariatur
                        impedit veniam ipsam facere ipsa
                        unde perspiciatis veritatis aut excepturi, possimus neque nulla.
                    </p>
                </div>
                <div className="flex flex-col gap-3 md:gap-5 items-center md:items-start mt-6 md:mt-0">
                    <h1 className="text-white text-sm sm:text-base">Responsive Design</h1>
                    <h1 className="text-gray-500 text-sm sm:text-base">Mobile Development</h1>
                    <h1 className="text-gray-600 text-sm sm:text-base">Web Development</h1>
                </div>
            </div>

            {/* Image Section - Hidden on xs and sm devices */}
            <div className="hidden md:block bg-white h-[400px] w-[12%]">
                <img src={photo2} className="w-full h-[370px] -mt-12 object-cover" alt="Get to Know Me" />
            </div>
        </div>
    );
};

export default GetToKnow;
