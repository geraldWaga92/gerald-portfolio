import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Sass from "../public/assets/skills/sass.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Material from "../public/assets/skills/material-ui.png";
import Javascript from "../public/assets/skills/JS.png";
import ReactImg from "../public/assets/skills/react.png";
import NextJS from "../public/assets/skills/nextjs.png";
import MERN from "../public/assets/skills/mern-stack.png";
import Firebase from "../public/assets/skills/firebase.png";
import Mysql from "../public/assets/skills/mysql.png";
import Paypal from "../public/assets/skills/paypal.png";
import Strapi from "../public/assets/skills/strapi.png";
import Stripe from "../public/assets/skills/stripe.png";
import JWT from "../public/assets/skills/JWT.png";
import Github from "../public/assets/skills/github.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] px-5 mx-auto py-32 flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 cursor-pointer">
          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Sass} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Sass</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Material} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Material UI</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MERN} width="65" height="65" alt="/" />
              </div>
              <div className="flex content-center flex-col items-center justify-center">
                <h3>MERN Stack</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mysql} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Mysql</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Paypal} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Paypal Payment</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Strapi} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Strapi CMS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Stripe} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Stripe Payment</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JWT} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JWT & cookies</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl flex justify-center content-center hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="60" height="60" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
