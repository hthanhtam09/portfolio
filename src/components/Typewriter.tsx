import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Montserrat } from 'next/font/google'
import { cn } from "@/utils/cn";

const montserrat = Montserrat({ subsets: ['latin'] })
 
const Typewriter: React.FC = () => {
  const [text] = useTypewriter({
    words: ["web development!", "mobile development!", "game development!"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <h1 className={cn('text-white text-8xl px-20 typewriterTitle z-[9999]', montserrat.className)}>
      Together, we can turn your vision into reality—be it <br />
      <span className="dark:text-dark text-light">{text}</span>
      <Cursor />
    </h1>
  );
};

export default Typewriter;
