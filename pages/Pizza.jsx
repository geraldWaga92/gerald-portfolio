import Image from "next/image";
import React from "react";
import pizza_app from "../public/assets/projects/pizza.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const pizza = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] text-white bg-black/70 z-10" />
        <Image className="absolute z-[1]" src={pizza_app} alt="/" fill />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Gerald's Pizza </h2>
          <h2>The Best Pizza in Town</h2>
          <br />
          <h3>Next.js / CSS / MongoDb</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 leading-7">
          <p>Project</p>
          <h2 className="mb-3">Overview</h2>
          <p>
            Online pizza shop gives costumer to just tap on their phone or pc to
            order, this project provides lists of pizza and its feature with
            their prices. We can order and select the product we like with
            additional toppings and sizes of the pizza. After selecting purchase
            button our Cart icon will be added with order notification and we
            will be directed into a new page where we can choose to pay on
            delivery method or by paypal payment method, we can then finally
            track our pizza status if it is on the way for delivery.
            <br />
            <br />
            This app also provides admin dashboard for the admin user so we can
            manage our orders status from pending to on the way for delivery. We
            can create new product from admin and delete product, I use
            cloudinary for uploading images of the product and Next.js with
            react for fast server-side page rendering and lastly all the data
            are stored on MongoDb backend.
          </p>

          <h3 className="mt-5">Pizza Shop Application Features: </h3>
          <div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Admin Dashboard
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Add new pizza button
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Cookies authentication
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Order Tracking Page
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Cash on delivery payment
              method
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Paypal Payment Method
            </div>
          </div>
          <a
            href="https://github.com/geraldWaga92/pizza-app"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code and Demo Video</button>
          </a>
          {/* <a
            href="https://gerald-pizza-4eu.vercel.app/"
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
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Paypal Payment
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Cloudinary Platform
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JWT library
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Cookies
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
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
