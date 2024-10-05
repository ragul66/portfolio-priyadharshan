import React from "react";
import projectImage from "../assets/project-image.jpg"; // Replace with your actual image path

const Projects = () => {
  return (
    <div className="lg:min-h-screen bg-gradient-to-r from-indigo-900 to-blue-600 font-primary">
      <h1 className="text-center text-3xl font-bold text-white mb-2 md:mt-0 animate-left-to-right">
        Project
      </h1>
      <div className="border-b-4 border-orange-600 w-20 mx-auto mb-4"></div>
      {/* Main Container */}
      <div className="container mx-auto shadow-lg p-6 rounded-lg flex flex-col lg:flex-row bg-gradient-to-r from-indigo-900 to-blue-600">
        <div className="flex-1 mb-6 lg:mb-0 lg:pr-6 flex justify-center items-center ">
          {/* Center the image on small and medium screens */}
          <img
            src={projectImage}
            alt="Project Management"
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-lg object-cover shadow-md animate-left-to-right"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 ">
          {/* Project Header */}
          <h1 className="text-4xl font-bold text-orange-600 mb-4 animate-fadeInLeft">
            Role of Building Information Models (BIM) in Civil Engineering
          </h1>
          <h2 className="text-xl text-white font-medium mb-4 animate-fadeInRight">
            Project by Priyadarshan Ravikumar
          </h2>
          <h3 className="text-lg text-white mb-6 anim animate-bottom-to-top">
            Submitted in partial fulfillment for the degree of MBA, Project
            Management at Dublin Business School
          </h3>

          {/* Project Details */}
          <div className="text-white rounded-lg ">
            <h2 className="text-2xl font-semibold mb-4 animate-bottom-to-top">
              Project Details
            </h2>
            <p className="text-lg mb-2 animate-bottom-to-top">
              This dissertation focuses on the role of Building Information
              Models (BIM) in enhancing project management efficiency in civil
              engineering projects, specifically for a country like India.
            </p>
            <p className="text-lg mb-2 animate-bottom-to-top">
              BIM has become a crucial tool in the construction industry,
              transforming project delivery processes through better data
              management, visualization, and collaboration between stakeholders.
            </p>
            <p className="text-lg animate-bottom-to-top">
              The research explores the significance of BIM in the construction
              industry, how it aids in information management, and the current
              perspectives and challenges in implementing BIM standards in
              India.
            </p>
          </div>

          {/* Supervisor Information */}
          {/* <div className="text-center">
            <h3 className="text-lg font-medium text-gray-800">
              Supervisor Name: Brian Raymond
            </h3>
            <p className="text-md text-gray-600">
              20<sup>th</sup> May 2024
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
