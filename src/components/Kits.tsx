import { Package, Star, CheckCircle } from 'lucide-react';

const kits = [
  {
    id: 'basic',
    icon: Package,
    name: 'Kit Básico',
    tagline: 'Lo esencial para correr',
    items: [
      'Dorsal con número',
      'Hidratación en ruta',
      'Gomitas energéticas',
    ],
    color: 'from-brand-red to-brand-red-light',
    accent: 'text-brand-red',
    bg: 'bg-red-50',
    border: 'border-red-200',
    featured: false,
  },
  {
    id: 'complete',
    icon: Star,
    name: 'Kit Completo',
    tagline: 'La experiencia completa',
    items: [
      'Remera oficial del evento',
      'Dorsal con número',
      'Hidratación en ruta',
      'Comida post-carrera',
      'Regalos de sponsors',
    ],
    color: 'from-brand-red-deep to-brand-red',
    accent: 'text-brand-yellow',
    bg: 'bg-yellow-50',
    border: 'border-yellow-300',
    featured: true,
  },
];

export default function Kits() {
  return (
    <section id="kits" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="inline-block w-12 h-1.5 bg-brand-yellow rounded-full mb-4" />
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
            Paquetes
          </p>
          <h2 className="section-title text-center">Kits de participación</h2>
          <p className="section-subtitle mx-auto text-center">
            Elige el kit que mejor se adapte a tu experiencia en la carrera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {kits.map(kit => (
            <div
              key={kit.id}
              className={`card overflow-hidden flex flex-col ${
                kit.featured
                  ? 'shadow-2xl'
                  : ''
              }`}
              style={
                kit.featured
                  ? { boxShadow: '0 20px 60px rgba(158,27,34,0.15), 0 0 0 3px #FFD100' }
                  : {}
              }
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${kit.color} p-7 text-white relative overflow-hidden`}>
                {kit.featured && (
                  <div className="absolute top-3 right-3 bg-brand-yellow text-brand-red-deep text-xs font-black px-3 py-1 rounded-full">
                    RECOMENDADO
                  </div>
                )}
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <kit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-black text-2xl mb-1">{kit.name}</h3>
                <p className="text-white/70 text-sm">{kit.tagline}</p>
              </div>

              {/* Items */}
              <div className="p-7 flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Incluye
                </p>
                <ul className="space-y-3 mb-6">
                  {kit.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-800">
                      <CheckCircle
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: kit.featured ? '#9E1B22' : '#9E1B22' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#register"
                  className={`w-full text-center block py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                    kit.featured
                      ? 'text-brand-red-deep font-black'
                      : 'bg-red-50 text-brand-red hover:bg-brand-red hover:text-white'
                  }`}
                  style={kit.featured ? { background: '#FFD100' } : {}}
                >
                  Seleccionar {kit.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits strip */}
        <div
          className="mt-12 rounded-3xl p-8 md:p-10"
          style={{ background: 'linear-gradient(135deg, #5C0D12 0%, #9E1B22 100%)' }}
        >
          <p className="text-brand-yellow font-bold uppercase tracking-widest text-sm text-center mb-6">
            Beneficios para todos los participantes
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { emoji: '🎁', label: 'Sorteos' },
              { emoji: '🎀', label: 'Regalos' },
              { emoji: '🏅', label: 'Medalla finisher*' },
              { emoji: '👕', label: 'Remera oficial**' },
            ].map(b => (
              <div key={b.label} className="bg-white/10 rounded-2xl py-4 px-3 border border-white/10">
                <div className="text-3xl mb-2">{b.emoji}</div>
                <p className="text-white font-semibold text-sm">{b.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center space-y-1">
            <p className="text-white/50 text-xs">* Solo para participantes de la prueba competitiva 8K</p>
            <p className="text-white/50 text-xs">** Solo incluida en el Kit Completo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
