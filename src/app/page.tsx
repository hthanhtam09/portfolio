"use client";

import { useState, useEffect } from "react";
import { ThemeMode } from "@/enums";
import {
  BillBoard,
  Contact,
  Feedback,
  Navbar,
  Overview,
  Projects,
} from "@/components";
import SplashScreen from "@/components/SplashScreen";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import { Providers } from "./provider";

export default function Home() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [fadeOutSplash, setFadeOutSplash] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOutSplash(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
      <Providers>
        {showSplashScreen ? (
          <div className={fadeOutSplash ? "fade-out-hidden" : "fade-out"}>
            <SplashScreen />
          </div>
        ) : (
          <div className="main fade-in fade-in-visible">
            <Navbar />
            <BillBoard />
            <Overview />
            <Projects />
            <Feedback />
            <Contact />
          </div>
        )}
      </Providers>
  );
}
