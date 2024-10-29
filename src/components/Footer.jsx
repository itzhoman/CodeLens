import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#365950] text-gray-300 py-10 mt-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-10">
        {/* Logo and Copyright */}
        <div className="sm:col-span-1 flex flex-col items-center sm:items-start">
          <div className="mb-4">
            {/* Replace this with an actual logo */}
                <a href="#">CodeLens</a>
          </div>
          <p className="font-bold text-lg">© 2024 Pixel Coder, Inc.</p>
          <p className="font-bold text-lg">All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="sm:col-span-1 text-center sm:text-left">
          <h3 className="font-extrabold text-xl mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white font-bold text-lg">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white font-bold text-lg">About</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white font-bold text-lg">Services</a></li>
            <li><a href="#" className="hover:text-white font-bold text-lg">Portfolio</a></li>
          </ul>
        </div>

        {/* Explore More */}
        <div className="sm:col-span-1 text-center sm:text-left">
          <h3 className="font-extrabold text-xl mb-4">Explore More</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white font-bold text-lg">Contact</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white font-bold text-lg">Testimonials</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white font-bold text-lg">Blog</a></li>
            <li><a href="#" className="hover:text-white font-bold text-lg">FAQs</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div className="sm:col-span-1 text-center sm:text-left">
          <h3 className="font-extrabold text-xl mb-4">Connect With Us</h3>
          <ul className="flex flex-col items-center sm:items-start gap-3">
            <li>
              <a href="#" className="flex items-center gap-3 hover:text-white font-bold text-lg">
                <FaLinkedin className="text-2xl" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 hover:text-white font-bold text-lg">
                <FaTwitter className="text-2xl" /> Twitter
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 hover:text-white font-bold text-lg">
                <FaInstagram className="text-2xl" /> Instagram
              </a>
            </li>
            <li>
              <a href="mailto:someone@example.com" className="flex items-center gap-3 hover:text-white font-bold text-lg">
                <FaEnvelope className="text-2xl" /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
