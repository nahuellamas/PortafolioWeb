const CONTACTS = [
  { key: 'Email',    val: 'nahuellamas@gmail.com',          href: 'mailto:nahuellamas@gmail.com' },
  { key: 'LinkedIn', val: 'linkedin.com/in/nahuel-llamas',  href: 'https://www.linkedin.com/in/nahuel-llamas/' },
  { key: 'GitHub',   val: 'github.com/nahuellamas',         href: 'https://github.com/nahuellamas' },
  { key: 'Teléfono', val: '+54 011-3010-3414',              href: 'tel:+5401130103414' },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="c">
        <div className="rv">
          <p className="s-label">005 — Contacto</p>
          <div className="avail">
            <div className="avail-dot"></div>
            Disponible para proyectos
          </div>
          <h2 className="ct-head">
            Hablemos<br />
            <span className="dim">pronto.</span>
          </h2>
          <p className="ct-sub">
            ¿Tenés un proyecto interesante o una oportunidad? Me encontrás aquí.
          </p>
        </div>
        <div className="ct-links rv d2">
          {CONTACTS.map(c => (
            <a
              key={c.key}
              href={c.href}
              className="ct-link"
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="ct-key">{c.key}</span>
              <span className="ct-val">{c.val}</span>
              <span className="ct-arr">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
