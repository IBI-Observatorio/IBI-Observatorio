import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import ConceptsSection from './components/ConceptsSection'
import ApplicationsSection from './components/ApplicationsSection'
import ImplementationSection from './components/ImplementationSection'
import SponsorsSection from './components/SponsorsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <NavigationBar />
      <section id="home">
        <Hero />
      </section>
      <section id="concepts">
        <ConceptsSection />
      </section>
      <section id="applications">
        <ApplicationsSection />
      </section>
      <section id="implementation">
        <ImplementationSection />
      </section>
      <section id="sponsors">
        <SponsorsSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}

export default App
