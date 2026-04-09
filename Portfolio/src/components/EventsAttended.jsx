import { eventsAttended } from '../data/portfolio'

export default function EventsAttended() {
  return (
    <section
      className="content-section section-alt"
      id="events"
      aria-labelledby="events-heading"
    >
      <div className="section-head">
        <h2 id="events-heading">Events attended</h2>
        <p className="section-lead">Conferences and meetups</p>
      </div>
      <ul className="events-grid">
        {eventsAttended.map((ev) => (
          <li key={ev.title}>
            <article className="event-card">
              {ev.image ? (
                <img className="event-image" src={ev.image} alt={`${ev.title} event poster`} />
              ) : null}
              <div className="event-meta">
                <span className="event-date">{ev.date}</span>
                <span className="event-place">{ev.place}</span>
              </div>
              <h3>{ev.title}</h3>
              <p>{ev.note}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
