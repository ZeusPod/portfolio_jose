import './App.css'
import Hero from './components/Hero'
import Topbar from './components/TopBar'
import Stack from './components/Stack'
import ExperienceSection from './components/Expirience'
import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <Topbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="stack">
        <Stack />
      </div>
      <div id="experience">
        <ExperienceSection />
      </div>
    </Layout>
  )
}

export default App
