"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Float } from "@react-three/drei";
import { Suspense } from "react";
import BarberModel from "./BarberModel";

export default function Scene() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]}>
        {/* Moody cinematic lighting */}
        <ambientLight intensity={0.2} color="#4a5568" />
        <directionalLight position={[5, 10, 5]} intensity={2.0} color="#ffffff" />
        <directionalLight position={[-10, -5, -5]} intensity={1.5} color="#c9a84c" />
        <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={1} color="#3182ce" />
        
        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <BarberModel />
          </Float>
          {/* Studio environment for high-end reflections */}
          <Environment preset="studio" />
          <ContactShadows position={[0, -4, 0]} opacity={0.6} scale={15} blur={2.5} far={4} color="#000000" resolution={256} />
        </Suspense>
      </Canvas>
    </div>
  );
}
