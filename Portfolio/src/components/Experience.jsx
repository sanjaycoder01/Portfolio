import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section
      className="content-section"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="section-head">
        <h2 id="experience-heading">Experience</h2>
        <p className="section-lead">Where I&apos;ve contributed</p>
      </div>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <div className="timeline-marker" aria-hidden />
            <div className="timeline-body">
              <div className="timeline-top">
                <h3>{job.role}</h3>
                <span className="timeline-period">{job.period}</span>
              </div>
              <p className="timeline-company">{job.company}</p>
              <p className="timeline-summary">{job.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
