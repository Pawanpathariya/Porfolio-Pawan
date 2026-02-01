import { portfolioData } from './data/portfolioData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const data = portfolioData

  return (
    <>
      <Navbar profile={data?.profile} />
      <main>
        <Hero profile={data?.profile} />
        <About about={data?.about} />
        <Experience experience={data?.experience} />
        <Education education={data?.education} />
        <Skills skills={data?.skills} />
        <Projects projects={data?.projects} />
        <Contact profile={data?.profile} />
      </main>
      <Footer profile={data?.profile} />
    </>
  )
}

export default App
