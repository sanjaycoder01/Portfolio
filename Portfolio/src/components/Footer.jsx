import { site } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>
        © {year} {site.name}. Built with React & Vite.
      </p>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}
