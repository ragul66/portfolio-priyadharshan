import React from "react";
import { InView } from "react-intersection-observer";

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
      institution:
        "FUSCOS Matriculation Higher Secondary School, Tamil Nadu, India",
      period: "August 2009 - May 2010",
    },
  ];

  return (
    <section className="shadow-lg bg-gradient-to-r from-indigo-900 to-blue-600 text-white p-4 lg:max-h-screen font-primary">
      <div className="shadow-lg max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Title Section */}
        <InView triggerOnce={true} threshold={0.5}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`text-center mb-12 transition-transform duration-500 ${
                inView
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-20"
              }`}
            >
              <h2 className="text-4xl font-bold mb-6">
                EDUCATION <span className="text-sm">2009-2024</span>
              </h2>

              <div className="border-b-4 border-orange-600 w-20 mx-auto mb-6"></div>
              <p className="text-sm mb-6 max-w-2xl mx-auto">
                I hold a Bachelor of Engineering in Civil Engineering and have
                completed my MBA in Project Management. These programs have
                equipped me with the skills and knowledge to manage large-scale
                projects and apply advanced engineering concepts in the real
                world.
              </p>
            </div>
          )}
        </InView>

        {/* Education Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mb-3">
          {educationDetails.map((edu, index) => (
            <InView triggerOnce={true} threshold={0.5} key={index}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`border-2 border-white p-4 rounded-lg hover:bg-white hover:text-black transition duration-300 transform transition-transform duration-500 ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-orange-600">
                    {edu.degree}
                  </h3>
                  <p className="text-xl">{edu.institution}</p>
                  <p className="text-sm">{edu.period}</p>
                </div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
