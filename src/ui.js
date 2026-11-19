/* =====================================================================
   5) ÍCONES (desenho próprio, traço simples)
   ===================================================================== */
const ICP = {
  glove: '<path d="M7 11V7a4 4 0 0 1 4-4h3a5 5 0 0 1 5 5v5a6 6 0 0 1-6 6h-2a4 4 0 0 1-4-4z"/><path d="M7 11H6a2 2 0 0 0 0 4h1M10 7h5M8 19v2h8v-2"/>',
  oct: '<path d="M8.3 3h7.4L21 8.3v7.4L15.7 21H8.3L3 15.7V8.3z"/><path d="M9.5 9.5l5 5M14.5 9.5l-5 5"/>',
  vs: '<path d="M5 5l9 9M19 5l-9 9M12.5 15.5l3-3M8.5 12.5l3 3M15 15l4 4M9 15l-4 4M5 5h3M5 5v3M19 5h-3M19 5v3"/>',
  wallet: '<rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18M16 15h2M6 6V4.5h11"/>',
  grid: '<rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.9-3.5M4 4v4h4M4 13a8 8 0 0 0 14.9 3.5M20 20v-4h-4"/>',
  trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8M10 17h4"/>',
  chip: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
  gear: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  save: '<path d="M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6"/>',
  pulse: '<path d="M3 12h4l2-6 4 12 2-6h6"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M11 18.5h2M12 6v7M9.5 10.5 12 13l2.5-2.5"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  gem: '<path d="M6 4h12l3 5-9 11L3 9zM3 9h18M9 4 7.5 9 12 20l4.5-11L15 4"/>',
  fire: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 1 1 2 2 2 4 1-2 1-4 1-7z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chart: '<path d="M4 20V11M10 20V5M16 20v-7M2 20h20"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  robot: '<rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4.5V8M9 13h.01M15 13h.01M9 16h6M3 12v3M21 12v3"/><circle cx="12" cy="3.5" r="1"/>',
  share: '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/>',
  print: '<path d="M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7z"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  coins: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.5-7 8-7s7 2.5 8 7"/>'
};
const ic = (n, cls) => `<svg class="i ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICP[n] || ''}</svg>`;
const attr = (label, v, color, txt, max) => `<div class="at" style="--k:${color}"><div class="l"><span>${label}</span><span class="v">${txt != null ? txt : `${v} <small>/ ${max || 99}</small>`}</span></div><div class="bar"><i style="width:${clamp(v / (max || 99) * 100, 0, 100).toFixed(1)}%"></i></div></div>`;
const catH = (icon, text, color, right) => `<div class="cat" style="--k:${color}">${ic(icon)}${text}${right ? `<span class="muted small" style="margin-left:auto;font-weight:400">${right}</span>` : ''}</div>`;
const pnH = (title, right) => `<div class="pn-h">${title}${right ? `<span class="r">${right}</span>` : ''}</div><div class="div"></div>`;

%%FACE%%

/* =====================================================================
   6) ECRÃS
   ===================================================================== */
const VIEWS = ['inicio', 'jogos', 'duelo', 'contas', 'mais'];
let VIEW = (location.hash || '#inicio').slice(1); if (!VIEWS.includes(VIEW)) VIEW = 'inicio';
let DAY = 0, ACCF = 'all', BT = 'seg', GT = 'ana', SORT = LS.get('sort', 'card');
function go(v) { VIEW = v; history.replaceState(null, '', '#' + v); render(); window.scrollTo(0, 0); }
function setUpd(t) { const e = $('#upd'); if (e) e.textContent = t; }
const f1 = v => Math.abs(v).toFixed(1).replace('.', ',');
const okIc = ok => ok == null ? '<span class="muted">—</span>' : ok ? `<span class="pos">${ic('check')}</span>` : `<span class="neg">${ic('x')}</span>`;
const unitsTxt = u => (u > 0 ? '+' : u < 0 ? '−' : '') + Math.abs(u).toFixed(2).replace('.', ',') + ' u';
const ini = n => String(n || '?').split(/\s+/).map(x => x[0]).slice(0, 2).join('').toUpperCase();
/* cara do lutador: a foto que a própria ESPN manda (carregada no telemóvel); se falhar, ficam as iniciais */
function avatar(s, sz) {
  const st = sz ? `width:${sz}px;height:${sz}px;flex-basis:${sz}px;font-size:${sz / 3.2}px;` : '';
  return `<span class="logo av2" style="${st}">${s.hs ? `<img src="${esc(s.hs)}" alt="" loading="lazy" onerror="this.remove()">` : ''}<b>${esc(ini(s.n))}</b>${s.fl ? `<img class="fl" src="${esc(s.fl)}" alt="" loading="lazy" onerror="this.remove()">` : ''}</span>`;
}
function renderTop() {
  $('#chips').innerHTML = ['tu', 'ko'].map(k => `<span class="st" onclick="ACCF='${k}';go('contas')">${ic(ACC[k].ic)}${ACC[k].n.replace('Mister ', '')} ${eur(accStats(k).bal)}</span>`).join('');
  const last = LS.get('last', 0);
  setUpd(!SEED ? 'A carregar o arquivo do Ko…' : last ? 'Atualizado ' + new Date(last).toLocaleString('pt-PT', { weekday: 'short', hour: '2-digit', minute: '2-digit' }) + ' · toca em ↻ para ir à ESPN' : 'Arquivo até ' + SEED.cut.split('-').reverse().join('/') + ' · toca em ↻ para os próximos cartazes');
  const nOpen = BETS.filter(b => b.acc === 'tu' && b.st === 'open').length;
  document.querySelectorAll('#nav button').forEach(b => {
    b.classList.toggle('on', b.dataset.v === VIEW);
    const old = b.querySelector('.nb'); if (old) old.remove();
    if (b.dataset.v === 'contas' && nOpen) b.insertAdjacentHTML('beforeend', `<span class="nb">${nOpen}</span>`);
  });
}
function render() {
  renderTop();
  const v = $('#view');
  if (!SEED) { v.innerHTML = `<div class="pn empty" style="margin-top:40px"><div class="face">${koFace('ok')}</div>A carregar…</div>`; return; }
  if (VIEW === 'inicio') v.innerHTML = viewInicio();
  else if (VIEW === 'jogos') v.innerHTML = viewJogos();
  else if (VIEW === 'duelo') v.innerHTML = viewDuelo();
  else if (VIEW === 'contas') v.innerHTML = viewContas();
  else v.innerHTML = viewMais();
  if (VIEW === 'jogos') ssSum();
}
const evShort = e => { if (!e) return ''; const n = String(e.n || ''); const m = n.match(/^(UFC \d+)/i); return m ? m[1] : /fight night/i.test(n) ? 'Fight Night' : n.split(':')[0]; };
const evTitle = e => !e ? '' : String(e.n || '').replace(/^UFC Fight Night( Presents)?:?\s*/i, 'Fight Night: ');
function dayGames(off) { const E = evAt(off); return E ? evFights(E.id) : []; }

/* ---------- veredito: o que o Ko guardou antes do combate vs o resultado ---------- */
function verdict(f) {
  const p = PREDS[f.id]; if (!p || f.s !== 'post' || !f.w) return null;
  if (f.w === 'NC') return null;
  const fav = p.pa >= 0.5 ? 'A' : 'B';
  const v = { p, win: f.w === 'D' ? null : f.w === fav, fav, conf: Math.max(p.pa, 1 - p.pa) };
  if (p.m6 && f.m && f.w !== 'D') { const top = MET_K.slice().sort((a, b) => p.m6[b] - p.m6[a])[0]; v.met = top === f.w + ({ KO: 'ko', DQ: 'ko', SUB: 'sub', DEC: 'dec' }[f.m] || ''); v.metTop = top; }
  if (p.pdec != null && f.m) { const went = (f.m === 'DEC' || f.w === 'D') && (!f.rd || f.rd >= f.sr); v.dist = (p.pdec >= 0.5) === went; }
  if (p.pk) { const o = outcome({ mk: p.pk.mk, sel: p.pk.sel, line: p.pk.line }, f); v.pk = p.pk; v.pkr = o; v.pku = o === 'won' ? p.pk.odd - 1 : o === 'lost' ? -1 : 0; }
  return v;
}
function dayVerdict(off) {
  const G = dayGames(off).filter(f => f.s === 'post'); let n = 0, w = 0, mn = 0, mw = 0, bn = 0, bw = 0, u = 0;
  const bets = [];
  G.forEach(f => { const v = verdict(f); if (!v) return; if (v.win != null) { n++; if (v.win) w++; } if (v.met != null) { mn++; if (v.met) mw++; } if (v.pk && (v.pkr === 'won' || v.pkr === 'lost')) { bn++; if (v.pkr === 'won') bw++; u += v.pku; bets.push({ f, v }); } });
  const S = SLIPS[slipKey(off)], sr = S ? slipResult(S) : null;
  return { n, w, mn, mw, bn, bw, u, S, sr, bets, G };
}
const MET_LBL = k => (k[0] === 'A' ? 'A' : 'B') + ' ' + MET_PT[k.slice(1)];
/* ---------- INÍCIO ---------- */
function viewInicio() {
  const E0 = evAt(0), G0 = dayGames(0), pre = G0.filter(f => f.s === 'pre'), live = G0.filter(f => f.s === 'in').length, done = G0.filter(f => f.s === 'post').length;
  const Y = dayVerdict(-1), S0 = SLIPS[slipKey(0)], ST = statsAll();
  const picks = pre.map(f => ({ f, P: predict(f) })).filter(x => x.P.value).sort((a, b) => b.P.value.ev - a.P.value.ev);
  const main = G0[0];
  let h = `<div class="pn hero"><span class="tag">${esc(evShort(E0) || 'UFC')} · MMA</span>
    <div class="big">${G0.length ? `${G0.length} <b>combate${G0.length === 1 ? '' : 's'}</b>` : `Mister <b>Ko</b>`}</div>
    <div class="sub">${!Object.keys(DB.f).length ? 'Toca em ↻ e vou buscar os cartazes à ESPN.' : E0 ? `${esc(evTitle(E0))}. ` : ''}${live ? live + ' a decorrer agora. ' : pre.length ? dayLbl(pre[pre.length - 1].d) + ' a partir das ' + hhmm(pre[pre.length - 1].d) + '. ' : G0.length ? 'Cartaz acabado. ' : ''}${done && pre.length ? ` ${done} já feitos.` : ''}${picks.length || S0 ? ' O meu boletim está pronto.' : ''}</div>
    <div class="face">${koFace(Y.bn && Y.u < 0 ? 'sad' : Y.bn ? 'win' : 'ok')}</div>
    ${Y.n || Y.S ? `<div class="small" style="margin-top:14px;opacity:.9;letter-spacing:.14em;text-transform:uppercase;font-size:.66rem">Cartaz anterior</div><div class="kpis" style="margin-top:6px"><div class="kpi"><small>vencedor</small><b>${Y.n ? Y.w + '/' + Y.n : '—'}</b></div>
      <div class="kpi"><small>método</small><b>${Y.mn ? Y.mw + '/' + Y.mn : '—'}</b></div>
      <div class="kpi"><small>seguro</small><b>${Y.sr ? (Y.sr.st === 'won' ? '<span class="pos">✓</span>' : Y.sr.st === 'lost' ? '<span class="neg">✗</span>' : '…') : '—'}</b></div></div>` : ''}</div>`;
  h += installBanner();
  if (!LS.get('last', 0)) return h + `<div class="pn empty"><div class="face">${koFace('ok')}</div><div class="pn-h" style="justify-content:center">Olá! Sou o Mister Ko.</div><div class="muted small" style="margin:6px 0 14px">Só percebo de MMA (UFC). Estudei os ${Object.keys(SEED.fi).length.toLocaleString('pt-PT')} lutadores ativos e todos os combates desde 1994: quem ganha, <b>como</b> (KO, finalização ou decisão) e <b>quando</b> (em que ronda).</div><button class="btn fill" onclick="refresh()">${ic('refresh')} Ir buscar os cartazes</button><div class="small muted" style="margin-top:12px">Simulação: sem dinheiro real e sem ligação à Betano. +18 · Joga com responsabilidade.</div></div>`;
  if (main && main.s === 'pre') h += fightCard(main, true);
  if (pre.length) {
    h += `<div class="pn">${pnH(`${ic('target')} O Ko guardou para este cartaz`, '')}`;
    if (S0) h += catH('shield', 'Boletim seguro', 'var(--c-blue)', `Ko ${pct(S0.p)}`) + S0.legs.map(l => `<div class="why"><span>${esc(l.lb)} <span class="muted small">${esc(l.gl)}</span></span><b>${pct(l.p)}</b></div>`).join('');
    if (picks.length) h += catH('gem', 'Apostas com valor', 'var(--c-orange)', picks.length + '') + picks.slice(0, 4).map(({ f, P }) => `<div class="why" onclick="GT='mk';openFight('${f.id}')"><span>${esc(selLabel(f, P.value.mk, P.value.sel, P.value.line))} <span class="muted small">${esc(gLabel(f))}</span></span><b>@ ${odd2(P.value.odd)} <span class="pos small">${sPct(P.value.ev)}</span></b></div>`).join('');
    if (!S0 && !picks.length) h += `<div class="small muted">Nada com confiança suficiente. Mete as odds da Betano nos combates: o Ko diz onde há valor.</div>`;
    h += `<button class="btn fill full" style="margin-top:10px" onclick="DAY=0;BT='seg';go('jogos')">${ic('glove')} Abrir o cartaz e o boletim</button></div>`;
  }
  h += botHome();
  h += `<div class="pn hl">${pnH(`${ic('check')} Veredito do cartaz anterior`, Y.G.length + (Y.G.length === 1 ? ' combate' : ' combates'))}`;
  if (!Y.n) h += `<div class="small muted">${Y.G.length ? 'O Ko não tinha previsões guardadas (só guarda quando tocas em ↻ antes dos combates).' : 'Sem combates lidos do cartaz anterior: toca em ↻.'}</div>`;
  else {
    h += attr('Acertou no vencedor', Math.round(Y.w / Y.n * 100), 'var(--c-green)', `${Y.w} de ${Y.n}`, 100);
    if (Y.mn) h += attr('Acertou no método mais provável', Math.round(Y.mw / Y.mn * 100), 'var(--c-blue)', `${Y.mw} de ${Y.mn}`, 100);
    h += Y.bets.length ? catH('gem', 'Apostas que o Ko guardou', 'var(--c-orange)', `${Y.bw}/${Y.bn} · <b class="${Y.u >= 0 ? 'pos' : 'neg'}">${unitsTxt(Y.u)}</b>`) + Y.bets.map(({ f, v }) => `<div class="why" onclick="GT='ana';openFight('${f.id}')"><span>${okIc(v.pkr === 'won')} ${esc(v.pk.lb)} <span class="muted small">@ ${odd2(v.pk.odd)} · ${esc(resTxt(f))}</span></span><b class="${v.pku >= 0 ? 'pos' : 'neg'}">${unitsTxt(v.pku)}</b></div>`).join('')
      : `<div class="small muted" style="margin:8px 0">O Ko não encontrou valor: não apostou.</div>`;
    if (Y.S) h += catH('shield', 'Boletim seguro', 'var(--c-blue)', Y.sr.st === 'won' ? '<b class="pos">ganhou</b>' : Y.sr.st === 'lost' ? '<b class="neg">perdeu</b>' : 'em curso') + Y.S.legs.map(l => `<div class="why"><span>${okIc(l.r == null ? null : l.r !== 'lost')} ${esc(l.lb)}</span><b class="muted">${pct(l.p)}</b></div>`).join('');
  }
  h += `<button class="btn go full" style="margin-top:10px" onclick="DAY=-1;go('jogos')">${ic('list')} Ver o cartaz anterior</button></div>`;
  h += `<div class="pn">${pnH(`${ic('chart')} Como vai o Ko`, ST.n + ' combates previstos')}`;
  h += ST.n >= 10 ? `<div class="mosaic"><div><b>${pct(ST.win / ST.n)}</b><small>vencedor certo</small></div><div><b>${ST.mN ? pct(ST.mW / ST.mN) : '—'}</b><small>método certo</small></div><div><b class="${ST.bu >= 0 ? 'pos' : 'neg'}">${ST.bn ? unitsTxt(ST.bu) : '—'}</b><small>apostas do Ko</small></div></div>`
    : `<div class="small muted">${ST.n ? `Ainda poucos combates (${ST.n}) para tirar conclusões.` : 'As estatísticas enchem-se sozinhas: toca em ↻ antes de cada cartaz.'}</div>`;
  h += `<button class="btn go full" style="margin-top:8px" onclick="openStats()">${ic('chart')} Estatísticas completas</button></div>`;
  return h;
}
/* ---------- COMBATES ---------- */
function sortGames(G) {
  const conf = f => { const p = f.s === 'pre' ? predict(f).pA : (PREDS[f.id] ? PREDS[f.id].pa : predict(f).pA); return Math.max(p, 1 - p); };
  const val = f => { if (f.s !== 'pre') { const p = PREDS[f.id]; return p && p.pk ? p.pk.ev : -1; } const v = predict(f).value; return v ? v.ev : -1; };
  if (SORT === 'conf') return G.slice().sort((a, b) => conf(b) - conf(a));
  if (SORT === 'val') return G.slice().sort((a, b) => val(b) - val(a));
  return G;
}
function dateStrip() {
  const U = upcomingIdx(); if (!U.E.length) return '';
  let h = '<div class="dates">';
  for (let i = -3; i <= 2; i++) {
    const E = U.E[U.i + i]; if (!E) continue;
    const d = new Date(E.d), lab = evShort(E);
    h += `<button class="${DAY === i ? 'on' : ''}" onclick="DAY=${i};render()"><b style="font-size:.86rem">${esc(/fight night/i.test(lab) ? 'FN' : lab.replace('UFC ', 'UFC '))}</b><small>${d.getDate()} ${d.toLocaleDateString('pt-PT', { month: 'short' }).replace('.', '')}</small></button>`;
  }
  return h + '</div>';
}
function viewJogos() {
  const E = evAt(DAY), G = dayGames(DAY), pre = G.filter(f => f.s === 'pre');
  const picks = pre.map(f => ({ f, P: predict(f) })).filter(x => x.P.value).sort((a, b) => b.P.value.ev - a.P.value.ev);
  const C = DAY === 0 || DAY === 1 ? safeCands(DAY) : [];
  const auto = safeAuto(C);
  let h = dateStrip();
  if ((DAY === 0 || DAY === 1) && pre.length) h += boletimPanel(C, auto, picks);
  if (G.some(f => f.s === 'post')) h += pastPanel(DAY);
  if (G.length) {
    h += `<div class="row" style="margin:16px 0 4px"><div class="cat" style="margin:0;flex:1">${ic('oct')}${esc(evTitle(E))}</div><button class="btn sm" onclick="openHelp()">${ic('info')} O que quer dizer?</button></div>
      <div class="small muted" style="margin:-2px 0 8px">${dayLbl(E.d)} · ${G.length} combates · horas de cá</div>
      <div class="seg" style="margin-bottom:4px">${[['card', 'Cartaz'], ['conf', 'Confiança'], ['val', 'Valor']].map(([k, t]) => `<button class="${SORT === k ? 'on' : ''}" onclick="SORT='${k}';LS.set('sort','${k}');render()">${t}</button>`).join('')}</div>` + sortGames(G).map((f, i) => (SORT === 'card' && i === 0 ? '<div class="dayh">Combate principal</div>' : SORT === 'card' && i === 1 ? '<div class="dayh">Resto do cartaz</div>' : '') + fightCard(f)).join('');
  } else h += `<div class="pn small muted">${Object.keys(DB.f).length ? 'Sem combates guardados para este cartaz.' : 'Toca em ↻ para o Ko ir buscar os cartazes.'}</div>`;
  return h;
}
function pastPanel(off) {
  const Y = dayVerdict(off);
  let h = `<div class="pn hl">${pnH(`${ic('check')} Veredito do cartaz`, Y.n ? `vencedor ${Y.w}/${Y.n}${Y.mn ? ` · método ${Y.mw}/${Y.mn}` : ''}` : '')}`;
  if (!Y.n && !Y.S) return h + `<div class="small muted">O Ko não tinha previsões guardadas para estes combates.</div></div>`;
  if (Y.S) h += catH('shield', 'Boletim seguro', 'var(--c-blue)', `${Y.sr.w}/${Y.sr.n} · ${Y.sr.st === 'won' ? '<b class="pos">ganhou</b>' : Y.sr.st === 'lost' ? '<b class="neg">perdeu</b>' : 'em curso'}`) + Y.S.legs.map(l => `<div class="why"><span>${okIc(l.r == null ? null : l.r !== 'lost')} ${esc(l.lb)} <span class="muted small">${esc(l.gl)}</span></span><b class="muted">${pct(l.p)}</b></div>`).join('');
  h += catH('gem', 'Apostas com valor', 'var(--c-orange)', Y.bn ? `${Y.bw}/${Y.bn} · <b class="${Y.u >= 0 ? 'pos' : 'neg'}">${unitsTxt(Y.u)}</b>` : '') +
    (Y.bets.length ? Y.bets.map(({ f, v }) => `<div class="why"><span>${okIc(v.pkr === 'won')} ${esc(v.pk.lb)} <span class="muted small">@ ${odd2(v.pk.odd)}</span></span><b class="${v.pku >= 0 ? 'pos' : 'neg'}">${unitsTxt(v.pku)}</b></div>`).join('') : '<div class="small muted">O Ko não apostou nestes combates (nada com valor).</div>');
  return h + `<div class="small muted" style="margin-top:6px">u = unidades (1 u = o valor de uma aposta). Tudo foi guardado antes de cada combate começar.</div></div>`;
}
/* ---------- 🛡️ BOLETIM DO CARTAZ ---------- */
let BOPEN = LS.get('bopen', false);
let SS = { k: '', C: [], sel: new Set(), odd: {} };
const legKey = c => c.g.id + '|' + c.mk + '|' + c.sel + '|' + c.line;
function boletimPanel(C, auto, picks) {
  const k = DAY + '|' + slipKey(0);
  if (SS.k !== k) { SS = { k, C, sel: new Set(C.filter((_, i) => auto.has(i)).map(legKey)), odd: {}, stake: Math.max(CFG.min, 1) }; }
  SS.C = C; SS.auto = new Set(C.filter((_, i) => auto.has(i)).map(legKey));
  if (C.length) safeLogSave(C.filter((_, i) => auto.has(i)));
  const Pall = C.filter((_, i) => auto.has(i)).reduce((a, c) => a * c.p, 1), nAuto = auto.size;
  let h = `<div class="pn hl"><div class="fold ${BOPEN ? 'open' : ''}" onclick="BOPEN=!BOPEN;LS.set('bopen',BOPEN);render()">${ic('target')}<b style="font-size:1.08rem">Boletim do Ko</b><span class="muted small">${nAuto ? `${nAuto} seleç${nAuto === 1 ? 'ão' : 'ões'} · ${pct(Pall)}` : ''}${picks.length ? ` · ${picks.length} com valor` : ''}</span><span class="chev">${ic('back')}</span></div>`;
  if (!BOPEN) return h + '</div>';
  h += `<div class="div"></div><div class="seg"><button class="${BT === 'seg' ? 'on' : ''}" onclick="BT='seg';render()">${ic('shield')} Seguro</button><button class="${BT === 'val' ? 'on' : ''}" onclick="BT='val';render()">${ic('gem')} Valor${picks.length ? ' ' + picks.length : ''}</button></div>`;
  if (BT === 'seg') {
    if (!C.length) h += `<div class="small muted" style="margin-top:10px">Nenhuma seleção chega aos ${pct(SAFE_LEG)}. No MMA uma luva muda tudo: melhor não forçar.</div>`;
    else {
      h += `<div class="small muted" style="margin:10px 0 2px">Seguro não é certo: 3 em cada 10 boletins de 70% falham. Odds a cinzento são estimativas — mete as da Betano.</div>` +
        C.map((c, i) => { const key = legKey(c), od = SS.odd[key] != null ? SS.odd[key] : c.odd; return `<div class="leg"><input type="checkbox" ${SS.sel.has(key) ? 'checked' : ''} onchange="ssTog(${i},this.checked)">
        <div><div class="t">${esc(c.lb)}</div><div class="g">${esc(gLabel(c.g))} · ${esc(mkName(c.mk))}</div><div class="p">Ko ${pct(c.p)}</div></div>
        <input class="od${SS.odd[key] == null ? ' est' : ''}" inputmode="decimal" value="${odd2(od)}" oninput="ssOdd(${i},this)"></div>`; }).join('') + `<div class="sum" id="ssSum"></div>`;
    }
    const st = safeStats();
    if (st) h += `<div class="small muted" style="margin-top:8px">${ic('chart')} Seguro até hoje: acertou <b>${st.w}/${st.n}</b> seleções (${pct(st.w / st.n)}) · prometia ${pct(st.p)}</div>`;
  } else {
    h += picks.length ? picks.map(({ f, P }) => { const v = P.value, i = P.cands.indexOf(v); return `<div class="pick"><div style="min-width:0"><div class="g">${esc(gLabel(f))} · ${esc(mkName(v.mk))} · ${esc(v.src)}</div><div class="l">${esc(selLabel(f, v.mk, v.sel, v.line))}</div><div class="g">Ko ${pct(v.p)} · odd justa ${odd2(v.fair)}</div></div>
      <div class="o">${odd2(v.odd)}<small>valor ${sPct(v.ev)}</small></div><button class="btn go sm" onclick="openBet('${f.id}',${i})">Apostar</button></div>`; }).join('') + `<div class="small muted" style="margin-top:8px">«Valor» = a odd paga mais do que o Ko acha justo. Não é certeza: é vantagem a longo prazo.</div>`
      : `<div class="small" style="margin-top:10px">O Ko só procura valor nas odds da <b>Betano</b> que tu metes. As da ESPN já entram nas contas dele, por isso «valor» contra elas seria ilusão.</div><div class="small muted" style="margin-top:6px"><b>Onde pode haver valor:</b> no <b>método de vitória</b> e no <b>total de rondas</b>, onde as casas põem margens grandes e a matemática do Ko (ritmo de KO e de finalização de cada lutador) tem mais a dizer. Abre um combate → <b>Odds</b> → mete as da Betano.</div>`;
  }
  return h + '</div>';
}
function ssTog(i, on) { const k = legKey(SS.C[i]); if (on) SS.sel.add(k); else SS.sel.delete(k); ssSum(); }
function ssOdd(i, el) { const v = num(el.value); SS.odd[legKey(SS.C[i])] = v; el.classList.remove('est'); ssSum(); }
const ssLegs = () => SS.C.filter(c => SS.sel.has(legKey(c))).map(c => ({ c, odd: SS.odd[legKey(c)] != null ? SS.odd[legKey(c)] : c.odd, real: SS.odd[legKey(c)] > 1 }));
function ssSum() {
  const el = $('#ssSum'); if (!el) return;
  const L = ssLegs();
  if (!L.length) { el.innerHTML = '<span class="muted">Escolhe pelo menos uma seleção.</span>'; return; }
  const P = L.reduce((a, x) => a * x.c.p, 1), O = L.reduce((a, x) => a * (x.odd > 1 ? x.odd : 1), 1), ev = P * O - 1;
  el.innerHTML = `<div class="n"><span>${L.length} seleç${L.length === 1 ? 'ão' : 'ões'} · Ko dá <b style="font-size:1.1rem">${pct(P)}</b></span><b>@ ${odd2(O)}</b></div>
   <div class="small ${ev >= 0 ? 'pos' : 'muted'}">${ev >= 0 ? 'Com estas odds o boletim tem valor ' + sPct(ev) : 'Paga ' + Math.abs(Math.round(ev * 100)) + '% menos do que o justo (normal nas seguras)'}</div>
   <div class="row" style="margin-top:8px"><div style="flex:1"><label class="f" style="margin-top:0">Montante (€)</label><input class="in" id="ssStake" inputmode="decimal" value="${String(SS.stake).replace('.', ',')}" oninput="SS.stake=num(this.value)"></div></div>
   <div class="row" style="margin-top:8px"><button class="btn fill full" onclick="placeSlip()">${ic('check')} Registar múltipla</button><button class="btn go" onclick="shareSlip()" aria-label="Partilhar">${ic('share')}</button></div>`;
}
function placeSlip() {
  const L = ssLegs(); const stake = num(($('#ssStake') || {}).value);
  if (!L.length) return toast('Escolhe as seleções');
  if (L.some(x => !x.real)) return toast('Mete a odd da Betano em todas as seleções (as cinzentas são só estimativa)');
  if (L.some(x => !canBet(x.c.g))) return toast('Um dos combates já começou');
  if (!(stake >= CFG.min)) return toast('A aposta mínima é ' + eur(CFG.min));
  if (stake > accStats('tu').bal) return toast('Não tens saldo para isso');
  const duel = 'd' + Date.now().toString(36), P = L.reduce((a, x) => a * x.c.p, 1);
  newMulti('tu', L.map(x => safeLeg(x.c, x.odd)), stake, { duel, src: 'seguro', p: r2(P) });
  let mine = SS.C.filter(c => SS.auto.has(legKey(c)));
  let same = mine.length === L.length && L.every(x => SS.auto.has(legKey(x.c)));
  let follow = false;
  if (!mine.every(c => SS.odd[legKey(c)] > 1 && canBet(c.g))) { mine = L.map(x => x.c); same = true; follow = true; }
  const tstake = Math.min(stake, accStats('ko').bal);
  let msg, mood = 'win';
  if (mine.length && tstake >= CFG.min) {
    newMulti('ko', mine.map(c => safeLeg(c, SS.odd[legKey(c)])), tstake, { duel, src: 'seguro', p: r2(mine.reduce((a, c) => a * c.p, 1)) });
    msg = follow ? 'Só tenho odds reais nas tuas seleções: vou contigo no teu boletim.' : same ? 'É o meu boletim. Vou contigo!' : `Mexeste no boletim. Eu fico com o meu: <b>${mine.map(c => esc(c.lb)).join(' + ')}</b>.`;
  } else { BETS.push({ id: 'gp' + Date.now().toString(36), acc: 'ko', g: L[0].c.g.id, gl: '', gd: L[0].c.g.d, mk: 'pass', stake: 0, odd: 0, t: Date.now(), st: 'pass', ret: 0, lb: 'Passou', duel }); msg = 'Estou sem saldo… passo esta.'; mood = 'sad'; }
  saveBets();
  openSheet('Duelo marcado', duelBox(duel, mood, msg), true);
  render();
}
function shareSlip() {
  const L = ssLegs(); if (!L.length) return;
  const P = L.reduce((a, x) => a * x.c.p, 1), O = L.reduce((a, x) => a * x.odd, 1);
  shareText(`🥊 Boletim seguro do Mister Ko · ${new Date(L[0].c.g.d).toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit' })}\n` + L.map((x, i) => `${i + 1}) ${x.c.lb} @ ${odd2(x.odd)} (${gLabel(x.c.g)})`).join('\n') + `\nOdd total ${odd2(O)} · o Ko dá ${pct(P)}\n(simulação, sem dinheiro real)`);
}
async function shareText(txt) {
  try { if (navigator.share) { await navigator.share({ text: txt }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
  try { await navigator.clipboard.writeText(txt); toast('Copiado! Cola no WhatsApp ou no Facebook.'); } catch (e) { window.open('https://wa.me/?text=' + encodeURIComponent(txt), '_blank'); }
}

/* ---------- cartão de combate «VS» ---------- */
const nmLg = n => { const w = Math.max(...String(n).split(/\s+/).map(x => x.length)); return w >= 11 ? ' xl' : w >= 8 ? ' lg' : ''; };
function methodBar(m6) {
  const seg = [['Ako', 'var(--c-red)'], ['Asub', '#e5737a'], ['Adec', '#f2b8bc'], ['Bdec', '#c9c3c4'], ['Bsub', '#7a6e70'], ['Bko', '#2a2022']];
  return `<div class="mbar">${seg.map(([k, c]) => `<i style="flex:${Math.max(0.001, m6[k]).toFixed(4)};background:${c}" title="${k}"></i>`).join('')}</div><div class="mlg"><span>KO · final. · decisão</span><span>decisão · final. · KO</span></div>`;
}
function fightCard(f, hero) {
  const M = getModel(), P = predict(f), o = f.o || {};
  let notch, board;
  const fav = P.pA >= 0.5 ? f.A : f.B, pf = 1 - P.pdec;
  if (f.s === 'pre') {
    notch = `${dayLbl(f.d)} · ${hhmm(f.d)} · ${esc(wcPT(f.wc))}${f.sr === 5 ? ' · 5 rondas' : ''}`;
    board = `<div class="board"><div class="n">${pct(P.pA)}<small>ganha</small></div><div class="c"><b>${pct(pf)} acaba antes</b>${pct(P.pdec)} vai à decisão</div><div class="n">${pct(1 - P.pA)}<small>ganha</small></div></div>${methodBar(P.m6)}`;
  } else if (f.s === 'in') {
    notch = `<span class="live">Ao vivo</span>${esc(f.cl || '')}`;
    board = `<div class="board"><div class="n">R${f.rd || '?'}</div><div class="c"><span class="live">Live</span></div><div class="n">${pct(1 - P.pA)}</div></div>`;
  } else if (f.s === 'off') { notch = 'Cancelado / adiado'; board = ''; }
  else {
    notch = `Final · ${dayLbl(f.d)} · ${esc(wcPT(f.wc))}`;
    board = `<div class="board"><div class="n">${f.w === 'A' ? '<span class="pos">V</span>' : f.w === 'B' ? '<span class="neg">D</span>' : '—'}</div><div class="c"><b>${esc(resTxt(f))}</b></div><div class="n">${f.w === 'B' ? '<span class="pos">V</span>' : f.w === 'A' ? '<span class="neg">D</span>' : '—'}</div></div>`;
  }
  const tags = [];
  if (f.ttl) tags.push(`<span class="tg" style="--k:var(--c-yellow)">${ic('trophy')} título</span>`);
  const nA = fighterOf(M, f.A), nB = fighterOf(M, f.B);
  if (!nA.k) tags.push(`<span class="tg" style="--k:var(--c-green)">${esc(sn(f.A))} estreia</span>`);
  if (!nB.k) tags.push(`<span class="tg" style="--k:var(--c-green)">${esc(sn(f.B))} estreia</span>`);
  if (f.s === 'pre' && P.value) tags.push(`<span class="tg" style="--k:var(--c-orange)">valor</span>`);
  const mine = BETS.filter(b => b.acc === 'tu' && (b.g === f.id || (b.legs && b.legs.some(l => l.g === f.id)))).length;
  if (mine) tags.push(`<span class="tg" style="--k:var(--c-blue)">${ic('star')} ${mine}</span>`);
  let say, bet = '';
  const v = f.s === 'post' ? verdict(f) : null;
  if (v) {
    say = `${okIc(v.win)} Vencedor: o Ko dava ${esc(sn(v.fav === 'A' ? f.A : f.B))} (${pct(v.conf)})${v.met != null ? ` · método ${okIc(v.met)}` : ''}${v.dist != null ? ` · decisão? ${okIc(v.dist)}` : ''}`;
    bet = v.pk ? `<div class="say"><b>Aposta do Ko:</b> ${esc(v.pk.lb)} @ ${odd2(v.pk.odd)} → ${v.pkr === 'won' ? `<b class="pos">ganhou ${unitsTxt(v.pku)}</b>` : v.pkr === 'lost' ? `<b class="neg">perdeu</b>` : 'devolvida'}</div>` : '';
  } else if (f.s === 'post') say = `<span class="muted">Sem previsão guardada antes do combate.</span>`;
  else {
    const top = MET_K.slice().sort((a, b) => P.m6[b] - P.m6[a])[0];
    say = `<b>Ko:</b> ${esc(sn(fav))} ganha ${pct(Math.max(P.pA, 1 - P.pA))} · mais provável: <b>${esc(selLabel(f, 'met', top))}</b> (${pct(P.m6[top])})`;
    bet = f.s === 'pre' ? (P.value ? `<div class="say"><b style="color:var(--c-red)">👉 Aposta do Ko:</b> ${esc(selLabel(f, P.value.mk, P.value.sel, P.value.line))} @ ${odd2(P.value.odd)} <span class="pos small">valor ${sPct(P.value.ev)}</span></div>` : '') : '';
  }
  const book = o.a ? `<div class="mk">${ic('coins')} ${esc(o.p || 'Casa')}: ${esc(sn(f.A))} ${odd2(o.a)} / ${esc(sn(f.B))} ${odd2(o.b)}${o.am ? ' · método ✓' : ''}</div>` : '';
  const side = (s, x) => `<div class="team">${avatar(s)}<div style="min-width:0"><div class="nm${nmLg(sn(s))}">${esc(sn(s))}</div><div class="rc">${esc(s.rec || (x.rec ? x.rec.join('-') : ''))}${s.ct ? ' · ' + esc(s.ct) : ''}</div></div></div>`;
  return `<div class="gc${hero ? ' hero2' : ''}" onclick="GT='ana';openFight('${f.id}')"><div class="notch">${notch}</div>${tags.length ? `<div class="hd">${tags.join('')}</div>` : ''}
  <div class="tm">${side(f.A, nA)}<div class="vsx">VS</div>${side(f.B, nB)}</div>${board}
  <div class="ft"><div class="say">${say}</div>${bet}${book}</div></div>`;
}
/* ---------- FOLHA ---------- */
function openSheet(title, html, short) { const b = $('#sheetBox'); b.className = 'box' + (short ? ' short' : ''); b.innerHTML = `<div class="sh"><h3>${title}</h3><button class="x" onclick="closeSheet()" aria-label="Fechar">${ic('x')}</button></div>${html}`; $('#sheet').classList.add('on'); b.scrollTop = 0; }
function closeSheet() { $('#sheet').classList.remove('on'); }
function askConfirm(msg, okTxt, fnName) { openSheet('Confirmar', `<p>${msg}</p><div class="row"><button class="btn full" onclick="closeSheet()">Cancelar</button><button class="btn red full" onclick="${fnName}">${okTxt}</button></div>`, true); }

/* ---------- FICHA DO COMBATE ---------- */
function openFight(id) {
  const f = DB.f[id]; if (!f) return;
  const P = predict(f), E = DB.ev[f.ev];
  const conf = Math.round(Math.max(P.pA, 1 - P.pA) * 100), fav = P.pA >= 0.5 ? f.A : f.B;
  let h = `<div class="pn" style="margin-top:6px"><div class="tm" style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px">
   <div class="team">${avatar(f.A, 60)}<div class="nm${nmLg(sn(f.A))}">${esc(sn(f.A))}</div><div class="rc">${esc(f.A.n)}${f.A.rec ? ' · ' + esc(f.A.rec) : ''}</div></div>
   <div class="score">${f.s === 'pre' ? `<div class="vsx">VS</div>` : f.s === 'post' ? `<div class="p" style="max-width:110px;text-align:center"><b>${esc(resTxt(f))}</b></div>` : `<div class="p">${f.s === 'in' ? 'ao vivo' : 'cancelado'}</div>`}</div>
   <div class="team">${avatar(f.B, 60)}<div class="nm${nmLg(sn(f.B))}">${esc(sn(f.B))}</div><div class="rc">${esc(f.B.n)}${f.B.rec ? ' · ' + esc(f.B.rec) : ''}</div></div></div>
   <div class="small muted" style="text-align:center;margin:6px 0 10px">${esc(evTitle(E))} · ${dayLbl(f.d)} às ${hhmm(f.d)} · ${esc(wcPT(f.wc))} · ${f.sr} rondas${f.ttl ? ' · <b>título</b>' : ''}</div>
   <div class="mosaic"><div><b>${pct(1 - P.pdec)}</b><small>acaba antes do fim</small></div><div><b>${pct(P.m6.Ako + P.m6.Bko)}</b><small>por KO/TKO</small></div><div><b>${pct(P.m6.Asub + P.m6.Bsub)}</b><small>por finalização</small></div></div>
   <div class="big-ovr" style="margin-top:6px"><div class="t">Confiança do Ko<div class="small muted">${esc(sn(fav))} ganha</div></div><div class="grow"></div><div class="n">${conf}%</div></div></div>
   <div class="tabs">${[['ana', 'Análise'], ['mk', 'Odds'], ['eq', 'Lutadores']].map(([k, t]) => `<button class="${GT === k ? 'on' : ''}" onclick="GT='${k}';openFight('${id}')">${t}</button>`).join('')}</div>`;
  if (GT === 'mk') h += tabOdds(f, P);
  else if (GT === 'eq') h += tabLutadores(f, P);
  else h += tabAnalise(f, P);
  const mine = BETS.filter(b => b.st !== 'pass' && (b.g === f.id || (b.legs && b.legs.some(l => l.g === f.id))));
  if (mine.length) h += catH('list', 'Apostas neste combate', 'var(--c-blue)') + `<div class="pn" style="margin-top:0">${mine.map(betRow).join('')}</div>`;
  if (canBet(f) && GT !== 'mk') h += `<div class="cta"><button class="btn fill full" onclick="openBet('${f.id}')">${ic('target')} Apostar neste combate</button></div>`;
  openSheet(esc(sn(f.A)) + ' <span class="muted">vs</span> ' + esc(sn(f.B)), h);
}
/* a curva da sobrevivência: a probabilidade de o combate ainda estar a decorrer, minuto a minuto */
function survSvg(f, P) {
  const W = 320, H = 150, T = P.T, x = t => 30 + t / T * (W - 40), y = p => 12 + (1 - p) * (H - 36);
  let path = '', area = '';
  for (let t = 0; t <= T + 1e-9; t += T / 120) { const s = P.surv(t); path += (t ? 'L' : 'M') + x(t).toFixed(1) + ' ' + y(s).toFixed(1); }
  area = path + `L${x(T).toFixed(1)} ${y(0)}L${x(0).toFixed(1)} ${y(0)}Z`;
  const fa = (P.m6.Ako + P.m6.Asub) / Math.max(1e-9, 1 - P.pdec);
  let rounds = '';
  for (let r = 1; r <= f.sr; r++) {
    const s0 = P.S[r - 1], s1 = P.S[r], pr = s0 - s1;
    rounds += `<line x1="${x(r * 5)}" y1="${y(1)}" x2="${x(r * 5)}" y2="${y(0)}" stroke="rgba(0,0,0,.18)" stroke-dasharray="3 3"/><text x="${x(r * 5 - 2.5)}" y="${H - 8}" text-anchor="middle" font-size="10" fill="var(--mut)">R${r}</text><text x="${x(r * 5 - 2.5)}" y="${y((s0 + s1) / 2) - 6}" text-anchor="middle" font-size="10" font-weight="700" fill="var(--c-red)">${pct(pr)}</text>`;
  }
  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;display:block">
    <defs><linearGradient id="sv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--c-red)" stop-opacity=".35"/><stop offset="1" stop-color="var(--c-red)" stop-opacity=".04"/></linearGradient></defs>
    <text x="4" y="${y(1) + 4}" font-size="9" fill="var(--mut)">100%</text><text x="4" y="${y(0.5) + 3}" font-size="9" fill="var(--mut)">50%</text><text x="4" y="${y(0) + 3}" font-size="9" fill="var(--mut)">0%</text>
    <line x1="${x(0)}" y1="${y(0.5)}" x2="${x(T)}" y2="${y(0.5)}" stroke="rgba(0,0,0,.08)"/>
    <path d="${area}" fill="url(#sv)"/><path d="${path}" fill="none" stroke="var(--c-red)" stroke-width="2.5"/>${rounds}
    <circle cx="${x(T)}" cy="${y(P.pdec)}" r="4" fill="var(--ink)"/><text x="${x(T) - 6}" y="${y(P.pdec) + 18}" text-anchor="end" font-size="10.5" font-weight="700" fill="var(--ink)">decisão ${pct(P.pdec)}</text>
  </svg><div class="small muted">A curva é a probabilidade de o combate ainda estar a decorrer. Em cada ronda, o número a vermelho é a probabilidade de acabar nessa ronda. Se acabar antes, ${pct(fa)} das vezes é ${esc(sn(f.A))} a acabar com ele.</div>`;
}
function tabAnalise(f, P) {
  const s1 = v => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v * 100 / 4).toFixed(0) + ' pts';
  const A = sn(f.A), B = sn(f.B), pr = PREDS[f.id];
  let h = catH('chart', 'Quem ganha', 'var(--c-red)') +
    (f.s !== 'pre' && pr ? `<div class="opinion" style="margin:0 0 10px"><div>${ic('save')} <b>Antes do combate o Ko disse:</b> ${esc(pr.pa >= 0.5 ? A : B)} ganha (${pct(Math.max(pr.pa, 1 - pr.pa))}), ${pct(1 - pr.pdec)} de acabar antes do fim.</div></div>` : '') +
    attr(esc(A) + ' ganha', Math.round(P.pA * 100), P.pA >= 0.5 ? 'var(--c-red)' : 'var(--mut2)', pct(P.pA), 100) +
    attr(esc(B) + ' ganha', Math.round((1 - P.pA) * 100), P.pA < 0.5 ? 'var(--c-red)' : 'var(--mut2)', pct(1 - P.pA), 100);
  h += catH('glove', 'Como acaba (os 6 desfechos)', 'var(--c-red)') + methodBar(P.m6) +
    `<table class="tbl" style="margin-top:8px"><tr><th style="text-align:left">Desfecho</th><th>Ko</th><th>Justa</th>${P.mk6 ? '<th>Casa</th>' : ''}</tr>` +
    MET_K.map(k => `<tr><td style="text-align:left">${esc(selLabel(f, 'met', k))}</td><td><b>${pct(P.m6[k])}</b></td><td>${odd2(1 / Math.max(1e-4, P.m6[k]))}</td>${P.mk6 ? `<td class="muted">${pct(P.mk6[k])}</td>` : ''}</tr>`).join('') + '</table>' +
    `<div class="small muted" style="margin-top:6px">${P.mk6 ? `Junta o método da casa (${pct(CFG.mktM)}) com a matemática do Ko (${pct(1 - CFG.mktM)}).` : 'Sem odds de método da ESPN: é só a matemática do Ko.'} Ritmos por minuto: ${esc(A)} KO ${(P.lam.Ako * 15).toFixed(2).replace('.', ',')}/15min, finalização ${(P.lam.Asub * 15).toFixed(2).replace('.', ',')}; ${esc(B)} KO ${(P.lam.Bko * 15).toFixed(2).replace('.', ',')}, finalização ${(P.lam.Bsub * 15).toFixed(2).replace('.', ',')}.</div>`;
  h += catH('clock', 'Quando acaba', 'var(--c-red)') + survSvg(f, P);
  const lines = f.sr === 5 ? [0.5, 1.5, 2.5, 3.5, 4.5] : [0.5, 1.5, 2.5];
  h += `<table class="tbl" style="margin-top:8px"><tr><th style="text-align:left">Total de rondas</th><th>Mais</th><th>Menos</th><th>Justa (mais)</th></tr>` +
    lines.map(L => { const q = probs(P, 'tr', 'o', L); return `<tr><td style="text-align:left">${gl(L)} <span class="muted small">(${Math.floor(L) * 5 + 2}m30s)</span></td><td><b>${pct(q.w)}</b></td><td>${pct(1 - q.w)}</td><td>${odd2(1 / q.w)}</td></tr>`; }).join('') +
    `<tr><td style="text-align:left">Vai até ao fim</td><td><b>${pct(P.pdec)}</b></td><td>${pct(1 - P.pdec)}</td><td>${odd2(1 / P.pdec)}</td></tr></table>`;
  h += catH('chip', 'Porque pensa assim', 'var(--c-purple)', 'a favor de ' + esc(A)) +
    P.R.parts.map(([t, v]) => `<div class="why"><span>${esc(t)}</span><b class="${v > 0.01 ? 'pos' : v < -0.01 ? 'neg' : 'muted'}">${Math.abs(v) < 0.01 ? '0' : s1(v)}</b></div>`).join('') +
    `<div class="why"><span>= Só pelo Ko</span><b>${esc(P.pK >= 0.5 ? A : B)} ${pct(Math.max(P.pK, 1 - P.pK))}</b></div>` +
    (P.pNV != null ? `<div class="why"><span>Odds da casa sem margem (peso ${pct(P.W)})</span><b>${esc(P.pNV >= 0.5 ? A : B)} ${pct(Math.max(P.pNV, 1 - P.pNV))}</b></div>` : `<div class="why"><span>Sem odds da ESPN: vai só pelo Ko</span><b>—</b></div>`) +
    `<div class="why" style="border:0"><span><b>Conclusão:</b> ${esc(P.pA >= 0.5 ? A : B)} ganha ${pct(Math.max(P.pA, 1 - P.pA))}</span></div>
    <div class="small muted">«pts» = pontos percentuais aproximados num combate equilibrado.</div>`;
  return h;
}
function tabOdds(f, P) {
  const b = BO[f.id] || {}, done = f.s !== 'pre';
  const fair = (mk, sel, line) => odd2(fairOf(probs(P, mk, sel, line)));
  const inp = (k, ph, isLine) => `<div style="flex:1"><input class="in" style="padding:8px;text-align:center" inputmode="decimal" id="bo_${k}" placeholder="${isLine ? String(ph).replace('.', ',') : ''}" value="${b[k] != null ? String(b[k]).replace('.', ',') : ''}" ${done ? 'disabled' : ''}><span class="hint">${isLine ? 'linha' : 'justa ' + ph}</span></div>`;
  const tl0 = b.tl != null ? b.tl : (f.o && f.o.ou != null ? f.o.ou : (f.sr === 5 ? 3.5 : 1.5));
  const A = sn(f.A), B = sn(f.B);
  let h = catH('coins', 'Odds da Betano (mete-as tu)', 'var(--c-orange)', done ? 'combate começado' : '') +
    `<div class="small muted" style="margin-bottom:6px">Escreve as odds que vês na Betano. Por baixo de cada campo está a <b>odd justa</b> do Ko: se a Betano pagar mais, há valor.</div>
    <label class="f">Vencedor · ${esc(A)} / ${esc(B)}</label><div class="row">${inp('ma', fair('ml', 'A'))}${inp('mb', fair('ml', 'B'))}</div>
    <label class="f">Método · ${esc(A)}: KO/TKO · finalização · decisão</label><div class="row">${inp('Ako', fair('met', 'Ako'))}${inp('Asub', fair('met', 'Asub'))}${inp('Adec', fair('met', 'Adec'))}</div>
    <label class="f">Método · ${esc(B)}: KO/TKO · finalização · decisão</label><div class="row">${inp('Bko', fair('met', 'Bko'))}${inp('Bsub', fair('met', 'Bsub'))}${inp('Bdec', fair('met', 'Bdec'))}</div>
    <label class="f">Total de rondas · linha / mais / menos</label><div class="row">${inp('tl', tl0, true)}${inp('to', fair('tr', 'o', tl0))}${inp('tu', fair('tr', 'u', tl0))}</div>
    <label class="f">Vai até ao fim? · sim / não</label><div class="row">${inp('dy', fair('dist', 'y'))}${inp('dn', fair('dist', 'n'))}</div>
    ${done ? '' : `<button class="btn fill full" style="margin-top:10px" onclick="saveBO('${f.id}')">${ic('check')} Guardar odds e ver valor</button>`}`;
  if (P.cands.length) h += catH('gem', 'Onde há valor', 'var(--c-green)') + `<table class="tbl"><tr><th>Aposta</th><th>Odd</th><th>Ko</th><th>Justa</th><th>Valor</th></tr>` +
    P.cands.map((c, i) => `<tr class="tap ${P.best && c === P.best ? 'best' : ''}" onclick="${canBet(f) ? `openBet('${f.id}',${i})` : ''}"><td>${esc(selLabel(f, c.mk, c.sel, c.line))}<div class="small muted">${esc(c.src)}</div></td><td>${odd2(c.odd)}</td><td>${pct(c.p)}</td><td>${odd2(c.fair)}</td><td class="${c.ev > 0 ? 'pos' : 'neg'}">${sPct(c.ev)}</td></tr>`).join('') +
    `</table><div class="small muted" style="margin:8px 2px">Toca numa linha para apostar nela. Empate: o vencedor é devolvido.</div>`;
  else h += `<div class="small muted" style="margin-top:10px">Ainda sem odds para comparar.</div>`;
  return h;
}
function saveBO(id) {
  const o = {};
  ['ma', 'mb', 'Ako', 'Asub', 'Adec', 'Bko', 'Bsub', 'Bdec', 'tl', 'to', 'tu', 'dy', 'dn'].forEach(k => { const e = $('#bo_' + k); const v = e ? num(e.value) : null; if (v != null) o[k] = v; });
  Object.keys(o).forEach(k => { if (k !== 'tl' && !(o[k] > 1 && o[k] < 101)) delete o[k]; });
  const f = DB.f[id];
  if ((o.to || o.tu) && o.tl == null) o.tl = f.o && f.o.ou != null ? f.o.ou : (f.sr === 5 ? 3.5 : 1.5);
  if (o.tl != null && !(o.tl > 0 && o.tl < f.sr)) delete o.tl;
  if (Object.keys(o).length) BO[id] = o; else delete BO[id];
  LS.set('bo', BO); PC.delete(id); toast('Odds guardadas'); GT = 'mk'; openFight(id); render();
}
function tabLutadores(f, P) {
  const M = getModel(), d = f.d.slice(0, 10);
  const C = [fighterCard(M, f.A), fighterCard(M, f.B)], S = [f.A, f.B];
  const age = x => x.dob ? Math.floor(yearsBetween(d, x.dob)) : null;
  const cm = i => i ? Math.round(i * 2.54) + ' cm' : '—';
  const row = (lbl, a, b, better) => `<tr><td class="${better === 1 ? 'pos' : ''}"><b>${a}</b></td><td class="muted small">${lbl}</td><td class="${better === 2 ? 'pos' : ''}"><b>${b}</b></td></tr>`;
  const cmp = (a, b, hi) => a == null || b == null || a === b ? 0 : (hi ? a > b : a < b) ? 1 : 2;
  const [a, b] = C;
  let h = `<div class="pn"><div class="row" style="justify-content:space-between">${avatar(S[0], 54)}<div class="pn-h" style="margin:0">Frente a frente</div>${avatar(S[1], 54)}</div><div class="div"></div>
   <table class="tbl tott"><tr><th>${esc(sn(S[0]))}</th><th></th><th>${esc(sn(S[1]))}</th></tr>
   ${row('Nota geral (Ko)', a.ovr, b.ovr, cmp(a.ovr, b.ovr, 1))}
   ${row('Registo UFC', a.x.rec.join('-'), b.x.rec.join('-'), 0)}
   ${row('Registo total (ESPN)', esc(S[0].rec || '—'), esc(S[1].rec || '—'), 0)}
   ${row('Idade', age(a.x) || '—', age(b.x) || '—', cmp(age(a.x), age(b.x), 0))}
   ${row('Altura', cm(a.x.h), cm(b.x.h), 0)}
   ${row('Envergadura', cm(a.x.re), cm(b.x.re), cmp(a.x.re, b.x.re, 1))}
   ${row('Guarda', esc(a.x.st || '—'), esc(b.x.st || '—'), 0)}
   ${row('Combates no UFC', a.x.k, b.x.k, cmp(a.x.k, b.x.k, 1))}
   ${a.sy && b.sy ? row('Golpes certos /min', gl(a.sy[0]), gl(b.sy[0]), cmp(a.sy[0], b.sy[0], 1)) + row('Golpes sofridos /min', gl(a.sy[1]), gl(b.sy[1]), cmp(a.sy[1], b.sy[1], 0)) + row('Precisão', pct(a.sy[2]), pct(b.sy[2]), cmp(a.sy[2], b.sy[2], 1)) + row('Quedas /15 min', gl(a.sy[3]), gl(b.sy[3]), cmp(a.sy[3], b.sy[3], 1)) + row('Tentativas de finalização /15', gl(a.sy[5]), gl(b.sy[5]), cmp(a.sy[5], b.sy[5], 1)) + row('Controlo no chão (min por min)', gl(a.sy[6]), gl(b.sy[6]), cmp(a.sy[6], b.sy[6], 1)) : ''}
   </table></div>`;
  C.forEach((c, i) => {
    h += `<div class="pn"><div class="row">${avatar(S[i], 46)}<div style="flex:1"><div class="pn-h" style="margin:0">${esc(S[i].n)}</div><div class="small muted">${esc(wcPT(c.x.wc || f.wc))}${!c.x.k ? ' · <span class="pos">estreia no UFC</span>' : ''}</div></div><div class="ovr"><b>${c.ovr}</b><small>OVR</small></div></div>
     <div class="div"></div>${attr('Poder de KO', c.pow, 'var(--c-red)')}${attr('Finalizações', c.grap, '#7a6e70')}${attr('Queixo (aguenta)', c.chin, 'var(--c-green)')}${attr('Experiência', c.exp, 'var(--c-yellow)')}
     <div class="small muted" style="margin-top:6px">Últimos combates</div>${(c.x.f5 || []).slice().reverse().map(r => `<div class="why"><span><span class="form"><i class="${r[2] === 'W' ? 'w' : r[2] === 'L' ? 'l' : 'o'}">${r[2] === 'W' ? 'V' : r[2] === 'L' ? 'D' : r[2] === 'D' ? 'E' : '–'}</i></span> ${esc(r[1])}</span><b class="muted small">${esc({ KO: 'KO/TKO', SUB: 'final.', DEC: 'decisão' }[r[3]] || r[3])}${r[3] && r[3] !== 'DEC' && r[4] ? ' R' + r[4] : ''} · ${esc(String(r[0]).slice(0, 4))}</b></div>`).join('') || '<div class="small muted">Sem combates no UFC.</div>'}</div>`;
  });
  return h + `<div class="small muted">Notas de 0 a 99 do Ko: poder de KO e finalizações = quantos acaba por minuto, comparado com a categoria; queixo = quão poucas vezes é posto KO. Estatísticas de golpes: ufcstats.com.</div>`;
}

/* ---------- APOSTAR (e o Ko responde) ---------- */
let BF = null;
const MKS = [['ml', 'Vencedor'], ['met', 'Método'], ['tr', 'Rondas'], ['dist', 'Até ao fim?']];
function openBet(id, ci) {
  const f = DB.f[id]; if (!canBet(f)) return toast('Este combate já começou — já não dá para apostar');
  const P = predict(f);
  const c0 = (ci != null && P.cands[ci]) || P.best || { mk: 'ml', sel: P.pA >= 0.5 ? 'A' : 'B' };
  BF = { id, mk: c0.mk, sel: c0.sel, line: c0.line, odd: c0.odd || '', stake: Math.max(CFG.min, 1) };
  drawBet();
}
function presetBF() {
  const f = DB.f[BF.id], P = predict(f), b = BO[f.id] || {}, o = f.o || {};
  BF.line = BF.mk === 'tr' ? (b.tl != null ? b.tl : o.ou != null ? o.ou : f.sr === 5 ? 3.5 : 1.5) : null;
  const c = P.cands.find(x => x.mk === BF.mk && x.sel === BF.sel && (x.line == null || x.line === BF.line));
  BF.odd = c ? c.odd : '';
}
function drawBet() {
  const f = DB.f[BF.id];
  const def = { ml: 'A', met: 'Ako', tr: 'o', dist: 'y' };
  const segMk = `<div class="seg">${MKS.map(([k, t]) => `<button class="${BF.mk === k ? 'on' : ''}" onclick="BF.mk='${k}';BF.sel='${def[k]}';presetBF();drawBet()">${t}</button>`).join('')}</div>`;
  const sels = BF.mk === 'tr' ? [['o', 'Mais'], ['u', 'Menos']] : BF.mk === 'dist' ? [['y', 'Sim'], ['n', 'Não']] : BF.mk === 'met' ? MET_K.map(k => [k, selLabel(f, 'met', k).replace(' por ', ' · ')]) : [['A', sn(f.A)], ['B', sn(f.B)]];
  const segSel = sels.map(([k, t]) => `<button class="${BF.sel === k ? 'on' : ''}" onclick="BF.sel='${k}';presetBF();drawBet()">${esc(t)}</button>`).join('');
  openSheet('A tua aposta', `<div class="small muted">${esc(gLabel(f))} · ${dayLbl(f.d)} ${hhmm(f.d)}</div>
   <label class="f">Mercado</label>${segMk}
   <label class="f">Escolha</label><div class="seg${BF.mk === 'met' ? ' wrap3' : ''}">${segSel}</div>
   ${BF.mk === 'tr' ? `<label class="f">Linha de rondas</label><input class="in" id="bLine" inputmode="decimal" value="${BF.line == null ? '' : String(BF.line).replace('.', ',')}" oninput="betOpinion()">` : ''}
   <div class="row"><div style="flex:1"><label class="f">Odd (a da Betano)</label><input class="in" id="bOdd" inputmode="decimal" value="${BF.odd ? String(BF.odd).replace('.', ',') : ''}" oninput="betOpinion()"></div>
   <div style="flex:1"><label class="f">Montante (€)</label><input class="in" id="bStake" inputmode="decimal" value="${String(BF.stake).replace('.', ',')}" oninput="betOpinion()"></div></div>
   <div class="opinion" id="bOp"></div>
   <button class="btn fill full" style="margin-top:12px" id="bGo" onclick="placeBet()">${ic('check')} Registar a minha aposta</button>
   <div class="small muted" style="margin-top:6px">Ao registares, o Ko escolhe a aposta dele neste combate, com o mesmo valor. Ganha o duelo quem lucrar mais.</div>`, true);
  betOpinion();
}
function readBF() { BF.line = BF.mk === 'tr' ? num($('#bLine') && $('#bLine').value) : null; BF.odd = num($('#bOdd').value); BF.stake = num($('#bStake').value); }
function betOpinion() {
  readBF();
  const f = DB.f[BF.id], P = predict(f), box = $('#bOp'), nl = BF.mk === 'tr';
  if (nl && !(BF.line > 0 && BF.line < f.sr)) { $('#bGo').disabled = true; box.className = 'opinion'; box.innerHTML = `<div class="face">${koFace('ok')}</div><div>Diz-me a linha de rondas (ex.: 1,5).</div>`; return; }
  const q = probs(P, BF.mk, BF.sel, BF.line), p = q.w, fair = fairOf(q);
  let cls = 'opinion', mood = 'ok', msg;
  if (!(BF.odd > 1)) msg = `Para mim isto acontece ${pct(p)} das vezes. Odd justa: <b>${odd2(fair)}</b>.`;
  else {
    const ev = evOf(q, BF.odd);
    if (ev >= 0.05) { cls += ' good'; mood = 'win'; msg = `Boa! Dou-lhe ${pct(p)}. Com ${odd2(BF.odd)} tens <b>valor ${sPct(ev)}</b>.`; }
    else if (ev >= 0) msg = `Dou-lhe ${pct(p)}. Valor ${sPct(ev)}: aposta justa, sem grande vantagem.`;
    else { cls += ' bad'; mood = 'sad'; msg = `Hum… dou-lhe ${pct(p)} (justa ${odd2(fair)}). Com ${odd2(BF.odd)} perdes <b>${sPct(ev)}</b> a longo prazo.`; }
  }
  const issues = [];
  if (!(BF.stake >= CFG.min)) issues.push(`a aposta mínima é ${eur(CFG.min)}`);
  if (BF.stake > accStats('tu').bal) issues.push('não tens saldo para isso');
  box.className = cls; box.innerHTML = `<div class="face">${koFace(mood)}</div><div>${msg}${issues.length ? `<div class="neg small" style="margin-top:4px">${issues.join(' · ')}</div>` : ''}</div>`;
  $('#bGo').disabled = !(BF.odd > 1 && BF.stake >= CFG.min && BF.stake <= accStats('tu').bal);
}
function placeBet() {
  readBF();
  const f = DB.f[BF.id]; if (!canBet(f)) return toast('O combate já começou');
  if ((BF.mk === 'tr' && !(BF.line > 0)) || !(BF.odd > 1) || !(BF.stake >= CFG.min) || BF.stake > accStats('tu').bal) return toast('Falta a linha, a odd ou o valor');
  const P = predict(f);
  const c = { mk: BF.mk, sel: BF.sel, line: BF.line, odd: BF.odd };
  const q = probs(P, c.mk, c.sel, c.line), p = q.w, mineEv = evOf(q, c.odd);
  const duel = 'd' + Date.now().toString(36);
  newBet('tu', f, c, BF.stake, { p: r2(p), ev: r2(mineEv), duel });
  const opts = P.cands.filter(x => x.src === 'Betano' && x.odd >= CFG.oddMin && x.odd <= CFG.oddMax && x.ev > 0).sort((a, b) => b.ev - a.ev);
  let tc = opts[0] || null;
  if (mineEv > 0 && (!tc || mineEv > tc.ev)) tc = Object.assign({}, c, { p, ev: mineEv });
  let msg, mood;
  const stake = Math.min(BF.stake, accStats('ko').bal);
  if (tc && stake >= CFG.min) {
    newBet('ko', f, tc, stake, { p: r2(tc.p), ev: r2(tc.ev), duel });
    const same = tc.mk === c.mk && tc.sel === c.sel && tc.line === c.line;
    msg = same ? `Concordo contigo! Vou no mesmo: <b>${esc(selLabel(f, tc.mk, tc.sel, tc.line))}</b> @ ${odd2(tc.odd)}.` : `Eu vou em <b>${esc(selLabel(f, tc.mk, tc.sel, tc.line))}</b> @ ${odd2(tc.odd)} (dou-lhe ${pct(tc.p)}). Que ganhe o melhor!`;
    mood = 'win';
  } else {
    BETS.push({ id: 'gp' + Date.now().toString(36), acc: 'ko', g: f.id, gl: gLabel(f), gd: f.d, mk: 'pass', stake: 0, odd: 0, t: Date.now(), st: 'pass', ret: 0, lb: 'Passou', duel });
    msg = stake < CFG.min ? 'Estou sem saldo… passo esta.' : 'Neste combate não vejo nada com valor. Passo — fico com o meu dinheiro.'; mood = 'sad';
  }
  saveBets();
  openSheet('Duelo marcado', duelBox(duel, mood, msg), true);
  render();
}
function duelBox(duel, mood, msg) {
  const me = BETS.find(b => b.duel === duel && b.acc === 'tu'), ko = BETS.find(b => b.duel === duel && b.acc === 'ko');
  const cell = (b, who, k) => `<div style="--k:${k}"><div class="h">${who}</div>${b && b.st !== 'pass' ? `<b>${esc(b.lb)}</b>${b.legs ? `<div class="small muted">${b.legs.map(l => esc(l.lb)).join(' + ')}</div>` : ''}<div class="small muted">@ ${odd2(b.odd)} · ${eur(b.stake)}</div>` : '<b class="muted">Passou</b>'}</div>`;
  return `<div class="opinion"><div class="face">${koFace(mood)}</div><div>${msg}</div></div><div class="duel">${cell(me, 'Tu', 'var(--c-blue)')}${cell(ko, 'Mister Ko', 'var(--c-orange)')}</div>
    <div class="row" style="margin-top:14px"><button class="btn full" onclick="closeSheet();render()">Fechar</button><button class="btn fill full" onclick="closeSheet();go('duelo')">Ver duelo</button></div>`;
}
function voidBet(id) {
  const b = BETS.find(x => x.id === id); if (!b || b.st !== 'open') return;
  const gs = b.legs ? b.legs.map(l => DB.f[l.g]) : [DB.f[b.g]];
  if (gs.some(f => !canBet(f))) { closeSheet(); return toast('O combate já começou: já não dá para anular'); }
  BETS.filter(x => x.duel && x.duel === b.duel && (x.st === 'open' || x.st === 'pass')).filter(x => x !== b).concat([b]).forEach(x => { if (x.st === 'pass') x.st = 'void'; else { x.st = 'void'; x.ret = x.stake; } x.tset = Date.now(); });
  saveBets(); closeSheet(); toast('Aposta anulada (o dinheiro voltou)'); render();
}

/* ---------- DUELO ---------- */
function duels() {
  const by = {};
  BETS.filter(b => b.duel).forEach(b => { (by[b.duel] = by[b.duel] || {})[b.acc] = b; });
  return Object.entries(by).map(([k, v]) => ({ k, tu: v.tu, ko: v.ko })).filter(d => d.tu).sort((a, b) => b.tu.t - a.tu.t);
}
const betPL = b => !b || b.st === 'open' || b.st === 'void' || b.st === 'pass' ? 0 : r2((b.ret || 0) - b.stake);
function viewDuelo() {
  const D = duels().filter(d => d.tu.st !== 'void');
  let you = 0, him = 0, w = 0, l = 0, e = 0, open = 0;
  D.forEach(d => {
    if (d.tu.st === 'open' || (d.ko && d.ko.st === 'open')) { open++; return; }
    const a = betPL(d.tu), b = betPL(d.ko); you += a; him += b;
    if (Math.abs(a - b) < 0.005) e++; else if (a > b) w++; else l++;
  });
  const n = w + l + e;
  let h = `<div class="pn hl" style="margin-top:14px">${pnH(`${ic('vs')} Duelo`, open + ' em jogo')}
    <div class="vs"><div><div class="av me">${ic('star')}</div><div class="nm">Tu</div><div class="ovr" style="margin-top:6px"><b class="${you >= 0 ? 'pos' : 'neg'}">${sEur(you)}</b><small>LUCRO</small></div></div>
    <div class="mid">VS</div>
    <div><div class="av">${koFace(him > you ? 'win' : him < you ? 'sad' : 'ok')}</div><div class="nm">Mister Ko</div><div class="ovr" style="margin-top:6px"><b class="${him >= 0 ? 'pos' : 'neg'}">${sEur(him)}</b><small>LUCRO</small></div></div></div>
    <div style="margin-top:14px">${attr('Duelos ganhos por ti', n ? Math.round(w / n * 100) : 0, 'var(--c-blue)', `${w} de ${n}`, 100)}${attr('Duelos ganhos pelo Ko', n ? Math.round(l / n * 100) : 0, 'var(--c-orange)', `${l} de ${n}`, 100)}${e ? `<div class="small muted">${e} empate${e > 1 ? 's' : ''} (mesma aposta)</div>` : ''}</div></div>`;
  if (!D.length) return h + `<div class="pn empty"><div class="face">${koFace('ok')}</div><b>Ainda não houve duelos.</b><div class="muted small" style="margin:6px 0 14px">Abre um combate em «Combates» ou regista o Boletim seguro. Eu respondo com a minha aposta.</div><button class="btn fill" onclick="go('jogos')">${ic('glove')} Ver combates</button></div>`;
  h += catH('list', 'Duelos', 'var(--c-blue)');
  h += D.map(d => {
    const f = d.tu.mk === 'multi' ? null : DB.f[d.tu.g] || null;
    const res = !f ? `${(d.tu.legs || []).length} combates` : f.s === 'post' ? resTxt(f) : f.s === 'in' ? 'a decorrer' : hhmm(d.tu.gd);
    const a = betPL(d.tu), b = betPL(d.ko), closed = d.tu.st !== 'open' && (!d.ko || d.ko.st !== 'open');
    const cell = (x, who, k, win) => `<div class="${closed && win ? 'win' : ''}" style="--k:${k}"><div class="h">${who}</div>${x && x.st !== 'pass' ? `<b>${esc(x.lb)}</b>${x.legs ? `<div class="small muted">${x.legs.map(l => esc(l.lb)).join(' + ')}</div>` : ''}<div class="small muted">@ ${odd2(x.odd)} · ${eur(x.stake)}</div><div class="small" style="margin-top:3px">${stTag(x)}</div>` : '<b class="muted">Passou</b>'}</div>`;
    return `<div class="pn" style="padding:12px 14px"><div class="row small"><b>${esc(d.tu.src === 'seguro' ? 'Boletim seguro' : d.tu.gl)}</b><span class="muted" style="margin-left:auto">${esc(res)}</span></div>
     <div class="duel">${cell(d.tu, 'Tu', 'var(--c-blue)', a > b)}${cell(d.ko, 'Mister Ko', 'var(--c-orange)', b > a)}</div></div>`;
  }).join('');
  return h;
}
function stTag(b) {
  if (b.st === 'open') return '<span class="tg" style="--k:var(--c-blue)">em jogo</span>';
  if (b.st === 'won') return `<span class="tg" style="--k:var(--pos)">ganhou ${sEur(b.ret - b.stake)}</span>`;
  if (b.st === 'lost') return `<span class="tg" style="--k:var(--neg)">perdeu ${sEur(-b.stake)}</span>`;
  if (b.st === 'push') return '<span class="tg">devolvida</span>';
  if (b.st === 'void') return '<span class="tg">anulada</span>';
  return '<span class="tg">passou</span>';
}

/* ---------- CONTAS ---------- */
function betRow(b) {
  const legs = b.legs ? `<div class="legs">${b.legs.map(l => `${l.r === 'won' ? '<span class="pos">✓</span>' : l.r === 'lost' ? '<span class="neg">✗</span>' : '•'} ${esc(l.lb)} @ ${odd2(l.odd)} <span class="muted">(${esc(l.gl || '')}${l.res ? ' · ' + esc(l.res) : ''})</span>`).join('<br>')}</div>` : '';
  return `<div class="bet"><div class="who" style="--k:${ACC[b.acc].c}">${ic(ACC[b.acc].ic)}</div><div class="m"><div class="t">${esc(b.lb)} <span class="muted" style="font-weight:400">@ ${odd2(b.odd)}</span></div>
   <div class="g">${b.legs ? 'Boletim' : esc(b.gl)} · ${dayLbl(b.gd)} ${hhmm(b.gd)}${b.res ? ' · ' + esc(b.res) : ''}${b.auto ? ` · Ko dava ${pct(b.pk || 0)}${b.nv != null ? `, casa ${pct(b.nv)}` : ''}` : b.ev != null ? ` · valor Ko ${sPct(b.ev)}` : b.p != null && b.legs ? ` · Ko ${pct(b.p)}` : ''}</div>${legs}
   <div style="margin-top:4px">${stTag(b)}${b.acc === 'tu' && b.st === 'open' ? ` <button class="btn sm" style="min-height:26px;padding:2px 10px" onclick="askConfirm('Anular esta aposta? (se não chegaste a jogá-la na Betano). O duelo do Ko também é anulado.','Anular',&quot;voidBet('${b.id}')&quot;)">anular</button>` : ''}</div></div>
   <div class="v">${eur(b.stake)}<small>${b.st === 'open' ? 'ganho possível ' + eur(b.stake * b.odd) : ''}</small></div></div>`;
}
function viewContas() {
  const tile = k => { const s = accStats(k); return `<div class="acct ${ACCF === k ? 'on' : ''}" style="--k:${ACC[k].c}" onclick="ACCF=ACCF==='${k}'?'all':'${k}';render()">${ic(ACC[k].ic)}<div class="n">${ACC[k].n}</div><div class="v">${eur(s.bal)}</div><div class="d"><span class="${s.profit > 0 ? 'pos' : s.profit < 0 ? 'neg' : ''}">${sEur(s.profit)}</span></div></div>`; };
  let h = `<div class="accs">${tile('tu')}${tile('ko')}${tile('pi')}</div>`;
  if (ACCF === 'all') h += botMini();
  if (ACCF !== 'all') {
    const s = accStats(ACCF), n = s.w + s.l;
    h += `<div class="pn hl">${pnH(`${ic(ACC[ACCF].ic)} ${ACC[ACCF].n}`, 'toca outra vez para ver todas')}
      <div class="mosaic"><div><b>${eur(s.bal).replace(' €', '')}</b><small>saldo (€)</small></div><div><b>${n ? pct(s.w / n) : '—'}</b><small>acerto ${s.w}/${n}</small></div><div><b class="${s.roi >= 0 ? 'pos' : 'neg'}">${sPct(s.roi)}</b><small>ROI</small></div></div>
      <div class="small muted">Começou com ${eur(s.start)} · em jogo ${eur(s.open)}</div></div>`;
    if (ACCF === 'pi') h += botPanel();
  }
  h += `<div class="row w" style="margin-top:8px"><button class="btn sm" onclick="exportCSV()">${ic('download')} Exportar</button><button class="btn sm" onclick="printBets()">${ic('print')} Imprimir</button><button class="btn sm" onclick="openDeposit()">${ic('coins')} Recarregar</button></div>`;
  const accOrd = { tu: 0, ko: 1, pi: 2 }, L = BETS.filter(b => b.st !== 'pass' && (ACCF === 'all' || b.acc === ACCF)).sort((a, b) => (b.st === 'open' && a.st === 'open' ? accOrd[a.acc] - accOrd[b.acc] : 0) || b.t - a.t);
  const open = L.filter(b => b.st === 'open'), done = L.filter(b => b.st !== 'open');
  h += catH('fire', 'Em jogo', 'var(--c-orange)', `${open.length} · ${eur(open.reduce((s, b) => s + b.stake, 0))}`);
  h += open.length ? `<div class="pn open-box" style="margin-top:0">${open.map(betRow).join('')}</div>` : `<div class="pn small muted" style="margin-top:0">Nada em jogo.</div>`;
  h += catH('list', 'Histórico', 'var(--c-blue)');
  h += done.length ? `<div class="pn" style="margin-top:0">${done.slice(0, 150).map(betRow).join('')}</div>` : `<div class="pn small muted" style="margin-top:0">Ainda sem apostas fechadas.</div>`;
  return h;
}
function openDeposit() {
  openSheet('Recarregar banca', `<label class="f">Conta</label><select class="in" id="dAcc"><option value="tu">Tu</option><option value="ko">Mister Ko</option><option value="pi">Ko sozinho</option></select>
   <label class="f">Valor a juntar (€)</label><input class="in" id="dVal" inputmode="decimal" value="50">
   <div class="small muted" style="margin-top:6px">Fica registado à parte: o lucro e o ROI continuam certos.</div>
   <button class="btn fill full" style="margin-top:12px" onclick="doDeposit()">Juntar</button>`, true);
}
function doDeposit() { const v = num($('#dVal').value); if (!(v > 0)) return toast('Valor inválido'); DEPOS.push({ acc: $('#dAcc').value, v: r2(v), t: Date.now() }); LS.set('depos', DEPOS); closeSheet(); toast('Banca recarregada'); render(); }
function betsForOut() { return BETS.filter(b => b.st !== 'pass' && (ACCF === 'all' || b.acc === ACCF)).sort((a, b) => a.t - b.t); }
const ST_TXT = { open: 'em jogo', won: 'ganhou', lost: 'perdeu', push: 'devolvida', void: 'anulada' };
const betDesc = b => b.legs ? b.legs.map(l => l.lb + ' @' + odd2(l.odd)).join(' + ') : b.lb;
function dlCSV(rows, name) {
  const csv = '﻿' + rows.map(r => r.map(x => /[;"\n]/.test(String(x)) ? '"' + String(x).replace(/"/g, '""') + '"' : x).join(';')).join('\n');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}
function exportCSV() {
  const f = v => String(v == null ? '' : v).replace('.', ',');
  const rows = [['conta', 'registada', 'combate', 'data', 'mercado', 'aposta', 'linha', 'odd', 'valor', 'estado', 'retorno', 'lucro', 'prob_ko', 'valor_ko', 'resultado']];
  betsForOut().forEach(b => rows.push([ACC[b.acc].n, new Date(b.t).toLocaleString('pt-PT'), b.legs ? 'Boletim ' + b.legs.length + ' combates' : b.gl, new Date(b.gd).toLocaleString('pt-PT'), b.legs ? 'Múltipla' : mkName(b.mk), betDesc(b), f(b.line), f(b.odd), f(b.stake), ST_TXT[b.st] || b.st, b.st === 'open' ? '' : f(b.ret), b.st === 'open' ? '' : f(r2((b.ret || 0) - b.stake)), b.p != null ? f(b.p) : '', b.ev != null ? f(b.ev) : '', b.res || '']));
  dlCSV(rows, 'mister-ko-apostas-' + todayET() + '.csv'); toast('Ficheiro gerado (abre no Excel)');
}
function printBets() {
  const L = betsForOut(); const accs = ACCF === 'all' ? ['tu', 'ko', 'pi'] : [ACCF];
  $('#print').innerHTML = `<h2>Mister Ko · MMA — ${ACCF === 'all' ? 'todas as contas' : ACC[ACCF].n}</h2><p>${new Date().toLocaleString('pt-PT')}</p>
   <p>${accs.map(k => { const s = accStats(k); return `<b>${ACC[k].n}</b>: saldo ${eur(s.bal)} · em jogo ${eur(s.open)} · lucro ${sEur(s.profit)} · ROI ${sPct(s.roi)}`; }).join('<br>')}</p>
   <table><tr><th>Conta</th><th>Combate</th><th>Aposta</th><th>Odd</th><th>Valor</th><th>Estado</th><th>Lucro</th></tr>${L.map(b => `<tr><td>${ACC[b.acc].n}</td><td>${esc(b.legs ? 'Boletim' : b.gl)}<br>${dayLbl(b.gd)}</td><td>${esc(betDesc(b))}</td><td>${odd2(b.odd)}</td><td>${eur(b.stake)}</td><td>${ST_TXT[b.st] || b.st}</td><td>${b.st === 'open' ? '' : sEur((b.ret || 0) - b.stake)}</td></tr>`).join('')}</table>`;
  window.print();
}

/* ---------- MAIS ---------- */
function openHelp() {
  const q = (t, x) => `<div class="pn"><div class="pn-h" style="font-size:1.05rem">${t}</div><div class="small" style="line-height:1.5">${x}</div></div>`;
  openSheet('O que quer dizer', q('Vencedor', 'Quem ganha o combate, seja como for. Em caso de empate (raro, ~0,7%) a aposta é devolvida; se não houver resultado («no contest»), é anulada.') +
    q('Método de vitória', '«Gane por KO/TKO» só ganha se o Gane ganhar por KO, TKO (o árbitro pára) ou desqualificação. «Por finalização» = o adversário desiste (estrangulamento, chave…). «Por decisão» = os juízes decidem no fim.') +
    q('Total de rondas 1,5', '«Mais de 1,5» ganha se o combate passar dos <b>2m30s da 2.ª ronda</b>. «Menos de 1,5» ganha se acabar antes. Uma decisão conta como o combate inteiro (3 ou 5 rondas).') +
    q('Vai até ao fim?', '«Sim» ganha se os juízes decidirem (o combate chega ao fim das rondas). «Não» ganha se alguém acabar o combate antes.') +
    q('A curva de «Quando acaba»', 'É a probabilidade de o combate ainda estar a decorrer em cada minuto. Desce mais depressa na 1.ª ronda (é quando acontecem mais KOs) e o que sobra no fim é a probabilidade de decisão.') +
    q('Valor', 'O Ko calcula a probabilidade e a <b>odd justa</b> (1 ÷ probabilidade). Se a casa paga mais, há <b>valor</b>. Só aparece «Aposta do Ko» quando o valor passa dos ' + pct(CFG.evMin) + '.'));
}
function viewMais() {
  const T = [['trophy', 'Ranking do Ko', 'openRank()'], ['chip', 'Como pensa o Ko', 'openHow()'], ['info', 'O que quer dizer', 'openHelp()'], ['gear', 'Definições', 'openCfg()'], ['save', 'Cópia de segurança', 'openBackup()']];
  if (!isStandalone()) T.push(['phone', 'Instalar app', 'openInstall()']);
  const ST = statsAll();
  return `<div class="pn hl" style="cursor:pointer;margin-top:14px" onclick="openStats()">${pnH(`${ic('chart')} Estatísticas do Ko`, 'tocar para abrir')}
    ${ST.n >= 10 ? `<div class="mosaic"><div><b>${pct(ST.win / ST.n)}</b><small>vencedor (${ST.n})</small></div><div><b>${ST.mN ? pct(ST.mW / ST.mN) : '—'}</b><small>método</small></div><div><b class="${ST.bu > 0 ? 'pos' : ST.bu < 0 ? 'neg' : ''}">${ST.bn ? unitsTxt(ST.bu) : '—'}</b><small>apostas</small></div></div>` : `<div class="small muted">${ST.n ? `Ainda poucos combates (${ST.n}) para tirar conclusões.` : 'Ainda sem combates previstos e acabados.'} Toca para ver o teste às cegas.</div>`}</div>
   <div class="tiles">${T.map(([i, l, f]) => `<div class="tile" onclick="${f}">${ic(i)}<b>${l}</b></div>`).join('')}</div>
   <div class="pn small muted" style="text-align:center">Mister Ko v${APP_VER} · dados: ufcstats.com (via Greco1899/scrape_ufc_stats) até ${SEED.cut.split('-').reverse().join('/')} + ESPN<br>Simulação: sem dinheiro real e sem ligação à Betano. +18 · Joga com responsabilidade.<br>© 2026 Júlio Melo</div>`;
}
function statsAll() {
  const R = { n: 0, win: 0, mN: 0, mW: 0, dN: 0, dW: 0, bn: 0, bw: 0, bu: 0, mk: {}, conf: {}, rows: [] };
  Object.values(DB.f).filter(f => f.s === 'post' && PREDS[f.id]).forEach(f => {
    const v = verdict(f); if (!v || v.win == null) return;
    R.n++; if (v.win) R.win++;
    if (v.met != null) { R.mN++; if (v.met) R.mW++; }
    if (v.dist != null) { R.dN++; if (v.dist) R.dW++; }
    const pc = v.conf, b = pc < 0.55 ? '50-55' : pc < 0.65 ? '55-65' : pc < 0.75 ? '65-75' : pc < 0.85 ? '75-85' : '85+';
    const C = R.conf[b] = R.conf[b] || { n: 0, w: 0, p: 0 }; C.n++; C.p += pc; if (v.win) C.w++;
    if (v.pk && (v.pkr === 'won' || v.pkr === 'lost')) { R.bn++; if (v.pkr === 'won') R.bw++; R.bu += v.pku; const K = R.mk[v.pk.mk] = R.mk[v.pk.mk] || { n: 0, w: 0, u: 0 }; K.n++; if (v.pkr === 'won') K.w++; K.u += v.pku; }
    R.rows.push({ f, v });
  });
  return R;
}
function wilson(k, n) { if (!n) return [0, 1]; const z = 1.96, p = k / n, d = 1 + z * z / n, c = (p + z * z / (2 * n)) / d, m = z * Math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d; return [c - m, c + m]; }
function openStats() {
  const R = statsAll(), ss = safeStats(), T = SEED.test;
  const pm = (k, n) => { const [a, b] = wilson(k, n); return `${pct(k / n)} <small>(${Math.round(a * 100)}–${Math.round(b * 100)}%)</small>`; };
  let h = catH('target', 'Teste às cegas (antes da app)', 'var(--c-red)', `2022-26 · ${T.win.n.toLocaleString('pt-PT')} combates`) +
    `<table class="tbl"><tr><th style="text-align:left">Erro médio (menos é melhor)</th><th>Ko</th><th>Casas</th><th>Ko + casa</th><th>Moeda</th></tr>
     <tr><td style="text-align:left">Quem ganha</td><td>${gl(T.win.ko.toFixed(3))}</td><td><b>${gl(T.win.mk.toFixed(3))}</b></td><td>—</td><td>0,693</td></tr>
     <tr><td style="text-align:left">Como acaba (6)</td><td>${gl(T.meth.ko.toFixed(3))}</td><td>${gl(T.meth.mk.toFixed(3))}</td><td><b>${gl((T.meth.bl || T.meth.mk).toFixed(3))}</b></td><td>1,792</td></tr></table>
    <div class="small muted" style="margin-top:6px">Sem ver o futuro, o Ko sozinho fica atrás das odds de fecho, como quase todos os modelos públicos de MMA (as casas sabem de lesões, cortes de peso e campos de treino). Por isso a app junta as odds com peso alto. No vencedor, a app usa as odds (com uma pequena correção: as casas pagam os favoritos um pouco abaixo do justo). Onde o Ko ajuda: no <b>método</b>, juntar 15% do Ko às odds da casa erra menos do que a casa sozinha (confirmado em 2019-21 e 2022-26), e dá preço a todas as rondas, mesmo quando a casa não as mostra.</div>`;
  if (!R.n && !ss && !botStats().n) return openSheet('Estatísticas', h + `<div class="pn empty"><div class="face">${koFace('ok')}</div>As estatísticas da app enchem-se sozinhas: o Ko guarda a previsão de cada combate antes de começar. Toca em ↻ antes de cada cartaz.</div>`);
  const sl = Object.values(SLIPS).map(slipResult).filter(x => x && x.st !== 'open'), slW = sl.filter(x => x.st === 'won').length;
  h += catH('check', 'Na app', 'var(--c-green)', R.n + ' combates') +
    (R.n ? attr('Vencedor certo', Math.round(R.win / R.n * 100), 'var(--c-green)', pm(R.win, R.n), 100) +
      (R.mN ? attr('Método mais provável certo', Math.round(R.mW / R.mN * 100), 'var(--c-blue)', pm(R.mW, R.mN), 100) : '') +
      (R.dN ? attr('«Vai até ao fim?» certo', Math.round(R.dW / R.dN * 100), 'var(--c-yellow)', pm(R.dW, R.dN), 100) : '') : '') +
    `<div class="why"><span>Peso que o Ko dá às odds (aprendido)</span><b>${pct(calibW().w)} · ${calibW().n} combates</b></div>`;
  h += catH('gem', 'Apostas do Ko (valor)', 'var(--c-orange)', R.bn ? `${R.bw}/${R.bn} · <b class="${R.bu >= 0 ? 'pos' : 'neg'}">${unitsTxt(R.bu)}</b>` : 'ainda nenhuma') +
    Object.entries(R.mk).map(([k, K]) => `<div class="why"><span>${mkName(k)}</span><b>${K.w}/${K.n} · <span class="${K.u >= 0 ? 'pos' : 'neg'}">${unitsTxt(K.u)}</span></b></div>`).join('');
  h += catH('shield', 'Seguro', 'var(--c-blue)') +
    (ss ? attr('Seleções seguras', Math.round(ss.w / ss.n * 100), 'var(--c-blue)', `${ss.w}/${ss.n} · prometia ${pct(ss.p)}`, 100) : '') +
    (sl.length ? attr('Boletins seguros inteiros', Math.round(slW / sl.length * 100), 'var(--c-blue)', `${slW}/${sl.length}`, 100) : '') +
    (!ss && !sl.length ? '<div class="small muted">Ainda sem resultados.</div>' : '');
  if (R.n) h += catH('chip', 'Quando o Ko diz X%, acontece…', 'var(--c-purple)') + `<table class="tbl"><tr><th>Confiança</th><th>Combates</th><th>Ko dizia</th><th>Aconteceu</th></tr>` +
    ['50-55', '55-65', '65-75', '75-85', '85+'].filter(b => R.conf[b]).map(b => { const C = R.conf[b]; return `<tr><td>${b}%</td><td>${C.n}</td><td>${pct(C.p / C.n)}</td><td class="${Math.abs(C.w / C.n - C.p / C.n) < 0.08 ? 'pos' : 'neg'}">${pct(C.w / C.n)}</td></tr>`; }).join('') + `</table>`;
  { const B = botStats(); h += catH('robot', 'Ko sozinho (bot)', 'var(--c-purple)', B.n ? `${B.n} apostas · ${B.open} em jogo` : 'ainda sem apostas') + (B.w + B.l ? botStatsBlock(B) : '<div class="small muted">O bot aposta sozinho quando atualizas antes de um cartaz. As estatísticas aparecem depois dos primeiros resultados.</div>'); }
  h += catH('coins', 'Contas', 'var(--c-yellow)') + ['tu', 'ko', 'pi'].map(k => { const s = accStats(k); return `<div class="why"><span>${ACC[k].n}</span><b class="${s.profit >= 0 ? 'pos' : 'neg'}">${sEur(s.profit)} · ROI ${sPct(s.roi)} · ${s.w}/${s.w + s.l}</b></div>`; }).join('');
  h += `<button class="btn go full" style="margin-top:12px" onclick="exportPreds()">${ic('download')} Exportar previsões (Excel)</button>
   <div class="pn small muted">Os números entre parênteses são a margem de sorte (95%). Tudo foi guardado antes de cada combate começar.</div>`;
  openSheet('Estatísticas', h);
}
function exportPreds() {
  const f = v => String(v == null ? '' : v).replace('.', ',');
  const rows = [['data', 'lutador_a', 'lutador_b', 'resultado', 'ko_prob_a', 'casa_prob_a', 'ko_decisao', 'vencedor_certo', 'metodo_certo', 'aposta_ko', 'odd', 'resultado_aposta', 'unidades']];
  statsAll().rows.forEach(({ f: x, v }) => rows.push([x.d.slice(0, 10), x.A.n, x.B.n, resTxt(x), f(v.p.pa), f(v.p.nv), f(v.p.pdec), v.win ? 1 : 0, v.met == null ? '' : v.met ? 1 : 0, v.pk ? v.pk.lb : '', v.pk ? f(v.pk.odd) : '', v.pk ? v.pkr : '', v.pk ? f(r2(v.pku)) : '']));
  dlCSV(rows, 'mister-ko-previsoes-' + todayET() + '.csv');
}
let RWC = 'Lightweight';
function openRank() {
  const M = getModel(), lim = new Date(Date.now() - 2 * 365.25 * 864e5).toISOString().slice(0, 10);
  const L = Object.values(M.F).filter(x => x.l && x.l >= lim && (x.wc || '') === RWC && x.k >= 3).sort((a, b) => b.r - a.r).slice(0, 15);
  const cls = WCS.slice().reverse().concat(['W Bantamweight', 'W Flyweight', 'W Strawweight']);
  openSheet('Ranking do Ko', `<div class="dates" style="margin-top:4px">${cls.map(w => `<button class="${RWC === w ? 'on' : ''}" onclick="RWC='${w}';openRank()"><b style="font-size:.8rem">${esc(wcPT(w).replace(' (fem.)', ''))}</b><small>${/^W /.test(w) ? 'feminino' : 'masculino'}</small></button>`).join('')}</div>
   <table class="tbl"><tr><th>#</th><th style="text-align:left">Lutador</th><th>UFC</th><th>Últ. 5</th><th>OVR</th></tr>${L.map((x, i) => { const c = fighterCard(M, { k: fkey(x.n), n: x.n }); return `<tr><td>${i + 1}</td><td style="text-align:left"><b>${esc(x.n)}</b></td><td>${x.rec.join('-')}</td><td><span class="form">${x.f5.slice(-5).map(r => `<i class="${r[2] === 'W' ? 'w' : r[2] === 'L' ? 'l' : 'o'}">${r[2] === 'W' ? 'V' : r[2] === 'L' ? 'D' : 'E'}</i>`).join('')}</span></td><td><b>${c.ovr}</b></td></tr>`; }).join('') || '<tr><td colspan="5" class="muted">Sem lutadores ativos.</td></tr>'}</table>
   <div class="small muted" style="margin-top:6px">Ranking feito pela força do Ko (quem ganhou a quem, e como), só com quem lutou nos últimos 2 anos e tem 3+ combates no UFC. Não é o ranking oficial do UFC.</div>`);
}
function openHow() {
  const P = SEED.par, T = SEED.test;
  openSheet('Como pensa o Ko', `<div class="pn" style="line-height:1.55">
   ${catH('chart', '1. Força de cada lutador', 'var(--c-red)')}<p>Um rating que sobe quando ganha e desce quando perde, mais ainda contra quem é forte. Quem tem poucos combates mexe muito; quem tem muitos, pouco. Ganhar por KO ou finalização conta ${Math.round(P.fin * 100)}% mais do que por decisão.</p>
   ${catH('user', '2. Corpo e idade', 'var(--c-orange)')}<p>Depois dos ${P.age0} anos, cada ano a mais pesa. Cada polegada de envergadura a mais ajuda um pouco. Estrear no UFC custa: os estreantes perdem mais do que ganham.</p>
   ${catH('glove', '3. Como acaba: riscos concorrentes', 'var(--c-red)')}<p>Cada lutador tem um <b>ritmo de KO</b> e um <b>ritmo de finalização</b> por minuto = base da categoria (os pesados acabam muito mais combates do que as moscas) × o ataque dele × a fragilidade do adversário. Os quatro ritmos «correm» ao mesmo tempo: o primeiro a acontecer acaba o combate. Se nenhum acontecer em ${'15'} (ou 25) minutos, vai à <b>decisão</b>.</p>
   ${catH('clock', '4. Quando acaba', 'var(--c-purple)')}<p>O risco não é igual em todas as rondas: medido em 6.800 combates, a 2.ª ronda tem ${pct(SEED.rp['3'][1])} do risco da 1.ª e a 3.ª só ${pct(SEED.rp['3'][2])}. Daqui sai a curva, o «total de rondas» e o «vai até ao fim?».</p>
   ${catH('coins', '5. Mercado', 'var(--c-yellow)')}<p>Junta as odds da casa (ESPN) com peso alto — começa em ${pct(CFG.mktW)} no vencedor e ${pct(CFG.mktM)} no método — e vai aprendendo quanto confiar nelas (peso atual no vencedor: <b>${pct(calibW().w)}</b>).</p>
   ${catH('target', '6. O que dizem os testes às cegas', 'var(--c-green)')}<p>Afinado em 2013-18, escolhido com 2019-21 e testado sem ver o futuro em 2022-26 (${T.win.n.toLocaleString('pt-PT')} combates). O Ko sozinho acerta ~61% dos vencedores; as odds de fecho ~67%. <b>Honestidade:</b> no MMA as casas sabem coisas que os números não sabem (lesões, cortes de peso). O Ko brilha a pôr preço no <b>método</b> e nas <b>rondas</b>, e a dizer-te quando a Betano paga demais.</p>
   <p class="small muted">Contas: <b>Tu</b> apostas e o Ko dá opinião; <b>Mister Ko</b> responde a cada aposta tua (duelo); <b>Ko sozinho</b> é um bot: aposta ${eur(CFG.piStake)} em cada combate no lutador que a cabeça dele acha que ganha, sem ninguém lhe mexer.</p></div>`);
}
function botCurve(c) {
  if (c.length < 2) return '';
  const W = 320, H = 90, mn = Math.min(0, ...c), mx = Math.max(0, ...c), sp = mx - mn || 1, x = i => 8 + i / (c.length - 1) * (W - 16), y = v => 8 + (mx - v) / sp * (H - 16);
  const pts = c.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' '), last = c[c.length - 1];
  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;display:block;margin:6px 0"><line x1="8" x2="${W - 8}" y1="${y(0)}" y2="${y(0)}" stroke="rgba(0,0,0,.18)" stroke-dasharray="3 3"/><polyline points="${pts}" fill="none" stroke="${last >= 0 ? 'var(--pos)' : 'var(--c-red)'}" stroke-width="2.5" stroke-linejoin="round"/><circle cx="${x(c.length - 1)}" cy="${y(last)}" r="3.5" fill="${last >= 0 ? 'var(--pos)' : 'var(--c-red)'}"/></svg><div class="small muted">Lucro acumulado do bot, aposta a aposta (linha tracejada = zero).</div>`;
}
function botStatsBlock(S, noTop) {
  const T = SEED.test.bot, row = (lbl, txt, cls) => `<div class="why"><span>${lbl}</span><b class="${cls || ''}">${txt}</b></div>`;
  let h = (noTop ? '' : `<div class="mosaic"><div><b>${S.hit == null ? '—' : pct(S.hit)}</b><small>acerto ${S.w}-${S.l}</small></div><div><b class="${S.roi == null ? '' : S.roi >= 0 ? 'pos' : 'neg'}">${S.roi == null ? '—' : sPct(S.roi)}</b><small>ROI</small></div><div><b class="${S.pl >= 0 ? 'pos' : 'neg'}">${sEur(S.pl)}</b><small>lucro</small></div></div>`) + botCurve(S.curve);
  h += row('Com o favorito da casa', S.favN ? `${S.favW}/${S.favN} · ${sEur(S.favPl)}` : '—', S.favPl > 0 ? 'pos' : S.favPl < 0 ? 'neg' : '') +
    row('Contra a casa (azarão)', S.dogN ? `${S.dogW}/${S.dogN} · ${sEur(S.dogPl)}` : '—', S.dogPl > 0 ? 'pos' : S.dogPl < 0 ? 'neg' : '') +
    row('Quando tem 70%+ de certeza', S.confN ? `${S.confW}/${S.confN} (${pct(S.confW / S.confN)})` : '—') +
    row('Teste às cegas 2022-26', `${pct(T.acerto)} · ${sPct(T.roi)} por aposta`, 'muted');
  if (S.evs.length) h += catH('oct', 'Por cartaz', 'var(--c-red)') + `<table class="tbl"><tr><th style="text-align:left">Cartaz</th><th>V-D</th><th>Lucro</th></tr>${S.evs.slice(0, 12).map(x => `<tr><td style="text-align:left">${esc(evShort({ n: x.n }))} <span class="muted small">${new Date(x.d).toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit' })}</span></td><td>${x.w}-${x.l}</td><td class="${x.pl >= 0 ? 'pos' : 'neg'}">${sEur(x.pl)}</td></tr>`).join('')}</table>`;
  const wcs = Object.entries(S.byWc).filter(([, o]) => o.n >= 3).sort((a, b) => b[1].n - a[1].n);
  if (wcs.length) h += catH('glove', 'Por categoria', 'var(--c-red)') + `<table class="tbl"><tr><th style="text-align:left">Categoria</th><th>V/N</th><th>Lucro</th></tr>${wcs.map(([k, o]) => `<tr><td style="text-align:left">${esc(wcPT(k))}</td><td>${o.w}/${o.n}</td><td class="${o.pl >= 0 ? 'pos' : 'neg'}">${sEur(o.pl)}</td></tr>`).join('')}</table>`;
  return h;
}
function botHome() {
  const S = botStats();
  if (!CFG.piOn && !S.n) return '';
  return `<div class="pn" style="cursor:pointer" onclick="ACCF='pi';go('contas')">${pnH(`${ic('robot')} Ko sozinho · bot automático`, CFG.piOn ? '<span class="pos">ligado</span>' : '<span class="neg">desligado</span>')}
    <div class="opinion" style="margin:0 0 8px"><div class="face">${koFace(S.roi == null ? 'ok' : S.roi >= 0 ? 'win' : 'sad')}</div><div class="small">${S.open ? `Tenho <b>${S.open} aposta${S.open === 1 ? '' : 's'}</b> em jogo (${eur(S.openL.reduce((s, b) => s + b.stake, 0))}): ${S.openL.slice(0, 3).map(b => esc(b.lb.replace(' ganha', ''))).join(', ')}${S.open > 3 ? '…' : ''}.` : 'Aposto sozinho em todos os combates do cartaz, quando atualizas.'}</div></div>
    ${S.w + S.l ? `<div class="mosaic"><div><b>${pct(S.hit)}</b><small>acerto ${S.w}-${S.l}</small></div><div><b class="${S.roi >= 0 ? 'pos' : 'neg'}">${sPct(S.roi)}</b><small>ROI</small></div><div><b class="${S.pl >= 0 ? 'pos' : 'neg'}">${sEur(S.pl)}</b><small>lucro</small></div></div>` : ''}
    <div class="small muted" style="margin-top:4px">Toca para ver tudo o que o bot fez.</div></div>`;
}
function botMini() {
  const S = botStats();
  return `<div class="pn" style="margin-top:10px;cursor:pointer" onclick="ACCF='pi';render()"><div class="opinion" style="margin:0"><div class="face">${koFace(S.roi == null ? 'ok' : S.roi >= 0 ? 'win' : 'sad')}</div><div><b>Ko sozinho</b> · ${CFG.piOn ? 'ligado' : '<span class="neg">desligado</span>'}<div class="small muted">${S.n ? `${S.n} apostas sozinho · ${S.w}-${S.l}${S.p ? '-' + S.p : ''} · ${S.open} em jogo${S.roi != null ? ' · ROI ' + sPct(S.roi) : ''}` : 'Aposta sozinho em todos os combates do cartaz quando atualizas. Toca para ver.'}</div></div></div></div>`;
}
function botPanel() {
  const S = botStats(), T = SEED.test.bot, nf = S.w + S.l;
  const row = (lbl, v, ref, txt) => `<div class="why"><span>${lbl}</span><b class="${v == null ? 'muted' : v >= ref ? 'pos' : 'neg'}">${txt}</b></div>`;
  const verdict = nf < 50 ? `Ainda é cedo: com ${nf} apostas fechadas manda a sorte. Começa a ler a partir de ~100 (uns 8 cartazes); com confiança, a partir de ~300.`
    : S.roi >= 0 ? 'Está a dar lucro: melhor do que no teste às cegas. Continua a observar antes de acreditar — no MMA as surpresas vêm aos molhos.'
    : S.roi > -0.06 ? 'Perto do esperado: acerta muito, mas os favoritos pagam pouco e a margem da casa come o resto.'
    : 'Abaixo do teste às cegas: as casas estão a saber mais do que ele. É por isso que a app mistura as odds com peso alto.';
  return `<div class="pn" style="margin-top:10px">${pnH(`${ic('robot')} Como se porta sozinho`, CFG.piOn ? 'ligado' : 'desligado')}
    <div class="opinion"><div class="face">${koFace('ok')}</div><div class="small">Em cada combate do cartaz aposto <b>${eur(CFG.piStake)}</b> no lutador que a <b>minha cabeça</b> acha que ganha (sem copiar as odds), à odd da ESPN do momento. Ninguém me mexe: é a experiência honesta.</div></div>
    ${botStatsBlock(S, true)}
    <div class="small" style="margin-top:8px">${verdict}</div>
    <div class="small muted" style="margin-top:8px">Eu só aposto quando atualizas a app: abre-a pelo menos uma vez antes de cada cartaz (normalmente ao sábado).</div>
    ${!CFG.piOn ? `<button class="btn fill full" style="margin-top:12px" onclick="CFG.piOn=true;LS.set('cfg',CFG);pilotRun();render()">Ligar o Ko sozinho</button>` : ''}</div>`;
}
function openCfg() {
  const inp = (id, lbl, v, hint) => `<label class="f">${lbl}</label><input class="in" id="${id}" inputmode="decimal" value="${String(v).replace('.', ',')}">${hint ? `<div class="small muted">${hint}</div>` : ''}`;
  openSheet('Definições', `<div class="row">${['tu', 'ko', 'pi'].map(k => `<div style="flex:1">${inp('c_' + k, 'Banca ' + ACC[k].n.replace('Mister ', ''), CFG.bank[k])}</div>`).join('')}</div>
   ${inp('c_min', 'Aposta mínima da tua casa (€)', CFG.min)}
   ${inp('c_pis', 'Valor de cada aposta do Ko sozinho (€)', CFG.piStake)}
   ${inp('c_ev', 'Valor mínimo para uma «Aposta do Ko» (%)', Math.round(CFG.evMin * 100), 'Mais alto = menos apostas, mais exigentes.')}
   ${inp('c_w', 'Peso inicial das odds no vencedor (%)', Math.round(CFG.mktW * 100), 'Ponto de partida: o Ko ajusta-o sozinho com os resultados. No teste às cegas, quanto mais peso nas odds, melhor.')}
   ${inp('c_m', 'Peso das odds de método (%)', Math.round(CFG.mktM * 100), 'Quando a ESPN traz odds de KO/finalização/decisão.')}
   <label class="f">Ko sozinho (bot automático)</label><div class="seg"><button id="c_pon" class="${CFG.piOn ? 'on' : ''}" onclick="this.classList.add('on');$('#c_poff').classList.remove('on')">Ligado</button><button id="c_poff" class="${!CFG.piOn ? 'on' : ''}" onclick="this.classList.add('on');$('#c_pon').classList.remove('on')">Desligado</button></div>
   <button class="btn fill full" style="margin-top:14px" onclick="saveCfg()">Guardar</button>
   <button class="btn go full" style="margin-top:10px" onclick="openNet()">${ic('pulse')} Testar ligação à ESPN</button>
   <button class="btn red full" style="margin-top:10px" onclick="askConfirm('Apagar TODAS as apostas e recomeçar as três contas? Os combates guardados ficam.','Apagar apostas','wipeBets()')">Recomeçar as contas</button>`);
}
function saveCfg() {
  const v = id => num($('#' + id).value);
  ['tu', 'ko', 'pi'].forEach(k => { const x = v('c_' + k); if (x >= 0) CFG.bank[k] = r2(x); });
  const mn = v('c_min'); if (mn > 0) CFG.min = r2(mn);
  const ps = v('c_pis'); if (ps > 0) CFG.piStake = r2(ps);
  const ev = v('c_ev'); if (ev != null) CFG.evMin = clamp(ev, 0, 50) / 100;
  const w = v('c_w'); if (w != null) CFG.mktW = clamp(w, 0, 100) / 100;
  const m = v('c_m'); if (m != null) CFG.mktM = clamp(m, 0, 100) / 100;
  CFG.piOn = $('#c_pon').classList.contains('on');
  LS.set('cfg', CFG); PC.clear(); CALW = null; closeSheet(); toast('Guardado'); render();
}
function wipeBets() { BETS = []; DEPOS = []; saveBets(); LS.set('depos', DEPOS); closeSheet(); toast('Contas a zero'); render(); }
function openBackup() {
  openSheet('Cópia de segurança', `<p class="small">Guarda as apostas, contas e definições num ficheiro. Serve para mudar de telemóvel ou para não perder nada.</p>
   <button class="btn fill full" onclick="exportAll()">${ic('download')} Exportar tudo</button>
   <label class="f" style="margin-top:14px">Importar um ficheiro</label><input type="file" accept=".json,application/json" class="in" onchange="importAll(this)">
   <div class="small muted" style="margin-top:6px">Importar substitui o que está neste telemóvel.</div>`, true);
}
function exportAll() {
  const data = {}; ['bets', 'preds', 'depos', 'cfg', 'safe', 'slips', 'bo', 'db'].forEach(k => data[k] = LS.get(k, null));
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify({ app: 'mister-ko', ver: APP_VER, t: Date.now(), data })], { type: 'application/json' }));
  a.download = 'mister-ko-copia-' + todayET() + '.json'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}
function importAll(inp) {
  const f = inp.files && inp.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => { try { const j = JSON.parse(r.result); if (j.app !== 'mister-ko' || !j.data) throw new Error('não é uma cópia do Mister Ko'); Object.entries(j.data).forEach(([k, v]) => { if (v != null) LS.set(k, v); }); toast('Importado'); setTimeout(() => location.reload(), 700); } catch (e) { toast(esc(e.message)); } };
  r.readAsText(f);
}
function openNet() { openSheet('Testar ligação', `<p class="small">Testa cada caminho até à ESPN e guarda o mais rápido.</p><button class="btn fill full" onclick="netTest(this)">Testar agora</button><div id="netBox" style="margin-top:10px"></div>`, true); }
async function netTest(btn) {
  btn.disabled = true; btn.textContent = 'A testar…';
  const url = `${ESPN}/scoreboard`; const rows = []; let best = null;
  for (let i = 0; i < BRIDGES.length; i++) {
    const t0 = Date.now();
    try { const ctrl = new AbortController(); const tm = setTimeout(() => ctrl.abort(), 12000); const r = await fetch(BRIDGES[i].f(url), { signal: ctrl.signal, cache: 'no-store' }); clearTimeout(tm); const j = await r.json(); const ms = Date.now() - t0; rows.push(`<span class="pos">✓</span> ${BRIDGES[i].n}: ${(j.events || []).length} cartaz(es) (${ms} ms)`); if (best == null || ms < best.ms) best = { i, ms }; }
    catch (e) { rows.push(`<span class="neg">✗</span> ${BRIDGES[i].n}: ${esc(e.name === 'AbortError' ? 'demorou demais' : e.message)}`); }
  }
  if (best) LS.set('bridge', best.i);
  $('#netBox').innerHTML = `<div class="pn small">${rows.join('<br>')}${best ? `<br><b>A usar: ${BRIDGES[best.i].n}</b>` : '<br><b class="neg">Nenhum caminho funcionou. Tens internet?</b>'}</div>`;
  btn.disabled = false; btn.textContent = 'Testar outra vez';
}

/* ---------- instalar como app ---------- */
let DEFER_INSTALL = null;
const isStandalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); DEFER_INSTALL = e; if (VIEW === 'inicio' || VIEW === 'mais') render(); });
window.addEventListener('appinstalled', () => { DEFER_INSTALL = null; LS.set('instHide', 1); toast('Mister Ko instalado! Já está no teu ecrã.'); render(); });
function installBanner() {
  if (isStandalone() || LS.get('instHide', 0)) return '';
  return `<div class="pn inst"><span style="color:var(--blue)">${ic('phone')}</span><div class="t"><b>Instala o Mister Ko</b><small>Fica no ecrã do telemóvel, como uma app.</small></div><button class="btn fill sm" onclick="doInstall()">Instalar</button><button class="x" onclick="LS.set('instHide',1);render()" aria-label="Fechar">${ic('x')}</button></div>`;
}
const INSTALL_HELP = () => isIOS()
  ? '<p><b>iPhone:</b> abre no <b>Safari</b>, toca em <b>Partilhar</b> (□↑) e escolhe <b>«Adicionar ao ecrã principal»</b>.</p>'
  : '<p><b>Android (Chrome):</b> toca nos <b>⋮</b> em cima à direita e escolhe <b>«Instalar app»</b> ou <b>«Adicionar ao ecrã principal»</b>.</p>';
async function doInstall() {
  if (DEFER_INSTALL) { DEFER_INSTALL.prompt(); try { const r = await DEFER_INSTALL.userChoice; if (r && r.outcome === 'accepted') LS.set('instHide', 1); } catch (e) {} DEFER_INSTALL = null; render(); return; }
  openInstall();
}
function openInstall() {
  openSheet('Instalar como app', isStandalone() ? '<div class="pn">Já estás a usar o Mister Ko como app.</div>' :
    `<div class="pn"><div class="row" style="gap:12px"><div style="width:64px;height:64px;flex:0 0 64px">${koFace('win')}</div><div>Fica com o ícone do Ko no ecrã, abre em ecrã inteiro e funciona mesmo sem internet (só o ↻ precisa de rede).</div></div></div>
     ${DEFER_INSTALL ? `<button class="btn fill full" onclick="doInstall()">${ic('phone')} Instalar agora</button>` : ''}
     <div class="pn">${INSTALL_HELP()}</div>`, true);
}

/* ---------- arranque ---------- */
$('#topFace').innerHTML = koFace('ok');
$('#btnRefresh').innerHTML = ic('refresh');
document.querySelectorAll('[data-ic]').forEach(el => { el.outerHTML = ic(el.dataset.ic); });
window.addEventListener('hashchange', () => { const v = location.hash.slice(1); if (VIEWS.includes(v) && v !== VIEW) { VIEW = v; render(); } });
render();
function loadSeed() {
  fetch('seed.json').then(r => r.json()).then(j => { SEED = j; MODEL = null; settleAll(); render(); })
    .catch(() => { $('#view').innerHTML = `<div class="pn empty" style="margin-top:40px"><div class="face">${koFace('sad')}</div>Não consegui abrir o arquivo do Ko.<br><button class="btn fill" style="margin-top:12px" onclick="loadSeed()">${ic('refresh')} Tentar outra vez</button></div>`; });
}
loadSeed();
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
