import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <Benefits />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
