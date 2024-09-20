import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import cat from '@/assets/3d/cat.glb';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';
import * as THREE from 'three';

export function Cat() {
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
    if (catRef.current) {
      const time = clock.getElapsedTime() * 0.2;
      const rightBoundary = 4.89; // limit right position
      const leftBoundary = -4.89; // limit left position
  
      catRef.current.position.x = radius * Math.cos(time);
      if (catRef.current.position.x >= rightBoundary) {
        catRef.current.rotation.set(0, -Math.PI / 2, 0);
      } 
      else if (catRef.current.position.x <= leftBoundary) {
        catRef.current.rotation.set(0, Math.PI / 2, 0);

      }
    }
  });

  useEffect(() => {
    if (catRef.current) {
      catRef.current.scale.set(0.005, 0.005, 0.005);
      catRef.current.position.set(11, -5, 2);
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

useGLTF.preload(cat);
