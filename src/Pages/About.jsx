import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
      {/* Left Side Photo with Custom Animation */}
      <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0 animate-fadeInLeft">
        <img
          src="../src/assets/portfolioman.jpg"
          alt="Profile"
          className="w-48 h-48 rounded-full shadow-lg object-cover border-4 border-gray-300"
        />
      </div>

      {/* Right Side Content with Custom Animation */}
      <div className="md:w-1/2 w-full text-center md:text-left md:pl-10 animate-fadeInRight">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
        <p className="text-gray-700 text-lg mb-4">
          I am a <span className="font-bold">Civil Engineering graduate</span>{" "}
          with a Bachelor’s degree in Civil Engineering and a{" "}
          <span className="font-bold">
            Master of Business Administration (MBA)
          </span>
          , blending technical expertise with strategic business insight.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Key Skills:
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Civil Engineering & Structural Design</li>
          <li>Project Management & Execution</li>
          <li>Business Strategy & Financial Analysis</li>
          <li>Leadership & Team Collaboration</li>
          <li>Sustainable Design & Construction Practices</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
