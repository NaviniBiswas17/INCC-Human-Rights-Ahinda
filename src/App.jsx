import Header from './components/Header'
import Hero from './components/Hero'
import CounterBar from './components/CounterBar'
import About from './components/About'
import ServicesList from './components/ServicesList'
import LegalAidServices from './components/LegalAidServices'
import WhyChooseUs from './components/WhyChooseUs'
import JoinCTA from './components/JoinCTA'
import Programs from './components/Programs'
import Impact from './components/Impact'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CounterBar />
        <About />
        <ServicesList />
        <LegalAidServices />
        <WhyChooseUs />
        <JoinCTA />
        <Programs />
        <Impact />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
