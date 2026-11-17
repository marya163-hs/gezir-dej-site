import Reveal from './Reveal'
const base=import.meta.env.BASE_URL


const photos = [
  { src: `${base}images/inside.jpg`, title: 'نمای درونی ' },
  { src: `${base}images/outside.jpg`, title: 'نمای بیرونی' },
  { src: `${base}images/photo_2026-11-08_19-36-44.jpg`, title: 'شماتیک سایت' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relativ bg-slate-100 text-slate-800 pt-10 pb-32 scroll-mt-24">

      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-black text-center mb-12">گالری پروژه</h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-[1500ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                  <span className="font-bold">{photo.title}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}