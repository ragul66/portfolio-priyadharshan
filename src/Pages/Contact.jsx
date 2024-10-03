import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 to-blue-600 text-white min-h-screen flex flex-col items-center justify-center lg:-mt-36">
      <h1 className="text-4xl lg:text-5xl font-bold mb-2">GET IN TOUCH</h1>
      <p className="text-lg lg:text-xl italic mb-10">Let's Work Together</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 p-3 rounded-full mb-3">
            {/* <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h4l3 9 6-18 4 9h4"
              />
            </svg> */}
            <FaMobileAlt size={35} className="text-black" />
          </div>
          <h3 className="text-xl font-semibold">Mobile</h3>
          <p className="text-md">+353-894455400</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-blue-500 p-3 rounded-full mb-3">
            {/* <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m0 0l-4 4m4-4l4 4m0-4l4-4"
              />
            </svg> */}
            <MdEmail size={35} className="text-black" />
          </div>
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-md">priyadarshan@outlook.com</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-blue-500 p-3 rounded-full mb-3">
            {/* <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a9 9 0 00-9-9H6"
              />
            </svg> */}
            <FaRegAddressCard size={35} className="text-black" />
          </div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-md">
            Apt 3, 40 Gardiner St Upper, Dublin O1, D01RR04
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-blue-500 p-3 rounded-full mb-3">
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 17a4 4 0 01-8 0m8 0v3a4 4 0 01-8 0m8-3h4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold">LinkedIn</h3>
          <a
            href="https://linkedin.com/in/deepson-john-a232a9148"
            className=" underline"
          >
            linkedin.com/in/priyadarshan
          </a>
        </div>
      </div>

      {/* <div className="mt-16 w-full flex justify-center">
        <h2 className="text-3xl font-primary font-bold  bg-clip-text  text-orange-600">
          PriyaDarshan
        </h2>
      </div> */}
    </section>
  );
};

export default Contact;
