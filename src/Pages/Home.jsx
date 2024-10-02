// src/App.js
import React from "react";
import man from "../assets/portfolioman.jpg";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-r from-indigo-900 to-blue-600 min-h-screen p-10"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between  px-4">
        {/* Left Section */}
        <div className="text-white text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bottom-to-top">
            Hello I'm
          </h1>
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            PriyaDharshan
          </h2>
          <p className="text-xl md:text-2xl mb-4 font-mono animate-left-to-right">
            Civil Engineer
          </p>
          <p className="text-lg md:text-xl mb-8">
            Jodi kokhono vul hoye jai tumi oparadh nio na ptate velit esse
            cillum dolore.
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
            className="rounded-lg shadow-lg w-72 md:w-96 mx-auto md:ml-12 mb-6"
          />
          <div className="absolute top-10 right-10 bg-white p-3 rounded-lg shadow-lg">
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
