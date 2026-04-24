import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="c">
        <div className="nav-inner">
          <a href="#hero" className="logo">N<em>L</em></a>
          <ul className="nav-links">
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#exp">Experiencia</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
