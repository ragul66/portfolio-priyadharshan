// src/components/Navbar.js
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  const location = useLocation(); // Hook to get current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path
      ? "text-red-500 md:border-b-2 md:border-white lg:border-b-2 lg:border-white "
      : "hover:text-orange-500";
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href =
      "https://portfolio-priyadharshan.vercel.app/Priyadarshan Resume.pdf"; // Correct path to your file
    link.download = "Priyadarshan CV"; // Name for the downloaded file
    link.click();
  };

  return (
    <>
      <div className=" bg-gradient-to-r from-indigo-900 to-blue-600 p-3 md:p-10 font-primary">
        <nav className="from-blue-600 to-indigo-900 p-4 border-b-2 border-white">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl text-white font-bold">Portfolio</div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-white">
              <li>
                <a
                  href="/"
                  className={`${isActive("/")} hover:text-orange-500`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`${isActive("/about")} hover:text-orange-500 `}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/experience"
                  className={`${isActive("/experience")} hover:text-orange-500`}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="/education"
                  className={`${isActive("/education")} hover:text-orange-500`}
                >
                  Education
                </a>
              </li>

              <li>
                <a
                  href="/skills"
                  className={`${isActive("/skills")} hover:text-orange-500`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/project"
                  className={`${isActive("/project")} hover:text-orange-500`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`${isActive("/contact")} hover:text-orange-500`}
                >
                  Contact
                </a>
              </li>
              {/* Download CV Button */}
              <li>
                <a
                  href="https://portfolio-priyadharshan.vercel.app/Priyadarshan Resume.pdf" // Path to the CV file in the public folder
                  download="Priyadarshan CV" // Sets the default name of the downloaded file
                  className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 text-white"
                >
                  Download CV
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  onClick={handleDownloadCV} // Trigger the download with JavaScript
                  className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 text-white"
                >
                  Download CV
                </a>
              </li> */}
            </ul>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {/* If menu is open, show close icon, else show hamburger icon */}
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <ul className="md:hidden bg-blue-900 text-white text-center space-y-4 p-4">
              <li>
                <a
                  href="/"
                  className={`${isActive("/")} block hover:text-orange-500`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={`${isActive(
                    "/about"
                  )} block hover:text-orange-500`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/experience"
                  className={`${isActive(
                    "/experience"
                  )} block hover:text-orange-500`}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="/education"
                  className={`${isActive(
                    "/education"
                  )} block hover:text-orange-500`}
                >
                  Education
                </a>
              </li>

              <li>
                <a
                  href="/skills"
                  className={`${isActive(
                    "/skills"
                  )} block hover:text-orange-500`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/project"
                  className={`${isActive(
                    "/project"
                  )} block hover:text-orange-500`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`${isActive(
                    "/contact"
                  )} block hover:text-orange-500`}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={handleDownloadCV} // Trigger the download with JavaScript
                  className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 text-white"
                >
                  View CV
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
