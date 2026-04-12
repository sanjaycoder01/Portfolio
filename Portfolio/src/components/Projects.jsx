import { useCallback, useEffect, useRef, useState } from 'react'
import { projects, site } from '../data/portfolio'

const linkedInEntry = site.social.find((s) => s.label === 'LinkedIn')
const linkedInHref = linkedInEntry?.href

const AUTO_MS = 5000

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      className="project-linkedin__icon"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Projects() {
  const [index, setIndex] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const timerRef = useRef(null)
  const n = projects.length

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const onChange = () => setPrefersReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const clearTimer = useCallback(() => {
    if (timerRef.current != null) {
      window.clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const startTimer = useCallback(() => {
    clearTimer()
    if (prefersReducedMotion || n <= 1) return
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % n)
    }, AUTO_MS)
  }, [clearTimer, prefersReducedMotion, n])

  useEffect(() => {
    startTimer()
    return () => clearTimer()
  }, [startTimer, clearTimer])

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % n)
    startTimer()
  }, [n, startTimer])

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n)
    startTimer()
  }, [n, startTimer])

  const goTo = useCallback(
    (i) => {
      setIndex(i)
      startTimer()
    },
    [startTimer],
  )

  const onCarouselKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goPrev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      goNext()
    }
  }

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

      <div
        className="project-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Project highlights"
        tabIndex={0}
        onKeyDown={onCarouselKeyDown}
      >
        <div className="project-carousel__chrome">
          <button
            type="button"
            className="project-carousel__arrow project-carousel__arrow--prev"
            onClick={goPrev}
            aria-label="Previous project"
          >
            <ChevronLeft />
          </button>

          <div className="project-carousel__viewport">
            <div
              className="project-carousel__track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {projects.map((p, i) => (
                <div
                  key={p.title}
                  className="project-carousel__slide"
                  aria-hidden={i !== index}
                  {...(i !== index ? { inert: true } : {})}
                >
                  <article className="project-card project-card--carousel">
                    <div className="project-card__accent" aria-hidden />
                    <p className="project-card__eyebrow">Featured project</p>
                    <div className="project-card__title-row">
                      <h3>{p.title}</h3>
                      {p.wip ? (
                        <span className="project-badge project-badge--wip">Work in progress</span>
                      ) : null}
                    </div>
                    <p className="project-card__desc">{p.description}</p>
                    <ul className="project-tech">
                      {p.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                    <a className="project-link project-card__cta" href={p.link} target="_blank" rel="noreferrer">
                      {p.linkLabel ?? 'View repository →'}
                    </a>
                    {linkedInHref ? (
                      <div className="project-card__social">
                        <a
                          className="project-linkedin"
                          href={linkedInHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn profile"
                        >
                          <LinkedInIcon />
                        </a>
                      </div>
                    ) : null}
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="project-carousel__arrow project-carousel__arrow--next"
            onClick={goNext}
            aria-label="Next project"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="project-carousel__footer">
          <p className="project-carousel__counter" aria-live="polite">
            <span className="sr-only">Project </span>
            {index + 1} <span className="project-carousel__counter-sep">/</span> {n}
          </p>
          <ul className="project-carousel__dots" aria-label="Choose project">
            {projects.map((p, i) => (
              <li key={p.title}>
                <button
                  type="button"
                  className={`project-carousel__dot${i === index ? ' is-active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}: ${p.title}`}
                  aria-current={i === index ? 'true' : undefined}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
