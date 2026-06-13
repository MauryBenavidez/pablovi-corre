import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: '¿Quiénes pueden participar?',
    a: 'Pueden participar estudiantes del Instituto Pablo VI, familias, exalumnos, personal del colegio, comunidad de la parroquia. El evento es abierto a toda la comunidad del Pablo VI. La edad mínima para inscribirse como participante es de 13 años.',
  },
  {
    q: '¿Pueden asistir niños menores de 13 años?',
    a: 'Sí. Los menores de 13 años pueden acompañar a sus padres o tutores durante el evento, pero no pueden inscribirse como participantes de la caminata o la carrera.',
  },
  {
    q: '¿Qué incluye cada kit?',
    a: 'El Kit Básico incluye: dorsal con número, hidratación en ruta y gomitas energéticas. El Kit Completo incluye: remera oficial del evento, dorsal con número, hidratación en ruta y regalos de sponsors.',
  },
  {
    q: '¿Cómo se realiza el pago?',
    a: 'El pago se puede realizar mediante transferencia bancaria o Mercado Pago. Los datos de pago serán publicados próximamente. El comprobante de pago será obligatorio para retirar el kit y participar en el evento.',
  },
  {
    q: '¿Qué sucede si soy menor de edad?',
    a: 'Los participantes de entre 13 y 17 años deben contar con autorización de un adulto responsable (padre, madre o tutor). Dicha autorización deberá presentarse el día del evento junto al comprobante de pago. Los menores de 13 años no pueden inscribirse, pero sí pueden asistir acompañando a un adulto inscripto.',
  },
  {
    q: '¿La medalla finisher es para todos?',
    a: 'No. La medalla finisher se entrega únicamente a los participantes que completen la prueba competitiva de 8 km. Los participantes de la Caminata Familiar de 4 km recibirán otros beneficios como sorteos y regalos.',
  },
  {
    q: '¿Cuándo y dónde se realiza el evento?',
    a: 'La carrera se realiza el sábado 24 de octubre de 2026 en la ciudad de Neuquén. La largada y llegada es frente al Instituto Secundario Pablo VI. El horario exacto será confirmado próximamente.',
  },
  {
    q: '¿Cuánto cuesta la inscripción?',
    a: 'El costo de inscripción es de $30.000 por participante, para cualquier distancia. Esta tarifa aplica tanto para la Caminata Familiar (4km) como para la Prueba Competitiva (8km).',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left p-5 hover:bg-red-50/60 transition-colors gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-sm md:text-base pr-2">{q}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          style={{ color: '#9E1B22' }}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="inline-block w-12 h-1.5 bg-brand-yellow rounded-full mb-4" />
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
            Dudas frecuentes
          </p>
          <h2 className="section-title text-center">Preguntas frecuentes</h2>
          <p className="section-subtitle mx-auto text-center">
            Respondemos las dudas más comunes sobre el evento.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map(faq => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
            <HelpCircle className="w-6 h-6 flex-shrink-0" style={{ color: '#9E1B22' }} />
            <p className="text-gray-700 text-sm">
              ¿No encontraste tu respuesta?{' '}
              <a href="#contact" className="font-semibold hover:underline" style={{ color: '#9E1B22' }}>
                Contáctanos
              </a>{' '}
              y te respondemos a la brevedad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
