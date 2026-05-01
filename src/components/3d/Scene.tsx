"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Float } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import BarberModel from "./BarberModel";

type Tier = "off" | "low" | "high";

function detectTier(): Tier {
  if (typeof window === "undefined") return "high";
  if (typeof window.matchMedia === "function") {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return "off";
  }
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean; effectiveType?: string } };
  if (nav.connection?.saveData) return "off";
  if (nav.connection?.effectiveType && /(^|-)(2g|slow-2g)$/i.test(nav.connection.effectiveType)) return "off";
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = nav.deviceMemory ?? 4;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (cores <= 4 || memory <= 2) return "low";
  if (isMobile) return "low";
  return "high";
}

export default function Scene() {
  const [tier, setTier] = useState<Tier>("high");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTier(detectTier());
    const onVis = () => setVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  if (tier === "off") {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(201,168,76,0.18)_0%,transparent_55%),radial-gradient(circle_at_60%_70%,rgba(49,130,206,0.10)_0%,transparent_60%)]" />
      </div>
    );
  }

  const dpr: [number, number] = tier === "low" ? [1, 1.5] : [1, 2];

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={dpr}
        frameloop={visible ? "always" : "demand"}
        gl={{ antialias: tier === "high", powerPreference: "high-performance", alpha: true }}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.2} color="#4a5568" />
        <directionalLight position={[5, 10, 5]} intensity={2.0} color="#ffffff" />
        <directionalLight position={[-10, -5, -5]} intensity={1.5} color="#c9a84c" />
        {tier === "high" && (
          <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={1} color="#3182ce" />
        )}

        <Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <BarberModel quality={tier} />
          </Float>
          {tier === "high" && <Environment preset="studio" />}
          {tier === "high" && (
            <ContactShadows position={[0, -4, 0]} opacity={0.6} scale={15} blur={2.5} far={4} color="#000000" resolution={256} />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
