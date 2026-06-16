// Generates public/og-image.png (1200x630) for social link previews.
// Run: node scripts/generate-og.mjs
// WHY: a static social card so shared links (LinkedIn, Slack, iMessage, X) render
// a real preview instead of a broken image. Reproducible: edit the SVG and re-run.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-image.png');

const font = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const mono = "'DejaVu Sans Mono', 'Courier New', monospace";

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0A0E1A"/>
  <!-- LiDAR ring motif, top-right -->
  <g fill="none" stroke="#06B6D4" opacity="0.16">
    <circle cx="1080" cy="90" r="70" stroke-width="1.5"/>
    <circle cx="1080" cy="90" r="130" stroke-width="1.5"/>
    <circle cx="1080" cy="90" r="190" stroke-width="1.5"/>
    <circle cx="1080" cy="90" r="250" stroke-width="1.5"/>
  </g>
  <g stroke="#06B6D4" opacity="0.10">
    <line x1="1080" y1="-40" x2="1080" y2="420" stroke-width="1"/>
    <line x1="760" y1="90" x2="1340" y2="90" stroke-width="1"/>
  </g>
  <!-- accent bar -->
  <rect x="96" y="232" width="64" height="5" fill="#3B82F6"/>
  <text x="96" y="200" font-family="${font}" font-size="26" font-weight="600" letter-spacing="6" fill="#6B7280">PORTFOLIO</text>
  <text x="92" y="338" font-family="${font}" font-size="104" font-weight="700" fill="#F9FAFB">Parv Patodia</text>
  <text x="96" y="408" font-family="${font}" font-size="38" font-weight="600" fill="#D1D5DB">AI / ML Engineer</text>
  <text x="96" y="462" font-family="${font}" font-size="28" fill="#9CA3AF">Autonomous vehicles &#183; robotics &#183; ML systems</text>
  <text x="96" y="566" font-family="${mono}" font-size="24" fill="#06B6D4">parvpatodia.vercel.app</text>
  <text x="96" y="600" font-family="${mono}" font-size="20" fill="#10B981">open_to: Fall 2026 co-op</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
