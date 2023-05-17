import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center ">
      <div className="max-w-[1240px] py-28 px-5 m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
          Hi, I'm Gerald, a self-taught Web Developer who is passionate about building responsive and user-friendly web applications. As I was learning web development, I fell in love with building applications that work and help solve people's needs.  
           <br />
           <br />
          It took me 1 and a half years to continue learning due to my obligations and now I am confident in my abilities and knowledge that I can add positive results with your company and accomplish every task I will be given with minimal guidance from my seniors.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
