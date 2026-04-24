import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Stack from './components/Stack'
import Contact from './components/Contact'
import TweaksPanel from './components/TweaksPanel'
import Projects from './components/Projects'
import Cursor from './components/Cursor'
import { useReveal } from './hooks/useReveal'

export const ACCENT_COLORS = [
  { hex: '#00d4c8' },
  { hex: '#7ee787' },
  { hex: '#a78bfa' },
  { hex: '#fbbf24' },
  { hex: '#f472b6' },
]

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  return `${r},${g},${b}`
}

export function applyAccent(hex) {
  const root = document.documentElement
  root.style.setProperty('--accent', hex)
  root.style.setProperty('--accent-dim', `rgba(${hexToRgb(hex)},0.1)`)
  const orb1 = document.getElementById('orb1')
  if (orb1) orb1.style.background = `radial-gradient(circle, rgba(${hexToRgb(hex)},0.07), transparent 70%)`
}

function App() {
  const [tweaksVisible, setTweaksVisible] = useState(false)
  const [accent, setAccentState] = useState('#7ee787')

  useReveal()

  const setAccent = (hex) => {
    setAccentState(hex)
    applyAccent(hex)
  }

  useEffect(() => {
    applyAccent(accent)
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setTweaksVisible(true)
      if (e.data?.type === '__deactivate_edit_mode') setTweaksVisible(false)
    }
    window.addEventListener('message', handler)
    window.parent.postMessage({ type: '__edit_mode_available' }, '*')
    return () => window.removeEventListener('message', handler)
  }, [])

  const handleClose = () => {
    setTweaksVisible(false)
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*')
  }

  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Stack />
      <Projects />
      <Contact />
      <footer>
        <div className="c">
          <div className="foot">
            <span>© 2026 Nahuel Llamas</span>
            <span>Buenos Aires, Argentina</span>
          </div>
        </div>
      </footer>
      <TweaksPanel
        visible={tweaksVisible}
        onClose={handleClose}
        accent={accent}
        setAccent={setAccent}
      />
    </>
  )
}

export default App
