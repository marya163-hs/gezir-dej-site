import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Footer from '../components/Footer'

export default function App(){
  return(
    <div className="bg-slate-50 text-slate-800">
    
      <Navbar/>
      <Hero/>
      <Stats/>
      <Gallery/>
      <About/>
      <Footer/>

    </div>
  )
}