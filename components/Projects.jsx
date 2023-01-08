import Image from "next/image";
import Link from "next/link";
import React from "react";
import pizza_app from "../public/assets/projects/pizza.png";
import chat_app from "../public/assets/projects/chat.png";
import social_app from "../public/assets/projects/social-app.png";
import e_commerce from "../public/assets/projects/e-commerce.png";
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
            title="Realtime Chat App"
            backgroundImg={chat_app}
            projectUrl="/Chat"
            tech="React JS"
          />
          <ProjectItem
            title="Pizza Order App"
            backgroundImg={pizza_app}
            projectUrl="/Pizza"
            tech="Next.js"
          />
          <ProjectItem
            title="Social Media App"
            backgroundImg={social_app}
            projectUrl="/Social"
            tech="React JS"
          />
          <ProjectItem
            title="E-commerce"
            backgroundImg={e_commerce}
            projectUrl="/Store"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
