"use client";

import { convertPathName } from "@/common";
import { HomeButton, Sky } from "@/components";
import { projectDetail } from "@/constants";
import { usePathname } from "next/navigation";
import React from "react";
import { Luckiest_Guy } from "next/font/google";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { useFirstMount } from "@/app/provider";
import { useFirstMountSubPage } from "@/app/(subPage)/provider";
import NavigateTransition from "@/components/PageTransition/NavigateTransition";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

const ProjectPage = () => {
  const { setIsFirstMount } = useFirstMount();
  const { isFirstMount } = useFirstMountSubPage();
  const pathName = usePathname();
  const projectKey = pathName.split("/").pop() ?? "";
  const pathProjectName = convertPathName(projectKey);
  const [pathName1, pathName2] = pathProjectName.split(" ");
  const projectData =
    projectDetail[pathProjectName as keyof typeof projectDetail];

  if (!projectData) return null;

  return (
    <motion.main exit={{ opacity: 0 }}>
      {isFirstMount ? (
        <NavigateTransition />
      ) : (
        <div className="relative">
          <HomeButton setIsFirstMount={setIsFirstMount} />
          <div className="relative w-full h-full z-50">
            {projectData.background && (
              <div className="w-full">
                <img
                  src={projectData.background}
                  className="w-screen h-[300px]"
                  alt="project img"
                />
              </div>
            )}
            <div className="px-24 pt-10">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                  duration: 2,
                }}
                className="dark:text-dark text-light text-5xl lg:text-7xl flex items-center justify-center"
              >
                <span
                  className={cn("animate-bop block", luckiestGuy.className)}
                >
                  {pathName1}
                </span>
                <span
                  className={cn("animate-bopB block", luckiestGuy.className)}
                >
                  {pathName2}
                </span>
              </motion.h1>

              <div className="text-lg py-10 flex justify-center gap-2">
                <p className="text-light dark:text-dark">
                  {projectData.description}
                </p>
              </div>

              <hr className="w-1/2 mx-auto my-20" />

              <motion.div variants={textVariant()}>
                <motion.p
                  variants={textVariant(0.5)}
                  className="sm:text-[18px] text-[14px] dark:text-dark text-light tracking-wider text-center"
                >
                  Technicals of project
                </motion.p>
                <motion.h2
                  variants={textVariant(1)}
                  className="dark:text-dark text-light font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
                >
                  Technicals
                </motion.h2>
                <motion.div
                  variants={textVariant(1)}
                  className="flex justify-center gap-4"
                >
                  {projectData.technical.map((tech, index) => (
                    <div key={`${tech.name}_${index}`}>
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-20 h-20"
                      />
                      <span className="block dark:text-dark text-light text-center pt-4">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              <hr className="w-1/2 mx-auto my-20" />

              <motion.div variants={textVariant()}>
                <motion.p
                  variants={textVariant(0.5)}
                  className="sm:text-[18px] text-[14px] dark:text-dark text-light tracking-wider text-center"
                >
                  Some illustrative images
                </motion.p>
                <motion.h2
                  variants={textVariant(1)}
                  className="dark:text-dark text-light font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center"
                >
                  Picture
                </motion.h2>
              </motion.div>
              <div className="grid grid-cols-1 mt-20">
                {projectData.images.map((image, index) => (
                  <figure
                    key={`${index}_${image.src}`}
                    className={`relative transition-transform duration-300 col-span-2 project-list-image cursor-pointer ${
                      index % 2 ? "col-start-1 left" : "col-start-2 right"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="rounded-md shadow-custom transition-transform duration-300 w-[800px] h-[500px]"
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>

          <Sky />
        </div>
      )}
    </motion.main>
  );
};

export default ProjectPage;
