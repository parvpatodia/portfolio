// Generates public/og-image.png (1200x630) for social link previews.
// Run: node scripts/generate-og.mjs
// WHY: a static social card so shared links (LinkedIn, Slack, iMessage, X) render
// a real preview. Matches the v2 site theme (dark + amber sensor accent).
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-image.png');

const font = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const mono = "'DejaVu Sans Mono', 'Courier New', monospace";

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0A0A0C"/>
  <!-- LiDAR ring motif, top-right (amber) -->
  <g fill="none" stroke="#F2B33D" opacity="0.14">
    <circle cx="1080" cy="90" r="70" stroke-width="1.5"/>
    <circle cx="1080" cy="90" r="130" stroke-width="1.5"/>
    <circle cx="1080" cy="90" r="190" stroke-width="1.5"/>
    <circle cx="1080" cy="90" r="250" stroke-width="1.5"/>
  </g>
  <g stroke="#F2B33D" opacity="0.09">
    <line x1="1080" y1="-40" x2="1080" y2="420" stroke-width="1"/>
    <line x1="760" y1="90" x2="1340" y2="90" stroke-width="1"/>
  </g>
  <!-- scattered sensor points -->
  <g fill="#34D6C0" opacity="0.5">
    <circle cx="640" cy="150" r="2.5"/><circle cx="820" cy="250" r="2"/><circle cx="560" cy="430" r="2"/>
    <circle cx="900" cy="470" r="2.5"/><circle cx="720" cy="540" r="2"/>
  </g>
  <!-- accent bar -->
  <rect x="96" y="230" width="64" height="5" fill="#F2B33D"/>
  <text x="96" y="200" font-family="${mono}" font-size="23" letter-spacing="4" fill="#F2B33D">// PERCEPTION  ·  POLICY  ·  THE REAL WORLD</text>
  <text x="92" y="340" font-family="${font}" font-size="104" font-weight="700" fill="#ECEAE4">Parv Patodia</text>
  <text x="96" y="408" font-family="${font}" font-size="38" font-weight="600" fill="#A3A097">AI / ML &amp; Robotics Engineer</text>
  <text x="96" y="560" font-family="${mono}" font-size="24" fill="#34D6C0">open // fall 2026 co-op</text>
  <text x="96" y="596" font-family="${mono}" font-size="20" fill="#F2B33D">parvpatodia.vercel.app</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
