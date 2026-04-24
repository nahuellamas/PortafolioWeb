import { PROJECTS_DATA } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects">
      <div className="c">
        <div className="sh rv">Proyectos <small>— código propio</small></div>
        <div className="proj-list">
          {PROJECTS_DATA.map((p, i) => (
            <div className={`proj-card rv${i > 0 ? ' d1' : ''}`} key={p.name}>
              <div className="proj-num">{p.num}</div>
              <div>
                <div className="proj-header">
                  <span className="proj-name">{p.name}</span>
                  {p.status === 'open'
                    ? <span className="proj-badge-open">Open Source</span>
                    : <span className="proj-badge-priv">🔐 Privado</span>}
                </div>
                <div className="proj-tagline">{p.tagline}</div>
                <p className="proj-desc">{p.desc}</p>
                <ul className="proj-features">
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <div className="proj-footer">
                  <div className="exp-chips">
                    {p.chips.map(c => <span className="chip" key={c}>{c}</span>)}
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="proj-link">
                      Ver repo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
