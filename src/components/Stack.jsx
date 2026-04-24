import { STACK_DATA } from '../data/stack'

export default function Stack() {
  return (
    <section id="stack">
      <div className="c">
        <div className="sh rv">Tech Stack</div>
        <div className="stack-grid">
          {STACK_DATA.map((cat, i) => (
            <div
              className={`scat rv d${Math.min(i % 3, 3)}${cat.ai ? ' ai-card' : ''}`}
              key={cat.lbl}
            >
              <div className="scat-lbl">{cat.lbl}</div>
              <div className="spills">
                {cat.pills.map(p => <span className="sp" key={p}>{p}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
