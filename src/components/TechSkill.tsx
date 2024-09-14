import SectionWrapper from "@/hoc/SectionWrapper";
import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { technicalSkill } from "@/constants";
import Sky from "./Sky";

interface TechSkillProps {
  profileKey: string;
}

const TechSkill = ({ profileKey }: TechSkillProps) => {
  const technicalSkillData =
    technicalSkill[profileKey as keyof typeof technicalSkill];

  return (
    <>
      <div className="px-24 pt-24 pb-20 relative z-50">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider text-center">
            The skills I am capable of doing
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
            Technicals.
          </h2>
        </motion.div>

        <motion.div variants={textVariant()} className="mt-20 flex flex-wrap w-full justify-center items-center gap-16">
          {technicalSkillData.techs.map((tech, index) => (
            <div key={`${tech.name}_${index}`}>
              <img src={tech.icon} alt={tech.name} className="w-20 h-20" /> 
              <span className="block text-white text-center pt-4">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <Sky isClouds={false} />
    </>
  );
};

export default SectionWrapper(TechSkill);
