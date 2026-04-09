const nav = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'events', label: 'Events attended' },
]

export default function Header() {
  return (
    <header className="site-header">
      <a className="site-logo" href="#top">
        Portfolio
      </a>
      <nav className="site-nav" aria-label="Primary">
        <ul>
          {nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
