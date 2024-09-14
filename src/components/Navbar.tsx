import { useState, useEffect, useContext } from "react";
import Link from "next/link";

import { navLinks } from "@/constants";
import { SwitcherButton } from "@/components/SwicherButton";
import { ThemeContext } from "@/app/page";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
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
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/#billboard" className="flex items-center gap-2">
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Portfolio
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav: any) => (
            <li
              key={nav.id}
              className={`text-white hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Link href={`/#${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
          <li>
            <SwitcherButton theme={theme} setTheme={setTheme} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
