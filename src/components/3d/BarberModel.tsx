"use client";
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { sceneScrollProxy } from '../../lib/scrollProxy';

export default function BarberModel() {
  const groupRef = useRef<THREE.Group>(null);
  const handleRef = useRef<THREE.Mesh>(null);
  const bladeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const r1 = sceneScrollProxy.progress;
    const time = state.clock.elapsedTime;

    // NACIONALE STYLE KINEMATICS
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
      
      {/* PIVOT (Zlatni sraf / Gold screw connecting blade and handle) */}
      <mesh position={[0, 1.5, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
        <meshPhysicalMaterial color="#d4b65a" roughness={0.1} metalness={1.0} clearcoat={1.0} />
      </mesh>

      {/* DRŠKA (Handle) - Tamno mat / Obsidian crno */}
      <mesh ref={handleRef} position={[0, -0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 4, 0.1]} />
        <meshPhysicalMaterial 
          color="#111111" 
          roughness={0.7} 
          metalness={0.3} 
          clearcoat={0.1} 
        />
      </mesh>

      {/* DETALJ NA DRŠCI (Gold Handle Accent) */}
      <mesh position={[0, -2.4, 0]} castShadow>
         <cylinderGeometry args={[0.05, 0.15, 0.4, 16]} />
         <meshPhysicalMaterial color="#c9a84c" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* OŠTRICA (Blade) - Srebrni polirani čelik / Silver Polished Steel */}
      <group position={[0, 1.5, 0.08]} ref={bladeRef}>
        <mesh position={[-0.4, -1.2, 0]} castShadow receiveShadow>
            {/* Box used for blade, shifted so pivot point is at the top corner */}
            <boxGeometry args={[0.8, 3, 0.02]} />
            <meshPhysicalMaterial 
               color="#eeeeee" 
               roughness={0.05} 
               metalness={1.0} 
               clearcoat={1.0}
               envMapIntensity={2.0}
            />
        </mesh>
        {/* Zlatni gravirani logo / detalj na oštrici */}
        <mesh position={[-0.4, -0.5, 0.015]}>
            <planeGeometry args={[0.5, 0.5]} />
            <meshPhysicalMaterial color="#c9a84c" metalness={1.0} roughness={0.2} side={THREE.DoubleSide} />
        </mesh>
      </group>

    </group>
  );
}
