"use client";

import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";

import dynamic from "next/dynamic";

const BillBoard = dynamic(() => import("@/components").then((mod) => mod.BillBoard), {
  ssr: false,
});

const Overview = dynamic(() => import("@/components").then((mod) => mod.Overview), {
  ssr: false,
});

const Projects = dynamic(() => import("@/components").then((mod) => mod.Projects), {
  ssr: false,
});

const Navbar = dynamic(() => import("@/components").then((mod) => mod.Navbar), {
  ssr: false,
});

const Feedback = dynamic(() => import("@/components").then((mod) => mod.Feedback), {
  ssr: false,
});

const Contact = dynamic(() => import("@/components").then((mod) => mod.Contact), {
  ssr: false,
});

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
    <>
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
    </>
  );
}
