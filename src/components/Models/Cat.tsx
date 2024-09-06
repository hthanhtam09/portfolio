import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import cat from '@/assets/3d/cat.glb';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';
import * as THREE from 'three';

interface CatProps {
  housePosition: THREE.Vector3;
}

export function Cat({ housePosition }: CatProps) {
  const catRef = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(cat) as any & { animations: any[] };
  const { actions } = useAnimations(animations, catRef);
  const radius = 5;

  useEffect(() => {
    if (actions && actions['Scene']) {
      actions['Scene'].play();
    }
  }, [actions]);

  useFrame(({ clock }) => {
    if (catRef.current && housePosition) {
      const time = clock.getElapsedTime();
      // Calculate the cat's position in a circular path around the house
      catRef.current.position.x = housePosition.x + radius * Math.cos(time);
      catRef.current.position.z = housePosition.z + radius * Math.sin(time);
      catRef.current.position.y = housePosition.y + 0.5; // Keep the cat slightly above the ground

      // Rotate the cat to face the direction it's moving
      catRef.current.rotation.y = -time;
    }
  });

  useEffect(() => {
    if (catRef.current) {
      catRef.current.scale.set(0.005, 0.005, 0.005); // Adjust scale to reduce size
      catRef.current.position.set(0, -5, 2); // Adjust position if needed
      catRef.current.rotation.set(0, Math.PI / 2, 0);
    }
  }, []);

  return (
    <a.group ref={catRef} dispose={null}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <a.group name="0df7f1c552db41979cdb0b8efba99edffbx" rotation={[Math.PI / 2, 0, 0]}>
            <a.group name="Object_2">
              <a.group name="RootNode">
                <a.group name="Rig" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <a.group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_43"
                      geometry={nodes.Object_43.geometry}
                      material={materials.Mat_Gradient}
                      skeleton={nodes.Object_43.skeleton}
                    />
                    <a.group name="Object_42" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  </a.group>
                </a.group>
                <a.group name="Cat" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  );
}
