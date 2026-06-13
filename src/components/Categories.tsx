const categories = [
  { name: 'Caminata Familiar', distance: '4km', cap: 'A confirmar' },
  { name: 'Prueba Competitiva', distance: '8km', cap: 'A confirmar' },
];

export default function Categories() {
  return (
    <section id="categories" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <span className="inline-block w-12 h-1.5 bg-brand-yellow rounded-full mb-4" />
          <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
            Participantes
          </p>
          <h2 className="section-title text-center">Categorías</h2>
          <p className="section-subtitle mx-auto text-center">
            Edad mínima: 13 años. Dos modalidades para todos los niveles.
          </p>
        </div>

        <div className="max-w-2xl mx-auto overflow-hidden rounded-2xl shadow-md border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: '#9E1B22' }} className="text-white">
                {['Categoría', 'Distancia', 'Cupos'].map(th => (
                  <th key={th} className="px-6 py-4 text-left font-semibold uppercase tracking-wide text-xs">
                    {th}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, i) => (
                <tr
                  key={cat.name}
                  className={`border-t border-gray-100 hover:bg-red-50 transition-colors ${
                    i % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">{cat.name}</td>
                  <td className="px-6 py-4">
                    <span
                      className="inline-block text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: '#FFF9E0', color: '#9E1B22', border: '1px solid #E6BC00' }}
                    >
                      {cat.distance}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-xs">{cat.cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          * Categorías orientativas. Pueden ser ajustadas según inscriptos. Edad mínima: 13 años.
        </p>
      </div>
    </section>
  );
}
