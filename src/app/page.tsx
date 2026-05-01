"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scissors, Watch, CheckCircle, ArrowRight } from "lucide-react";
import TextReveal from "../components/animations/TextReveal";
import BookingSection from "../components/sections/BookingSection";
import { sceneScrollProxy } from "../lib/scrollProxy";

const Scene = dynamic(() => import("../components/3d/Scene"), { ssr: false });

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        sceneScrollProxy.progress = scrollY / maxScroll;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(
    () => {
      // Hero text reveal entrance
      gsap.fromTo(".hero-split", 
        { y: 60, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1.5, stagger: 0.1, ease: "power4.out", delay: 0.5 }
      );

      // Smooth parallax scroll fading for Hero title
      gsap.to(".hero-title-group", {
        y: -150,
        opacity: 0,
        filter: "blur(10px)",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom center",
          scrub: 1.2,
        },
      });

      // Feature Cards Entrance (Scale from 0.9 + Blur)
      gsap.fromTo(".glass-feature", 
        { y: 80, opacity: 0, scale: 0.9, filter: "blur(8px)" },
        { y: 0, opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".features-section", start: "top 70%" } }
      );

      // Simple Parallax Image Effect
      gsap.to(".parallax-img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

    },
    { scope: container }
  );

  return (
    <main ref={container} className="relative w-full">
      {/* 3D Scene Layer */}
      <Scene />

      {/* Header - Glassmorphism */}
      <header className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center bg-transparent mix-blend-difference">
        <a href="#top" className="font-heading text-2xl tracking-[0.2em] font-black uppercase" aria-label="VELDR Barber — početna">
          <span className="text-white">VELDR</span>
          <span className="text-gold-500 ml-1">BARBER</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase font-bold text-white" aria-label="Glavna navigacija">
          <a href="#about" className="hover:text-gold-500 transition-colors opacity-80 hover:opacity-100">O Nama</a>
          <a href="#services" className="hover:text-gold-500 transition-colors opacity-80 hover:opacity-100">Usluge</a>
          <a href="#booking" className="border border-white/20 px-6 py-3 hover:border-gold-500 hover:text-gold-500 transition-all rounded-full flex items-center gap-2 backdrop-blur-md bg-white/5">
            DEMO TERMIN <ArrowRight className="w-3 h-3" />
          </a>
        </nav>
      </header>

      {/* PORTFOLIO DEMO BADGE */}
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-[60] pointer-events-none">
        <span className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold text-gold-500 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-gold-500/30">
          Portfolio · Demo
        </span>
      </div>

      {/* HERO SECTION */}
      <section id="top" className="hero-section h-screen relative flex items-center justify-center pointer-events-none">
        <div className="text-center z-10 px-4 hero-title-group flex flex-col items-center">
          <TextReveal
            text="SVET  LUKSUZNOG  BARBERINGA"
            className="hero-split text-gold-500 font-heading text-[10px] md:text-sm tracking-[0.5em] mb-8 font-bold"
            delay={0.2}
          />
          <h1 className="hero-split text-6xl md:text-8xl lg:text-[11rem] font-heading font-black leading-[0.85] tracking-tighter uppercase mb-4">
            <span className="block text-white opacity-90 drop-shadow-2xl">VELDR</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>BARBER</span>
          </h1>
          <p className="hero-split text-text-secondary max-w-md mx-auto mt-6 text-sm font-light tracking-wide leading-relaxed px-4">
            Gde forma sreće preciznost. Demonstracioni portfolio koncept — premium grooming atelje, posvećen detalju i tišini.
          </p>
        </div>
      </section>

      {/* ABOUT / MANIFESTO */}
      <section id="about" className="about-section py-32 px-6 md:px-12 relative z-10 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[3/4] overflow-hidden glass-card rounded-[2rem] p-2">
            <div className="w-full h-full relative overflow-hidden rounded-[1.5rem] bg-black">
              {/* Dummy parallax gradient wrapper instead of image */}
              <div className="parallax-img absolute inset-[-20%] bg-gradient-to-br from-surface-light via-bg-dark to-gold-600/10 flex items-center justify-center opacity-80">
                 <Scissors className="w-32 h-32 text-gold-500/20 rotate-[-15deg]" />
              </div>
            </div>
            {/* Elegant overlay badge */}
            <div className="absolute bottom-8 -right-8 md:-right-12 glass-card p-6 rounded-2xl w-48 text-center border-gold-500/30">
               <span className="block text-5xl font-heading font-bold text-gold-500 mb-2">15</span>
               <span className="text-xs uppercase tracking-[0.2em] text-text-secondary font-bold">Godina<br/>Iskustva</span>
            </div>
          </div>

          <div className="lg:pl-10">
            <div className="w-12 h-[1px] bg-gold-500 mb-8"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading mb-8 uppercase tracking-tighter text-white/90 leading-[0.9]">
              Filozofija<br/><span className="text-transparent border-text" style={{ WebkitTextStroke: "1px rgba(201,168,76,0.8)" }}>Stila</span>
            </h2>
            <div className="space-y-6 text-text-secondary text-lg font-light leading-relaxed">
              <p>
                VELDR Barber je fictional koncept — posvećenost detaljima i ritualu. Ovaj sajt je dizajn-inženjering portfolio: ne radi se o stvarnom salonu, već o demonstraciji premium estetike, 3D animacije i scroll dinamike.
              </p>
              <p>
                Sve usluge, cene i termini prikazani su isključivo radi prikaza šablona. Ako vas zanima ovakav nivo izvedbe za vaš brend, kontakt je u podnožju strane.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES / SERVICES (Glass Cards) */}
      <section id="services" className="features-section py-24 md:py-40 relative z-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          <div className="glass-feature glass-card p-10 lg:p-14 flex flex-col items-start rounded-[2rem] group cursor-pointer">
            <Watch className="w-10 h-10 text-gold-500 mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
            <h3 className="text-2xl font-heading mb-4 uppercase tracking-wider text-white">Preciznost Vremena</h3>
            <p className="text-text-secondary font-light leading-relaxed">Vreme je luksuz koji ne traćimo. Svaki termin teče glatko, bez kašnjenja i gužve.</p>
          </div>
          <div className="glass-feature glass-card p-10 lg:p-14 flex flex-col items-start rounded-[2rem] group cursor-pointer relative top-0 md:top-12">
            <Scissors className="w-10 h-10 text-gold-500 mb-8 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500" />
            <h3 className="text-2xl font-heading mb-4 uppercase tracking-wider text-white">Master Arhitekte</h3>
            <p className="text-text-secondary font-light leading-relaxed">Mi skulpturišemo kosu i bradu spram vašeg oblika glave dajući besprekorne linije.</p>
          </div>
          <div className="glass-feature glass-card p-10 lg:p-14 flex flex-col items-start rounded-[2rem] group cursor-pointer">
            <CheckCircle className="w-10 h-10 text-gold-500 mb-8 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-heading mb-4 uppercase tracking-wider text-white">Premium Baza</h3>
            <p className="text-text-secondary font-light leading-relaxed">Samo najviša ekskluzivna kolekcija preparata dotiče vašu kožu.</p>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="py-16 md:py-24 overflow-hidden whitespace-nowrap bg-transparent text-white mix-blend-difference font-heading relative z-10 uppercase text-6xl md:text-8xl font-black border-y border-white/10" aria-hidden="true">
        <div className="animate-marquee inline-block opacity-40 hover:opacity-100 transition-opacity duration-700">
          <span className="mx-8">VELDR EXCELLENCE</span>
          <span className="mx-8 font-light italic text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,1)" }}>ROYAL SHAVE</span>
          <span className="mx-8">VELDR EXCELLENCE</span>
          <span className="mx-8 font-light italic text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,1)" }}>ROYAL SHAVE</span>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}} />

      {/* BOOKING SECTION */}
      <BookingSection />
      
      {/* PWA APP PROMO */}
      <section className="py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto glass-card rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-gold-500/30">
          <div className="text-left">
            <h3 className="text-3xl font-heading text-white uppercase tracking-wider mb-2">PWA Demo Aplikacija</h3>
            <p className="text-text-secondary font-light">Pogledajte kako bi izgledao klijent i admin dashboard u mobilnoj aplikaciji — UI demo, bez realnih podataka.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href="/pwa/client" className="bg-white text-bg-dark font-heading px-6 py-4 font-bold rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-transform text-center">
              Klijent UI
            </a>
            <a href="/pwa/admin" className="border border-gold-500 text-gold-500 font-heading px-6 py-4 font-bold rounded-full uppercase tracking-widest text-xs hover:bg-gold-500 hover:text-bg-dark transition-all text-center">
              Admin UI
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT FORM */}
      <footer className="bg-black/80 py-24 px-6 md:px-12 relative z-10 border-t border-[var(--color-border-subtle)] backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

          <div className="lg:col-span-1">
            <div className="font-heading text-2xl tracking-[0.3em] font-black text-white mb-6 uppercase">VELDR <span className="text-gold-500">BARBER</span></div>
            <p className="text-text-secondary font-light text-sm leading-relaxed mb-6">Demonstracioni portfolio sajt — fictional premium grooming atelje. Sve forme, cene i termini su prikaz šablona, bez stvarnih podataka.</p>
            <div className="text-sm font-light text-text-secondary space-y-2">
              <p>Demo lokacija: Atelje 04 (placeholder)</p>
              <p>Demo telefon: 06X XXX XXXX</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-gold-500 font-heading uppercase tracking-widest text-sm mb-6">Demo Radno Vreme</h4>
            <ul className="text-text-secondary font-light text-sm space-y-3">
              <li className="flex justify-between"><span>Pon - Pet:</span><span>09:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Subota:</span><span>09:00 - 15:00</span></li>
              <li className="flex justify-between text-gold-500/50"><span>Nedelja:</span><span>Zatvoreno</span></li>
            </ul>
            <h4 className="text-gold-500 font-heading uppercase tracking-widest text-sm mt-8 mb-4">Pravno</h4>
            <ul className="text-text-secondary font-light text-sm space-y-2">
              <li><a href="/privacy" className="hover:text-gold-500 transition-colors">Politika Privatnosti</a></li>
              <li><a href="/terms" className="hover:text-gold-500 transition-colors">Uslovi Korišćenja</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-gold-500 font-heading uppercase tracking-widest text-sm mb-6">Demo Kontakt Forma</h4>
            <p className="text-xs text-text-secondary mb-4 italic font-light">Forma ne šalje podatke — UI demo bez pozadinskog servisa.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Demo kontakt forma">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Ime" aria-label="Ime" className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white font-light text-sm focus:outline-none focus:border-gold-500/50 focus-visible:ring-2 focus-visible:ring-gold-500/40" />
                <input type="email" placeholder="Email" aria-label="Email" className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white font-light text-sm focus:outline-none focus:border-gold-500/50 focus-visible:ring-2 focus-visible:ring-gold-500/40" />
              </div>
              <textarea placeholder="Vaša poruka..." aria-label="Poruka" rows={3} className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white font-light text-sm focus:outline-none focus:border-gold-500/50 focus-visible:ring-2 focus-visible:ring-gold-500/40"></textarea>
              <button type="submit" className="bg-gold-500 text-bg-dark font-heading uppercase text-xs font-bold tracking-widest px-8 py-3 rounded-lg hover:bg-gold-400 transition-colors focus-visible:ring-2 focus-visible:ring-gold-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark">Demo Poruka</button>
            </form>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-text-secondary text-xs uppercase tracking-widest font-light space-y-2">
          <p>&copy; {new Date().getFullYear()} VELDR Barber — Portfolio Demo. Brend je fictional.</p>
          <p>
            Dizajn i razvoj: <a href="https://svilenkovic.com" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-gold-400 transition-colors font-bold">svilenkovic.com</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
