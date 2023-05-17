import Image from "next/image";
import Link from "next/link";
import React from "react";
import pizza_app from "../public/assets/projects/pizza.png";
import chat_app from "../public/assets/projects/chat.png";
import social_app from "../public/assets/projects/social-app.png";
import Gerald_eshop from "../public/assets/projects/gerald-eshop.png";
import Expense_tracker from "../public/assets/projects/expense-tracker-app.png";
import Project_Management from "../public/assets/projects/project-management-app.png";
import Shoes_CRUD_product from "../public/assets/projects/shoes-product-CRUD-app.png";
import DevOps from "../public/assets/projects/jenkins2.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-5 py-40">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Gerald-eshop Online"
            backgroundImg={Gerald_eshop}
            projectUrl="/Shop"
            tech="React, MongoDB"
          />

          <ProjectItem
            title="Expense tracker dashboard"
            backgroundImg={Expense_tracker}
            projectUrl="/Expense-Dashboard"
            tech="React, MongoDB"
          />

          <ProjectItem
            title="Project Management App"
            backgroundImg={Project_Management}
            projectUrl="/Project-management"
            tech="React, GraphQl, Apollo"
          />

          <ProjectItem
            title="Shoes Product CRUD App"
            backgroundImg={Shoes_CRUD_product}
            projectUrl="/Product"
            tech="React, PostgreSQL, prisma"
          />

          <ProjectItem
            title="DevOps project with jenkins, aws, docker, solarqube"
            backgroundImg={DevOps}
            projectUrl="/DevOps"
            tech="jenkins, aws, docker, solarqube"
          />

          <ProjectItem
            title="Realtime Chat App"
            backgroundImg={chat_app}
            projectUrl="/Chat"
            tech="React, firebase"
          />

          <ProjectItem
            title="Pizza Order App"
            backgroundImg={pizza_app}
            projectUrl="/Pizza"
            tech="Next.js, MongoDB"
          />

          <ProjectItem
            title="Social Media App"
            backgroundImg={social_app}
            projectUrl="/Social"
            tech="React, Mysql"
          />
          {/* <ProjectItem
            title="E-commerce"
            backgroundImg={e_commerce}
            projectUrl="/Store"
            tech="React JS"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
