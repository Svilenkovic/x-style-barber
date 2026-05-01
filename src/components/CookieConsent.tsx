"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "veldr_cookie_consent";
type ConsentValue = "accepted" | "rejected";

export default function CookieConsent() {
  const [mounted, setMounted] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== "accepted" && stored !== "rejected") {
        setVisible(true);
      }
    } catch {
      // localStorage may be unavailable (private mode, restricted env) — show banner anyway.
      setVisible(true);
    }
  }, []);

  const handleChoice = (value: ConsentValue): void => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Silently ignore — banner still hides for the current session.
    }
    setVisible(false);
  };

  // Avoid SSR hydration mismatch — render nothing until client-side mount.
  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Obaveštenje o kolačićima"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 pointer-events-none"
    >
      <div className="glass-card max-w-4xl mx-auto mb-4 px-6 py-4 rounded-2xl pointer-events-auto shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* Text */}
          <div className="flex items-start gap-3 flex-1">
            <div className="flex-shrink-0 w-9 h-9 rounded-full border border-gold-500/40 bg-gold-500/5 flex items-center justify-center mt-0.5">
              <Cookie className="w-4 h-4 text-gold-500" strokeWidth={1.5} />
            </div>
            <p className="text-text-secondary text-sm md:text-base font-light leading-relaxed">
              Koristimo samo neophodne kolačiće za rad sajta. Ovaj sajt je portfolio demo — ne
              prikuplja se lična podaci.{" "}
              <Link
                href="/privacy"
                className="text-gold-500 hover:text-gold-400 underline underline-offset-4 transition-colors uppercase tracking-wider text-xs font-bold ml-1"
              >
                Saznajte više
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-row gap-3 md:flex-shrink-0">
            <button
              type="button"
              onClick={() => handleChoice("rejected")}
              className="flex-1 md:flex-none border border-surface-light text-text-secondary hover:text-white hover:border-text-secondary/40 transition-all duration-300 px-5 py-2.5 uppercase tracking-[0.15em] rounded-full text-xs font-bold"
            >
              Odbijam
            </button>
            <button
              type="button"
              onClick={() => handleChoice("accepted")}
              className="flex-1 md:flex-none bg-gold-500 text-bg-dark hover:bg-gold-400 transition-all duration-300 px-5 py-2.5 uppercase tracking-[0.15em] rounded-full text-xs font-bold shadow-[0_4px_16px_rgba(201,168,76,0.25)]"
            >
              Prihvatam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
