import React from "react";
import { InView } from "react-intersection-observer";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="shadow-lg lg:space-x-24 bg-gradient-to-r from-indigo-900 to-blue-600 h-full lg:max-h-screen text-white p-5 sm:p-10 flex flex-col lg:flex-row items-center font-primary"
    >
      {/* Left Section - Image */}
      <InView triggerOnce={true} threshold={0.5}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`flex-1 flex justify-center lg:justify-end lg:items-center mb-6 lg:mb-0 transition-transform duration-500 ${
              inView
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform -translate-x-20"
            }`}
          >
            <img
              src={about} // replace with actual image path
              alt="Engineer Portrait"
              className="rounded-lg shadow-lg w-48 sm:w-60 md:w-80 lg:w-96"
            />
          </div>
        )}
      </InView>

      {/* Right Section - About Me Text */}
      <InView triggerOnce={true} threshold={0.5}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`flex-1 mb-7 transition-transform duration-500 ${
              inView
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-20"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-16 bg-orange-600 mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-3xl">
              As a highly skilled Civil Engineer with a focus on both technical
              and managerial roles, I have gained diverse experience in the
              construction industry through various positions such as Quantity
              Surveyor, Planning Engineer and Business Analyst. My professional
              journey has equipped me with the ability to drive project success
              through cost-effective management, supplier coordination, and
              rigorous quality control, all while adhering to strict regulatory
              and safety standards. Currently completed an MBA in Project
              Management, I am committed to further enhancing my expertise in
              leading large-scale civil projects with a focus on innovation,
              efficiency, and precision. My background is further enriched by
              internships and workshops that have solidified my technical
              expertise. In addition to my technical and project management
              skills, my proactive involvement in sports and cultural events
              throughout my academic career reflects my strong teamwork and
              leadership abilities.
              <br />
            </p>
          </div>
        )}
      </InView>
    </div>
  );
};

export default About;
