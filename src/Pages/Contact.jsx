import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-900 to-blue-600 text-white lg:max-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-4xl lg:text-5xl font-bold mb-2 mt-12 lg:mt-0">
        GET IN TOUCH
      </h1>
      <p className="text-lg lg:text-xl italic mb-10  ">Let's Work Together</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-center lg:grid-cols-2 lg:mb-3 p-12 md:p-0">
        <div className="flex flex-col items-center border-2 border-orange-600 rounded-3xl p-6 gap-2 animate-left-to-right">
          <div className="bg-blue-500 p-3 rounded-full mb-3">
            <FaMobileAlt size={35} className="text-black" />
          </div>
          <h3 className="text-xl font-semibold">Mobile</h3>
          <p className="text-md">0899471673</p>
        </div>

        <div className="flex flex-col items-center border-2 border-orange-600 rounded-3xl  p-6 gap-2 animate-left-to-right">
          <div className="bg-blue-500 p-3 rounded-full mb-3">
            <MdEmail size={35} className="text-black" />
          </div>
          <h3 className="text-xl font-semibold">Email</h3>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Priyadarshanravikumar@gmail.com&su=Hello&body=Hi%20Priyadarshan,"
            target="_blank"
            rel="noopener noreferrer"
            className="text-md underline"
          >
            Priyadarshanravikumar@gmail.com
          </a>
        </div>

        <div className="flex flex-col items-center border-2 border-orange-600 rounded-3xl  p-6 gap-2 animate-bottom-to-top">
          <div className="bg-blue-500 p-3 rounded-full mb-3">
            <FaRegAddressCard size={35} className="text-black" />
          </div>
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-md">
            Apartment 4 boatyard apartments, gas yard lane, <br />
            Malahide K36WN32
          </p>
        </div>

        <div className="flex flex-col items-center border-2 border-orange-600 rounded-3xl p-6 gap-2 animate-bottom-to-top">
          <div className="bg-blue-500 p-3 rounded-full mb-3">
            <FaLinkedin size={35} className="text-black" />
          </div>
          <h3 className="text-xl font-semibold">LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/priyadarshan-ravikumar-55ba62200/"
            className="underline"
          >
            www.linkedin.com/in/priyadarshan-ravikumar-55ba62200/
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
