"use client";

import Overview from "@/components/Overview";
import BillBoard from "@/components/BillBoard";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
      <main className="main">
        <Navbar />
        <BillBoard />
        <Overview />
        <Projects />
      </main>
  );
}
