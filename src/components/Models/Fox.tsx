import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group } from "three";

import fox from "@/assets/3d/fox.glb";

// Define the type for the props
interface FoxProps {
  currentAnimation: string;
  [key: string]: any; // To accommodate additional props
}

// Define the Fox component
export function Fox({ currentAnimation, ...props }: Readonly<FoxProps>) {
  // Reference for the group
  const group = useRef<Group>(null);

  // Load the GLTF model and animations
  const { nodes, materials, animations } = useGLTF(fox) as any & { nodes: any; materials: any; animations: any[] };

  // Get animation actions
  const { actions } = useAnimations(animations, group);

  // Run effect when currentAnimation prop changes
  useEffect(() => {
    // Stop all animations
    Object.values(actions).forEach((action: any) => action.stop());

    // Play the current animation if it exists
    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
}

// Preload the GLTF model
useGLTF.preload(fox);
