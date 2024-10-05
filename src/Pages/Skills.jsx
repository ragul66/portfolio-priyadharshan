// import React from "react";

// const Skills = () => {
//   const skills = [
//     {
//       title: "Project Management",
//       //   description:
//       //     "Proficient in overseeing the end-to-end lifecycle of construction projects, from planning and budgeting to execution and completion.",
//       img: "https://via.placeholder.com/150", // Replace with actual image
//     },
//     {
//       title: "Critical Thinking and Problem Solving",
//       //   description:
//       //     "Adept at analyzing complex problems, devising practical solutions, and implementing strategies that align with project goals.",
//       img: "https://via.placeholder.com/150", // Replace with actual image
//     },
//     {
//       title: "Technical Proficiency",
//       //   description:
//       //     "Expertise in SAP Ariba procurement solutions, AutoCAD, Primavera, Revit Architecture, and STAAD Pro, ensuring optimal use of technology in civil engineering projects.",
//       img: "https://via.placeholder.com/150", // Replace with actual image
//     },
//     {
//       title: "Regulatory Compliance",
//       //   description:
//       //     "Extensive knowledge of local and international regulations governing construction projects, ensuring adherence to safety and quality standards.",
//       img: "https://via.placeholder.com/150", // Replace with actual image
//     },
//     {
//       title: "Communication",
//       //   description:
//       //     "Strong verbal and written communication skills, with a proven ability to lead teams, manage client relationships, and present technical reports to stakeholders.",
//       img: "https://via.placeholder.com/150", // Replace with actual image
//     },
//   ];

//   return (
//     <div className=" mx-auto p-6 lg:max-h-screen  bg-gradient-to-r from-indigo-900 to-blue-600 font-primary">
//       <h1 className="text-3xl font-bold mb-8 text-center ">Skills</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300 flex items-center space-x-4 bg-transparent"
//           >
//             <img
//               src={skill.img}
//               alt={skill.title}
//               className="w-24 h-24 rounded-full object-cover"
//             />
//             <div>
//               <h2 className="text-xl font-semibold text-white">
//                 {skill.title}
//               </h2>
//               <p className="mt-2 text-white">{skill.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;
import React from "react";
import project from "../assets/projectmanagement.jpeg";
import critical from "../assets/criticalthinking.jpg";
import technical from "../assets/technicalprofieciency.jpeg";
import regulatory from "../assets/regulatorycompliance.jpg";
import communication from "../assets/communication.jpeg";
import skill from "../assets/skills.png";

const Skills = () => {
  const skills = [
    {
      title: "Project Management",
      img: project, // Replace with actual image path
    },
    {
      title: "Critical Thinking and Problem Solving",
      img: critical, // Replace with actual image path
    },
    {
      title: "Technical Proficiency",
      img: technical, // Replace with actual image path
    },
    {
      title: "Regulatory Compliance",
      img: regulatory, // Replace with actual image path
    },
    {
      title: "Communication",
      img: communication, // Replace with actual image path
    },
  ];

  return (
    <>
      <div className=" mx-auto p-6 lg:min-h-screen bg-gradient-to-r from-indigo-900 to-blue-600 font-primary ">
        <h1 className="text-4xl font-bold mb-12 text-center text-white ">
          Skills
        </h1>
        <div className="flex flex-wrap justify-center gap-16 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-transparent border-2 border-white p-2 rounded-lg"
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="w-44 h-44 object-contain"
              />
              <h2 className="text-xl font-bold text-white mt-4 bg-gradient-to-tr from-indigo-600 to-orange-600">
                {skill.title}
              </h2>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center items-center">
          <img src={skill} className="w-48 h-48 " />
        </div> */}
      </div>
    </>
  );
};

export default Skills;
