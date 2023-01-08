import Link from "next/link";
// import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center ">
      <div className="max-w-[1240px] w-full h-full  mx-auto p-5 flex justify-center items-center">
        <div className="mt-9">
          <h1 className=" text-gray-700">
            Hello, I&#39;m <span className="text-[#5651e5]"> Gerald</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Web Developer</h1>

          <p className="uppercase tracking-widest text-gray-600 text-lg">
            LOOKING FORWARD ON WORKING WITH YOU
          </p>

          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto text-lg">
            I’m focused on building responsive (and occasionally designing) and
            maintainable web applications with integrating back-end
            technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/gerald-waga"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-300">
                <FaLinkedinIn size={30} />
              </div>
            </a>
            <a
              href="https://github.com/geraldWaga92"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-300">
                <FaGithub size={30} />
              </div>
            </a>
            <Link href={"mailto:geraldwaga30@gmail.com"}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-300">
                <AiOutlineMail size={30} />
              </div>
            </Link>
            <Link href="./assets/Gerald-Resume.pdf" target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-125 ease-in duration-300">
                <BsFillPersonLinesFill size={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
