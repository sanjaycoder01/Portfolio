import { site } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-heading">
      <p className="hero-eyebrow">Hello — I&apos;m {site.name}</p>
      <h1 id="hero-heading">{site.title}</h1>
      <p className="hero-tagline">{site.tagline}</p>
      <div className="hero-meta">
        <span>{site.location}</span>
        <span className="hero-meta-sep" aria-hidden>
          ·
        </span>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <ul className="hero-social">
        {site.social.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
