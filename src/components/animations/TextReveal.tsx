"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number; }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const words = text.split(" ").map((word, index) => (
    <span key={index} className="inline-block overflow-hidden pb-2 mr-[0.25em]">
      <span className="word-inner inline-block translate-y-full opacity-0">{word}</span>
    </span>
  ));

  useGSAP(() => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current.querySelectorAll(".word-inner"), {
      y: 0, opacity: 1, duration: 1, stagger: 0.05, ease: "power4.out", delay,
      scrollTrigger: { trigger: containerRef.current, start: "top 85%" }
    });
  }, { scope: containerRef });

  return <div ref={containerRef} className={className}>{words}</div>;
}
