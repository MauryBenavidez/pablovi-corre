import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react';

const photos = [
  {
    src: 'https://i.ibb.co/B5XqxBjX/DSCN4276.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/TqBSKND2/DSCN4280.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/ZRs27jk6/DSCN4289.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/676d6RjK/DSCN4296.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/gkH6HXt/DSCN4299.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/DPpbkT7B/DSCN4301.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/bj9D5bDj/DSCN4302.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/tpCNgfXT/DSCN4318.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/xKW0rztr/DSCN4319.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/kscSp0bx/DSCN4326.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
{
    src: 'https://i.ibb.co/ccd8VJRz/DSCN4327.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
{
    src: 'https://i.ibb.co/XrCrWksD/DSC-0085.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
{
    src: 'https://i.ibb.co/1J9wSTS7/DSC-0099.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/gZMfGDjx/DSC-0105.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/zHPPGMhX/DSC-0120.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/Ng6Pd66F/DSCN4329.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/hJXR89dP/DSCN4336.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/KpSs07t4/DSC-0182.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
{
    src: 'https://i.ibb.co/WNrVY2MH/DSC-0191.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
{
    src: 'https://i.ibb.co/1fbkH4YH/DSC-0193.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/Jw6Q0gfm/DSC-0218.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
{
    src: 'https://i.ibb.co/0pZs1qQ8/DSC-0221.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
{
    src: 'https://i.ibb.co/wNPVsHGR/DSCN4342.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/LD8y7sVH/DSC-0347.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/DD8ThnZf/DSCN4384.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/pvGnDvYk/DSCN4385.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/HTMWM0KB/DSCN4395.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/XxjthW7z/DSCN4408.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
  {
    src: 'https://i.ibb.co/XZQnccSG/DSCN4415.jpg',
    col: 'col-span-1',
    row: 'row-span-1',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() =>
    setLightbox(i => (i !== null ? (i - 1 + photos.length) % photos.length : null)),
    []
  );

  const next = useCallback(() =>
    setLightbox(i => (i !== null ? (i + 1) % photos.length : null)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      <section id="gallery" className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block w-12 h-1.5 bg-brand-yellow rounded-full mb-4" />
            <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">
              Historia
            </p>
            <h2 className="section-title text-center">Pablo VI Corre 2017</h2>
            <p className="section-subtitle mx-auto text-center">
              Reviví algunos momentos de la edición 2017.
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
  <div className="overflow-hidden py-4">
  <div className="gallery-track">
    {[...photos, ...photos].map((photo, i) => (
      <button
        key={i}
        onClick={() => setLightbox(i % photos.length)}
        className="flex-shrink-0 overflow-hidden rounded-2xl group"
      >
        <img
          src={photo.src}
          className="w-[620px] h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </button>
    ))}
  </div>
</div>
</div>

          {/* Footer note */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
              <Images className="w-5 h-5 flex-shrink-0" style={{ color: '#9E1B22' }} />
              <p className="text-gray-600 text-sm">
                Edición 2017 · Instituto Secundario Pablo VI · Neuquén
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)' }}
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-10"
            onClick={close}
            aria-label="Cerrar"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 md:left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
            onClick={e => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full mx-14 md:mx-24"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={photos[lightbox].src}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-3 text-center">
              <p className="text-white/40 text-xs mt-1">
                {lightbox + 1} / {photos.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 md:right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
            onClick={e => { e.stopPropagation(); next(); }}
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}
