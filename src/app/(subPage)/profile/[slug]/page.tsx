"use client";

import SectionWrapper from "@/hoc/SectionWrapper";
import { usePathname } from "next/navigation";
import { FC } from "react";
import { profileTamDetail, profileThoDetail } from "@/assets";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { ProfileName } from "@/enums";
import { profileDetail } from "@/constants";
import { QuoteIcon } from "lucide-react";
import { Experience, TechSkill, HomeButton, Card } from "@/components";

const ProfilePage: FC = () => {
  const pathName = usePathname();
  const profileKey = pathName.split("/").pop() ?? "";
  const pathProfileName = profileKey.replace(/-/g, " ");
  const profileImage =
    profileKey === ProfileName.TAM
      ? profileTamDetail
      : profileKey === ProfileName.THO
      ? profileThoDetail
      : null;

  const profileData = profileDetail[profileKey as keyof typeof profileDetail];

  return (
    <div className="relative">
      <motion.div
        className="relative w-full h-screen flex justify-center items-center flex-col main"
        variants={fadeIn("right", "spring", 0.5, 0.75)}
      >
        <HomeButton />
        {profileImage && (
          <motion.div variants={textVariant(1)} className="absolute top-[-10%] right-[-25%] z-50 w-full h-full">
            <img
              src={profileImage.src}
              alt={`Profile ${pathProfileName}`}
              className="w-[100%] h-[100%] object-contain"
            />
          </motion.div>
        )}

        <motion.div
          variants={textVariant(1)}
          className="relative z-50 px-24 pt-24 w-full"
        >
          <p className="sm:text-[18px] text-[14px] text-white uppercase tracking-wider">
            Profile
          </p>
          <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            {pathProfileName}
          </h1>
          <span className="text-white font-light md:text-[18px] sm:text-[18px] xs:text-[18px] text-[14px]">
            - {profileData.position} -
          </span>
          <hr className="my-4 w-1/2" />
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] h-[150px] relative z-50"
          >
            <QuoteIcon
              aria-hidden="true"
              className="size-3 mr-1 fill-white stroke-none -translate-y-1 inline"
            />
            {profileData.description}
            <QuoteIcon
              aria-hidden="true"
              className="size-3 ml-1 fill-white stroke-none translate-y-1 inline"
            />
          </motion.p>
        </motion.div>
        <div className="px-24 mt-20 flex flex-wrap w-full justify-start gap-10">
          {profileData.skills.map((skill, index) => (
            <Card
              name={profileKey}
              key={skill.title}
              index={index}
              isProfile
              {...skill}
            />
          ))}
        </div>
      </motion.div>
      <Experience profileKey={profileKey} />
      <TechSkill profileKey={profileKey} />
    </div>
  );
};

export default SectionWrapper(ProfilePage);
