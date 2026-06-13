import { Users, Zap, Medal } from 'lucide-react';

export default function Distances() {
  return (
    <section id="distances" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="inline-block w-12 h-1.5 bg-brand-yellow rounded-full mb-4" />
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
            Modalidades
          </p>
          <h2 className="section-title text-center">Elige tu distancia</h2>
          <p className="section-subtitle mx-auto text-center">
            Dos modalidades diseñadas para que todos puedan participar, sin importar el nivel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 4K Walk */}
          <div className="card overflow-hidden flex flex-col">
            <div
              className="p-8 text-white text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #9E1B22 0%, #C4222B 100%)' }}
            >
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/5 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/5 rounded-full" />
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4 relative z-10">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="font-display font-black text-6xl mb-1 relative z-10">4km</div>
              <div className="text-white/80 font-semibold text-lg relative z-10">Caminata Familiar</div>
            </div>

            <div className="p-7 flex flex-col flex-1">
              <span className="inline-block bg-red-100 text-brand-red text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                Familiar
              </span>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                Ideal para familias, principiantes y quienes quieren disfrutar de la jornada en un
                ambiente festivo. Sin exigencias de ritmo ni tiempo.
              </p>
              <ul className="space-y-2 mb-12">
                {['Apto para mayores de 13 años', 'Sin tiempo límite', 'Hidratación en ruta', 'Kit Básico o Completo'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow border border-yellow-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              
            </div>
          </div>

          {/* 8K Competitive */}
          <div
            className="card overflow-hidden flex flex-col ring-4 shadow-2xl"
            style={{  boxShadow: '0 20px 60px rgba(158,27,34,0.20), 0 0 0 4px #FFD100' }}
          >
            <div
              className="p-8 text-white text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #5C0D12 0%, #9E1B22 60%, #7B1218 100%)' }}
            >
              <div className="absolute top-3 right-3 bg-brand-yellow text-brand-red-deep text-xs font-black px-3 py-1 rounded-full z-20">
                COMPETITIVA
              </div>
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-white/5 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/5 rounded-full" />
              <div className="w-16 h-16 rounded-2xl bg-brand-yellow/20 border border-brand-yellow/40 flex items-center justify-center mx-auto mb-4 relative z-10">
                <Zap className="w-8 h-8 text-brand-yellow" />
              </div>
              <div className="font-display font-black text-6xl mb-1 relative z-10" style={{ color: '#FFD100' }}>8km</div>
              <div className="text-white/80 font-semibold text-lg relative z-10">Prueba Competitiva</div>
            </div>

            <div className="p-7 flex flex-col flex-1">
              <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                Competitiva
              </span>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                El desafío principal del evento. Compite contra el reloj y otros corredores por las
                bardas de Neuquén. Con cronometraje y clasificación.
              </p>
              <ul className="space-y-2 mb-4">
                {['Hidratación en ruta', 'Clasificación', 'Kit Completo'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow border border-yellow-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Medal highlight */}
              <div
                className="flex items-center gap-3 rounded-xl p-4 mb-5 border"
                style={{ background: 'linear-gradient(90deg, #FFF9E0, #FFFBF0)', borderColor: '#E6BC00' }}
              >
                <Medal className="w-6 h-6 flex-shrink-0" style={{ color: '#9E1B22' }} />
                <p className="text-xs font-semibold text-brand-red-deep leading-tight">
                  La medalla finisher se entrega únicamente a los participantes de la prueba competitiva de 8km.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
