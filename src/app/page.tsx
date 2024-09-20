"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Sky } from "@/components";
import InitialTransition from "@/components/PageTransition/InitialTransition";
import { useFirstMount } from "./provider";

const content = (isFirstMount: boolean) => ({
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2.8 : 0 },
  },
});

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
  const { isFirstMount } = useFirstMount();

  return (
    <motion.main exit={{ opacity: 0 }}>
      {isFirstMount ? (
        <InitialTransition />
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          variants={content(isFirstMount)}
          className="main"
        >
          <Navbar />
          <BillBoard />
          <Overview />
          <Projects />
          <Contact />
          <Sky />
        </motion.div>
      )}
    </motion.main>
  );
}
