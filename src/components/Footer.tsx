import { Mail, MapPin } from 'lucide-react';

const navLinks = {
  event: [
    { label: 'El Evento',    href: '#about' },
    { label: 'Distancias',   href: '#distances' },
    { label: 'Kits',         href: '#kits' },
    { label: 'Categorías',   href: '#categories' },
  ],
  info: [
    { label: 'Inscripción',          href: '#register' },
    { label: 'Organizadores',        href: '#organizers' },
    { label: 'Preguntas frecuentes', href: '#faq' },
    { label: 'Contacto',             href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <>
      {/* Contact section */}
      <section
        id="contact"
        className="section-padding"
        style={{ background: 'linear-gradient(135deg, #5C0D12 0%, #9E1B22 100%)' }}
      >
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block w-12 h-1.5 bg-brand-yellow rounded-full mb-4" />
            <p className="text-brand-yellow font-bold uppercase tracking-widest text-sm mb-3">
              Comunícate con nosotros
            </p>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">Contacto</h2>
            <p className="text-red-200/70 text-base max-w-xl mx-auto">
              ¿Tenés dudas o consultas sobre el evento? Próximamente estará disponible nuestra información de contacto oficial.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
              <p className="text-brand-yellow font-bold text-sm uppercase tracking-widest mb-4 text-center">
                Instituto Secundario Pablo VI
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-red-200/80 text-sm">
                  <MapPin className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  Instituto Secundario Pablo VI · Neuquén, Argentina
                </div>
                <div className="flex items-center gap-3 text-red-200/80 text-sm">
                  <Mail className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  <span className="italic">pablovicorre@gmail.com</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#3D0509' }} className="text-white">
        <div className="container-custom py-14">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src="logo.png"
                  alt="Logo Instituto Pablo VI"
                  className="h-16 w-auto object-contain flex-shrink-0"
                />
                <div>
                  <p className="font-display font-black text-brand-yellow text-lg leading-tight">
                    Pablo VI Corre 2026
                  </p>
                  <p className="text-red-300/70 text-sm">Instituto Pablo VI · Neuquén</p>
                </div>
              </div>
              <p className="text-red-300/60 text-sm leading-relaxed max-w-sm mb-5">
                Un evento deportivo, comunitario y benéfico que une a toda la comunidad
                del Instituto Pablo VI.
              </p>
            </div>

            {/* Event links */}
            <div>
              <p className="font-display font-bold text-brand-yellow text-xs uppercase tracking-widest mb-5">
                El Evento
              </p>
              <ul className="space-y-2.5">
                {navLinks.event.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="text-red-300/60 hover:text-brand-yellow text-sm transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info links */}
            <div>
              <p className="font-display font-bold text-brand-yellow text-xs uppercase tracking-widest mb-5">
                Información
              </p>
              <ul className="space-y-2.5">
                {navLinks.info.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="text-red-300/60 hover:text-brand-yellow text-sm transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t pt-8" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
  <div className="text-center space-y-3">
    <p className="text-red-400/40 text-xs">
      &copy; 2026 Pablo VI Corre · Instituto Secundario Pablo VI, Neuquén, Argentina.
      Todos los derechos reservados.
    </p>

    <div className="mt-4 text-center">
  <p className="text-gray-400 text-sm">
    Desarrollado por{' '}
    <span className="text-brand-yellow font-semibold">
      Mauricio Benavidez
    </span>
  </p>

  <div className="mt-1 flex justify-center gap-4 text-sm">
    <a
      href="https://github.com/MauryBenavidez"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-brand-yellow transition-colors"
    >
      GitHub
    </a>

    <span className="text-gray-600">•</span>

    <a
      href="https://www.linkedin.com/in/mauricio-benavidez-fullstack/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-brand-yellow transition-colors"
    >
      LinkedIn
    </a>
  </div>
</div>
  </div>
</div>
        </div>
      </footer>
    </>
  );
}
