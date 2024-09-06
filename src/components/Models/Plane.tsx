import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Mesh, Group } from "three";

import planeScene from "@/assets/3d/plane.glb";

// Props interface to type the component's props
interface PlaneProps {
  isRotating: boolean;
  [key: string]: any; // To accommodate additional props passed to the mesh
}

// The Plane component
export function Plane({ isRotating, ...props }: Readonly<PlaneProps>) {
  // Reference for the plane mesh
  const ref = useRef<Mesh>(null);

  // Load the 3D model and its animations
  const { scene, animations } = useGLTF(planeScene) as any & {
    animations: any[];
  };

  // Get animation actions associated with the plane
  const { actions } = useAnimations(animations, ref);

  // Use an effect to control the plane's animation based on 'isRotating'
  useEffect(() => {
    if (actions && actions["Take 001"]) {
      if (isRotating) {
        actions["Take 001"].play();
      } else {
        actions["Take 001"].stop();
      }
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      {/* Use the primitive element when you want to directly embed a complex 3D model or scene */}
      <primitive object={scene} />
    </mesh>
  );
}
