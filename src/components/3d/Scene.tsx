"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Component, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import BarberModel from "./BarberModel";
import { sceneScrollProxy } from "../../lib/scrollProxy";

type Tier = "off" | "low" | "high";

class SceneErrorBoundary extends Component<{ children: ReactNode; onError?: () => void }, { failed: boolean }> {
  constructor(props: { children: ReactNode; onError?: () => void }) {
    super(props);
    this.state = { failed: false };
  }
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onError?.();
  }
  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

function ScrollInvalidator() {
  const invalidate = useThree((s) => s.invalidate);
  const last = useRef(-1);
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const p = sceneScrollProxy.progress;
      if (p !== last.current) {
        last.current = p;
        invalidate();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [invalidate]);
  return null;
}

function hasWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}

function detectTier(): Tier {
  if (typeof window === "undefined") return "high";
  if (!hasWebGL()) return "off";
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

function Fallback() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(201,168,76,0.18)_0%,transparent_55%),radial-gradient(circle_at_60%_70%,rgba(49,130,206,0.10)_0%,transparent_60%)]" />
    </div>
  );
}

export default function Scene() {
  const [tier, setTier] = useState<Tier>("off");
  const [crashed, setCrashed] = useState(false);

  useEffect(() => {
    setTier(detectTier());
    const onContextLost = (e: Event) => {
      e.preventDefault();
      setCrashed(true);
    };
    document.addEventListener("webglcontextlost", onContextLost as EventListener);
    return () => document.removeEventListener("webglcontextlost", onContextLost as EventListener);
  }, []);

  if (tier === "off" || crashed) return <Fallback />;

  const dpr: [number, number] = tier === "low" ? [1, 1.5] : [1, 1.75];

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      <SceneErrorBoundary onError={() => setCrashed(true)}>
        <Canvas
          camera={{ position: [0, 0, 7], fov: 45 }}
          dpr={dpr}
          frameloop="demand"
          gl={{ antialias: tier === "high", powerPreference: "low-power", alpha: true, failIfMajorPerformanceCaveat: false }}
          performance={{ min: 0.4 }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener("webglcontextlost", (e) => {
              e.preventDefault();
              setCrashed(true);
            });
          }}
        >
          <ScrollInvalidator />
          <ambientLight intensity={0.35} color="#4a5568" />
          <directionalLight position={[5, 10, 5]} intensity={1.6} color="#ffffff" />
          <directionalLight position={[-10, -5, -5]} intensity={1.2} color="#c9a84c" />
          {tier === "high" && (
            <spotLight position={[0, 5, 10]} angle={0.3} penumbra={1} intensity={0.8} color="#3182ce" />
          )}

          <Suspense fallback={null}>
            <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.4}>
              <BarberModel quality={tier} />
            </Float>
          </Suspense>
        </Canvas>
      </SceneErrorBoundary>
    </div>
  );
}
