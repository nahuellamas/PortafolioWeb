import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#about',    label: 'Sobre mí',    idx: '001' },
  { href: '#exp',      label: 'Experiencia', idx: '002' },
  { href: '#stack',    label: 'Stack',       idx: '003' },
  { href: '#projects', label: 'Proyectos',   idx: '004' },
  { href: '#contact',  label: 'Contacto',    idx: '005' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="c">
          <div className="nav-inner">
            <a href="#hero" className="logo" onClick={close}>N<em>L</em></a>
            <ul className="nav-links">
              {LINKS.map(l => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
            <button
              className={`nav-burger${open ? ' open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`m-overlay${open ? ' open' : ''}`}>
        <ul className="m-links">
          {LINKS.map((l, i) => (
            <li key={l.href} style={{ '--i': i }}>
              <span className="m-idx">{l.idx}</span>
              <a href={l.href} onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
