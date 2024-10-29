import React from 'react';
import photo6 from '../assets/photo6.jpg';
import photo7 from '../assets/photo7.jpg';

const DigitalMaster = () => {
    return (
        <div className='bg-secondary w-full h-auto lg:h-[700px] mt-8 px-3 md:px-6'>
            <div className='text-center pt-5'>
                <h1 className='text-xl md:text-2xl font-semibold text-white tracking-widest'>Crafting Digital Masterpieces</h1>
                <h1 className='text-base md:text-xl text-gray-700 mt-3 md:mt-5 font-bold'>
                    Unleash the full potential of your digital presence
                </h1>
            </div>
            <div className='w-full flex flex-col lg:flex-row mt-6 lg:mt-8'>
                {/* Left Section with Image - hidden on xs and sm */}
                <div className='hidden lg:flex relative h-[500px] w-1/6'>
                    <img src={photo6} className='h-full w-full object-cover' alt="Portrait of a digital artist" />
                </div>
                <div className='relative bg-primary w-full lg:w-5/6 mt-4 lg:mt-0 p-3 lg:pl-16'>
                    {/* Second image, visible on large screens only */}
                    <img src={photo7} className='hidden lg:block lg:absolute lg:top-0 lg:right-0 lg:w-[300px] object-cover' alt="Digital artwork showcasing skills" />
                    <h1 className='text-2xl md:text-3xl font-bold pt-8 md:pt-16 lg:pt-32 text-white'>About Me</h1>
                    <h1 className='pt-3 md:pt-6 text-gray-600 text-base md:text-xl font-medium'>Discover My Achievements</h1>
                    <p className='pt-4 text-sm md:text-lg w-full md:w-[450px] text-gray-500 pb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officiis sequi
                        dolorum odio voluptates perspiciatis, dolor harum quod animi voluptate
                        tempora ipsam voluptatem quibusdam iste id ullam ducimus. Voluptas, esse?
                    </p>
                    <a href="#contact" className='text-gray-500 text-base md:text-xl font-light'>Get in Touch</a>
                    <p className='text-gray-500 pt-5 md:pt-8 w-full md:w-[300px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit,
                        eos culpa error labore voluptatibus at doloribus architecto totam pariatur.</p>
                </div>

                {/* Right Section */}
                <div className='relative bg-white w-full pt-8 lg:pt-10 px-3 md:px-5 lg:pl-20 lg:h-[600px]'>
                    <h1 className='text-2xl md:text-4xl font-medium'>My Experience</h1>
                    <p className='mb-4 pl-0 md:pl-4 text-gray-700 text-sm md:text-lg mt-5 md:mt-10 w-full md:w-[500px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
                        ipsa est omnis voluptate quae, sit maiores ratione dicta laborum libero,
                        neque dolores amet laboriosam? Nulla, reiciendis. Itaque optio temporibus vel.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis impedit, nulla itaque fugit minima beatae animi aperiam tenetur voluptas totam eligendi
                        vitae necessitatibus odio repellat aspernatur ipsa assumenda ducimus.
                    </p>
                    <div className='hidden lg:block absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary'>
                        <p className='font-bold pl-10 mt-6 w-[260px] text-white '>
                            Over the past few years, I’ve worked with technologies like HTML, CSS,
                            JavaScript, React, and Bootstrap to build various web projects, from simple
                            landing pages to complex applications. My goal is to continually grow as a developer
                            while helping others learn and explore the world of coding.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DigitalMaster;
