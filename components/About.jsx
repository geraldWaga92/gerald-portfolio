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
            Hi, I'm Gerald a self-taught Web Developer who is passionate about
            building responsive and user-friendly web applications. In more than
            1 year of my of learning I improved my knowledge on the 3 basic
            structure of a web application which is HTML, CSS and JavaScript, I
            choose React as my main framework for my every project and I also
            have basic knowledge on Next.js for my React server-side rendering
            together with node.js library. Though I'm not an expert on back-end
            technology, but I have used them in my projects using languages such
            as firebase, MongoDb and Mysql and CMS language such as Strapi. With
            this experience it further expand my knowledge and awareness how the
            web application communicates with data through API requests.
          </p>
          <p className="py-2 text-gray-600">
            Understanding clean and readable code and troubleshooting problems
            with performance issues or user experience has boosted my confidence
            in ensuring web applications that worked. I also realized how
            important Version Control on my every project because it lets me
            track all the changes to my code. Using this knowledge, I am
            confident I can add positive results in your company and accomplish
            every tasks I will be given with a minimal guidance from my seniors.
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
