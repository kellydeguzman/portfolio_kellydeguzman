import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar({ logo }) {
  return (
    <div className="fixed top-0 w-full bg-gray-400 F z-10">
      <div className="flex justify-between items-center h-24 px-4">
        <div className="logo">
          <img src="./images/logo2.png" className="w-54 h-14 pl-20" alt="Logo" />
        </div>
        <div className="pr-12">
        <ul className="flex space-x-10 text-2xl">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-black font-semibold hover:text-blue-400 border-blue-500 text-opacity-100 hover:text-opacity-75">Home</Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-black font-semibold hover:text-blue-400 border-blue-500 text-opacity-100 hover:text-opacity-75">About</Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                duration={500}
                className="text-black font-semibold hover:text-blue-400 border-blue-500 text-opacity-100 hover:text-opacity-75">Skills</Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="text-black font-semibold hover:text-blue-400 border-blue-500 text-opacity-100 hover:text-opacity-75">Education</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


