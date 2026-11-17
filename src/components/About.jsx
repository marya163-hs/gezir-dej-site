import { useState } from 'react'
import Reveal from './Reveal'

// متن کامل شرکت را اینجا بنویس
const aboutText =
  
       ' شرکت گزیر دژ با اتکا به بیش از دو دهه تجربه و فعالیت مستمر، از سال ۱۳۷۶ فعالیت خود را در حوزه پروژه‌های عمرانی، زیرساختی و اجرایی آغاز نموده است. در طول این سال‌ها، با بهره‌گیری از دانش فنی، تجربه اجرایی و رویکردی مبتنی بر کیفیت و تعهد، همواره تلاش کرده‌ایم نقشی مؤثر در اجرای پروژه‌های عمرانی و توسعه زیرساخت‌های کشور ایفا نماییم.'+
     ' در راستای توسعه فعالیت‌ها و همگام شدن با نیازهای روز صنعت، از سال ۱۳۹۷ با ورود تخصصی به حوزه طراحی، تأمین، ساخت و اجرای سیستم‌های آب‌شیرین‌کن صنعتی (Desalination)، فصل جدیدی از فعالیت‌های شرکت آغاز شد. '+
     ' امروزه با تلفیق تجربه ارزشمند در پروژه‌های عمرانی و دانش فنی در حوزه تصفیه و شیرین‌سازی آب، تمرکز شرکت بر ارائه راهکارهای مهندسی و اجرای پروژه‌های تخصصی در زمینه تأمین آب باکیفیت برای صنایع و مجموعه‌های مختلف است.'
  

const contacts = [
  { icon: '📞', text: '076 4426 0594', link: 'tel:07644260594' },
  { icon: '📍', text: 'هرمزگان - بندر عباس - چهارراه پردیس - دفتر شرکت گزیردژ' },
  { icon: '✉️', text: 'gezirdejh@gmail.com' },
]

export default function About() {
  const [open, setOpen] = useState(false)   // false = بسته (سه خط)

  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-24 scroll-mt-16">
      <Reveal>
        <h2 className="text-3xl font-black text-center mb-6">درباره شرکت گزیر دژ</h2>

        <div className="bg-slate-200 rounded-2xl p-6 mb-10">
          <p className={`text-slate-600 font-vazir font-bold leading-8 ${open ? '' : 'line-clamp-3'}`}>
            {aboutText}
          </p>

          <button
            onClick={() => setOpen(!open)}
            className="mt-2 mb-3 text-yellow-800 font-bold hover:underline"
          >
            {open ? 'بستن' : 'ادامه '}
          </button>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-4">
          {contacts.map((c, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="bg-cyan-100 rounded-full w-10 h-10 flex items-center justify-center">
                {c.icon}
              </span>
              {c.link ? (
                <a href={c.link} dir="ltr" className="inline-block hover:text-cyan-600 transition">{c.text}</a>
              ) : (
                <p>{c.text}</p>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}