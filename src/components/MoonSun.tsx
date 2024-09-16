import { ThemeMode } from "@/enums";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";


const MoonSun = () => {
  const { theme } = useTheme();

  return (
    <div className="absolute top-1/4 right-40 z-20">
      <AnimatePresence mode="wait">
        {theme === ThemeMode.LIGHT ? (
          <motion.div
            key="sun"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className="h-[5em] w-[5em] bg-orange-500 rounded-full shadow-[0_0_35px_5px_rgba(255,255,0,1),0_0_25px_10px_rgba(255,255,0,1)_inset]"
          ></motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className="h-[5em] w-[5em] bg-white rounded-full shadow-[0_0_0_0.25em_rgba(32,105,149,0.6),0_0_0_0.75em_rgba(32,105,149,0.5),0_0_0_1.25em_rgba(32,105,149,0.4)] animate-radiate"
          >
            <div className="absolute bg-[#ebefe7] h-[0.62em] w-[0.62em] rounded-full top-[1.25em] left-[0.37em]"></div>
            <div className="absolute bg-[#ebefe7] h-[0.43em] w-[0.43em] rounded-full top-[2em] left-[0.75em]"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MoonSun;
