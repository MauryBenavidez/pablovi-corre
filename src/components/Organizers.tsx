import { School, Building2, Star, Landmark } from 'lucide-react';

const organizers = [
  {
    icon: School,
    name: 'Instituto Pablo VI',
    role: 'Organizador principal',
    desc: 'Instituto de educación secundaria con más de 50 años formando jóvenes neuquinos con valores y compromiso social.',
    image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    iconBg: '#9E1B22',
  },
  {
    icon: Landmark,
    name: 'Sponsor 1',
    role: 'Patrocinador',
    desc: 'Proximamente.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    iconBg: '#7B1218',
  },
  {
    icon: Building2,
    name: 'Sponsor 2',
    role: 'Patrocinador',
    desc: 'Proximamente.',
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    iconBg: '#5C0D12',
  },
  {
    icon: Star,
    name: 'Sponsor 3',
    role: 'Patrocinador',
    desc: 'Proximamente.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    iconBg: '#9E1B22',
  },
];

export default function Organizers() {
  return (
    <section id="organizers" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="inline-block w-12 h-1.5 bg-brand-yellow rounded-full mb-4" />
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
            Quienes lo hacen posible
          </p>
          <h2 className="section-title text-center">Organizadores y sponsors</h2>
          <p className="section-subtitle mx-auto text-center">
            Este evento es posible gracias al trabajo y el apoyo de estas instituciones y empresas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {organizers.map(org => (
            <div key={org.name} className="card overflow-hidden group">
              <div className="relative overflow-hidden h-36">
                <img
                  src={org.image}
                  alt={org.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div
                  className="absolute top-3 left-3 rounded-xl p-2 shadow-md"
                  style={{ background: org.iconBg }}
                >
                  <org.icon className="w-5 h-5 text-white" />
                </div>
                <div
                  className="absolute bottom-2 left-3 text-xs font-bold px-2 py-1 rounded-full"
                  style={{ background: '#FFD100', color: '#5C0D12' }}
                >
                  {org.role}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-gray-900 text-base mb-2">{org.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{org.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-3xl p-8 md:p-10 text-center border"
          style={{ background: 'linear-gradient(135deg, #FFF9E0, #FFFBF0)', borderColor: '#E6BC00' }}
        >
          <Building2 className="w-10 h-10 mx-auto mb-4" style={{ color: '#9E1B22' }} />
          <h3 className="font-display font-bold text-brand-red-deep text-xl mb-3">
            ¿Quieres ser sponsor?
          </h3>
          <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed mb-5">
            Suma tu empresa a este evento solidario y muestra tu compromiso con la comunidad neuquina.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold py-3 px-7 rounded-full transition-all duration-200 text-sm shadow-md"
            style={{ background: '#9E1B22', color: '#FFD100' }}
          >
            Quiero ser sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
