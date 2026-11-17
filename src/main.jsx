import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/vazirmatn/400.css'   // معمولی
import '@fontsource/vazirmatn/700.css'   // بولد
import '@fontsource/vazirmatn/900.css'   // خیلی ضخیم (font-black)
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
