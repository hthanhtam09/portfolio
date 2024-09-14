"use client";

import {
  BillBoard,
  Contact,
  Feedback,
  Navbar,
  Overview,
  Projects,
} from "@/components";
import { ThemeMode } from "@/enums";
import { useState, createContext, Dispatch, SetStateAction } from "react";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: Dispatch<SetStateAction<ThemeMode>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeMode.DARK,
  setTheme: () => {},
});

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
