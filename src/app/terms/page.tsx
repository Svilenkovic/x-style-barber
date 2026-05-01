import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Uslovi Korišćenja — VELDR Barber",
  description:
    "Uslovi korišćenja VELDR Barber portfolio sajta. Demonstracioni rad — ne pruža stvarne usluge frizerskog salona.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen relative z-10">
      <div className="max-w-4xl mx-auto py-32 px-6">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold-500/40 bg-gold-500/5 mb-8">
            <FileText className="w-7 h-7 text-gold-500" strokeWidth={1.4} />
          </div>
          <p className="text-gold-500 uppercase tracking-[0.3em] text-xs font-bold mb-4">
            Pravne informacije
          </p>
          <h1 className="text-4xl md:text-6xl font-heading tracking-tighter mb-6">
            Uslovi Korišćenja
          </h1>
          <p className="text-text-secondary text-sm md:text-base font-light tracking-wide">
            Poslednja izmena: 1. maj 2026.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-8">
          {/* 1. O sajtu */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">01</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              O sajtu
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                <span className="text-white">VELDR BARBER</span> sajt predstavlja portfolio i
                demonstracioni rad autora. Ovaj sajt je{" "}
                <span className="text-gold-500">demonstracioni rad</span> — ne pruža stvarne
                usluge frizerskog salona, nije moguće zakazati pravi termin, nikakva plaćanja se
                ne primaju.
              </p>
              <p>
                Brend, ime, logotip i sve vizuelne komponente su deo izmišljenog identiteta
                kreiranog isključivo za potrebe prikaza tehničkih i dizajnerskih sposobnosti
                autora. Pristupom i korišćenjem sajta prihvatate ove uslove u celosti.
              </p>
            </div>
          </section>

          {/* 2. Intelektualna svojina */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">02</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Intelektualna svojina
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                Celokupan kod, dizajn, layout, animacije i 3D komponente prikazane na sajtu
                predstavljaju autorsko delo i zaštićeni su autorskim pravima.
              </p>
              <p>
                <span className="text-white">© Svilenkovic</span> — sva prava zadržana. Brend{" "}
                <span className="text-white">&quot;VELDR BARBER&quot;</span> je u potpunosti
                izmišljen i ne postoji kao stvarno pravno lice ili poslovni subjekt. Svaka
                sličnost sa postojećim brendovima ili imenima je slučajna.
              </p>
              <p>
                Reprodukovanje, distribucija ili komercijalno korišćenje bilo kog dela ovog rada
                bez izričite pisane saglasnosti autora nije dozvoljeno.
              </p>
            </div>
          </section>

          {/* 3. Demo funkcionalnosti */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">03</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Demo funkcionalnosti
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                Forma za zakazivanje termina prisutna na sajtu je{" "}
                <span className="text-white">isključivo UI demonstracija</span>. Klikom na dugme
                &quot;Potvrdi termin&quot; <span className="text-white">ne šalje se nikakav podatak</span>
                {" "}— niti vašem uređaju, niti nama, niti bilo kojoj trećoj strani. Nikakav
                rezervacioni sistem ne postoji u pozadini.
              </p>
              <p>
                Ako popunite polja imena i broja telefona, ti podaci ostaju isključivo u memoriji
                vašeg pretraživača za vreme trajanja sesije i nestaju momentom zatvaranja taba.
                Ne čuvaju se, ne prosleđuju, niti obrađuju na bilo kakav način.
              </p>
              <p>
                Cene, usluge, vremenski slotovi i sve ostale informacije prikazane su radi
                vizuelnog prikaza i nemaju komercijalno značenje.
              </p>
            </div>
          </section>

          {/* 4. Ogranicenje odgovornosti */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">04</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Ograničenje odgovornosti
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                Sajt se pruža <span className="text-white">&quot;kakav jeste&quot;</span>{" "}
                (&quot;as is&quot;), bez ikakvih izričitih ili podrazumevanih garancija u pogledu
                tačnosti, dostupnosti, neprekidnog rada ili tehničke ispravnosti.
              </p>
              <p>
                Autor ne preuzima odgovornost za bilo kakvu direktnu, indirektnu ili posledičnu
                štetu nastalu korišćenjem ili nemogućnošću korišćenja sajta, uključujući ali ne
                ograničavajući se na prekid rada, gubitak podataka ili nekompatibilnost sa
                određenim pretraživačima i uređajima.
              </p>
              <p>
                Sajt može sadržati 3D animacije i napredne efekte koji zahtevaju moderne
                pretraživače sa WebGL podrškom — performanse mogu varirati zavisno od hardvera.
              </p>
            </div>
          </section>

          {/* 5. Izmene uslova */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">05</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Izmene uslova
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                Autor zadržava pravo da u bilo kom trenutku, bez prethodnog obaveštenja, izmeni
                sadržaj sajta, dizajn, ili same uslove korišćenja.
              </p>
              <p>
                Datum poslednje izmene biće naveden na vrhu ove stranice. Nastavkom korišćenja
                sajta nakon izmena prihvatate ažurirane uslove u celosti.
              </p>
            </div>
          </section>

          {/* 6. Primenljivo pravo */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">06</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Primenljivo pravo
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                Na ove uslove korišćenja primenjuje se zakonodavstvo{" "}
                <span className="text-white">Republike Srbije</span>. Eventualni sporovi rešavaće
                se pred nadležnim sudom u Republici Srbiji, uz prethodni pokušaj sporazumnog
                rešenja.
              </p>
              <p>
                Ako se neki deo ovih uslova proglasi nevažećim ili neprimenljivim, ostali delovi
                ostaju u punoj važnosti i primeni.
              </p>
            </div>
          </section>

          {/* 7. Kontakt */}
          <section className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-heading tracking-wide text-white mb-5 flex items-center gap-3">
              <span className="text-gold-500 font-heading text-sm">07</span>
              <span className="w-6 h-[1px] bg-gold-500 inline-block" />
              Kontakt
            </h2>
            <div className="space-y-4 text-text-secondary text-sm md:text-base font-light leading-relaxed">
              <p>
                Za sva pitanja u vezi sa ovim portfolio radom, autorskim pravima ili samim
                uslovima korišćenja, obratite se autoru:
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
