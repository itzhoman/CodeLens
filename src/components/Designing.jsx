import React from 'react';

const Designing = () => {
    return (
        <div className="bg-primary w-full h-auto py-20 flex items-center justify-center">
            <div className="text-center px-4 sm:px-8 md:px-12">
                <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mb-12">
                    Designing the Future of Digital
                </h1>
                <div className="flex flex-col md:flex-row md:justify-center gap-8 lg:gap-12 xl:gap-20 text-gray-400">
                    
                    {/* Section 1 */}
                    <div className="text-center md:text-start max-w-md">
                        <h2 className="text-lg sm:text-xl font-semibold">About Me</h2>
                        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-sm lg:text-base">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iste harum expedita? Ad repudiandae eum fugiat ipsam blanditiis praesentium deleniti illum numquam magni, quam tenetur consectetur delectus porro, at dolore?
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className="text-center md:text-start max-w-md">
                        <h2 className="text-lg sm:text-xl font-semibold">My Vision</h2>
                        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-sm lg:text-base">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iste harum expedita? Ad repudiandae eum fugiat ipsam blanditiis praesentium deleniti illum numquam magni, quam tenetur consectetur delectus porro, at dolore?
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div className="text-center md:text-start max-w-md">
                        <h2 className="text-lg sm:text-xl font-semibold">My Services</h2>
                        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-sm lg:text-base">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iste harum expedita? Ad repudiandae eum fugiat ipsam blanditiis praesentium deleniti illum numquam magni, quam tenetur consectetur delectus porro, at dolore?
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Designing;
