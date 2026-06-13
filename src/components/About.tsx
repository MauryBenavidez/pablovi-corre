import { Calendar, Users, Heart, Award } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Fecha del evento',
    desc: 'Sábado 24 de Octubre de 2026',
    color: 'bg-red-50 text-brand-red',
  },
  {
    icon: Users,
    title: 'Para toda la comunidad',
    desc: 'Estudiantes, familias, exalumnos, docentes y parroquianos',
    color: 'bg-yellow-50 text-yellow-700',
  },
  {
    icon: Heart,
    title: 'Causa comunitaria',
    desc: 'Evento deportivo, comunitario y benéfico',
    color: 'bg-red-50 text-brand-red',
  },
  {
    icon: Award,
    title: 'Premios y reconocimientos',
    desc: 'Medalla finisher, sorteos y regalos de sponsors',
    color: 'bg-yellow-50 text-yellow-700',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="yellow-accent" />
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
              Acerca del evento
            </p>
            <h2 className="section-title">
              Una carrera que<br />
              <span className="text-brand-red">une a la comunidad</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              La carrera solidaria del Instituto Pablo VI es un encuentro deportivo y comunitario
              que invita a corredores de todas las edades a participar en un recorrido por las
              bardas de Neuquén.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              El evento celebra el deporte, la solidaridad y el espíritu comunitario, reuniendo a
              familias, estudiantes, docentes, exalumnos y vecinos en una jornada memorable.
            </p>

            {/* Who can participate */}
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5 mb-8">
              <p className="font-bold text-brand-red-deep text-sm mb-3 uppercase tracking-wide">
                ¿Quiénes pueden participar?
              </p>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
                {['Estudiantes', 'Familias', 'Exalumnos', 'Personal del colegio', 'Comunidad parroquial'].map(p => (
                  <li key={p} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow border border-brand-yellow-dark flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-red-200 space-y-1">
                <p className="text-xs text-brand-red font-semibold">
                  * Edad mínima para inscribirse: 13 años
                </p>
                <p className="text-xs text-gray-500">
                  Los menores de 13 años pueden acompañar a sus padres o tutores, pero no pueden inscribirse como participantes.
                </p>
              </div>
            </div>

            <a href="https://forms.gle/4qyY9ZuM6XyaZRZP9" className="btn-primary">
              Inscribirme al evento
            </a>
          </div>

          {/* Image + features */}
          <div className="space-y-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
              <img
                src="https://i.ibb.co/cKVhZfC7/DSC-0101-1.jpg"
                alt="Corredores en la carrera"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-red-deep/60 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
                <p className="font-display font-bold text-brand-red-deep text-sm">Neuquén 2026</p>
                <p className="text-gray-500 text-xs">Sábado 24 de Octubre</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map(f => (
                <div key={f.title} className="card p-4 flex gap-3 items-start">
                  <div className={`rounded-xl p-2.5 flex-shrink-0 ${f.color}`}>
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{f.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
