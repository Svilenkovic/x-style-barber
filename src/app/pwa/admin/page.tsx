import { Calendar, User, Clock, Scissors, MoreHorizontal, Home, TrendingUp, Settings } from "lucide-react";

export default function AdminPWA() {
  const appointments = [
    { time: "09:00", name: "Marko Ristić", service: "Hair & Beard Combo", status: "completed" },
    { time: "10:30", name: "Nikola Savić", service: "Premium Haircut", status: "in-progress" },
    { time: "11:30", name: "Stefan Ilić", service: "Beard Trim", status: "upcoming" },
    { time: "13:00", name: "Petar Jovanović", service: "Royal Shave", status: "upcoming" },
    { time: "14:00", name: "Luka Kostić", service: "Premium Haircut", status: "upcoming" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#0a0a0a] text-white overflow-hidden pb-16">
      {/* Header */}
      <header className="px-6 py-6 border-b border-surface-light">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-text-secondary text-sm">Dobro jutro,</p>
            <h1 className="text-2xl font-heading font-bold">X STYLE Admin</h1>
          </div>
          <div className="w-12 h-12 bg-surface-light rounded-full flex items-center justify-center overflow-hidden border border-gold-500">
            <User className="text-gold-500" />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-surface-dark p-4 rounded-xl border border-surface-light">
            <p className="text-text-secondary text-xs uppercase mb-1">Danas</p>
            <p className="font-heading text-xl font-bold flex items-center gap-2">
               8 Termina
            </p>
          </div>
          <div className="bg-surface-dark p-4 rounded-xl border border-gold-500 shadow-[0_0_15px_rgba(201,168,76,0.15)] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-20"><TrendingUp /></div>
            <p className="text-gold-500 text-xs uppercase mb-1">Prihod</p>
            <p className="font-heading text-xl font-bold">12,500 RSD</p>
          </div>
        </div>
      </header>

      {/* Schedule */}
      <main className="flex-1 overflow-y-auto px-6 py-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-heading">Današnji Raspored</h2>
          <button className="text-gold-500 text-sm">Svi &rarr;</button>
        </div>

        <div className="space-y-4">
          {appointments.map((apt, idx) => (
            <div 
              key={idx} 
              className={`p-4 rounded-xl border ${apt.status === 'in-progress' ? 'border-gold-500 bg-gold-500/10' : 'border-surface-light bg-surface-dark'}`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                   <div className="bg-bg-dark p-2 rounded-lg border border-surface-light">
                      <Clock className="w-5 h-5 text-gold-500" />
                   </div>
                   <div>
                     <p className="font-bold">{apt.time}</p>
                     <p className="text-xs text-text-secondary uppercase">{apt.status}</p>
                   </div>
                </div>
                <button><MoreHorizontal className="text-text-secondary" /></button>
              </div>
              <div className="flex justify-between items-end border-t border-surface-light pt-3 mt-1">
                <div>
                   <p className="font-medium text-white">{apt.name}</p>
                   <p className="text-sm text-text-secondary flex items-center gap-1 mt-1"><Scissors className="w-3 h-3"/> {apt.service}</p>
                </div>
                {apt.status === 'upcoming' && (
                  <button className="bg-gold-500 text-bg-dark px-4 py-1.5 rounded-full text-xs font-bold font-heading">ZAPOČNI</button>
                )}
                {apt.status === 'in-progress' && (
                  <button className="bg-green-500 text-bg-dark px-4 py-1.5 rounded-full text-xs font-bold font-heading">ZAVRŠI</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 md:absolute left-0 w-full bg-surface-dark border-t border-surface-light pb-6 pt-3 px-6 md:pb-3 rounded-b-[36px]">
        <div className="flex justify-between items-center">
          <button className="flex flex-col items-center gap-1 text-gold-500">
            <Home className="w-6 h-6" />
            <span className="text-[10px] font-heading">Početna</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-text-secondary hover:text-white transition-colors">
            <Calendar className="w-6 h-6" />
            <span className="text-[10px] font-heading">Kalendar</span>
          </button>
          <div className="relative -top-6">
            <button className="w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center text-bg-dark shadow-[0_4px_20px_rgba(201,168,76,0.3)]">
              <span className="text-3xl font-light leading-none">+</span>
            </button>
          </div>
          <button className="flex flex-col items-center gap-1 text-text-secondary hover:text-white transition-colors">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-heading">Klijenti</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-text-secondary hover:text-white transition-colors">
            <Settings className="w-6 h-6" />
            <span className="text-[10px] font-heading">Podešavanja</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
