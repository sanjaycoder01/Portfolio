import { useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import EventsAttended from './EventsAttended'
import Footer from './Footer'
import { site } from '../data/portfolio'
import '../portfolio.css'

export default function Home() {
  useEffect(() => {
    document.title = `${site.name} — Portfolio`
  }, [])

  return (
    <div className="portfolio-page">
      <div className="canvas-bg" aria-hidden />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <EventsAttended />
      </main>
      <Footer />
    </div>
  )
}
