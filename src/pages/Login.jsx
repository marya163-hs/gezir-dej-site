import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const base=import.meta.env.BASE_URL


// نوع کاربرها (برای اضافه کردن نقش جدید فقط یک خط اضافه کن)
const roles = [
  { id: 'manager', icon: '👔', title: 'مدیر', text: 'ورود به پنل مدیریت' },
  { id: 'staff', icon: '🛠️', title: 'کارمند / اپراتور', text: 'ورود به پنل کارکنان' },
]

export default function Login() {
  const [role, setRole] = useState(null)        // نقش انتخاب‌شده
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState('')

  // وقتی صفحه باز شد، به بالای صفحه برو
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()                 // جلوگیری از رفرش صفحه

    if (!role) {
      setError('لطفاً نوع کاربری را انتخاب کنید')
      return
    }
    if (!username.trim() || !password) {
      setError('نام کاربری و رمز عبور را وارد کنید')
      return
    }

    setError('')
    // اینجا بعداً اطلاعات به سرور فرستاده می‌شود
    console.log('ورود:', { role, username })
  }

  const inputStyle =
    'w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-300 outline-none focus:ring-2 focus:ring-cyan-400 transition'

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden text-white">

      {/* پس‌زمینه: عکس با زوم آهسته */}
      <div
        className="hero-zoom absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${base}/images/inside.jpg')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-cyan-700/70"></div>

      {/* دایره‌های نورانی */}
      <div className="float absolute top-10 right-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl"></div>
      <div className="float absolute bottom-10 left-10 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>

      {/* دکمه برگشت */}
      <Link
        to="/"
        className="absolute top-6 right-6 z-10 bg-white/10 border border-white/20 backdrop-blur px-4 py-2 rounded-full text-sm hover:bg-white/20 transition"
      >
        بازگشت به صفحه اصلی
      </Link>

      {/* کارت شیشه‌ای */}
      <div className="fade-up relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

        {/* لوگو و عنوان */}
        <div className="text-center mb-8">
          <img
            src={`${base}images/gezir-dej-logo-header.svg`}
            alt="لوگو"
            className="h-20 w-20 object-contain mx-auto mb-3"
          />
          <h1 className="text-2xl font-black">ورود به سامانه</h1>
          <p className="text-slate-300 text-sm mt-1">گزیر دژ | ابشیرین‌کن بندرلنگه</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* انتخاب نوع کاربر */}
          <div>
            <p className="text-sm mb-2">نوع کاربری</p>
            <div className="grid grid-cols-2 gap-3">
              {roles.map((r) => (
                <button
                  type="button"                       // که فرم را ارسال نکند
                  key={r.id}
                  onClick={() => setRole(r.id)}
                  className={`rounded-2xl border p-4 text-center transition hover:-translate-y-1 ${
                    role === r.id
                      ? 'border-cyan-400 bg-cyan-400/20 shadow-lg shadow-cyan-500/20'
                      : 'border-white/20 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <span className="text-3xl block mb-1">{r.icon}</span>
                  <span className="font-bold block">{r.title}</span>
                  <span className="text-xs text-slate-300">{r.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* نام کاربری یا ایمیل */}
          <div>
            <label htmlFor="username" className="text-sm block mb-2">نام کاربری یا ایمیل</label>
            <input
              id="username"
              type="text"
              dir="ltr"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="example@gmail.com"
              className={inputStyle}
            />
          </div>

          {/* رمز عبور */}
          <div>
            <label htmlFor="password" className="text-sm block mb-2">رمز عبور</label>
            <div className="relative">
              <input
                id="password"
                type={showPass ? 'text' : 'password'}
                dir="ltr"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`${inputStyle} pr-16`}
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-cyan-300 hover:text-cyan-100"
              >
                {showPass ? 'مخفی' : 'نمایش'}
              </button>
            </div>
          </div>

          {/* پیام خطا */}
          {error && (
            <p className="bg-red-500/20 border border-red-400/40 text-red-100 text-sm rounded-xl px-4 py-2">
              {error}
            </p>
          )}

          {/* دکمه ورود */}
          <button
            type="submit"
            className="w-full bg-cyan-400 text-slate-900 font-bold py-3 rounded-xl hover:bg-cyan-300 hover:scale-[1.02] transition"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  )
}