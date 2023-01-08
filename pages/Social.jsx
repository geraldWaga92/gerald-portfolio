import Image from "next/image";
import React from "react";
import social from "../public/assets/projects/social-app.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Social = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] text-white bg-black/70 z-10" />
        <Image className="absolute bg-top z-[1]" src={social} alt="/" fill />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">GeraldSocial App</h2>
          <h2>Social Media Application</h2>
          <br />
          <h3>React / Sass & Material UI / Mysql</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 leading-7">
          <p>Project</p>
          <h2 className="mb-3">Overview</h2>

          <p>
            A facebook like application that uses some of the facebook features
            like posting an image, sharing and liking a post functionality which
            makes this project simple to use but very difficult to make. This
            project focuses on the CRUD functionality using Mysql which is great
            for easy to use in storing data like posts, likes, share, comments
            and relationships with users
            <br />
            <br />I learned a lot in this project from UI designing to creating
            Mysql table schema and advanced queries of data and how to handle
            Json web token with cookies for enhance security on our application,
            I also learn how to about REST API format which effectively handle
            our HTTP data requests.
          </p>

          <h3 className="mt-5">GeraldSocial Application Features: </h3>
          <div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Dark/Light theme mode with
              Context API
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Login and Register form
              with JWT and cookies
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> use react library TanStack
              Query to fetch server-side data
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> post, share and delete
              feature
            </div>
          </div>
          <a
            href="https://github.com/geraldWaga92/gerald-social-app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code and Demo Video</button>
          </a>
          {/* <a
            href="https://property-finder-development.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a> */}
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies Used</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Sass & Material UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Moment Library
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bcrypts, cookie parser
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Nodemon, multer, cors
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node, Express, JWT
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mysql for backend
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Social;
