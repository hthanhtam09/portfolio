import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import house from "@/assets/3d/house.glb";
import { a } from "@react-spring/three";
import * as THREE from "three";
import { useFrame, useThree } from '@react-three/fiber';

interface IHouseProps {
    isRotating: boolean;
    setIsRotating: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentStage: React.Dispatch<React.SetStateAction<number | null>>;
    currentFocusPoint: THREE.Vector3 | null;
    [key: string]: any;
  }

export function House({
    isRotating,
    setIsRotating,
    setCurrentStage,
    currentFocusPoint,
    ...props
  }: Readonly<IHouseProps>) {
  const houseRef = useRef<THREE.Group>(null);
  const { gl, viewport, camera } = useThree();
  const { nodes, materials } = useGLTF(house) as any

  const lastX = useRef<number>(0);
  const rotationSpeed = useRef<number>(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event: PointerEvent | TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX =
      event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (event: PointerEvent | TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event: PointerEvent | TouchEvent) => {
    event.stopPropagation();
    event.preventDefault();

    if (isRotating && houseRef.current) {
      const clientX =
        event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      houseRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (houseRef.current) {
      if (event.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);
        houseRef.current.rotation.y += 0.005 * Math.PI;
        rotationSpeed.current = 0.007;
      } else if (event.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);
        houseRef.current.rotation.y -= 0.005 * Math.PI;
        rotationSpeed.current = -0.007;
      }
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches[0].clientX;
    lastX.current = clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating && houseRef.current) {
      const clientX = e.touches[0].clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      houseRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handleKeyDown, handleKeyUp, handlePointerDown, handlePointerMove, handlePointerUp, handleTouchEnd, handleTouchMove, handleTouchStart]);

  useFrame(() => {
    if (houseRef.current) {
      if (!isRotating) {
        rotationSpeed.current *= dampingFactor;

        if (Math.abs(rotationSpeed.current) < 0.001) {
          rotationSpeed.current = 0;
        }

        houseRef.current.rotation.y += rotationSpeed.current;
      } else {
        const rotation = houseRef.current.rotation.y;
        const normalizedRotation =
          ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        switch (true) {
          case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            setCurrentStage(4);
            break;
          case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
            setCurrentStage(3);
            break;
          case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
            setCurrentStage(2);
            break;
          case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(null);
        }
      }
    }
  });

  useEffect(() => {
    if (houseRef.current) {
      houseRef.current.scale.set(0.009, 0.009, 0.009); // Adjust scale to reduce size
      houseRef.current.position.set(11, -4.5, -10); // Adjust position if needed
      houseRef.current.rotation.set(0, Math.PI / 10, -12.5);
    }

    camera.position.set(0, 1, 15);

  }, [camera]);

  return (
    <a.group ref={houseRef} {...props} dispose={null}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <a.group name="00fd412a91954abeb2c5a198c47b1df7fbx" rotation={[Math.PI / 2, 0, 0]}>
            <a.group name="Object_2">
              <a.group name="RootNode">
                <a.group
                  name="Camera"
                  position={[-4376.402, 1501.584, 1953.297]}
                  rotation={[0, 0.458, -0.185]}
                  scale={100}>
                  <a.group name="Object_5" />
                </a.group>
                <a.group
                  name="Empty"
                  position={[216.822, 11.311, -316.256]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <a.group
                    name="Plane"
                    position={[-0.721, -0.73, -0.117]}
                    scale={[10.522, 13.669, 13.669]}>
                    <mesh
                      name="Plane_CandyTex_0"
                      geometry={nodes.Plane_CandyTex_0.geometry}
                      material={materials.CandyTex}
                    />
                    <mesh
                      name="Plane_CupTex_0"
                      geometry={nodes.Plane_CupTex_0.geometry}
                      material={materials.CupTex}
                    />
                    <mesh
                      name="Plane_CubBlue_0"
                      geometry={nodes.Plane_CubBlue_0.geometry}
                      material={materials.CubBlue}
                    />
                    <mesh
                      name="Plane_Straw_0"
                      geometry={nodes.Plane_Straw_0.geometry}
                      material={materials.Straw}
                    />
                    <mesh
                      name="Plane_Wall_0"
                      geometry={nodes.Plane_Wall_0.geometry}
                      material={materials.Wall}
                    />
                    <mesh
                      name="Plane_Roof_0"
                      geometry={nodes.Plane_Roof_0.geometry}
                      material={materials.Roof}
                    />
                    <mesh
                      name="Plane_Wood_0"
                      geometry={nodes.Plane_Wood_0.geometry}
                      material={materials.Wood}
                    />
                    <mesh
                      name="Plane_WaffleDark_0"
                      geometry={nodes.Plane_WaffleDark_0.geometry}
                      material={materials.WaffleDark}
                    />
                    <mesh
                      name="Plane_CandyTreeSec_0"
                      geometry={nodes.Plane_CandyTreeSec_0.geometry}
                      material={materials.CandyTreeSec}
                    />
                    <mesh
                      name="Plane_CandyTreePrim_0"
                      geometry={nodes.Plane_CandyTreePrim_0.geometry}
                      material={materials.CandyTreePrim}
                    />
                    <mesh
                      name="Plane_WindowBase_0"
                      geometry={nodes.Plane_WindowBase_0.geometry}
                      material={materials.WindowBase}
                    />
                    <mesh
                      name="Plane_WindowDark_0"
                      geometry={nodes.Plane_WindowDark_0.geometry}
                      material={materials.WindowDark}
                    />
                    <mesh
                      name="Plane_AxeHandle_0"
                      geometry={nodes.Plane_AxeHandle_0.geometry}
                      material={materials.AxeHandle}
                    />
                    <mesh
                      name="Plane_AxeSec_0"
                      geometry={nodes.Plane_AxeSec_0.geometry}
                      material={materials.AxeSec}
                    />
                    <mesh
                      name="Plane_AxePrim_0"
                      geometry={nodes.Plane_AxePrim_0.geometry}
                      material={materials.AxePrim}
                    />
                    <mesh
                      name="Plane_Waffle_0"
                      geometry={nodes.Plane_Waffle_0.geometry}
                      material={materials.Waffle}
                    />
                    <mesh
                      name="Plane_LollipopHandle_0"
                      geometry={nodes.Plane_LollipopHandle_0.geometry}
                      material={materials.LollipopHandle}
                    />
                    <mesh
                      name="Plane_Lollipop_0"
                      geometry={nodes.Plane_Lollipop_0.geometry}
                      material={materials.Lollipop}
                    />
                  </a.group>
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  )
}
