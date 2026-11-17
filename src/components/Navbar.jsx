import { useState } from 'react'
import { Link } from 'react-router-dom'
const base=import.meta.env.BASE_URL


// لینک‌ها یک بار نوشته می‌شوند و در هر دو منو (دسکتاپ و موبایل) استفاده می‌شوند
const links = [
  { href: '#home', text: 'صفحه اصلی' },
  { href: '#gallery', text: 'گالری' },
  { href: '#about', text: 'درباره ما' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)   // منوی موبایل باز است یا نه

  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-900/80 backdrop-blur-md text-white">
      {/* ردیف اصلی نوبار */}
      <div className="flex justify-between items-center px-5 md:px-8 py-4 md:py-5">

        {/* لوگو و اسم */}
        <div className="flex items-center gap-3">
          <img
            src={`${base}images/gezir-dej-logo-header.svg`}
            alt="لوگو"
            className="h-12 w-12 md:h-14 md:w-14 object-contain"
          />
          <span className="text-xl md:text-2xl font-bold">گزیر دژ</span>
        </div>

        {/* منوی دسکتاپ: فقط از اندازه md به بالا */}
        <div className="hidden md:flex items-center gap-4 text-lg">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-2 hover:text-cyan-300 transition">
              {l.text}
            </a>
          ))}
          <Link
            to="/login"
            className="bg-indigo-200 text-slate-800 font-bold px-5 py-2 rounded-full hover:bg-cyan-300 hover:scale-105 transition"
          >
            ورود
          </Link>
        </div>

        {/* دکمه همبرگری: فقط زیر اندازه md */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="باز و بسته کردن منو"
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
        </button>
      </div>

      {/* منوی موبایل: با تغییر ارتفاع آرام باز و بسته می‌شود */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 pb-5 border-t border-white/10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}   // بعد از کلیک منو بسته شود
              className="py-3 text-lg border-b border-white/10 hover:text-cyan-300 transition"
            >
              {l.text}
            </a>
          ))}
          <Link
            to="/login"
            className="mt-4 text-center bg-cyan-600 text-slate-200 text-lg font-bold py-3 rounded-full hover:bg-indigo-400 transition"
          >
            ورود
          </Link>
        </div>
      </div>
    </nav>
  )
}