import SiteNav from './components/SiteNav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Gallery from './components/Gallery.jsx'
import Team from './components/Team.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFab from './components/WhatsAppFab.jsx'
import useSmoothAnchors from './useSmoothAnchors.js'

export default function App() {
  useSmoothAnchors()
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Team />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
