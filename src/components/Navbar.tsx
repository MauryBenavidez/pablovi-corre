import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about',     label: 'El Evento' },
  { href: '#gallery',   label: '2017' },
  { href: '#distances', label: 'Distancias' },
  { href: '#kits',      label: 'Kits' },
  { href: '#register',  label: 'Inscripción' },
  { href: '#faq',       label: 'FAQ' },
  { href: '#contact',   label: 'Contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-red-deep/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="logo.png"
            alt="Logo Instituto Pablo VI"
            className="h-12 w-auto object-contain drop-shadow-lg"
          />
          <div className="hidden sm:block leading-tight">
            <p className="font-display font-black text-brand-yellow text-sm uppercase tracking-wide leading-none">
              Pablo VI
            </p>
            <p className="text-white/70 text-xs">Corre 2026</p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-brand-yellow text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href="https://forms.gle/4qyY9ZuM6XyaZRZP9" className="btn-primary ml-3 text-sm py-2 px-5">
            Inscribirme
          </a>
        </nav>

        <button
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-brand-red-deep/98 backdrop-blur-md border-t border-white/10 px-4 pt-2 pb-4 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-brand-yellow hover:bg-white/10 px-4 py-3 rounded-xl text-sm font-medium transition-all"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://forms.gle/4qyY9ZuM6XyaZRZP9"
            onClick={() => setOpen(false)}
            className="block btn-primary mt-3 text-center text-sm"
          >
            Inscribirme
          </a>
        </div>
      </div>
    </header>
  );
}
