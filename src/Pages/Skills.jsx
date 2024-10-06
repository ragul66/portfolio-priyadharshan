import React from "react";
import { InView } from "react-intersection-observer";
import project from "../assets/projectmanagement.jpeg";
import critical from "../assets/criticalthinking.jpg";
import technical from "../assets/technicalprofieciency.jpeg";
import regulatory from "../assets/regulatorycompliance.jpg";
import communication from "../assets/communication.jpeg";

const Skills = () => {
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

  return (
    <>
      <div className="shadow-lg mx-auto p-6 lg:min-h-screen bg-gradient-to-r from-indigo-900 to-blue-600 font-primary ">
        <h1 className="text-4xl font-bold mb-8 text-center text-white mt-14 ">
          Skills
        </h1>
        <div className="border-b-4 border-orange-600 w-20 mx-auto mb-8"></div>

        <div className="flex flex-wrap justify-center gap-16 ">
          {skills.map((skill, index) => (
            <InView key={index} triggerOnce={true} threshold={1}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`flex flex-col items-center bg-transparent border-2 border-white p-2 rounded-lg transition-transform duration-500 ${
                    inView
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-20"
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

export default Skills;
