import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { AnimatePresence, motion } from "framer-motion";

import { githubIcon, rightArrowIcon, leftArrowIcon } from "@/assets";
import SectionWrapper from "@/hoc/SectionWrapper";
import { projects } from "@/constants";
import { textVariant } from "../utils/motion";
import { useRouter } from "next/navigation";

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

// eslint-disable-next-line react/display-name
const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ index, name, description, tags, image, source_code_link }, ref) => {
    const router = useRouter();

    const goToProjectsDetail = (projectName: string) => {
      router.push(`/projects/${projectName.replace(" ", "-")}`);
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 0, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 0, scale: 0.8 }}
        transition={{ delay: 0.2 * index, duration: 1, ease: "easeInOut" }}
        onClick={() => goToProjectsDetail(name)}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the parent click handler from firing
                  window.open(source_code_link, "_blank");
                }}
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
            <h3 className="dark:text-dark text-light font-bold text-[24px]">
              {name}
            </h3>
            <p className="mt-2 dark:text-dark text-light text-[14px]">
              {description}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  }
);

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNextSlide() {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  }

  function handlePreviousSlide() {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  }

  return (
    <div className="px-24 py-20 h-screen w-full overflow-hidden" id="projects">
      <div className="relative z-50">
        <motion.div variants={textVariant()}>
          <motion.p
            variants={textVariant(0.5)}
            className="sm:text-[18px] text-[14px] dark:text-dark text-light uppercase tracking-wider"
          >
            Team work
          </motion.p>
          <motion.h2
            variants={textVariant(1)}
            className="dark:text-dark text-light font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
          >
            Projects.
          </motion.h2>
        </motion.div>

        <div className="flex mt-14 *:shrink-0 gap-12 w-full">
          {projects.map(
            (project, index) =>
              index >= currentSlide && (
                <AnimatePresence
                  mode="popLayout"
                  key={`${project.name}-${index}`}
                >
                  <ProjectCard index={index} {...project} />
                </AnimatePresence>
              )
          )}
        </div>
        <div className="flex gap-4 justify-center mt-2">
          <button
            disabled={currentSlide === 0}
            type="button"
            onClick={handlePreviousSlide}
            className={`rounded-full group size-20 p-1.5 inline-flex items-center justify-center hover:border ${
              currentSlide === 0 && "opacity-50"
            }`}
          >
            <img src={leftArrowIcon.src} alt="left arrow" />
          </button>
          <button
            disabled={currentSlide === projects.length - 1}
            type="button"
            onClick={handleNextSlide}
            className={`rounded-full group size-20 p-1.5 inline-flex items-center justify-center hover:border ${
              currentSlide === projects.length - 1 && "opacity-50"
            }`}
          >
            <img src={rightArrowIcon.src} alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects);
