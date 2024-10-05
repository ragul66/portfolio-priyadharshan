import React from "react";
import project from "../assets/projectmanagement.jpeg";
import critical from "../assets/criticalthinking.jpg";
import technical from "../assets/technicalprofieciency.jpeg";
import regulatory from "../assets/regulatorycompliance.jpg";
import communication from "../assets/communication.jpeg";

const Skills = () => {
  const skills = [
    {
      title: "Project Management",
      img: project, // Replace with actual image path
    },
    {
      // Using an array to split the title with a <br /> tag
      title: (
        <>
          Critical Thinking <br /> and <br />
          Problem Solving
        </>
      ),
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
      <div className="shadow-lg mx-auto p-6 lg:min-h-screen bg-gradient-to-r from-indigo-900 to-blue-600 font-primary ">
        <h1 className="text-4xl font-bold mb-8 text-center text-white mt-14 ">
          Skills
        </h1>
        <div className="border-b-4 border-orange-600 w-20 mx-auto mb-8"></div>
        <div className="flex flex-wrap justify-center gap-16 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-transparent border-2 border-white p-2 rounded-lg animate-bottom-to-top"
            >
              <img
                src={skill.img}
                alt={skill.title}
                className="w-44 h-44 object-contain"
              />
              <h2 className="text-xl font-bold text-white mt-4   text-center">
                {skill.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
