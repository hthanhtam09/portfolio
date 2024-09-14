"use client";

import { useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { ThemeMode } from "@/enums";
import {
  BillBoard,
  Contact,
  Feedback,
  Navbar,
  Overview,
  Projects,
} from "@/components";

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.DARK);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="main">
        <Navbar/>
        <BillBoard />
        <Overview />
        <Projects />
        <Feedback />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}
