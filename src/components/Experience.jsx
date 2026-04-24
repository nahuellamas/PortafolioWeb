import { EXP_DATA } from '../data/experience'

export default function Experience() {
  return (
    <section id="exp">
      <div className="c">
        <div className="sh rv">Experiencia <small>— 2021 a hoy</small></div>
        {EXP_DATA.map((e, i) => (
          <div className={`exp-item rv${i > 0 ? ` d${Math.min(i, 3)}` : ''}`} key={e.co}>
            <div>
              <div className="exp-co">{e.co}</div>
              <div className="exp-dt">{e.dt}</div>
            </div>
            <div>
              <div className="exp-role">
                {e.role}
                {e.badge && <span className="exp-badge">{e.badge}</span>}
              </div>
              <ul className="exp-ul">
                {e.bullets.map((Bullet, j) => (
                  <li key={j}><Bullet /></li>
                ))}
              </ul>
              <div className="exp-chips">
                {e.chips.map(c => <span className="chip" key={c}>{c}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
