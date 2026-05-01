"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Clock, Scissors, CheckCircle } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const services = [
  { id: "haircut", name: "Premium Classic Haircut", price: "1500 RSD", duration: "45 MIN" },
  { id: "beard", name: "Beard Sculpture & Trim", price: "800 RSD", duration: "30 MIN" },
  { id: "combo", name: "Hair & Beard Master Combo", price: "2000 RSD", duration: "1 HR 15 MIN" },
  { id: "royal", name: "The Royal Shave (Hot Towel)", price: "1200 RSD", duration: "45 MIN" },
];

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

export default function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("10:00");
  const [selectedService, setSelectedService] = useState<string>("haircut");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setIsSubmitted(true); };

  if (isSubmitted) {
    return (
      <section className="py-32 px-6 relative z-10" id="booking">
        <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-[2rem]" role="status" aria-live="polite">
          <CheckCircle className="w-16 h-16 text-gold-500 mx-auto mb-6 opacity-80" aria-hidden="true" />
          <span className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30 mb-4">Demo · Nije pravo zakazivanje</span>
          <h2 className="text-3xl md:text-5xl font-heading mb-4 text-white uppercase tracking-wider">DEMO TERMIN PRIKAZAN</h2>
          <p className="text-text-secondary text-lg mb-8 max-w-lg mx-auto font-light leading-relaxed">
            Ovo je UI prikaz — termin nije zabeležen u stvarnom kalendaru. Datum prikazan: {selectedDate ? format(selectedDate, "dd.MM.yyyy") : ""} u {selectedTime}h.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-bg-dark transition-all duration-300 px-8 py-4 uppercase font-bold tracking-[0.2em] rounded-full text-sm focus-visible:ring-2 focus-visible:ring-gold-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark">
            Probaj Ponovo
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 relative z-10 flex flex-col items-center" id="booking">
      <div className="w-full max-w-7xl glass-card rounded-[2rem] p-6 lg:p-12 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gold-400 opacity-[0.03] blur-[100px] pointer-events-none rounded-full"></div>
        
        <div className="mb-12 md:mb-20 text-center relative z-10">
          <span className="inline-block text-[10px] tracking-[0.3em] uppercase font-bold text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30 mb-4">Demo Booking UI</span>
          <p className="text-gold-500 uppercase tracking-[0.2em] text-xs font-bold mb-4">Showcase Forme i Animacije</p>
          <h2 className="text-4xl md:text-6xl font-heading mb-4 tracking-tighter">DEMO ZAKAZIVANJE</h2>
          <p className="text-text-secondary text-sm font-light max-w-md mx-auto mt-4">Forma ne šalje podatke i ne pravi rezervacije — služi kao UI prikaz.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative z-10">
          {/* Services */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-heading tracking-widest text-text-secondary mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold-500 inline-block"></span> USLUGA
            </h3>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <button 
                  key={service.id} 
                  onClick={() => setSelectedService(service.id)} 
                  className={`text-left p-5 transition-all duration-500 rounded-xl border ${
                    selectedService === service.id 
                      ? "border-gold-500 bg-[rgba(201,168,76,0.08)] shadow-[0_0_20px_rgba(201,168,76,0.1)]" 
                      : "border-surface-light hover:border-text-secondary/30 bg-black/20"
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-heading tracking-wide uppercase text-sm">{service.name}</span>
                    <span className="text-gold-500 font-heading text-sm">{service.price}</span>
                  </div>
                  <span className="text-xs text-text-secondary flex items-center gap-1.5 uppercase tracking-wider font-light">
                    <Scissors className="w-3 h-3 opacity-60" /> {service.duration}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Date & Time */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-heading tracking-widest text-text-secondary mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold-500 inline-block"></span> VREME
            </h3>
            <div className="bg-black/30 border border-surface-light rounded-xl p-6">
              <style dangerouslySetInnerHTML={{__html: `
                .rdp { --rdp-cell-size: 38px; --rdp-accent-color: var(--color-gold-500); margin: 0; font-family: var(--font-inter); }
                .rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover { background-color: var(--color-gold-500) !important; color: var(--color-bg-dark) !important; font-weight: bold; border-radius: 50%; }
                .rdp-button:hover:not([disabled]):not(.rdp-day_selected) { background-color: rgba(201,168,76,0.1); border-radius: 50%; }
                .rdp-head_cell { font-family: var(--font-heading); color: var(--color-text-secondary); font-size: 0.75rem; font-weight: 500; text-transform: uppercase; }
              `}} />
              <DayPicker 
                mode="single" 
                selected={selectedDate} 
                onSelect={setSelectedDate} 
                className="mx-auto flex justify-center mb-6" 
                disabled={{ before: new Date() }} 
                showOutsideDays={false}
              />
              <div className="mt-6 pt-6 border-t border-surface-light/50">
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map(time => (
                    <button 
                      key={time} 
                      onClick={() => setSelectedTime(time)} 
                      className={`py-2 text-xs transition-all duration-300 rounded-md border text-center font-heading tracking-widest ${
                        selectedTime === time 
                          ? "bg-gold-500 text-bg-dark border-gold-500 font-bold" 
                          : "border-surface-light text-text-secondary hover:border-gold-500/50 hover:text-white"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-heading tracking-widest text-text-secondary mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-gold-500 inline-block"></span> PODACI
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col h-full">
              <div className="space-y-4 flex-1">
                <div>
                  <input required type="text" className="w-full bg-black/30 border border-surface-light text-white px-5 py-4 rounded-xl focus:outline-none focus:border-gold-500/50 transition-colors text-sm font-light placeholder:text-text-secondary tracking-wide uppercase" placeholder="Ime i Prezime" />
                </div>
                <div>
                  <input required type="tel" className="w-full bg-black/30 border border-surface-light text-white px-5 py-4 rounded-xl focus:outline-none focus:border-gold-500/50 transition-colors text-sm font-light placeholder:text-text-secondary tracking-wide uppercase" placeholder="Telefon (06X XXX XXXX)" />
                </div>
              </div>
              <button type="submit" className="w-full bg-gold-500 text-bg-dark font-heading py-5 mt-auto font-bold hover:bg-gold-400 transition-colors uppercase tracking-[0.2em] rounded-xl text-sm shadow-[0_4px_20px_rgba(201,168,76,0.2)]">
                POTVRDI TERMIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
