import { about } from '../data/portfolio'

export default function About() {
  return (
    <section className="content-section" id="about" aria-labelledby="about-heading">
      <div className="section-head">
        <h2 id="about-heading">About</h2>
        <p className="section-lead">A short introduction</p>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <img
            className="about-hero-img"
            src="/hero.png"
            alt="Illustration of a developer at a desk with laptop in a creative office"
            width={480}
            height={480}
            loading="lazy"
            decoding="async"
          />
        </div>
        <ul className="about-tags" aria-label="Focus areas">
          {about.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
