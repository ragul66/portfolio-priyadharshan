import React from "react";
import projectImage from "../assets/project-image.jpg"; // Replace with your actual image path

const Projects = () => {
  return (
    <div className="bg-gray-100 min-h-screen bg-gradient-to-tr from-indigo-900 to-blue-600 font-primary">
      {/* Main Container */}
      <div className="container mx-auto shadow-lg bg-white p-6 rounded-lg flex flex-col lg:flex-row bg-gradient-to-tr from-indigo-900 to-blue-600">
        {/* Image Section */}
        <div className="flex-1 mb-6 lg:mb-0 lg:pr-6">
          <img
            src={projectImage}
            alt="Project Management"
            className="w-[500px] h-[500px] lg:ml-12  rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1">
          {/* Project Header */}
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            Role of Building Information Models (BIM) in Civil Engineering
          </h1>
          <h2 className="text-xl text-white font-medium mb-4">
            Project by Priyadarshan Ravikumar
          </h2>
          <h3 className="text-lg text-white mb-6">
            Submitted in partial fulfillment for the degree of MBA, Project
            Management at Dublin Business School
          </h3>

          {/* Project Details */}
          <div className=" text-white  rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <p className="text-lg mb-2">
              This dissertation focuses on the role of Building Information
              Models (BIM) in enhancing project management efficiency in civil
              engineering projects, specifically for a country like India.
            </p>
            <p className="text-lg mb-2">
              BIM has become a crucial tool in the construction industry,
              transforming project delivery processes through better data
              management, visualization, and collaboration between stakeholders.
            </p>
            <p className="text-lg">
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
