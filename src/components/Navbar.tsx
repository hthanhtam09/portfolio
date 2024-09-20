import Link from "next/link";
import { motion } from "framer-motion";

import { navLinks } from "@/constants";
import { SwitcherButton } from "@/components/SwicherButton";
import { fadeIn, textVariant } from "@/utils/motion";

const Navbar = () => {
  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-5 absolute top-0 z-[99999]`}
    >
      <motion.div initial="hidden" animate="show" className="w-full flex justify-between items-center">
        <Link href="/#billboard" className="flex items-center gap-2" >
          <motion.h1 variants={textVariant()} className="text-3xl font-bold cursor-pointer flex dark:text-dark text-light">
            Portfolio
          </motion.h1>
        </Link>

        <motion.ul className="list-none hidden sm:flex flex-row items-center gap-10">
          {navLinks.map((nav, index) => (
            <motion.li
              variants={fadeIn("down", "spring", index * 0.5, 2)}
              key={nav.id}
              className={`hover:opacity-70 text-[18px] font-medium cursor-pointer dark:text-dark text-light`}
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
