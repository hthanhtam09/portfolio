import React, { Suspense, useState } from "react";
import Sky from "./Sky";
import Typewriter from "./Typewriter";
import SectionWrapper from "@/hoc/SectionWrapper";
import { Canvas } from "@react-three/fiber";
import Loader from "./Loader";
import { Bird, Cat, House } from "./Models";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import MoonSun from "./MoonSun";

const BillBoard = () => {
  const [currentStage, setCurrentStage] = useState<number | null>(1);
  const [isRotating, setIsRotating] = useState(false);

  const adjustHouseForScreenSize = () => {
    let screenScale, screenPosition;

    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9];
        screenPosition = [0, -6.5, -43.4];
      } else {
        screenScale = [1, 1, 1];
        screenPosition = [0, -6.5, -43.4];
      }
    }

    return [screenScale, screenPosition];
  };

  const [houseScale, housePosition] = adjustHouseForScreenSize();

  return (
    <section className="w-full h-full relative" id="billboard">
      <Canvas
        className={`w-full h-screen bg-transparent z-50`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            color="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <House
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={housePosition}
            rotation={[0.1, 4.7077, 0]}
            scale={houseScale}
            currentFocusPoint={currentStage as any}
          />
          <Cat />
          <Bird />
        </Suspense>
      </Canvas>

      <motion.div
        className="absolute top-1/3 z-50"
        variants={fadeIn("right", "spring", 0.5, 2)}
      >
        <Typewriter />
      </motion.div>
      <Sky isClouds />
      <MoonSun />
    </section>
  );
};

export default SectionWrapper(BillBoard);
