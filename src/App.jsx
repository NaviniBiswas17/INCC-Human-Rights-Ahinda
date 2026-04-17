import Header from './components/Header'
import Hero from './components/Hero'
import CounterBar from './components/CounterBar'
import About from './components/About'
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
