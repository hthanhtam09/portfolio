"use client";

import Sky from "@/components/Sky";
import SectionWrapper from "@/hoc/SectionWrapper";
import { usePathname } from "next/navigation";
import { FC, Suspense } from "react";
import { profileTamDetail, profileThoDetail } from "@/assets";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import HomeButton from "@/components/HomeButton";
import Loading from "./loading";
import Card from "@/components/Card";
import { ProfileName } from "@/enums";
import { profileDetail } from "@/constants";

const ProfilePage: FC = () => {
  const pathName = usePathname();
  const profileKey = pathName.split("/").pop() || "";
  const pathProfileName = profileKey.replace(/-/g, " ");
  const profileImage =
    profileKey === ProfileName.TAM
      ? profileTamDetail
      : profileKey === ProfileName.THO
      ? profileThoDetail
      : null;

  const profileData = profileDetail[profileKey as keyof typeof profileDetail];

  return (
    <Suspense fallback={<Loading />}>
      <motion.div
        className="relative w-full h-screen flex justify-center items-center flex-col"
        variants={fadeIn("right", "spring", 0.5, 0.75)}
      >
        <HomeButton />
        {profileImage && (
          <div className="absolute top-[-10%] right-[-25%] z-50 w-full h-full">
            <img
              src={profileImage.src}
              alt={`Profile ${pathProfileName}`}
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
        )}

        <motion.div
          variants={textVariant()}
          className="relative z-50 px-52 pt-24 w-full"
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

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-white text-[17px] max-w-3xl leading-[30px] h-[150px] relative z-50"
          >
            {profileData.description}
          </motion.p>
        </motion.div>
        <div className="px-52 mt-20 flex flex-wrap w-full justify-start gap-10">
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
        <Sky isClouds={false} />
      </motion.div>
    </Suspense>
  );
};

export default SectionWrapper(ProfilePage);
