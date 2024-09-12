"use client";

import Overview from "@/components/Overview";
import BillBoard from "@/components/BillBoard";
import Projects from "@/components/Projects";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="main">
        <Navbar />
        <BillBoard />
        <Overview />
        <Projects />
      </main>
    </Suspense>
  );
}
