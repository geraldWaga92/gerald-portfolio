import Image from "next/image";
import React from "react";
import store from "../public/assets/projects/e-commerce2.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Store = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] text-white bg-black/70 z-10" />
        <Image className="absolute bg-top z-[1]" src={store} alt="/" fill />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">GeraldStore Application</h2>
          <h2>E-commerce Online Shop </h2>
          <br />
          <h3>React / Sass / Strapi CMS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 leading-7">
          <p>Project</p>
          <h2 className="mb-3">Overview</h2>

          <p>
            GeraldStore is an e-commerce app that sale clothing and other
            products, this application concept is the same with any other
            e-commerce app like features such as image slider on our main page,
            sorting the product from men, women, etc., sort price to the lowest
            price available and many more. We can browse the products we like
            and select the item which will directly send us to the order page
            where we can purchase using the Stripe payment method which is great
            for effective and secure payment transactions.
            <br />
            <br />
            We use Strapi CMS for our data storing using API requests so
            managing my product contents faster and securing my data from server
            becomes easy with Strapi.
          </p>

          <h3 className="mt-5">GeraldStore Application Features: </h3>
          <div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Vanilla JS image slider
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Sorting of price, category
              with ascending and descending
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Easy page navigation with
              Redux
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> React Persist State
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Easy cart functionality to
              checkout order and delete order
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Payment method with Stripe
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Strapi CMS for backend
            </div>
          </div>
          <a
            href="https://github.com/geraldWaga92/gerald-ecommerce-shop"
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
                <RiRadioButtonFill className="pr-1" /> Stripe Payment
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Strapi CMS
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

export default Store;
