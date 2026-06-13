import { ChevronDown, MapPin, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(92,13,18,0.93) 0%, rgba(126,18,24,0.85) 50%, rgba(92,13,18,0.90) 100%)',
        }}
      />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-red/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 container-custom text-center text-white px-4 py-32">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 text-sm font-medium text-brand-yellow">
          <MapPin className="w-4 h-4" />
          Neuquén, Argentina
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/ChatGPT_Image_10_jun_2026,_10_21_57.png"
            alt="Logo Instituto Pablo VI"
            className="h-44 w-auto object-contain drop-shadow-2xl"
          />
        </div>

        <p className="text-brand-yellow/90 font-semibold text-sm md:text-base uppercase tracking-widest mb-4">
          Instituto Secundario Pablo VI
        </p>

        <h1 className="font-display font-black leading-none text-shadow-lg mb-6 uppercase tracking-tight">
          <span className="block text-white text-4xl sm:text-5xl md:text-6xl">PABLO VI</span>
          <span
            className="block text-5xl sm:text-7xl md:text-9xl"
            style={{ color: '#FFD100', textShadow: '0 4px 24px rgba(255,209,0,0.35)' }}
          >
            CORRE
          </span>
          <span className="block text-white text-3xl sm:text-4xl md:text-5xl">2026</span>
        </h1>

        <div className="inline-flex items-center gap-2 bg-brand-yellow text-brand-red-deep font-bold px-5 py-2.5 rounded-full text-sm md:text-base mb-10 shadow-lg shadow-brand-yellow/30">
          <Calendar className="w-4 h-4" />
          Sábado 24 de Octubre de 2026 · Neuquén
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <a
            href="https://forms.gle/4qyY9ZuM6XyaZRZP9"
            className="btn-primary text-base px-10 py-4 text-lg font-black shadow-xl shadow-brand-yellow/30"
          >
            Inscribirme ahora
          </a>
          <a href="#about" className="btn-outline text-base px-8 py-4">
            Conocer más
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {[
            { value: '2',    label: 'Distancias' },
            { value: '13+',  label: 'Años mínimos' },
            { value: '2026', label: 'Edición' },
          ].map(stat => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm rounded-2xl py-3 px-2 border border-white/15"
            >
              <div className="font-display font-black text-2xl text-brand-yellow">{stat.value}</div>
              <div className="text-white/70 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#countdown"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-brand-yellow transition-colors animate-bounce-gentle"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown className="w-7 h-7" />
      </a>
    </section>
  );
}
