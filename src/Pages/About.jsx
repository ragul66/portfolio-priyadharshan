// import React from "react";

// const About = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
//       {/* Left Side Photo with Custom Animation */}
//       <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0 animate-fadeInLeft">
//         <img
//           src="../src/assets/portfolioman.jpg"
//           alt="Profile"
//           className="w-48 h-48 rounded-full shadow-lg object-cover border-4 border-gray-300"
//         />
//       </div>

//       {/* Right Side Content with Custom Animation */}
//       <div className="md:w-1/2 w-full text-center md:text-left md:pl-10 animate-fadeInRight">
//         <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
//         <p className="text-gray-700 text-lg mb-4">
//           I am a <span className="font-bold">Civil Engineering graduate</span>{" "}
//           with a Bachelor’s degree in Civil Engineering and a{" "}
//           <span className="font-bold">
//             Master of Business Administration (MBA)
//           </span>
//           , blending technical expertise with strategic business insight.
//         </p>
//         <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
//           Key Skills:
//         </h2>
//         <ul className="list-disc list-inside text-gray-700">
//           <li>Civil Engineering & Structural Design</li>
//           <li>Project Management & Execution</li>
//           <li>Business Strategy & Financial Analysis</li>
//           <li>Leadership & Team Collaboration</li>
//           <li>Sustainable Design & Construction Practices</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default About;

// src/AboutMe.js
import React from "react";
import about from "../assets/about.webp";

const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-r from-indigo-900 to-blue-600 h-full md:max-h-screen text-white p-5 sm:p-10 flex flex-col lg:flex-row items-center font-primary"
    >
      {/* Left Section - Image */}
      <div className="flex-1 flex justify-center lg:justify-end lg:items-center mb-6 lg:mb-0">
        <img
          src={about} // replace with actual image path
          alt="Engineer Portrait"
          className="rounded-lg shadow-lg w-48 sm:w-60 md:w-80 lg:w-96"
        />
      </div>

      {/* Right Section - About Me Text */}
      <div className="flex-1 lg:pl-12 lg:-mt-6 ">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-16 bg-orange-600 mb-6"></div>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-3xl">
          As a highly skilled Civil Engineer with a focus on both technical and
          managerial roles, I have gained diverse experience in the construction
          industry through various positions such as Quantity Surveyor, Business
          Analyst, and Billing Engineer. My professional journey has equipped me
          with the ability to drive project success through cost-effective
          management, supplier coordination, and rigorous quality control, all
          while adhering to strict regulatory and safety standards. Currently
          pursuing an MBA in Project Management, I am committed to further
          enhancing my expertise in leading large-scale civil projects with a
          focus on innovation, efficiency, and precision. Currently, I am
          advancing my education with an MBA in Project Management at Dublin
          Business School. I previously earned a Bachelor of Technology in
          Mechanical Engineering from Heera College of Engineering, Trivandrum.
          My background is further enriched by internships and workshops that
          have solidified my technical expertise. In addition to my technical
          and project management skills, I hold a NEBOSH certification and an
          Irish driving license. My proactive involvement in sports and cultural
          events throughout my academic career reflects my strong teamwork and
          leadership abilities.
        </p>
      </div>
    </div>
  );
};

export default About;
