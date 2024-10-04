// import React from "react";

// const Education = () => {
//   const educationDetails = [
//     {
//       degree: "MBA in Project Management",
//       institution: "Dublin Business School, Dublin, Ireland",
//       period: "April 2023 - May 2024",
//       // description:
//       //   "Through my ongoing MBA studies, I have developed an in-depth understanding of project management methodologies, leadership, and business strategies, enabling me to effectively manage complex projects in a dynamic business environment.",
//     },
//     {
//       degree: "Bachelor of Engineering in Civil Engineering",
//       institution:
//         "Fatima Michael College of Engineering and Technology, Tamil Nadu, India",
//       period: "August 2014 - April 2016",
//       // description:
//       //   "My undergraduate education provided a solid foundation in civil engineering principles, covering areas such as structural analysis, construction planning, and environmental engineering. This knowledge has been instrumental in my practical applications on various construction projects.",
//     },
//     {
//       degree: "Diploma in Civil Engineering",
//       institution: "KLN Memorial Polytechnic College, Tamil Nadu, India",
//       period: "August 2010 - May 2013",
//       // description:
//       //   "My diploma studies focused on core civil engineering subjects like surveying, estimation, and material science, shaping my initial interest in civil engineering and providing me with the technical skills to start my career in the field.",
//     },
//     {
//       degree: "10th Standard",
//       School: "E.B.G.MAtric.",
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-r from-indigo-900 to-blue-600 text-white lg:px-32 p-4 lg:max-h-screen -mb-12">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center">
//         {/* Left Section - Title and Description */}
//         <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
//           <h2 className="text-5xl font-bold mb-6">EDUCATION</h2>
//           <div className="border-b-4 border-orange-600 w-20 mx-auto lg:mx-0 mb-6"></div>
//           <p className="text-lg mb-6">
//             I hold a Bachelor of Engineering in Civil Engineering and am
//             currently pursuing my MBA in Project Management. These programs have
//             equipped me with the skills and knowledge to manage large-scale
//             projects and to apply advanced engineering concepts in the real
//             world.
//           </p>
//         </div>

//         {/* Right Section - Education Details */}
//         <div className="lg:w-1/2 space-y-5 ">
//           {educationDetails.map((edu, index) => (
//             <div
//               key={index}
//               className="text-left lg:text-left border-2 border-white p-2 "
//             >
//               <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 p-2">
//                 {edu.degree}
//               </h3>
//               <p className="text-xl">{edu.institution}</p>
//               <p className="text-sm text-gray-200">{edu.period}</p>
//               <p className="mt-4 text-base">{edu.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;

import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationDetails = [
    {
      degree: "MBA in Project Management",
      institution: "Dublin Business School, Dublin, Ireland",
      period: "April 2023 - May 2024",
    },
    {
      degree: "Bachelor of Engineering in Civil Engineering",
      institution:
        "Fatima Michael College of Engineering and Technology, Tamil Nadu, India",
      period: "August 2014 - April 2016",
    },
    {
      degree: "Diploma in Civil Engineering",
      institution: "KLN Memorial Polytechnic College, Tamil Nadu, India",
      period: "August 2010 - May 2013",
    },
    {
      degree: "10th Standard",
      institution: "E.B.G. Matriculation School, Tamil Nadu, India",
      period: "August 2009 - May 2010",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-900 to-blue-600 text-white p-4 lg:max-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 animate-scale-up">
            EDUCATION <span className="text-sm">2009-2024</span>
            {/* <FaGraduationCap size={35} /> */}
          </h2>

          <div className="border-b-4 border-orange-600 w-20 mx-auto mb-6"></div>
          <p className="text-sm mb-6 max-w-2xl mx-auto">
            I hold a Bachelor of Engineering in Civil Engineering and am
            currently Completed my MBA in Project Management. These programs
            have equipped me with the skills and knowledge to manage large-scale
            projects and to apply advanced engineering concepts in the real
            world.
          </p>
        </div>

        {/* Education Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mb-3 animate-bottom-to-top">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="border-2 border-white p-4 rounded-lg hover:bg-white hover:text-black transition duration-300 "
            >
              <h3 className="text-2xl font-bold text-orange-600 animate-left-to-right">
                {edu.degree}
              </h3>
              <p className="text-xl animate-left-to-right">{edu.institution}</p>
              <p className="text-sm hover:text-black text-gray-200 animate-left-to-right">
                {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
