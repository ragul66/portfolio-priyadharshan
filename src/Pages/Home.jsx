// src/App.js
import React from "react";
import image from "../assets/homeimage.png";
import { FaArrowRight } from "react-icons/fa6";
import TypingText from "../components/TypingText";

//Pages from src
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="bg-gradient-to-r from-indigo-900 to-blue-600 p-0 sm:p-2 md:p-10 font-primary h-full lg:max-h-screen" // Set full height for small screens and max height for larger screens
      >
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 h-full">
          {/* Left Section */}
          <div className="text-white text-center lg:-mt-4 mt-3 lg:text-left  flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-bottom-to-top ">
              Hello I'm
            </h1>
            <div>
              {/* Typing animation for PriyaDharshan */}
              <TypingText text="PriyaDarshan R" speed={150} />
            </div>
            <a href="/service">
              <p className="flex mx-auto lg:mx-0 text-lg sm:text-xl md:text-2xl mb-4 animate-left-to-right text-orange-600 border-2 rounded-full w-fit p-2 font-semibold bg-white cursor-pointer">
                Civil Engineer <FaArrowRight className="ml-2 mt-1" />
              </p>
            </a>
            <p className="text-justify text-xs sm:text-sm md:text-base lg:text-lg mb-8 font-medium leading-relaxed px-2 sm:px-4 lg:px-0 lg:max-w-[800px] ">
              Experienced engineer with over 6 years specializing as a Planning
              Engineer. Proficient in managing projects such as a 380-flat,
              19-floor multistorey residential building at CMK, and overseeing
              construction of industrial and commercial structures at URC. At
              Amaze, excelled in a quality control role focusing on industrial,
              commercial, and residential projects. Adept at project planning,
              coordination, and ensuring adherence to quality standards across
              diverse construction environments. Throughout my career, I have
              cultivated strong project management skills, demonstrating my
              ability to effectively plan, coordinate, and execute projects. I
              am confident in my capacity to contribute to and lead project
              management initiatives successfully.
            </p>
          </div>

          {/* Right Section (Image and Stats) */}
          <div className="relative w-full sm:w-auto lg:w-1/2 flex-1 animate-bottom-to-top">
            <img
              src={image}
              alt="James Smith"
              className="rounded-lg shadow-lg mx-auto lg:h-[460px] w-48 sm:w-60 md:w-80 lg:w-80 lg:mr-10"
            />
            {/* <div className="absolute top-0 right-8 md:right-12 lg:ml-52 bg-white p-3 rounded-lg shadow-lg">
              <p className="text-blue-900 text-lg sm:text-xl font-bold">5</p>
              <p className="text-gray-600 text-xs sm:text-sm">
                Years of Success
              </p>
            </div> */}
            <div className="absolute bottom-10 left-8 sm:left-12 lg:left-72 bg-white p-3 rounded-lg shadow-lg">
              <p className="text-pink-600 text-lg sm:text-xl font-bold">5</p>
              <p className="text-gray-600 text-xs sm:text-sm">
                Years of Success
              </p>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
