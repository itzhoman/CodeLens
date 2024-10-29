import React from 'react';

const Transform = () => {
    return (
        <div className="w-full h-auto bg-white flex flex-col lg:flex-row items-center justify-center lg:justify-start p-4 lg:p-0">
            <div className="flex flex-col gap-4 w-full lg:w-[1400px]">
                {/* Text Section */}
                <div className="bg-[#E8ECF2] w-full h-auto flex flex-col items-center lg:items-start px-6 lg:pl-12 py-8 lg:pt-24">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold text-center lg:text-left">
                        Unlock the Power of Digital Transformation
                    </h1>
                    <h2 className="text-lg sm:text-xl lg:text-2xl pt-4 lg:pt-6 text-gray-500 font-medium">
                        Web Development
                    </h2>
                    <h2 className="text-lg sm:text-xl lg:text-2xl pt-2 lg:pt-4 text-gray-500 font-medium">
                        Mobile Apps
                    </h2>
                    <p className="pt-10 sm:pt-16 lg:pt-20 text-base sm:text-lg lg:text-2xl text-gray-600 w-full sm:w-[400px] lg:w-[600px] leading-relaxed text-center lg:text-left">
                        From responsive web design to cross-platform mobile app development, 
                        I possess a diverse set of skills that allow me to tackle a wide range of projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Transform;
