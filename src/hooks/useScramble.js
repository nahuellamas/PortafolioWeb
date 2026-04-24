import { useRef, useEffect } from 'react'

export function useScramble(text, delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let frame = 0
    const total = 32

    const t = setTimeout(() => {
      const iv = setInterval(() => {
        if (!ref.current) return clearInterval(iv)
        ref.current.textContent = text
          .split('')
          .map((ch, i) =>
            frame > i * (total / text.length)
              ? ch
              : chars[Math.floor(Math.random() * chars.length)]
          )
          .join('')
        frame++
        if (frame >= total + text.length) {
          ref.current.textContent = text
          clearInterval(iv)
        }
      }, 38)
    }, delay)

    return () => clearTimeout(t)
  }, [text, delay])

  return ref
}
