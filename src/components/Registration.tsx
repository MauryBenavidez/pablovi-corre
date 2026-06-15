import { ExternalLink, CreditCard, Smartphone, AlertCircle, Info, Users } from 'lucide-react';

export default function Registration() {
  return (
    <section
      id="register"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #3D0509 0%, #7B1218 40%, #9E1B22 100%)' }}
    >
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/3 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block w-12 h-1.5 bg-brand-yellow rounded-full mb-4" />
            <p className="text-brand-yellow font-bold uppercase tracking-widest text-sm mb-3">
              Participar
            </p>
            <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
              Inscripción
            </h2>
            <p className="text-red-200/70 text-base">
              Asegura tu lugar en el evento más esperado del año.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 md:p-10 shadow-2xl space-y-6">

            {/* Price */}
            <div className="text-center">
              <p className="text-white/60 text-sm uppercase tracking-wide mb-2">Costo de inscripción</p>
              <div className="font-display font-black text-5xl md:text-5xl" style={{ color: '#FFD100' }}>
                $10.000 - $30.000
              </div>
              <p className="text-white/60 text-sm mt-1">por participante · kit basico o kit completo</p>
            </div>

            <div className="border-t border-white/10" />

            {/* Payment methods */}
            <div>
              <p className="text-white font-bold text-sm uppercase tracking-widest mb-4 text-center">
                Medios de pago
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-2xl p-4 flex flex-col items-center gap-2 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <p className="text-white font-semibold text-sm text-center">Transferencia bancaria</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-4 flex flex-col items-center gap-2 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <p className="text-white font-semibold text-sm text-center">Mercado Pago</p>
                </div>
              </div>
            </div>

            {/* Coming soon note */}
            <div className="flex items-start gap-3 bg-brand-yellow/10 border border-brand-yellow/30 rounded-2xl px-5 py-4">
              <Info className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
              <p className="text-brand-yellow text-sm leading-relaxed">
                Los datos de pago serán publicados próximamente.
              </p>
            </div>

            {/* Comprobante warning */}
            <div className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-4">
              <AlertCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
              <p className="text-white/90 text-sm leading-relaxed">
                <span className="font-bold">El comprobante de pago será obligatorio</span> para
                retirar el kit y participar en el evento.
              </p>
            </div>

            {/* Age requirement */}
            <div className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-4">
              <Users className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
              <div className="text-sm leading-relaxed space-y-1">
                <p className="text-white/90">
                  <span className="font-bold">Edad mínima para inscribirse: 13 años.</span>
                </p>
                <p className="text-white/60">
                  Los menores de 13 años no pueden inscribirse, pero sí pueden asistir acompañando a un adulto inscripto.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10" />

            {/* CTA */}
            <div className="text-center">
              <p className="text-white/60 text-xs mb-4">
                Al completar la inscripción aceptas los términos y condiciones del evento.
              </p>
              <a
                href="#"
                className="w-full inline-flex items-center justify-center gap-2 text-brand-red-deep font-black text-lg py-4 px-8 rounded-2xl transition-all duration-200 shadow-xl"
                style={{
                  background: '#FFD100',
                  boxShadow: '0 8px 30px rgba(255,209,0,0.35)',
                }}
              >
                <ExternalLink className="w-5 h-5" />
                Completar inscripción
              </a>
              <p className="text-white/40 text-xs mt-3">
                El formulario de inscripción estará disponible próximamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
