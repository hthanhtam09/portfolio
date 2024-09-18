"use client";

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";

import dynamic from "next/dynamic";
import { Sky } from "@/components";

const BillBoard = dynamic(
  () => import("@/components").then((mod) => mod.BillBoard),
  {
    ssr: false,
  }
);

const Overview = dynamic(
  () => import("@/components").then((mod) => mod.Overview),
  {
    ssr: false,
  }
);

const Projects = dynamic(
  () => import("@/components").then((mod) => mod.Projects),
  {
    ssr: false,
  }
);

const Navbar = dynamic(() => import("@/components").then((mod) => mod.Navbar), {
  ssr: false,
});

const Contact = dynamic(
  () => import("@/components").then((mod) => mod.Contact),
  {
    ssr: false,
  }
);

export default function Home() {
  const [loading, setLoading] = useState(true);

  const finishLoading = () => {
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <SplashScreen finishLoading={finishLoading} />
      ) : (
        <div className="main fade-in fade-in-visible">
          <Navbar />
          <BillBoard />
          <Overview />
          <Projects />
          <Contact />
          <Sky />
        </div>
      )}
    </>
  );
}
