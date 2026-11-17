const base=import.meta.env.BASE_URL

export default function Hero() {
  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* عکس پس‌زمینه با زوم آهسته (جدا از متن تا متن زوم نشود) */}
      <div
        className="hero-zoom absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${base}/images/inside.jpg')` }}
      ></div>

      {/* لایه آبی */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/85 via-blue-900/75 to-cyan-700/60"></div>

      {/* دایره‌های نورانی شناور */}
      <div className="float absolute top-24 right-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl"></div>
      <div className="float absolute bottom-32 left-10 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>

      {/* متن‌ها: هر کدام کمی دیرتر ظاهر می‌شوند */}
      <div className="relative z-10 px-6 max-w-3xl">
        <p className="fade-up inline-block bg-white/10 border border-white/20 px-4 py-1 rounded-full text-sm mb-6">
          💧 شرکت گزیر دژ
        </p>

        <h1 className="fade-up text-4xl md:text-6xl font-black mb-6 leading-tight" style={{ animationDelay: '.2s' }}>
          آب‌شیرین‌کن بندرلنگه
        </h1>

        <p className="fade-up text-lg text-slate-200 mb-8" style={{ animationDelay: '.4s' }}>
          از دل دریا، آب شیرین و سالم.
        </p>

        <div className="fade-up flex gap-3 justify-center" style={{ animationDelay: '.6s' }}>
          <a href="#gallery" className="bg-cyan-400 text-slate-900 font-bold px-6 py-3 rounded-full hover:bg-cyan-300 hover:scale-105 transition">
            مشاهده گالری
          </a>
          <a href="#about" className="border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition">
            تماس با ما
          </a>
        </div>
      </div>

      {/* موج پایین هدر */}
      <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path fill="#f8fafc" d="M0,64 C240,120 480,0 720,48 C960,96 1200,16 1440,64 L1440,120 L0,120 Z" />
      </svg>
    </header>
  )
}