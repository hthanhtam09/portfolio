import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { navLinks } from "@/constants";
import { SwitcherButton } from "@/components/SwicherButton";
import { fadeIn, textVariant } from "@/utils/motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-[999] ${
        scrolled ? "bg-white/5 blur-sm" : "bg-transparent"
      }`}
    >
      <motion.div initial="hidden" animate="show" className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/#billboard" className="flex items-center gap-2">
          <motion.p variants={textVariant()} className="text-[18px] font-bold cursor-pointer flex dark:text-white text-dark">
            Portfolio
          </motion.p>
        </Link>

        <motion.ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav, index) => (
            <motion.li
              variants={fadeIn("down", "spring", index * 0.5, 2)}
              key={nav.id}
              className={`text-white hover:text-white text-[18px] font-medium cursor-pointer dark:text-white text-dark`}
            >
              <Link href={`/#${nav.id}`}>{nav.title}</Link>
            </motion.li>
          ))}
          <li>
            <SwitcherButton />
          </li>
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
