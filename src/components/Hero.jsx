import { useScramble } from '../hooks/useScramble'

export default function Hero() {
  const line1Ref = useScramble('NAHUEL', 350)
  const line2Ref = useScramble('LLAMAS', 800)

  return (
    <section id="hero">
      <div className="c">
        <p className="h-idx">000 — PORTFOLIO 2025</p>
        <h1 className="h-name">
          <span ref={line1Ref}>NAHUEL</span>
          <span className="l2" ref={line2Ref}>LLAMAS</span>
        </h1>
        <p className="h-role">Full Stack Developer</p>
        <div className="h-tags">
          {['React', 'Next.js', 'NestJS', 'Node.js', 'TypeScript', 'AI Tooling'].map(t => (
            <span className="pill" key={t}>{t}</span>
          ))}
        </div>
        <p className="h-desc">
          5+ años construyendo plataformas IoT en tiempo real, CMS de alto tráfico y
          productos internacionales. Arquitectura limpia, performance y mejora continua del equipo.
        </p>
        <div className="h-ctas">
          <a href="#exp" className="btn-p">Ver experiencia</a>
          <a href="#contact" className="btn-g">Contacto</a>
        </div>
      </div>
      <div className="scroll-ind">
        <div className="scroll-line"></div>
        <span className="scroll-txt">scroll</span>
      </div>
    </section>
  )
}
