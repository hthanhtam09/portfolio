import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import bird from "@/assets/3d/bird.glb";
import { useFrame } from "@react-three/fiber";
import { a } from "@react-spring/three";

export function Bird(props: JSX.IntrinsicElements["group"]) {
  const birdRef = useRef<THREE.Group>(null);

  const { nodes, materials, animations } = useGLTF(bird) as any & {
    animations: any[];
  };

  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    if (actions && actions["Take 001"]) {
      actions["Take 001"].play();
      actions["Take 001"].timeScale = 2
    }
  }, [actions]);

  useFrame(({ clock, camera }) => {
    if (birdRef.current) {
      // Update the Y position to simulate bird-like motion using a sine wave
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      // Check if the bird reached a certain endpoint relative to the camera
      if (birdRef.current.position.x > camera.position.x + 10) {
        // Change direction to backward and rotate the bird 180 degrees on the y-axis
        birdRef.current.rotation.y = Math.PI;
      } else if (birdRef.current.position.x < camera.position.x - 10) {
        // Change direction to forward and reset the bird's rotation
        birdRef.current.rotation.y = 0;
      }

      // Update the X and Z positions based on the direction
      if (birdRef.current.rotation.y === 0) {
        // Moving forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      } else {
        // Moving backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    }
  });


  return (
    <a.group ref={birdRef} {...props} dispose={null}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
          <a.group
            name="48a629d8f15541558d2298aec3d77cfdfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <a.group name="Object_2">
              <a.group name="RootNode">
                <a.group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.blinn2}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <a.group name="Object_6" />
                  <a.group name="BirdRetoppolySurface1" />
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  );
}
