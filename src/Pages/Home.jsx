// src/App.js
import React from "react";
import man from "../assets/portfolioman.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-r from-indigo-900 to-blue-600 min-h-screen p-10"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between  px-4">
        {/* Left Section */}
        <div className="text-white text-center md:text-left md:-mt-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bottom-to-top">
            Hello I'm
          </h1>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            PriyaDharshan
          </h2>
          <p className="flex justify-center items-center text-xl md:text-2xl mb-4  animate-left-to-right text-orange-600 border-2  rounded-full w-fit p-2 font-semibold bg-white cursor-pointer">
            CivilEngineer <FaArrowRight className="ml-2  mt-1" />
          </p>

          <p className="flex flex-center text-lg md:text-xl mb-8 font-semibold animate-scale-up">
            Experienced engineer with over 6 years specializing as a Planning
            Engineer. Proficient in managing projects
            <br /> such as a 380-flat, 19-floor multistorey residential building
            at CMK, and overseeing construction of industrial
            <br /> and commercial structures at URC. At Amaze, excelled in a
            quality control role focusing on industrial,
            <br /> commercial, and residential projects. Adept at project
            planning, coordination, and ensuring adherence to quality standards{" "}
            <br /> across diverse construction environments. Throughout my
            career, I have cultivated strong project management
            <br /> skills, demonstrating my ability to effectively plan,
            coordinate, and execute projects. I am confident in my
            <br /> capacity to contribute to and lead project management
            initiatives successfully.
          </p>

          {/* Customizable  buttons*/}
          {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a
              href="#quote"
              className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-700 text-white"
            >
              Get a Quote
            </a>
            <a
              href="/about"
              className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 text-white"
            >
              About Me
            </a>
          </div> */}
        </div>

        {/* Right Section (Image and Stats) */}
        <div className="relative">
          <img
            src={man}
            alt="James Smith"
            className="rounded-lg shadow-lg w-72 md:w-96 mx-auto  mb-6"
          />
          <div className="absolute top-20 right-20 bg-white p-3 rounded-lg shadow-lg">
            <p className="text-blue-900 text-xl font-bold">5</p>
            <p className="text-gray-600 text-sm">Years of Success</p>
          </div>
          <div className="absolute bottom-10 left-10 bg-white p-3 rounded-lg shadow-lg">
            <p className="text-pink-600 text-xl font-bold">800+</p>
            <p className="text-gray-600 text-sm">Projects Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
