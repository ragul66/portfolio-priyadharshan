import React from "react";
import { useInView } from "react-intersection-observer";
import projectImage from "../assets/project-image.jpg"; // Replace with your actual image path

const Projects = () => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.3, // Trigger when 30% of the element is visible
  });

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: detailsRef, inView: detailsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="lg:min-h-screen bg-gradient-to-r from-indigo-900 to-blue-600 font-primary">
      <h1
        ref={titleRef}
        className={`text-center text-3xl font-bold text-white mb-2 md:mt-0 
          ${titleInView ? "animate-left-to-right" : "opacity-0"}
        `}
      >
        Project
      </h1>
      <div className="border-b-4 border-orange-600 w-20 mx-auto mb-4"></div>

      {/* Main Container */}
      <div className="container mx-auto shadow-lg p-6 rounded-lg flex flex-col lg:flex-row bg-gradient-to-r from-indigo-900 to-blue-600">
        <div className="flex-1 mb-6 lg:mb-0 lg:pr-6 flex justify-center items-center">
          {/* Center the image on small and medium screens */}
          <img
            ref={imageRef}
            src={projectImage}
            alt="Project Management"
            className={`w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] 
              rounded-lg object-cover shadow-md
              ${imageInView ? "animate-left-to-right" : "opacity-0"}`}
          />
        </div>

        {/* Details Section */}
        <div className="flex-1">
          {/* Project Header */}
          <h1
            className={`text-4xl font-bold text-orange-600 mb-4 
              ${detailsInView ? "animate-fadeInLeft" : "opacity-0"}
            `}
          >
            Role of Building Information Models (BIM) in Civil Engineering
          </h1>
          <h2
            className={`text-xl text-white font-medium mb-4 
              ${detailsInView ? "animate-fadeInRight" : "opacity-0"}
            `}
          >
            Project by Priyadarshan Ravikumar
          </h2>
          <h3
            className={`text-lg text-white mb-6 
              ${detailsInView ? "animate-bottom-to-top" : "opacity-0"}
            `}
          >
            Submitted in partial fulfillment for the degree of MBA, Project
            Management at Dublin Business School
          </h3>

          {/* Project Details */}
          <div
            ref={detailsRef}
            className={`text-white rounded-lg 
              ${detailsInView ? "animate-bottom-to-top" : "opacity-0"}
            `}
          >
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
