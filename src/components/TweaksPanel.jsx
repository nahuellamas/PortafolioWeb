import { useState, useEffect } from 'react'
import { ACCENT_COLORS, applyAccent } from '../App'

export default function TweaksPanel({ visible, onClose, accent, setAccent }) {
  const [noise, setNoise] = useState(true)
  const [outline, setOutline] = useState(true)
  const [orbs, setOrbs] = useState(true)

  useEffect(() => {
    const el = document.getElementById('noise')
    if (el) el.style.opacity = noise ? '0.028' : '0'
  }, [noise])

  useEffect(() => {
    const l2 = document.querySelector('.l2')
    if (!l2) return
    l2.style.webkitTextStroke = outline ? '1.5px rgba(238,238,246,.28)' : '0px'
    l2.style.color = outline ? 'transparent' : 'var(--text)'
  }, [outline])

  useEffect(() => {
    ;['orb1', 'orb2'].forEach(id => {
      const el = document.getElementById(id)
      if (el) el.style.opacity = orbs ? '1' : '0'
    })
  }, [orbs])

  if (!visible) return null

  return (
    <div className="tw-panel">
      <div className="tw-head">
        <span>Tweaks</span>
        <button className="tw-close" onClick={onClose}>✕</button>
      </div>
      <div className="tw-body">
        <div>
          <label className="tw-row-lbl">Color de acento</label>
          <div className="tw-colors">
            {ACCENT_COLORS.map(c => (
              <div
                key={c.hex}
                className={`tw-color${accent === c.hex ? ' active' : ''}`}
                style={{ background: c.hex }}
                onClick={() => {
                  setAccent(c.hex)
                  window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { accent: c.hex } }, '*')
                }}
              />
            ))}
          </div>
        </div>
        <div className="tw-toggle">
          <span className="tw-toggle-lbl">Grano / Noise</span>
          <div className={`tw-switch${noise ? ' on' : ''}`} onClick={() => setNoise(v => !v)} />
        </div>
        <div className="tw-toggle">
          <span className="tw-toggle-lbl">Outline en nombre</span>
          <div className={`tw-switch${outline ? ' on' : ''}`} onClick={() => setOutline(v => !v)} />
        </div>
        <div className="tw-toggle">
          <span className="tw-toggle-lbl">Orbs de fondo</span>
          <div className={`tw-switch${orbs ? ' on' : ''}`} onClick={() => setOrbs(v => !v)} />
        </div>
      </div>
    </div>
  )
}
