import React from "react";
import { InView } from "react-intersection-observer";
import project from "../assets/projectmanagement.jpeg";
import critical from "../assets/criticalthinking.jpg";
import technical from "../assets/technicalprofieciency.jpeg";
import regulatory from "../assets/regulatorycompliance.jpg";
import communication from "../assets/communication.jpeg";
import primavera from "../assets/primevera.jpg"; // Replace with actual image path
import autocad from "../assets/autocad.jpg"; // Replace with actual image path
import revit from "../assets/revit.jpg"; // Replace with actual image path
import staad from "../assets/staad.jpeg"; // Replace with actual image path
import msp from "../assets/msp.jpg"; // Replace with actual image path

const Skills1 = () => {
  const skills = [
    {
      title: "Project Management",
      img: project,
    },
    {
      title: (
        <>
          Critical Thinking <br /> and <br />
          Problem Solving
        </>
      ),
      img: critical,
    },
    {
      title: "Technical Proficiency",
      img: technical,
    },
    {
      title: "Regulatory Compliance",
      img: regulatory,
    },
    {
      title: "Communication",
      img: communication,
    },
  ];

  const technicalSkills = [
    {
      title: "Primavera",
      img: primavera,
    },
    {
      title: "AutoCAD",
      img: autocad,
    },
    {
      title: "Revit Architecture",
      img: revit,
    },
    {
      title: "STAAD Pro",
      img: staad,
    },
    {
      title: "MSP",
      img: msp,
    },
  ];

  return (
    <>
      <div className="shadow-lg mx-auto p-6 lg:min-h-screen bg-gradient-to-r from-indigo-900 to-blue-600 font-primary">
        <h1 className="text-2xl font-bold mb-2 text-center text-white ">
          Skills
        </h1>
        <div className="border-b-4 border-orange-600 w-20 mx-auto mb-8"></div>

        {/* General Skills Section */}
        {/* <h2 className="text-2xl font-bold mb-8 text-center text-white">
          General Skills
        </h2> */}
        <div className="flex flex-wrap justify-center gap-16 mb-16">
          {skills.map((skill, index) => (
            <InView key={index} triggerOnce={true} threshold={0.5}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`flex flex-col items-center bg-transparent border-2 border-white p-2 rounded-lg transition-opacity duration-500 ${
                    inView ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={skill.img}
                    alt={skill.title}
                    className="w-44 h-44 object-contain"
                  />
                  <h2 className="text-xl font-bold text-white mt-4 text-center">
                    {skill.title}
                  </h2>
                </div>
              )}
            </InView>
          ))}
        </div>

        {/* Technical Skills Section */}
        <h2 className="text-2xl font-bold mb-2 text-center text-white">
          Technical Skills
        </h2>
        <div className="border-b-4 border-orange-600 w-20 mx-auto mb-8"></div>
        <div className="flex flex-wrap justify-center gap-16">
          {technicalSkills.map((skill, index) => (
            <InView key={index} triggerOnce={true} threshold={0.5}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`flex flex-col items-center bg-transparent border-2 border-white p-2 rounded-lg transition-opacity duration-500 ${
                    inView ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={skill.img}
                    alt={skill.title}
                    className="w-44 h-44 object-contain"
                  />
                  <h2 className="text-xl font-bold text-white mt-4 text-center">
                    {skill.title}
                  </h2>
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills1;
