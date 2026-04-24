export const PROJECTS_DATA = [
  {
    num: '01',
    name: 'LatticeShield',
    status: 'private',
    tagline: 'Post-quantum security proxy — Rust',
    desc: 'Proxy de seguridad post-cuántica escrito en Rust. RSA y ECC van a caer cuando existan computadoras cuánticas a escala. NIST ya estandarizó los reemplazos, y los estoy implementando en algo que realmente funciona.',
    features: [
      'Handshake híbrido X25519 + ML-KEM-768',
      'Autenticación mutua ML-DSA-65',
      'QUIC, WebSocket y browser (WASM + SDK TypeScript)',
      '+400 tests, CI y auditoría de seguridad',
    ],
    chips: ['Rust', 'ML-KEM-768', 'ML-DSA-65', 'QUIC', 'WebSocket', 'WASM', 'TypeScript'],
    link: null,
  },
  {
    num: '02',
    name: 'Meta Ads Finder',
    status: 'open',
    tagline: 'Product research tool — Next.js · TypeScript',
    desc: 'Herramienta de investigación de productos ganadores para ecommerce y dropshipping. Automatiza la búsqueda analizando anuncios en Meta Ad Library, detectando tiendas Shopify y enriqueciendo con datos de AliExpress.',
    features: [
      'Análisis de anuncios activos vía Meta Ad Library API con rate limiting y retry automático',
      'Detección de tiendas Shopify en 3 capas + scraping de catálogo',
      'Enriquecimiento con AliExpress Affiliate API (precio, órdenes, rating)',
      'Arquitectura hexagonal-lite, persistencia atómica y exportación CSV',
    ],
    chips: ['Next.js 16', 'React 19', 'TypeScript', 'TailwindCSS', 'Meta API', 'Shopify', 'AliExpress'],
    link: 'https://github.com/nahuellamas/meta-ads-finder',
  },
]
