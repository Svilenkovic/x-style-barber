"use client";
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { sceneScrollProxy } from '../../lib/scrollProxy';

type Quality = "low" | "high";

export default function BarberModel({ quality = "high" }: { quality?: Quality }) {
  const groupRef = useRef<THREE.Group>(null);
  const handleRef = useRef<THREE.Mesh>(null);
  const bladeRef = useRef<THREE.Mesh>(null);
  const segs = quality === "low" ? 12 : 16;
  const planeMaterial = quality === "low"
    ? <meshStandardMaterial color="#c9a84c" metalness={0.7} roughness={0.4} side={THREE.DoubleSide} />
    : <meshPhysicalMaterial color="#c9a84c" metalness={1.0} roughness={0.2} side={THREE.DoubleSide} />;
  const bladeMaterial = quality === "low"
    ? <meshStandardMaterial color="#eeeeee" metalness={0.85} roughness={0.2} />
    : <meshPhysicalMaterial color="#eeeeee" roughness={0.05} metalness={1.0} clearcoat={1.0} envMapIntensity={2.0} />;
  const handleMaterial = quality === "low"
    ? <meshStandardMaterial color="#111111" metalness={0.2} roughness={0.7} />
    : <meshPhysicalMaterial color="#111111" roughness={0.7} metalness={0.3} clearcoat={0.1} />;

  useFrame((state) => {
    if (!groupRef.current) return;
    const r1 = sceneScrollProxy.progress;
    const time = state.clock.elapsedTime;

    // r1 goes from 0 to 1 (scroll progress)
    
    // Smooth left-to-right weaving path (3 full waves down the page)
    const targetX = Math.sin(r1 * Math.PI * 6) * 2.5;
    
    // General float movement, drop down slightly, but stay in the camera's Y view mostly
    // The camera view is fixed, so the object should stay near the middle or lower/upper part
    const targetY = Math.cos(r1 * Math.PI * 4) * 1.5;
    
    // Subtle z-depth changes to feel 3D
    const targetZ = Math.sin(r1 * Math.PI * 2) * 1.5 - 1;

    // Smooth lerping for position (to avoid harsh jumps)
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.05);

    // Dynamic rotation tumbling through space (rotates as it scrolls)
    // Tumble naturally but also spin based on scroll
    const targetRotY = r1 * Math.PI * 8 + time * 0.2;
    const targetRotX = r1 * Math.PI * 4 + time * 0.15;
    const targetRotZ = Math.sin(time * 0.5) * 0.3 + (r1 * Math.PI);
    
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.1);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.1);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.1);

    // Subtle blade opening/closing animation based on time and scroll
    if (bladeRef.current && handleRef.current) {
        // Blade rotates open and closed slowly
        bladeRef.current.rotation.z = THREE.MathUtils.lerp(
            bladeRef.current.rotation.z, 
            -Math.PI / 1.5 + Math.sin(time) * 0.2 + (r1 * Math.PI / 4), 
            0.05
        );
    }
  });

  return (
    <group ref={groupRef} scale={[0.8, 0.8, 0.8]}>
      
      {/* PIVOT */}
      <mesh position={[0, 1.5, 0]} castShadow={quality === "high"}>
        <cylinderGeometry args={[0.08, 0.08, 0.3, segs]} />
        {quality === "low"
          ? <meshStandardMaterial color="#d4b65a" metalness={0.85} roughness={0.25} />
          : <meshPhysicalMaterial color="#d4b65a" roughness={0.1} metalness={1.0} clearcoat={1.0} />}
      </mesh>

      {/* DRŠKA */}
      <mesh ref={handleRef} position={[0, -0.5, 0]} castShadow={quality === "high"} receiveShadow={quality === "high"}>
        <boxGeometry args={[0.3, 4, 0.1]} />
        {handleMaterial}
      </mesh>

      {/* GOLD ACCENT */}
      <mesh position={[0, -2.4, 0]} castShadow={quality === "high"}>
         <cylinderGeometry args={[0.05, 0.15, 0.4, segs]} />
         {quality === "low"
           ? <meshStandardMaterial color="#c9a84c" metalness={0.85} roughness={0.3} />
           : <meshPhysicalMaterial color="#c9a84c" roughness={0.2} metalness={0.9} />}
      </mesh>

      {/* OŠTRICA */}
      <group position={[0, 1.5, 0.08]} ref={bladeRef}>
        <mesh position={[-0.4, -1.2, 0]} castShadow={quality === "high"} receiveShadow={quality === "high"}>
            <boxGeometry args={[0.8, 3, 0.02]} />
            {bladeMaterial}
        </mesh>
        <mesh position={[-0.4, -0.5, 0.015]}>
            <planeGeometry args={[0.5, 0.5]} />
            {planeMaterial}
        </mesh>
      </group>

    </group>
  );
}
