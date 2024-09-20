/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: LasquetiSpice (https://sketchfab.com/LasquetiSpice)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/animated-dog-sits-rolls-over-shake-paw-d9020159339145e6b9ecd5f3d830830f
Title: Animated Dog Sits Rolls Over Shake Paw
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import dog from "@/assets/3d/dog.glb";
import * as THREE from "three";

export function Dog() {
  const dogRef = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(dog) as any & {
    animations: any[];
  };
  const { actions } = useAnimations(animations, dogRef);

  useEffect(() => {
    if (actions && actions["Animation"]) {
      actions["Animation"].play();
    }
  }, [actions]);

  useEffect(() => {
    if (dogRef.current) {
      dogRef.current.position.set(11, -5, 3);
      dogRef.current.rotation.set(0, -Math.PI / 2, 0);
    }
  }, []);

  return (
    <group ref={dogRef} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2.472}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Playful_dog_124">
                <group name="Playful_dog_Skeleton_123" scale={0.01}>
                  <group name="geo1_0" />
                  <group name="skeletal3_1">
                    <group name="GLTF_created_0">
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <skinnedMesh
                        name="Object_132"
                        geometry={nodes.Object_132.geometry}
                        material={materials.material0}
                        skeleton={nodes.Object_132.skeleton}
                      />
                      <group name="shiba_inu2_125_correction">
                        <group name="shiba_inu2_125" />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(dog);
