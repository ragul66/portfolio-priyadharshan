// // src/components/Navbar.js
// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className=" bg-gradient-to-r from-indigo-900 to-blue-600 p-10">
//         <nav className="bg-blue-900 p-4">
//           <div className="container mx-auto flex justify-between items-center">
//             {/* Logo */}
//             <div className="text-2xl text-white font-bold">Portfolio</div>

//             {/* Desktop Menu */}
//             <ul className="hidden md:flex space-x-6 text-white">
//               <li>
//                 <a href="/" className="hover:text-orange-500">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="hover:text-orange-500">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="/portfolio" className="hover:text-orange-500">
//                   Portfolio
//                 </a>
//               </li>
//               <li>
//                 <a href="/service" className="hover:text-orange-500">
//                   Service
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="hover:text-orange-500">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#download"
//                   className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 text-white"
//                 >
//                   Download CV
//                 </a>
//               </li>
//             </ul>

//             {/* Mobile Menu Toggle Button */}
//             <div className="md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="text-white focus:outline-none"
//               >
//                 {/* If menu is open, show close icon, else show hamburger icon */}
//                 {isOpen ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16m-7 6h7"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isOpen && (
//             <ul className="md:hidden bg-blue-900 text-white text-center space-y-4 p-4">
//               <li>
//                 <a href="/" className="block hover:text-orange-500">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="/about" className="block hover:text-orange-500">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="/portfolio" className="block hover:text-orange-500">
//                   Portfolio
//                 </a>
//               </li>
//               <li>
//                 <a href="/services" className="block hover:text-orange-500">
//                   Service
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="block hover:text-orange-500">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#download"
//                   className="block bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 text-white"
//                 >
//                   Download CV
//                 </a>
//               </li>
//             </ul>
//           )}
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;

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
      ? "text-red-500"
      : "hover:text-orange-500";
  };

  return (
    <>
      <div className=" bg-gradient-to-r from-indigo-900 to-blue-600 p-3 md:p-10 font-primary">
        <nav className="from-blue-600 to-indigo-900 p-4">
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
                  className={`${isActive("/about")} hover:text-orange-500`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className={`${isActive("/portfolio")} hover:text-orange-500`}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  className={`${isActive("/service")} hover:text-orange-500`}
                >
                  Service
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
              <li>
                <a
                  href="#download"
                  className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 text-white"
                >
                  Download CV
                </a>
              </li>
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
                  href="/portfolio"
                  className={`${isActive(
                    "/portfolio"
                  )} block hover:text-orange-500`}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/service"
                  className={`${isActive(
                    "/service"
                  )} block hover:text-orange-500`}
                >
                  Service
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
                  href="#download"
                  className="block bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 text-white"
                >
                  Download CV
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
