import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

import skyScene from "@/assets/3d/sky.glb";

interface SkyProps {
  isRotating: boolean;
}

// Assuming the GLTF model follows a generic structure, but you can extend this type if needed.
export function Sky({ isRotating }: Readonly<SkyProps>) {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<Mesh>(null);

  // Animation logic using useFrame to rotate the model if isRotating is true
  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef}>
      {/* use the primitive element when you want to directly embed a complex 3D model or scene */}
      <primitive object={sky.scene} />
    </mesh>
  );
}
