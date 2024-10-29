import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Projects", link: "/#projects" },
  { id: 3, name: "Skills", link: "/#skills" },
  { id: 4, name: "About Me", link: "/#about" },
  { id: 5, name: "Contact", link: "/#contact" },
];

const DropdownLinks = [
  { id: 1, name: "Featured Projects", link: "/#featured" },
  { id: 2, name: "Recent Work", link: "/#recent" },
  { id: 3, name: "Open Source", link: "/#opensource" },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-primary duration-200 relative z-40">
      <div className="flex justify-between items-center container mx-auto py-3 md:py-4">
        {/* Logo on the left */}
        <div className="flex items-center">
          <span className="font-bold text-white text-xl md:text-2xl ml-2">CodeLens</span>
        </div>

        {/* Links and Contact Us button */}
        <div >
          <ul className="hidden md:flex items-center text-white gap-3 md:gap-4">
            {/* First half of the menu */}
            {Menu.slice(0, 2).map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-3 md:px-4 text-sm md:text-base hover:text-[#b9b8b6] duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Dropdown for Portfolio Projects */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-1 md:gap-[2px] text-sm md:text-base py-2">
                Projects
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[180px] md:w-[200px] rounded-md text-white p-2 shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full bg-slate-500 rounded-md p-2 text-sm hover:text-black hover:bg-gray-200"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {/* Second half of the menu */}
            {Menu.slice(2).map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-3 md:px-4 text-sm md:text-base hover:text-gray-300 duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Us button for small screens */}
          <div className="md:hidden">
            <a
              href="/#contact"
              className="bg-white text-primary font-semibold text-sm py-2 px-4 rounded-full duration-200 hover:bg-primary hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
