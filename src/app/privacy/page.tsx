import type { Metadata } from "next";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Politika Privatnosti — VELDR Barber",
  description:
    "Politika privatnosti za VELDR Barber portfolio sajt. Demonstracioni rad — ne prikuplja se nikakva lična podaci.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen relative z-10">
      <div className="max-w-4xl mx-auto py-32 px-6">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold-500/40 bg-gold-500/5 mb-8">
            <Shield className="w-7 h-7 text-gold-500" strokeWidth={1.4} />
          </div>
          <p className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4">
            Pravne informacije
          </p>
          <h1 className="text-4xl md:text-6xl font-heading tracking-tighter mb-6">
            Politika Privatnosti
          </h1>
          <p className="text-text-secondary text-sm md:text-base font-light tracking-wide">
            Poslednja izmena: 1. maj 2026.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-8">
          {/* 1. Uvod */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">01</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Uvod
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                Dobrodošli na <span className="text-white">VELDR BARBER</span> — ovaj sajt
                predstavlja <span className="text-gold-500">portfolio i demonstracioni rad</span>{" "}
                izrađen u okviru autorskog dizajna i razvoja. Brend &quot;VELDR BARBER&quot; je
                izmišljen i ne predstavlja stvarni frizerski salon.
              </p>
              <p>
                Sajt postoji isključivo radi prikaza tehničkih i dizajnerskih sposobnosti — ne
                pruža stvarne usluge, ne prima rezervacije, ne obrađuje plaćanja i{" "}
                <span className="text-white">ne prikuplja lične podatke korisnika</span>. Ova
                politika privatnosti opisuje kako se vaše prisustvo na sajtu tretira u skladu sa
                najboljim praksama i Opštom uredbom o zaštiti podataka (GDPR).
              </p>
            </div>
          </section>

          {/* 2. Koji podaci se prikupljaju */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">02</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Koji podaci se prikupljaju
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                <span className="text-white">Nikakvi lični podaci se ne prikupljaju.</span> Sajt
                je statički generisan (Next.js static export) i ne sadrži server koji obrađuje,
                čuva ili prosleđuje korisnička unošenja.
              </p>
              <p>
                Jedine informacije koje se čuvaju nalaze se isključivo u vašem pretraživaču putem{" "}
                <span className="text-white">localStorage</span> mehanizma:
              </p>
              <ul className="list-none space-y-2 pl-2">
                <li className="flex gap-3">
                  <span className="text-gold-500 mt-2 inline-block w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                  <span>
                    <span className="text-white">veldr_cookie_consent</span> — vaš izbor o
                    prihvatanju kolačića (vrednost &quot;accepted&quot; ili &quot;rejected&quot;).
                  </span>
                </li>
              </ul>
              <p>
                Ovi podaci se nikada ne šalju na server, ostaju lokalno na vašem uređaju i možete
                ih u svakom trenutku obrisati kroz podešavanja vašeg pretraživača.
              </p>
            </div>
          </section>

          {/* 3. Kolačići */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">03</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Kolačići
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                Sajt koristi <span className="text-white">isključivo neophodne kolačiće</span>{" "}
                potrebne za osnovni rad — konkretno, za pamćenje vašeg izbora oko prihvatanja
                same kolačić-poruke.
              </p>
              <p>
                Sajt <span className="text-white">ne koristi</span>:
              </p>
              <ul className="list-none space-y-2 pl-2">
                <li className="flex gap-3">
                  <span className="text-gold-500 mt-2 inline-block w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                  <span>Google Analytics ili druge analitičke alate</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-500 mt-2 inline-block w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                  <span>Reklamne ili marketinške trackere</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-500 mt-2 inline-block w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                  <span>Pixele društvenih mreža (Facebook, TikTok, itd.)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-500 mt-2 inline-block w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                  <span>Bilo kakve treće-strane skripte za praćenje korisničkog ponašanja</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 4. Treće strane */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">04</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Treće strane
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                Sajt ne integriše analitičke servise, oglašivačke mreže niti CRM sisteme. Jedina
                eksterna usluga koju koristi je <span className="text-white">Google Fonts</span>{" "}
                — radi učitavanja tipografskih familija (Inter i Space Grotesk) korišćenih u
                vizuelnom identitetu.
              </p>
              <p>
                Prilikom učitavanja fontova, vaš pretraživač uspostavlja standardnu HTTP konekciju
                sa Google serverima, koji mogu privremeno zabeležiti vašu IP adresu i informacije
                o agentu pretraživača kao deo standardnog rada CDN servisa. Više informacija
                dostupno je u{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-500 hover:text-gold-400 underline underline-offset-4 transition-colors"
                >
                  Google politici privatnosti
                </a>
                .
              </p>
            </div>
          </section>

          {/* 5. Vasa prava */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">05</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Vaša prava
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                Prema GDPR uredbi i domaćem zakonodavstvu, kao korisnik imate sledeća prava:
              </p>
              <ul className="list-none space-y-2 pl-2">
                <li className="flex gap-3">
                  <span className="text-gold-500 mt-2 inline-block w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                  <span>Pravo na pristup podacima koji se o vama čuvaju</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-500 mt-2 inline-block w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                  <span>Pravo na ispravku netačnih ili nepotpunih podataka</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-500 mt-2 inline-block w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                  <span>Pravo na brisanje (&quot;pravo da budete zaboravljeni&quot;)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold-500 mt-2 inline-block w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                  <span>Pravo na prigovor i ograničenje obrade</span>
                </li>
              </ul>
              <p>
                Pošto sajt <span className="text-white">ne prikuplja niti čuva</span> vaše lične
                podatke ni na kakvom serveru, ne postoji baza iz koje bi bilo šta moglo da se
                pristupi, izmeni ili obriše. Sve informacije koje su privremeno prisutne nalaze
                se u vašem pretraživaču i pod vašom su isključivom kontrolom.
              </p>
            </div>
          </section>

          {/* 6. Kontakt */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">06</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Kontakt
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                Za sva pitanja u vezi sa ovim portfolio radom, autorskim pravima ili samom
                politikom privatnosti, obratite se autoru:
              </p>
              <p>
                <a
                  href="https://svilenkovic.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-500 hover:text-gold-400 underline underline-offset-4 transition-colors uppercase tracking-wider font-heading text-sm"
                >
                  svilenkovic.com
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-text-secondary hover:text-gold-500 transition-colors uppercase tracking-[0.2em] text-xs font-bold group"
          >
            <ArrowLeft
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              strokeWidth={1.5}
            />
            Povratak na početnu
          </Link>
        </div>
      </div>
    </main>
  );
}
