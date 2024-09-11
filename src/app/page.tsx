"use client";

import Overview from "@/components/Overview";
import BillBoard from "@/components/BillBoard";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <BillBoard />
      <Overview />
    </Suspense>
  );
}
