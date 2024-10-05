import React from "react";
import { FaArrowUp } from "react-icons/fa"; // Importing an arrow icon

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-blue-600 text-white p-4 flex justify-between items-center fixed bottom-0 w-full font-primary">
      <div className="text-md font-semibold">
        Priyadarshanravikumar@gmail.com {/* Replace with your actual name */}
      </div>
      <a href="#top" className="hover:text-orange-500">
        <FaArrowUp className="h-6 w-6" /> {/* Top arrow icon */}
      </a>
    </footer>
  );
};

export default Footer;
