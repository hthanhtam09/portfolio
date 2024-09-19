import React from "react";
import { motion } from "framer-motion";

import { profiles } from "@/constants";
import SectionWrapper from "@/hoc/SectionWrapper";
import { fadeIn, textVariant } from "@/utils/motion";
import Card from "./Card";

const Overview = () => {
  return (
    <div className="px-24 pt-24 pb-20 h-screen w-full relative z-50" id="overview">
      <motion.div variants={textVariant()}>
        <motion.p variants={textVariant(0.5)} className="sm:text-[18px] text-[14px] dark:text-dark text-light uppercase tracking-wider">
          Introduction
        </motion.p>
        <motion.h2 variants={textVariant(1)} className="dark:text-dark text-light font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </motion.h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 dark:text-dark text-light text-[17px] max-w-3xl leading-[30px] relative z-50"
      >
        We are skilled software developers with experience in TypeScript,
        JavaScript, and expertise in frameworks such as React and Node.js. We
        are fast learners and work closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        Let&apos;s work together to turn your ideas into reality!
      </motion.p>

      <div className="mt-20 flex flex-wrap w-full justify-start gap-10">
        {profiles.map((profile, index) => (
          <Card key={`${profile.title}_${index}`} index={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Overview);
