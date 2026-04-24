# Nahuel Llamas — Portfolio

Portfolio personal desarrollado con **React 18 + Vite**.

## Instalación

```bash
npm install
npm run dev
```

Luego abrí [http://localhost:5173](http://localhost:5173) en tu browser.

## Build para producción

```bash
npm run build
```

Los archivos listos para deploy quedan en la carpeta `dist/`.

## Estructura

```
src/
├── App.jsx              # Componente raíz, manejo de estado global
├── App.css              # Todos los estilos
├── main.jsx             # Entry point
├── components/
│   ├── Cursor.jsx       # Cursor personalizado
│   ├── Nav.jsx          # Navegación fija
│   ├── Hero.jsx         # Sección hero con scramble effect
│   ├── About.jsx        # Sobre mí + stats
│   ├── Experience.jsx   # Timeline de experiencia
│   ├── Stack.jsx        # Tech stack grid
│   ├── Contact.jsx      # Sección de contacto
│   └── TweaksPanel.jsx  # Panel de tweaks (colores, efectos)
├── hooks/
│   ├── useScramble.js   # Hook para el efecto scramble del hero
│   └── useReveal.js     # Hook para animaciones al hacer scroll
└── data/
    ├── experience.jsx   # Datos de experiencia laboral
    └── stack.js         # Datos del tech stack
```

## Deploy

Compatible con **Vercel**, **Netlify** o cualquier hosting estático.

```bash
npm run build
# subí la carpeta dist/ a tu hosting
```
