import { Calendar, User, Clock, MapPin, ChevronRight, Home, Scissors, Gift, Star } from "lucide-react";

export default function ClientPWA() {
  return (
    <div className="flex flex-col h-full bg-[#0a0a0a] text-white pb-16">
      {/* Header */}
      <header className="px-6 pt-6 pb-4 bg-gradient-to-b from-surface-dark to-transparent">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-heading">
              <span className="text-text-secondary text-sm block mb-1">Dobrodošli nazad,</span>
              Demo User
            </h1>
          </div>
          <div className="w-12 h-12 rounded-full overflow-hidden border border-surface-light bg-surface-dark flex items-center justify-center">
            <span className="text-gold-500 font-bold">DU</span>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-6 py-2 space-y-6">
        
        {/* Next Appointment Card */}
        <section>
          <div className="bg-surface-dark rounded-2xl p-5 border border-gold-500 shadow-[0_4px_30px_rgba(201,168,76,0.15)] relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] opacity-10">
              <Scissors className="w-32 h-32 text-gold-500 rotate-45" />
            </div>
            
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs uppercase tracking-wider text-gold-500 font-bold bg-gold-500/10 px-2 py-1 rounded">Sledeći Termin</span>
              <span className="text-sm text-text-secondary">Za 2 dana</span>
            </div>
            
            <h3 className="text-2xl font-heading mb-1">Petak, 24. Maj</h3>
            <p className="text-xl font-light mb-4">10:30h</p>

            <div className="flex items-center gap-3 text-sm text-text-secondary border-t border-surface-light pt-4">
               <MapPin className="w-4 h-4 text-gold-500" />
               <span>VELDR Barber, Atelje 04 (placeholder)</span>
            </div>
          </div>
        </section>

        {/* Quick Action */}
        <section>
          <button className="w-full bg-gold-500 text-bg-dark font-heading uppercase tracking-wider py-4 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gold-400 transition-colors">
            <Calendar className="w-5 h-5"/> Novi Termin
          </button>
        </section>

        {/* Loyalty Program */}
        <section className="bg-surface-dark rounded-2xl p-5 border border-surface-light">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-heading text-lg flex items-center gap-2"><Star className="text-gold-500 w-5 h-5"/> Loyalty Klub</h3>
            <span className="text-sm text-gold-500">350 poena</span>
          </div>
          <p className="text-xs text-text-secondary mb-4">Još 150 poena do besplatnog šišanja.</p>
          <div className="h-2 w-full bg-bg-dark rounded-full overflow-hidden mb-2">
            <div className="h-full bg-gold-500 w-[70%]"></div>
          </div>
        </section>

        {/* Previous visits */}
        <section>
          <h3 className="font-heading mb-4 text-text-secondary">Istorija Poseta</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((_, i) => (
              <button key={i} className="w-full bg-surface-dark p-4 rounded-xl border border-surface-light flex items-center justify-between hover:border-gold-500 transition-colors">
                <div className="flex gap-4 items-center">
                  <div className="bg-bg-dark w-12 h-12 rounded-lg flex flex-col items-center justify-center border border-surface-light">
                    <span className="text-[10px] text-text-secondary uppercase leading-none mb-1">Maj</span>
                    <span className="font-bold leading-none">{10 + i * 5}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-sm">Premium Haircut</p>
                    <p className="text-xs text-text-secondary">Majstor: Andrej</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gold-500">
                  <span className="text-sm font-heading">1500 RSD</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 md:absolute left-0 w-full bg-surface-dark border-t border-surface-light pb-6 pt-3 px-6 md:pb-3 rounded-b-[36px]">
        <div className="flex justify-between items-center px-4">
          <button className="flex flex-col items-center gap-1 text-gold-500">
            <Home className="w-6 h-6" />
            <span className="text-[10px] font-heading">Početna</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-text-secondary hover:text-white transition-colors">
            <Calendar className="w-6 h-6" />
            <span className="text-[10px] font-heading">Termini</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-text-secondary hover:text-white transition-colors">
            <Gift className="w-6 h-6" />
            <span className="text-[10px] font-heading">Nagrade</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-text-secondary hover:text-white transition-colors">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-heading">Profil</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
