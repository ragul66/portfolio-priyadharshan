import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Intelligence Business Analyst",
      company: "Condunent Business Services, Bangalore, India",
      date: "April 2022 - March 2023",
      description: [
        "Implemented SAP Ariba procurement solutions to streamline business operations.",
        "Configured SAP Ariba to meet specific business requirements, managed supplier relationships, and provided technical support.",
        "Enhanced operational efficiency and improved supplier management.",
      ],
    },
    {
      title: "Quantity Surveyor",
      company: "CMK Projects Pvt Ltd, Chennai, India",
      date: "February 2020 - March 2022",
      description: [
        "Managed project budgets, scheduling, and cost control.",
        "Handled supplier quotations, procurement tasks, and ensured material quality standards.",
        "Monitored and reported on project costs and managed payments for subcontractors and suppliers.",
      ],
    },
    {
      title: "Planning and Billing Engineer",
      company: "URC Construction Pvt Ltd, Erode, India",
      date: "April 2017 - January 2020",
      description: [
        "Oversaw architectural compliance, invoicing, and project scheduling.",
        "Collaborated with clients and management to ensure timely project progress.",
        "Maintained site documentation and ensured smooth project execution.",
      ],
    },
    {
      title: "Quality Technician",
      company: "Amaze Concrete Company, Chennai, India",
      date: "October 2016 - March 2017",
      description: [
        "Conducted quality tests on materials like water, aggregates, cement, and fly ash.",
        "Prepared daily test reports and ensured product stability before dispatch.",
        "Designed and analyzed concrete mix designs, ensuring quality standards.",
      ],
    },
  ];

  return (
    <div className="mx-auto p-6 lg:max-h-screen bg-gradient-to-r from-indigo-900 to-blue-600 lg:-mt-10 font-primary ">
      <h1 className="text-3xl font-bold mb-2 text-center text-white mt-12">
        Experience
      </h1>
      <div className="border-b-4 border-orange-600 w-20 mx-auto mb-4"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-bottom-to-top">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-transparent shadow-md shadow-white rounded-lg p-6 hover:shadow-lg transition duration-300 "
          >
            <h2 className="text-xl font-semibold text-orange-600 animate-bottom-to-top">
              {experience.title}
            </h2>
            <p className="text-white animate-left-to-right">
              {experience.company}
            </p>
            <p className="text-white text-sm animate-left-to-right">
              {experience.date}
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-white animate-left-to-right">
              {experience.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
