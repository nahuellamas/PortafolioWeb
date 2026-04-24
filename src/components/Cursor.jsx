import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const dot = document.getElementById('cur-dot')
    const ring = document.getElementById('cur-ring')
    if (!dot || !ring) return

    let rx = window.innerWidth / 2, ry = window.innerHeight / 2
    let mx = rx, my = ry
    let raf

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'; dot.style.top = my + 'px'
    }

    const loop = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      raf = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)

    const addH = () => ring.classList.add('h')
    const remH = () => ring.classList.remove('h')

    const attachHover = () => {
      document.querySelectorAll('a, button, .pill, .sp, .stat, .tw-color').forEach(el => {
        el.addEventListener('mouseenter', addH)
        el.addEventListener('mouseleave', remH)
      })
    }
    const timer = setTimeout(attachHover, 500)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      clearTimeout(timer)
    }
  }, [])

  return null
}
