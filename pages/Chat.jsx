import Image from "next/image";
import React from "react";
import chat from "../public/assets/projects/chat.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const pizza = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] text-white bg-black/70 z-10" />
        <Image className="absolute bg-top z-[1]" src={chat} alt="/" fill />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Gerald's Chat App</h2>
          <h2>Your favorite chat application</h2>
          <br />
          <h3>React / Sass / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 leading-7">
          <p>Project</p>
          <h2 className="mb-3">Overview</h2>

          <p>
            A simple chat application which let you send and receive messages
            instantly, it can store latest conversation with other users, search
            a user with our search input and make conversation when we select
            the user and instantly display on our chat panel all the
            conversation with the user selected which also make this application
            real time on sending and receiving messages. We can send images,
            select the profile picture we like, display the conversation time
            and only the logged in user can use the app.
            <br />
            <br />
            This app comes with login and register functionality and all our
            data like image, users name with info and chat conversation were all
            stored on our firebase backend making this app secure and easy to
            use.
          </p>

          <h3 className="mt-5">Chat Application Features: </h3>
          <div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Login and register form
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> User authentication
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Protected route which
              blocked user if not logged in
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Use firebase v9 to fetched
              chats conversation
            </div>
          </div>
          <a
            href="https://github.com/geraldWaga92/gerald_chat_app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code and Demo Video</button>
          </a>
          <a
            href="https://gerald-chat-app-c2cu.vercel.app/login"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies Used</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Sass
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase v9
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

export default pizza;
