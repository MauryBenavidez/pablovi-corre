import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

const navLinks = {
  event: [
    { label: 'El Evento',    href: '#about' },
    { label: 'Distancias',   href: '#distances' },
    { label: 'Kits',         href: '#kits' },
    { label: 'Recorrido',    href: '#route' },
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
                <div className="flex items-center gap-3 text-red-200/80 text-sm">
                  <Phone className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                  <span className="italic">Teléfono a confirmar próximamente</span>
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
                  src="/ChatGPT_Image_10_jun_2026,_10_21_57.png"
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
              <div className="flex items-center gap-2">
                {[
                  { icon: Instagram,     label: 'Instagram' },
                  { icon: MessageCircle, label: 'WhatsApp' },
                  { icon: Mail,          label: 'Email' },
                ].map(s => (
                  <a
                    key={s.label}
                    href="#contact"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-brand-yellow/60"
                    style={{ background: 'rgba(255,255,255,0.08)' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#9E1B22')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                  >
                    <s.icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
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
            <p className="text-red-400/40 text-xs text-center">
              &copy; 2026 Pablo VI Corre · Instituto Secundario Pablo VI, Neuquén, Argentina.
              Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
