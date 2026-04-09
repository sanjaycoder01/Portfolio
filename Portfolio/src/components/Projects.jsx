import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section
      className="content-section section-alt"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="section-head">
        <h2 id="projects-heading">Projects</h2>
        <p className="section-lead">Selected work</p>
      </div>
      <ul className="project-grid">
        {projects.map((p) => (
          <li key={p.title}>
            <article className="project-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="project-tech">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                View repository →
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
