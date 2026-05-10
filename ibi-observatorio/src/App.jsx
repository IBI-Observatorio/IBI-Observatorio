import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Hero from './components/Hero'
import ConceptsSection from './components/ConceptsSection'
import ApplicationsSection from './components/ApplicationsSection'
import SponsorsSection from './components/SponsorsSection'
import Footer from './components/Footer'
import SobrecustoPage from './pages/SobrecustoPage'
import PortosLanding from './pages/Portos/index.jsx'
import PortosClusterPage from './pages/Portos/ClusterPage.jsx'
import PortosIndicadorPage from './pages/Portos/IndicadorPage.jsx'
import AnalisesPage from './pages/AnalisesPage'

function HomePage() {
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
      <section id="sponsors">
        <SponsorsSection />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}

function SobrecustoLayout() {
  return (
    <>
      <NavigationBar />
      <SobrecustoPage />
    </>
  )
}

function PortosLayout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  )
}

function AnalisesLayout() {
  return (
    <>
      <NavigationBar />
      <AnalisesPage />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analises" element={<AnalisesLayout />} />
        <Route path="/sobrecusto-rodoviario" element={<SobrecustoLayout />} />
        <Route path="/portos" element={<PortosLayout><PortosLanding /></PortosLayout>} />
        <Route path="/portos/:cluster" element={<PortosLayout><PortosClusterPage /></PortosLayout>} />
        <Route path="/portos/:cluster/:slug" element={<PortosLayout><PortosIndicadorPage /></PortosLayout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
