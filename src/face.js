/* ---------- a cara do Ko: lutador de faixa vermelha e luvas, num medalhão de vidro vermelho ---------- */
function koFace(mood) {
  const id = 'kf' + Math.random().toString(36).slice(2, 7);
  const brow = mood === 'win' ? 'M46 52q8-7 17-3M71 49q8-4 15 3' : mood === 'sad' ? 'M46 49q8 4 17 6M71 55q8-2 15-6' : 'M46 51q8-4 17 0M71 51q7-4 15 0';
  return `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mister Ko">
  <defs>
    <radialGradient id="${id}b" cx="35%" cy="25%" r="80%"><stop offset="0" stop-color="#ffd9db"/><stop offset=".55" stop-color="#e2373f"/><stop offset="1" stop-color="#5c0710"/></radialGradient>
    <linearGradient id="${id}s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3c9a6"/><stop offset="1" stop-color="#d9a37c"/></linearGradient>
    <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff5a5f"/><stop offset=".6" stop-color="#c8101d"/><stop offset="1" stop-color="#6d0711"/></linearGradient>
  </defs>
  <circle cx="64" cy="64" r="60" fill="url(#${id}b)" stroke="#fff" stroke-width="4"/>
  <path d="M64 10l22 9 16 16 9 22v14l-9 22-16 16-22 9-22-9-16-16-9-22V57l9-22 16-16z" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.6"/>
  <!-- pescoço e ombros -->
  <path d="M30 120c4-16 16-24 34-24s30 8 34 24" fill="#1d1213"/>
  <path d="M52 86h24v14c-4 4-20 4-24 0z" fill="#d9a37c"/>
  <!-- cabeça -->
  <path d="M40 54c0-20 10-32 26-32s24 12 24 32c0 20-10 36-25 36S40 74 40 54z" fill="url(#${id}s)" stroke="#fff" stroke-width="2.5"/>
  <path d="M40 50c1-18 11-29 26-29 14 0 23 10 24 27-9-7-26-9-50 2z" fill="#2a1a17"/>
  <!-- faixa vermelha -->
  <path d="M39 44c16-7 34-8 52-2l-1 8c-17-5-34-4-51 2z" fill="#d0141f" stroke="#fff" stroke-width="1.5"/>
  <path d="M90 44l12-4-6 9 9 4-15 0z" fill="#d0141f" stroke="#fff" stroke-width="1.2"/>
  <!-- olhos -->
  <ellipse cx="55" cy="60" rx="5" ry="4.6" fill="#1d1213"/><ellipse cx="77" cy="60" rx="5" ry="4.6" fill="#1d1213"/>
  ${mood === 'sad' ? '<path d="M51 61q4-3 8 0M73 61q4-3 8 0" stroke="#f3c9a6" stroke-width="2" fill="none"/>' : '<circle cx="56.8" cy="58.6" r="1.7" fill="#fff"/><circle cx="78.8" cy="58.6" r="1.7" fill="#fff"/>'}
  <path d="${brow}" stroke="#2a1a17" stroke-width="3.4" fill="none" stroke-linecap="round"/>
  <path d="M65 64q-3 7 1 9" stroke="#b9805a" stroke-width="2" fill="none" stroke-linecap="round"/>
  <!-- boca: protetor vermelho quando sorri -->
  ${mood === 'win' ? '<path d="M54 76q12 9 24 0q-12 4-24 0z" fill="#d0141f" stroke="#7a0a12" stroke-width="1.2"/>' : mood === 'sad' ? '<path d="M56 80q10-6 20 0" stroke="#7a3b2a" stroke-width="3" fill="none" stroke-linecap="round"/>' : '<path d="M57 78h18" stroke="#7a3b2a" stroke-width="3" stroke-linecap="round"/>'}
  <path d="M44 72q3 4 6 4" stroke="#c98e66" stroke-width="1.6" fill="none"/>
  <!-- luvas -->
  <g stroke="#fff" stroke-width="2.2">
    <path d="M14 100c-4-12 2-24 14-26 10-2 18 4 18 14 0 8-5 15-14 17-8 2-15 0-18-5z" fill="url(#${id}g)"/>
    <path d="M114 100c4-12-2-24-14-26-10-2-18 4-18 14 0 8 5 15 14 17 8 2 15 0 18-5z" fill="url(#${id}g)"/>
  </g>
  <path d="M20 86q8-5 16 0M108 86q-8-5-16 0" stroke="#fff" stroke-opacity=".7" stroke-width="2" fill="none" stroke-linecap="round"/>
  <path d="M18 104h20M90 104h20" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>
  ${mood === 'win' ? '<path d="M106 14l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#fff" stroke="#8f0d1a" stroke-width="1.6"/>' : ''}
  ${mood === 'sad' ? '<path d="M96 40q-5 8 0 11 5-3 0-11z" fill="#bfe1ff" stroke="#fff" stroke-width="1"/>' : ''}
</svg>`;
}
