import { useState, useEffect } from 'react';

// Sábado 24 de Octubre de 2026 — largada 8:00 AM
const TARGET_DATE = new Date('2026-10-24T08:00:00');

interface TimeUnit { value: number; label: string; }

function pad(n: number) { return String(n).padStart(2, '0'); }

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownCard({ value, label }: TimeUnit) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative rounded-2xl w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center shadow-lg overflow-hidden border border-white/10"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        <span className="countdown-digit text-brand-yellow text-3xl sm:text-5xl md:text-6xl relative z-10">
          {pad(value)}
        </span>
      </div>
      <span className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-widest mt-3">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units: TimeUnit[] = [
    { value: time.days,    label: 'Días' },
    { value: time.hours,   label: 'Horas' },
    { value: time.minutes, label: 'Minutos' },
    { value: time.seconds, label: 'Segundos' },
  ];

  return (
    <section
      id="countdown"
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #5C0D12 0%, #9E1B22 50%, #5C0D12 100%)' }}
    >
      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-brand-yellow/60 rounded-full blur-sm" />

      <div className="container-custom relative z-10 text-center">
        <p className="text-brand-yellow font-bold uppercase tracking-widest text-sm mb-2">
          Faltan
        </p>
        <h2 className="font-display font-black text-white text-3xl md:text-4xl mb-12">
          La carrera se acerca
        </h2>

        <div className="flex items-center justify-center gap-2 sm:gap-5 md:gap-8">
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-start gap-2 sm:gap-5 md:gap-8">
              <CountdownCard {...unit} />
              {i < units.length - 1 && (
                <span className="text-brand-yellow text-4xl sm:text-5xl font-black mt-3 sm:mt-5 leading-none select-none">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 text-white/50 text-sm">
          Sábado 24 de Octubre de 2026 · Neuquén, Patagonia
        </p>
      </div>
    </section>
  );
}
