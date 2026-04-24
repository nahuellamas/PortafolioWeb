const STATS = [
  { n: '5+',  l: 'Años de\nexperiencia' },
  { n: '6K+', l: 'Dispositivos IoT\nen tiempo real' },
  { n: 'M+',  l: 'Usuarios únicos\ndiarios (Clarín)' },
  { n: '5',   l: 'Empresas y\nproyectos' },
]

export default function About() {
  return (
    <section id="about">
      <div className="c">
        <div className="about-grid">
          <div className="rv">
            <p className="s-label">001 — Sobre mí</p>
            <h2 className="s-title">Construyo con propósito y velocidad.</h2>
            <p className="about-body">
              Full Stack Developer con <strong>más de 5 años</strong> de experiencia en
              plataformas IoT en tiempo real, CMS de alto tráfico y proyectos internacionales.
              <br /><br />
              Uso diario de <strong>Claude con orquestadores, subagentes y SDD</strong> —y
              Gemini— para maximizar velocidad y calidad de entrega. Orientado a arquitectura
              limpia, performance y mejora continua.
            </p>
          </div>
          <div className="stats rv d2">
            {STATS.map(s => (
              <div className="stat" key={s.n}>
                <div className="stat-n">{s.n}</div>
                <div className="stat-l" style={{ whiteSpace: 'pre-line' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
