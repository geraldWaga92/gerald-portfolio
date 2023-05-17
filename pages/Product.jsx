import Image from "next/image";
import React from "react";
import Shoes from "../public/assets/projects/shoes-product-CRUD-app.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Product = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[60vh] text-white bg-black/70 z-10" />
        <Image className="absolute bg-top z-[1]" src={Shoes} alt="/" fill />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">CRUD Shoe Product</h2>
          {/* <h2>Your One stop online shop</h2> */}
          <br />
          <h3>React / PostgreSQL / Prisma </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 leading-7">
          <p>Project</p>
          <h2 className="mb-3">Overview</h2>

          <p>
            CRUD Shoe Product Application display all the shoe product on the table, we can create product, 
            delete product and update the product depending on our needs.
            <br />
            <br />
            This application was created using next.js 13 with typescript for front-end and PostgreSQL for storing data and also
            Prisma to easily manage and interact with our database.
          </p>

          <h3 className="mt-5">CRUD Shoe Product Application Features: </h3>
          <div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Create Product 
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Delete Product 
            </div>
            <div className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="pr-1" /> Update Product 
            </div>
          </div>
          <a
            href="https://github.com/geraldWaga92/Shoes-CRUD-Application"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies Used</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Prisma
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

export default Product;
