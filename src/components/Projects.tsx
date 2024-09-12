import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { githubIcon } from "@/assets";
import SectionWrapper from "@/hoc/SectionWrapper";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "../utils/motion";
import Sky from "./Sky";

type ProjectCardProps = {
  index: number;
  tags: {
    name: string;
    color: string;
  }[];
  description: string;
  name: string;
  image: string;
  source_code_link: string;
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={githubIcon.src}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  const goToProjectsDetail = () => {

  }
  
  return (
    <div className="px-52 py-20" id="projects">
      <div className="relative z-50">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">
            Team work
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
          </h2>
        </motion.div>

        <div className="w-full">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>

        <div className="mt-10 flex flex-wrap gap-7 items-center">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
          <div className="flex flex-col border border-white rounded-lg p-2 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300" onClick={goToProjectsDetail}>
            <span className="text-white">View more</span>
          </div>
        </div>
      </div>
      <Sky isClouds={false} />
    </div>
  );
};

export default SectionWrapper(Projects);
