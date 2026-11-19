'use strict';
/* =====================================================================
   MISTER KO · MMA (UFC)  —  análise e duelo de apostas, só MMA.
   Um ficheiro, cinco ecrãs: Início · Combates · Duelo · Contas · Mais.
   Dados: arquivo do Ko (seed.json: todos os combates do UFC desde 1994, via
   ufcstats.com / Greco1899) + ESPN (cartazes, resultados e odds).
   Só vai à internet quando carregas em ↻. Tudo fica no telemóvel («ko_…»).
   ===================================================================== */
const APP_VER = '1.2.1';

/* ---------- utilitários ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const r2 = x => Math.round(x * 100) / 100;
const r3 = x => Math.round(x * 1000) / 1000;
const LS = {
  get(k, d) { try { const v = localStorage.getItem('ko_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('ko_' + k, JSON.stringify(v)); return true; } catch (e) { toast('⚠️ A memória do telemóvel está cheia'); return false; } }
};
const eur = v => (Number(v) || 0).toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
const sEur = v => (v > 0 ? '+' : v < 0 ? '−' : '') + eur(Math.abs(v));
const odd2 = v => v ? Number(v).toFixed(2).replace('.', ',') : '—';
const pct = v => Math.round(v * 100) + '%';
const sPct = v => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(Math.round(v * 100)) + '%';
const num = x => { const v = parseFloat(String(x == null ? '' : x).replace(',', '.').replace(/[^\d.+-]/g, '')); return isFinite(v) ? v : null; };
const gl = n => String(n).replace('.', ',');
const sig = x => 1 / (1 + Math.exp(-x));
const logit = p => { p = clamp(p, 1e-4, 1 - 1e-4); return Math.log(p / (1 - p)); };
function toast(msg, ms) { const t = $('#toast'); if (!t) return; t.innerHTML = msg; t.classList.add('on'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('on'), ms || 2600); }
/* odds americanas (−150, +130) → decimais (1,67 / 2,30) */
function american(x) {
  if (x == null || x === '') return null;
  if (typeof x === 'object') return american(x.american != null ? x.american : x.value != null ? x.value : x.odds != null ? x.odds : x.decimal);
  const s = String(x).trim();
  if (/^even$/i.test(s) || /^evs?$/i.test(s)) return 2;
  const v = Number(s.replace('+', ''));
  if (!isFinite(v) || v === 0) return null;
  if (Math.abs(v) >= 100) return r2(v > 0 ? 1 + v / 100 : 1 + 100 / Math.abs(v));
  return v > 1 && v < 60 ? r2(v) : null;
}
/* ---------- datas ---------- */
const fmtET = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' });
const etYmd = d => fmtET.format(d).replace(/-/g, '');
const ymdAdd = (s, n) => { const d = new Date(Date.UTC(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8) + n)); return d.toISOString().slice(0, 10).replace(/-/g, ''); };
const hhmm = iso => new Date(iso).toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
const dayLbl = iso => new Date(iso).toLocaleDateString('pt-PT', { weekday: 'short', day: '2-digit', month: '2-digit' }).replace('.', '');
const todayET = () => etYmd(new Date());
const yearsBetween = (a, b) => (new Date(a) - new Date(b)) / (365.25 * 864e5);
/* nomes: «Ciryl Gane» → chave «cirylgane» (sem acentos) */
const fkey = n => String(n || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z]/g, '');
const lastName = n => { const p = String(n || '').trim().split(/\s+/); return p.length > 1 ? p.slice(1).join(' ') : p[0] || '?'; };

/* ---------- categorias de peso ---------- */
const WCS = ['Strawweight', 'Flyweight', 'Bantamweight', 'Featherweight', 'Lightweight', 'Welterweight', 'Middleweight', 'Light Heavyweight', 'Heavyweight'];
const WC_PT = { Strawweight: 'Palha', Flyweight: 'Mosca', Bantamweight: 'Galo', Featherweight: 'Pena', Lightweight: 'Leve', Welterweight: 'Meio-médio', Middleweight: 'Médio', 'Light Heavyweight': 'Meio-pesado', Heavyweight: 'Pesado', Catch: 'Peso combinado', Open: 'Peso livre', Other: '—' };
function wclassOf(t) {
  t = String(t || ''); const fem = /women|feminin|\bW\b|^w /i.test(t);
  const ab = { SW: 'Strawweight', FLW: 'Flyweight', FW: 'Featherweight', BW: 'Bantamweight', LW: 'Lightweight', WW: 'Welterweight', MW: 'Middleweight', LHW: 'Light Heavyweight', HW: 'Heavyweight' };
  let k = null;
  for (const w of WCS) if (new RegExp(w, 'i').test(t)) { if (w === 'Heavyweight' && /light heavy/i.test(t)) continue; k = w; }
  if (!k) { const m = t.toUpperCase().match(/\b(W?)(SW|FLW|FW|BW|LW|WW|MW|LHW|HW)\b/); if (m) k = ab[m[2]]; if (m && m[1]) return 'W ' + k; }
  if (!k) k = /catch/i.test(t) ? 'Catch' : 'Other';
  return (fem && WCS.includes(k) ? 'W ' : '') + k;
}
const wcPT = wc => { const f = /^W /.test(wc), k = wc.replace(/^W /, ''); return (WC_PT[k] || k) + (f ? ' (fem.)' : ''); };

/* ---------- guardado ---------- */
const arrOr = v => Array.isArray(v) ? v : [], objOr = v => v && typeof v === 'object' && !Array.isArray(v) ? v : {};
let DB = LS.get('db', null); if (!DB || !DB.f) DB = { f: {}, ev: {}, days: {} };
let BETS = arrOr(LS.get('bets', [])), PREDS = objOr(LS.get('preds', {})), DEPOS = arrOr(LS.get('depos', [])), SLIPS = objOr(LS.get('slips', {}));
let BO = objOr(LS.get('bo', {}));                // odds da Betano que tu metes (por combate)
const CFG_DEF = { bank: { tu: 100, ko: 100, pi: 250 }, min: 0.25, piOn: true, piStake: 2.5, evMin: 0.05, mktW: 1.0, mktM: 0.85, oddMin: 1.25, oddMax: 6.0 };
let CFG = Object.assign({}, CFG_DEF, objOr(LS.get('cfg', {})));
CFG.bank = Object.assign({}, CFG_DEF.bank, CFG.bank || {});
if (CFG.cfgV !== 2) { CFG.mktW = 1.0; CFG.cfgV = 2; }
const saveDB = () => LS.set('db', DB);
const saveBets = () => LS.set('bets', BETS);
let SEED = null;

/* =====================================================================
   1) IR BUSCAR À ESPN — cartazes e resultados (site API) + odds (core API)
   ===================================================================== */
const ESPN = 'https://site.api.espn.com/apis/site/v2/sports/mma/ufc';
const CORE = 'https://sports.core.api.espn.com/v2/sports/mma/leagues/ufc';
const BRIDGES = [
  { n: 'Direto', f: u => u },
  { n: 'corsproxy.io', f: u => 'https://corsproxy.io/?url=' + encodeURIComponent(u) },
  { n: 'allorigins', f: u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u) }
];
async function getJSON(url, tmo) {
  const pref = clamp(LS.get('bridge', 0), 0, BRIDGES.length - 1);
  const order = [pref].concat(BRIDGES.map((_, i) => i).filter(i => i !== pref));
  let last = null;
  for (const i of order) {
    const ctrl = new AbortController(); const tm = setTimeout(() => ctrl.abort(), tmo || 15000);
    try {
      const r = await fetch(BRIDGES[i].f(url), { signal: ctrl.signal, cache: 'no-store' });
      if (!r.ok) { const e = new Error('HTTP ' + r.status); e.status = r.status; throw e; }
      const j = await r.json();
      if (i !== pref) LS.set('bridge', i);
      return j;
    } catch (e) { last = e; if (e.status === 400 || e.status === 404) throw e; }
    finally { clearTimeout(tm); }
  }
  throw last || new Error('sem ligação');
}
/* resultado da ESPN → KO / SUB / DEC / D (empate) / NC */
function methodOf(st) {
  const r = (st && st.result) || {}, t = [r.name, r.displayName, r.shortDisplayName, st && st.type && st.type.detail].filter(Boolean).join(' ');
  if (/no.?contest|\bnc\b|overturn/i.test(t)) return 'NC';
  if (/draw/i.test(t)) return 'D';
  if (/\bdq\b|disq/i.test(t)) return 'DQ';
  if (/strikes|tko|ko\b|kotko/i.test(t) && !/^sub/i.test(String((st && st.result && st.result.name) || ''))) return 'KO';
  if (/sub/i.test(t)) return 'SUB';
  if (/dec|points|judge/i.test(t)) return 'DEC';
  if (/ko|tko|dq|disq|doctor|stoppage|retire|corner|injur|could not/i.test(t)) return 'KO';
  return null;
}
function clockSecs(st) {
  if (!st) return null;
  if (st.displayClock && /^\d+:\d\d$/.test(st.displayClock)) { const [m, s] = st.displayClock.split(':').map(Number); return m * 60 + s; }
  const c = Number(st.clock); return isFinite(c) && c >= 0 && c <= 300 ? c : null;
}
function ingestEvent(ev) {
  if (!ev || !Array.isArray(ev.competitions)) return 0;
  const eid = String(ev.id); let n = 0;
  const seen = Date.now();
  DB.ev[eid] = { id: eid, n: ev.name || ev.shortName || 'UFC', sn: ev.shortName || '', d: ev.date, seen };
  ev.competitions.forEach((c, idx) => {
    const cs = (c.competitors || []).slice().sort((a, b) => (a.order || 9) - (b.order || 9));
    if (cs.length !== 2) return;
    const side = x => { const a = x.athlete || {}; const rec = (x.records || []).find(r => r.type === 'total') || (x.records || [])[0]; return { n: a.displayName || a.fullName || '?', id: String(x.id || a.id || ''), aid: String(a.id || x.id || ''), k: fkey(a.displayName || a.fullName), fl: a.flag && a.flag.href || '', ct: a.flag && a.flag.alt || '', hs: a.headshot && a.headshot.href || '', rec: rec && rec.summary || '' }; };
    const A = side(cs[0]), B = side(cs[1]);
    const S = c.status || {}, st = S.type || {};
    const off = /POSTPON|CANCEL/i.test(String(st.name || '') + ' ' + String(st.description || ''));
    const s = off ? 'off' : (st.completed || st.state === 'post') ? 'post' : st.state === 'in' ? 'in' : 'pre';
    const id = String(c.id), old = DB.f[id] || {};
    const sr = Number(c.format && c.format.regulation && c.format.regulation.periods) || old.sr || (/title|main event/i.test(JSON.stringify(c.notes || '') + ' ' + ((c.type && c.type.text) || '')) || idx === ev.competitions.length - 1 ? 5 : 3);
    const f = { id, ev: eid, seen, d: c.date || ev.date, A, B, wct: (c.type && (c.type.text || c.type.abbreviation)) || old.wct || '', sr: sr === 5 ? 5 : 3, ord: idx, s, src: 'espn' };
    f.wc = wclassOf(f.wct);
    f.ttl = /title/i.test(String((c.type && c.type.text) || '') + ' ' + String((c.notes || []).map(x => x.headline).join(' ')));
    if (s === 'post') {
      f.w = cs[0].winner ? 'A' : cs[1].winner ? 'B' : null;
      f.m = methodOf(S);
      if (f.m === 'D') { f.w = 'D'; f.m = 'DEC'; }
      if (f.m === 'NC') f.w = 'NC';   // sem vencedor marcado e sem «empate»/«no contest» → fica pendente (f.w = null)
      f.rd = Number(S.period) || null; f.t = clockSecs(S);
      f.res = (S.result && (S.result.displayName || S.result.shortDisplayName)) || st.shortDetail || '';
    }
    if (s === 'in') { f.rd = Number(S.period) || null; f.cl = st.shortDetail || st.detail || ''; }
    if (old.o) f.o = old.o;
    DB.f[id] = f; n++;
  });
  return n;
}
/* odds do combate (DraftKings via ESPN): vencedor e método — os lados vêm pela id do atleta */
function parseFightOdds(j, f) {
  const it = (j && j.items || []).find(x => x.homeAthleteOdds && x.awayAthleteOdds);
  if (!it) return null;
  const idOf = s => { const m = String((s && s.athlete && s.athlete.$ref) || '').match(/athletes\/(\d+)/); return m ? m[1] : null; };
  const H = it.homeAthleteOdds, W = it.awayAthleteOdds, hi = idOf(H), wi = idOf(W);
  let a = null, b = null;
  const isA = x => x && (x === f.A.id || x === f.A.aid), isB = x => x && (x === f.B.id || x === f.B.aid);
  if (isA(hi) || isB(wi)) { a = H; b = W; } else if (isB(hi) || isA(wi)) { a = W; b = H; }
  if (!a) {   // sem ids: pelo nome do favorito em «details» (ex.: «C. Gane -250»)
    const fav = H.favorite ? H : W.favorite ? W : null, nm = fkey(String(it.details || '').replace(/[-+]?\d+\s*$/, '').split(/\s+/).pop());
    if (fav && nm) { const fa = fkey(lastName(f.A.n)).endsWith(nm) || fkey(f.A.n).endsWith(nm); a = fa ? fav : fav === H ? W : H; b = a === H ? W : H; }
  }
  if (!a) return null;
  const ml = x => american(x.moneyLine != null ? x.moneyLine : x.current && x.current.moneyLine);
  const vm = (x, k) => { const v = x.current && x.current.victoryMethod && x.current.victoryMethod[k]; return v ? american(v.american != null ? v.american : v) : null; };
  const o = { p: (it.provider && it.provider.name) || 'DraftKings', a: ml(a), b: ml(b), t: Date.now() };
  const am = { ko: vm(a, 'koTkoDq'), sub: vm(a, 'submission'), dec: vm(a, 'points') }, bm = { ko: vm(b, 'koTkoDq'), sub: vm(b, 'submission'), dec: vm(b, 'points') };
  if (am.ko && am.sub && am.dec && bm.ko && bm.sub && bm.dec) { o.am = am; o.bm = bm; }
  if (it.overUnder != null) { o.ou = num(it.overUnder); o.ovo = american(it.overOdds); o.uno = american(it.underOdds); if (!(o.ou > 0 && o.ou < 5)) { delete o.ou; delete o.ovo; delete o.uno; } }
  return o.a && o.b ? o : (o.am ? o : null);
}
let BUSY = false;
async function refresh() {
  if (BUSY || !SEED) return; BUSY = true;
  const btn = $('#btnRefresh'); if (btn) btn.classList.add('spin'); document.body.classList.add('busy');
  const T = todayET(), cut = SEED.cut.replace(/-/g, '');
  let fails = 0, got = 0, odds = 0;
  try {
    // 1) cartazes: do fim do arquivo até daqui a 3 semanas, em blocos de 30 dias
    let d = ymdAdd(cut, 1); if (d < ymdAdd(T, -400)) d = ymdAdd(T, -400);
    const end = ymdAdd(T, 21);
    for (let i = 0; d <= end && i < 20; i++) {
      const e2 = ymdAdd(d, 29) < end ? ymdAdd(d, 29) : end;
      if (!(DB.days[d + '-' + e2] && e2 < ymdAdd(T, -3))) {
        setUpd(`⏳ A buscar cartazes ${d.slice(6)}/${d.slice(4, 6)}–${e2.slice(6)}/${e2.slice(4, 6)}…`);
        try { const j = await getJSON(`${ESPN}/scoreboard?dates=${d}-${e2}&limit=200`); if (!j || !Array.isArray(j.events)) throw new Error('resposta sem eventos'); j.events.forEach(e => { got += ingestEvent(e); }); if (e2 < ymdAdd(T, -3)) DB.days[d + '-' + e2] = 1; }
        catch (e) { fails++; }
      }
      d = ymdAdd(e2, 1);
    }
    // 2) odds dos combates por começar nos próximos 8 dias
    const now = Date.now(), soon = Object.values(DB.f).filter(f => f.s === 'pre' && new Date(f.d).getTime() > now - 36e5 && new Date(f.d).getTime() < now + 8 * 864e5);
    let k = 0;
    for (const f of soon) {
      setUpd(`⏳ Odds ${++k}/${soon.length}: ${lastName(f.A.n)} vs ${lastName(f.B.n)}…`);
      try { const j = await getJSON(`${CORE}/events/${f.ev}/competitions/${f.id}/odds?lang=en&region=us`, 10000); const o = parseFightOdds(j, f); if (o) { f.o = o; odds++; } } catch (e) {}
      await new Promise(r => setTimeout(r, 40));
    }
    saveDB();
    MODEL = null; PC.clear();
    snapshotPreds();
    snapshotSlips();
    const sett = settleAll();
    const pil = pilotRun();
    LS.set('last', Date.now());
    toast(fails && !got ? 'Sem ligação à ESPN. Experimenta «Testar ligação» nas Definições.' : `Atualizado: ${got} combate${got === 1 ? '' : 's'}${odds ? ` · odds em ${odds}` : ''}${sett ? ` · ${sett} aposta${sett === 1 ? '' : 's'} fechada${sett === 1 ? '' : 's'}` : ''}${pil ? ` · o Ko sozinho apostou em ${pil}` : ''}`, 4200);
  } catch (e) {
    toast('❌ Falhou: ' + esc(e.message || e));
  } finally {
    BUSY = false; if (btn) btn.classList.remove('spin'); document.body.classList.remove('busy'); render();
  }
}

/* =====================================================================
   2) O CÉREBRO DO KO
   Força: rating logístico (tipo Elo/Glicko). Quem tem poucos combates mexe
   muito; finalizações contam mais do que decisões. Mais: idade (depois dos 31),
   envergadura e estreia no UFC.
   Método: riscos concorrentes. Cada lutador tem um ritmo de KO e de finalização
   por minuto = base da categoria × ataque dele × fragilidade do adversário.
   Se ninguém acabar o combate em 15 (ou 25) minutos → decisão.
   Rondas: o risco não é igual em todas (a 1.ª é a mais perigosa); o perfil
   foi medido em 6.800 combates.
   Teste às cegas 2022-26: o Ko sozinho fica atrás das odds de fecho (como todos
   os modelos públicos de MMA). Por isso junta-as com peso alto e põe a matemática
   onde ela brilha: método, rondas e «vai até ao fim?».
   ===================================================================== */
let MODEL = null;
const PC = new Map();
function wcBase(wc, M) {
  const S = (M && M.base) || SEED.base, b = S[wc] || S[wc.replace(/^W /, '')] || [0, 0, 0];
  return { ko: (b[1] + 20) / (b[0] + 20 / 0.02), sub: (b[2] + 10) / (b[0] + 10 / 0.012) };
}
function newHz() { return { koW: 0, koL: 0, subW: 0, subL: 0, eko: 0, ekoL: 0, esub: 0, esubL: 0, min: 0 }; }
function fighterOf(M, s) {   // lutador da ESPN → estado do modelo (pela chave do nome; senão apelido + inicial)
  let k = s.k;
  if (!M.F[k]) M.F[k] = { n: s.n, r: 0, k: 0, l: null, hz: newHz(), f5: [], rec: [0, 0, 0], neo: 1 };
  return M.F[k];
}
function buildModel() {
  const P = SEED.par, F = {};
  Object.entries(SEED.fi).forEach(([k, x]) => {
    F[k] = { n: x.n, r: x.r, k: x.k, l: x.l, dob: x.dob, h: x.h, re: x.re, st: x.st, wc: x.wc, sy: x.sy, rec: x.rec.slice(), f5: x.f5.map(a => a.slice()),
      hz: { koW: x.hz[0], koL: x.hz[1], subW: x.hz[2], subL: x.hz[3], eko: x.hz[4], ekoL: x.hz[5], esub: x.hz[6], esubL: x.hz[7], min: x.hz[8] } };
  });
  // sem «apelidos» automáticos: juntavam lutadores diferentes (Alice Pereira ≠ Alex Pereira)
  const base = {}; Object.entries(SEED.base).forEach(([k, v]) => { base[k] = v.slice(); });
  const M = { F, nEspn: 0, base };
  const cut = SEED.cut;
  const cutY = cut.replace(/-/g, ''), evD = f => etYmd(new Date((DB.ev[f.ev] && DB.ev[f.ev].d) || f.d)), done = Object.values(DB.f).filter(f => f.s === 'post' && evD(f) > cutY && f.w).sort((a, b) => a.d < b.d ? -1 : 1);
  done.forEach(f => { M.nEspn++; updateWith(M, f); });
  return M;
}
const getModel = () => MODEL || (MODEL = buildModel());
function rawX(M, f) {   // logit da probabilidade de A ganhar, só pelo Ko
  const P = SEED.par, a = fighterOf(M, f.A), b = fighterOf(M, f.B), d = f.d.slice(0, 10);
  let x = (a.r - b.r) / P.s, parts = [['Força (rating)', (a.r - b.r) / P.s]];
  let e = 0; if (!a.k) e += P.new; if (!b.k) e -= P.new; if (e) parts.push(['Estreia no UFC', e]); x += e;
  if (a.dob && b.dob) { const v = -P.age * (Math.max(0, yearsBetween(d, a.dob) - P.age0) - Math.max(0, yearsBetween(d, b.dob) - P.age0)); if (Math.abs(v) > 1e-3) parts.push(['Idade (depois dos 31)', v]); x += v; }
  if (a.re && b.re) { const v = P.reach * (a.re - b.re); if (Math.abs(v) > 1e-3) parts.push(['Envergadura', v]); x += v; }
  return { x, parts, a, b };
}
function updateWith(M, f) {
  const P = SEED.par, R = rawX(M, f), a = R.a, b = R.b, pA = sig(R.x);
  const wc = f.wc || 'Other', B = wcBase(wc, M), mins = f.rd ? (f.rd - 1) * 5 + (f.t || 0) / 60 : null;
  const res = (me, op, side) => { const r = f.w === side ? 'W' : f.w === 'D' ? 'D' : f.w === 'NC' ? 'NC' : 'L'; me.f5.push([f.d.slice(0, 10), op.n, r, f.m || '', f.rd || '']); me.f5 = me.f5.slice(-5); if (r !== 'NC') me.rec[['W', 'L', 'D'].indexOf(r)]++; };
  res(a, b, 'A'); res(b, a, 'B');
  if (f.w === 'A' || f.w === 'B' || f.w === 'D') {
    const y = f.w === 'A' ? 1 : f.w === 'B' ? 0 : 0.5;
    let wgt = 1; if (f.m === 'KO' || f.m === 'SUB') wgt += P.fin;
    const kA = Math.max(P.kmin, P.k0 / (1 + a.k / P.n0)), kB = Math.max(P.kmin, P.k0 / (1 + b.k / P.n0)), e = y - pA;
    a.r += kA * wgt * e; b.r -= kB * wgt * e;
    a.k++; b.k++;
  }
  a.l = b.l = f.d.slice(0, 10);
  if (mins != null && ['KO', 'SUB', 'DEC', 'DQ'].includes(f.m)) {
    const bb = M.base[wc] = M.base[wc] || [0, 0, 0], dk = SEED.par.bdec || 0.998;
    bb[0] = bb[0] * dk + mins; bb[1] = bb[1] * dk + (f.m === 'KO' ? 1 : 0); bb[2] = bb[2] * dk + (f.m === 'SUB' ? 1 : 0);
    [[a, f.w === 'A'], [b, f.w === 'B']].forEach(([h, win]) => {
      const z = h.hz; Object.keys(z).forEach(k => { z[k] *= P.decay; });
      z.min += mins; z.eko += B.ko * mins; z.ekoL += B.ko * mins; z.esub += B.sub * mins; z.esubL += B.sub * mins;
      if (f.m === 'KO') z[win ? 'koW' : 'koL'] += 1;
      if (f.m === 'SUB') z[win ? 'subW' : 'subL'] += 1;
    });
  }
}
/* os 6 desfechos: A por KO / finalização / decisão, B idem — somam 1 */
function methodProbs(lam, T, pA) {
  const L = lam.Ako + lam.Asub + lam.Bko + lam.Bsub, pf = 1 - Math.exp(-L * T), pdec = 1 - pf;
  const o = { Ako: lam.Ako / L * pf, Asub: lam.Asub / L * pf, Bko: lam.Bko / L * pf, Bsub: lam.Bsub / L * pf };
  const fa = o.Ako + o.Asub, da = clamp(pA - fa, 0.02 * pdec, 0.98 * pdec);
  const r = { Ako: o.Ako, Asub: o.Asub, Adec: da, Bko: o.Bko, Bsub: o.Bsub, Bdec: pdec - da };
  return rescale(r, pA);
}
function rescale(r, pA) {
  const sA = r.Ako + r.Asub + r.Adec, sB = r.Bko + r.Bsub + r.Bdec;
  ['Ako', 'Asub', 'Adec'].forEach(k => { r[k] *= pA / sA; }); ['Bko', 'Bsub', 'Bdec'].forEach(k => { r[k] *= (1 - pA) / sB; });
  return r;
}
const FLB = 1.08;   // as casas pagam os favoritos um pouco abaixo do justo: p = σ(1,08·logit(p sem margem))
let CALW = null;
function calibW() {   // aprende quanto confiar nas odds: escolhe o peso que menos erra nas previsões guardadas antes de cada combate
  const k = Object.keys(PREDS).length + '|' + LS.get('last', 0); if (CALW && CALW.k === k) return CALW;
  const rows = [];
  Object.entries(PREDS).forEach(([id, p]) => { const f = DB.f[id]; if (!f || f.s !== 'post' || (f.w !== 'A' && f.w !== 'B') || p.nv == null || p.pk0 == null) return; rows.push([logit(p.nv) * FLB, logit(p.pk0), f.w === 'A']); });
  let best = CFG.mktW, bl = Infinity;
  if (rows.length >= 30) for (let w = 0.6; w <= 1.0001; w += 0.02) { let s = 0; rows.forEach(([m, x, y]) => { const q = sig(w * m + (1 - w) * x); s -= Math.log(y ? q : 1 - q); }); if (s < bl) { bl = s; best = w; } }
  const n = rows.length;
  CALW = { k, n, raw: best, w: clamp((n * best + 300 * CFG.mktW) / (n + 300), 0.6, 1) };
  return CALW;
}
function predict(f) {
  const M = getModel(), P = SEED.par, o = f.o || {};
  const key = [f.id, f.s, Object.keys(DB.f).length, M.nEspn, o.a, o.b, o.t, calibW().w, CFG.mktM, CFG.evMin, CFG.oddMin, CFG.oddMax, JSON.stringify(BO[f.id] || {})].join('|');
  const hit = PC.get(f.id); if (hit && hit.k === key) return hit.P;
  const R = rawX(M, f), pK = sig(R.x);
  let pNV = null, W = 0, pA = pK;
  if (o.a > 1 && o.b > 1) { pNV = (1 / o.a) / (1 / o.a + 1 / o.b); W = calibW().w; pA = sig(W * FLB * logit(pNV) + (1 - W) * R.x); }
  // método: riscos concorrentes do Ko …
  const B = wcBase(f.wc || 'Other', M), a = R.a.hz, b = R.b.hz, c = P.c, ls = P.ls, lk = P.lk;
  const g = Math.exp(P.beta * logit(pA));
  const lam = {
    Ako: ls * lk * B.ko * (a.koW + c) / (a.eko + c) * (b.koL + c) / (b.ekoL + c) * Math.sqrt(g),
    Asub: ls * B.sub * (a.subW + c) / (a.esub + c) * (b.subL + c) / (b.esubL + c) * Math.sqrt(g),
    Bko: ls * lk * B.ko * (b.koW + c) / (b.eko + c) * (a.koL + c) / (a.ekoL + c) / Math.sqrt(g),
    Bsub: ls * B.sub * (b.subW + c) / (b.esub + c) * (a.subL + c) / (a.esubL + c) / Math.sqrt(g)
  };
  const T = f.sr === 5 ? 25 : 15;
  const m6k = methodProbs(lam, T, pA);
  // … e o mercado de método (quando a ESPN o traz) com peso alto
  let m6 = m6k, mk6 = null;
  const mkSum = o.am && o.bm ? 1 / o.am.ko + 1 / o.am.sub + 1 / o.am.dec + 1 / o.bm.ko + 1 / o.bm.sub + 1 / o.bm.dec : 0;
  if (mkSum >= 1.05 && mkSum <= 1.40) {   // fora disto as odds de método estão estragadas (vimos centenas assim nos dados)
    const raw = { Ako: 1 / o.am.ko, Asub: 1 / o.am.sub, Adec: 1 / o.am.dec, Bko: 1 / o.bm.ko, Bsub: 1 / o.bm.sub, Bdec: 1 / o.bm.dec };
    const s = Object.values(raw).reduce((x, y) => x + y, 0); mk6 = {}; Object.keys(raw).forEach(k => { mk6[k] = raw[k] / s; });
    m6 = {}; Object.keys(m6k).forEach(k => { m6[k] = CFG.mktM * mk6[k] + (1 - CFG.mktM) * m6k[k]; }); m6 = rescale(m6, pA);
  }
  // rondas: risco por ronda com o perfil medido (1.ª ronda a mais perigosa)
  const rp = SEED.rp[String(f.sr === 5 ? 5 : 3)], pdec = m6.Adec + m6.Bdec;
  const lamR = -Math.log(clamp(pdec, 1e-4, 0.9999)) / (5 * rp.reduce((x, y) => x + y, 0));
  const S = [1]; rp.forEach((h, i) => S.push(S[i] * Math.exp(-lamR * 5 * h)));
  const out = { f, R, pK, pNV, W, pA, lam, T, m6, m6k, mk6, pdec, rp, lamR, S, pD: 0.006 };
  const H1 = 0.64, cR = 5 / (H1 + 4);   // risco no 1.º minuto da ronda = 0,64 do resto (o total da ronda não muda)
  out.survFlat = t => { const r = Math.min(rp.length, Math.floor(t / 5)), rem = t - r * 5; return r >= rp.length ? S[rp.length] : S[r] * Math.exp(-lamR * rp[r] * rem); };
  out.surv = t => { const r = Math.min(rp.length, Math.floor(t / 5)), rem = t - r * 5; if (r >= rp.length) return S[rp.length]; const e1 = Math.min(rem, 1) * H1 * cR + Math.max(0, rem - 1) * cR; return S[r] * Math.exp(-lamR * rp[r] * e1); };
  out.cands = candidates(f, out);
  const dogSide = c => (c.mk === 'ml' || c.mk === 'met') && ((c.sel[0] === 'A') !== (pA >= 0.5));
  const elig = out.cands.filter(c => c.src === 'Betano' && c.odd >= CFG.oddMin && c.odd <= CFG.oddMax && !(c.mk === 'met' && dogSide(c)) && !(c.mk === 'ml' && c.p < 0.30)).sort((x, y) => y.ev - x.ev);   // valor só contra a Betano
  out.best = elig[0] || null;
  out.value = out.best && out.best.ev >= CFG.evMin ? out.best : null;
  PC.set(f.id, { k: key, P: out });
  return out;
}
/* mercados da Betano: vencedor · método (6) · total de rondas · vai até ao fim? */
function probs(P, mk, sel, line) {
  if (mk === 'ml') return { w: (sel === 'A' ? P.pA : 1 - P.pA) * (1 - P.pD), push: P.pD };
  if (mk === 'met') return { w: P.m6[sel] * (1 - P.pD), push: 0 };
  if (mk === 'tr') { const pu = 1 - P.surv(line * 5); return sel === 'u' ? { w: pu, push: 0 } : { w: 1 - pu, push: 0 }; }   // 1,5 rondas = 7m30s
  if (mk === 'dist') return sel === 'y' ? { w: P.pdec, push: 0 } : { w: 1 - P.pdec, push: 0 };
  return { w: 0, push: 0 };
}
const evOf = (q, odd) => q.w * odd + q.push - 1;
const fairOf = q => q.w > 0 ? (1 - q.push) / q.w : 99;
const MET_K = ['Ako', 'Asub', 'Adec', 'Bko', 'Bsub', 'Bdec'];
function candidates(f, P) {
  const o = f.o || {}, b = BO[f.id] || {}, out = [];
  const add = (mk, sel, line, odd, src) => { if (!(odd > 1)) return; const q = probs(P, mk, sel, line); out.push({ mk, sel, line: line == null ? null : line, odd: r2(odd), src, p: q.w, push: q.push, ev: evOf(q, odd), fair: fairOf(q) }); };
  add('ml', 'A', null, b.ma, 'Betano'); add('ml', 'B', null, b.mb, 'Betano');
  MET_K.forEach(k => add('met', k, null, b[k], 'Betano'));
  if (b.tl != null) { add('tr', 'o', b.tl, b.to, 'Betano'); add('tr', 'u', b.tl, b.tu, 'Betano'); }
  add('dist', 'y', null, b.dy, 'Betano'); add('dist', 'n', null, b.dn, 'Betano');
  const ps = o.p || 'ESPN';
  if (o.a && o.b) { add('ml', 'A', null, o.a, ps); add('ml', 'B', null, o.b, ps); }
  if (o.ou != null) { add('tr', 'o', o.ou, o.ovo, ps); add('tr', 'u', o.ou, o.uno, ps); }
  return out;
}
const sn = s => lastName(s.n);
const MET_PT = { ko: 'KO/TKO', sub: 'finalização', dec: 'decisão' };
function selLabel(f, mk, sel, line) {
  if (mk === 'ml') return sn(sel === 'A' ? f.A : f.B) + ' ganha';
  if (mk === 'met') return sn(sel[0] === 'A' ? f.A : f.B) + ' por ' + MET_PT[sel.slice(1)];
  if (mk === 'tr') return (sel === 'o' ? 'Mais de ' : 'Menos de ') + gl(line) + ' rondas';
  if (mk === 'dist') return sel === 'y' ? 'Vai até ao fim (decisão)' : 'Não vai até ao fim';
  return '?';
}
const mkName = mk => ({ ml: 'Vencedor', met: 'Método de vitória', tr: 'Total de rondas', dist: 'Vai até ao fim?' }[mk] || mk);
const gLabel = f => sn(f.A) + ' – ' + sn(f.B);

function snapshotPreds() {
  const now = Date.now();
  Object.values(DB.f).forEach(f => {
    if (f.s !== 'pre' || new Date(f.d).getTime() < now - 6e5 || new Date(f.d).getTime() > now + 9 * 864e5) return;
    const P = predict(f);
    PREDS[f.id] = { pa: r3(P.pA), pk0: r3(P.pK), nv: P.pNV != null ? r3(P.pNV) : null, m6: Object.fromEntries(MET_K.map(k => [k, r3(P.m6[k])])), pdec: r3(P.pdec), o05: r3(P.surv(2.5)), o15: r3(P.surv(7.5)), mk6: P.mk6 ? 1 : 0, oa: f.o && f.o.a || null, ob: f.o && f.o.b || null, wc: f.wc, sr: f.sr, ev: f.ev, d: f.d,
      pk: P.value ? { mk: P.value.mk, sel: P.value.sel, line: P.value.line, odd: P.value.odd, ev: r2(P.value.ev), p: r2(P.value.p), lb: selLabel(f, P.value.mk, P.value.sel, P.value.line), src: P.value.src } : null, ts: now };
  });
  const ks = Object.keys(PREDS); if (ks.length > 1500) ks.sort((a, b) => PREDS[a].ts - PREDS[b].ts).slice(0, ks.length - 1500).forEach(k => delete PREDS[k]);
  LS.set('preds', PREDS);
}

/* =====================================================================
   3) CONTAS: Tu · Mister Ko · Ko sozinho (bot)
   ===================================================================== */
const ACC = { tu: { n: 'Tu', ic: 'star', c: 'var(--c-blue)' }, ko: { n: 'Mister Ko', ic: 'glove', c: 'var(--c-orange)' }, pi: { n: 'Ko sozinho', ic: 'robot', c: 'var(--c-purple)' } };
function accStats(acc) {
  const B = BETS.filter(b => b.acc === acc);
  const dep = DEPOS.filter(d => d.acc === acc).reduce((s, d) => s + d.v, 0);
  let staked = 0, ret = 0, open = 0, setSt = 0, setRet = 0, w = 0, l = 0;
  B.forEach(b => {
    staked += b.stake;
    if (b.st === 'open') open += b.stake;
    else { ret += b.ret || 0; if (b.st !== 'void') { setSt += b.stake; setRet += b.ret || 0; if (b.st === 'won') w++; if (b.st === 'lost') l++; } }
  });
  const start = (CFG.bank[acc] || 0) + dep;
  return { start, bal: r2(start - staked + ret), open: r2(open), profit: r2(setRet - setSt), roi: setSt ? (setRet - setSt) / setSt : 0, w, l, n: B.length, nOpen: B.filter(b => b.st === 'open').length };
}
const canBet = f => f && f.s === 'pre' && new Date(f.d).getTime() > Date.now();
function newBet(acc, f, c, stake, extra) {
  const side = (c.mk === 'ml' || c.mk === 'met') ? (c.sel[0] === 'A' ? f.A : f.B) : null;
  const b = Object.assign({ id: acc + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), acc, g: f.id, gl: gLabel(f), gd: f.d, mk: c.mk, sel: c.sel, sa: side ? side.aid || side.k : null, line: c.line == null ? null : c.line, odd: r2(c.odd), stake: r2(stake), t: Date.now(), st: 'open', ret: 0, lb: selLabel(f, c.mk, c.sel, c.line) }, extra || {});
  BETS.push(b); return b;
}
function outcome(b, f) {
  const ev = DB.ev[f.ev];
  if (f.s === 'pre' && ev && ev.seen && f.seen && ev.seen - f.seen > 6e4 && Date.now() - new Date(f.d).getTime() > 3 * 86400e3) return 'void';   // saiu do cartaz
  if (f.s === 'off') return Date.now() - new Date(f.d).getTime() > 3 * 86400e3 ? 'void' : null;
  if (f.s !== 'post' || !f.w) return null;
  if (f.w === 'NC') return 'void';
  let sel = b.sel;
  if (b.sa && (b.mk === 'ml' || b.mk === 'met')) {   // a ESPN pode trocar a ordem dos lutadores ou mudar o adversário
    const isA = f.A.aid === b.sa || f.A.k === b.sa, isB = f.B.aid === b.sa || f.B.k === b.sa;
    if (!isA && !isB) return 'void';
    if (isB && sel[0] === 'A') sel = 'B' + sel.slice(1); else if (isA && sel[0] === 'B') sel = 'A' + sel.slice(1);
  }
  b = Object.assign({}, b, { sel });
  const mins = f.rd ? (f.rd - 1) * 5 + (f.t || 0) / 60 : null;
  const full = (f.m === 'DEC' || f.w === 'D') && (!f.rd || f.rd >= f.sr);   // decisão técnica (antes do fim) não é «até ao fim»
  if (b.mk === 'ml') return f.w === 'D' ? 'push' : f.w === b.sel ? 'won' : 'lost';
  if (b.mk === 'met') { if (f.w === 'D') return 'lost'; if (!f.m) return null; const k = f.w + ({ KO: 'ko', DQ: 'ko', SUB: 'sub', DEC: 'dec' }[f.m] || ''); return k === b.sel ? 'won' : 'lost'; }
  if (b.mk === 'dist') { if (!f.m) return null; return (b.sel === 'y') === full ? 'won' : 'lost'; }
  if (b.mk === 'tr') { const m = full ? f.sr * 5 : mins; if (m == null) return null; const under = m < b.line * 5; return (b.sel === 'u') === under ? 'won' : 'lost'; }
  return null;
}
function newMulti(acc, legs, stake, extra) {
  const odd = r2(legs.reduce((a, l) => a * l.odd, 1));
  const b = Object.assign({ id: acc + 'm' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), acc, mk: 'multi', legs: legs.map(l => Object.assign({}, l)), g: legs[0].g, gl: legs.length + ' combates', gd: legs.reduce((m, l) => l.gd > m ? l.gd : m, legs[0].gd), odd, stake: r2(stake), t: Date.now(), st: 'open', ret: 0, lb: 'Múltipla · ' + legs.length + ' seleções' }, extra || {});
  BETS.push(b); return b;
}
const resTxt = f => !f || f.s !== 'post' ? '' : !f.w ? 'à espera do resultado' : f.w === 'NC' ? 'sem resultado' : f.w === 'D' ? 'empate' : `${sn(f.w === 'A' ? f.A : f.B)} · ${({ KO: 'KO/TKO', DQ: 'desqualificação', SUB: 'finalização', DEC: (f.rd && f.rd < f.sr ? 'decisão técnica' : 'decisão') }[f.m] || f.res || '')}${(f.m !== 'DEC' || f.rd < f.sr) && f.rd ? ' R' + f.rd + (f.t != null ? ' ' + Math.floor(f.t / 60) + ':' + String(f.t % 60).padStart(2, '0') : '') : ''}`;
function settleMulti(b) {
  let eff = 1, pending = false, lost = false;
  b.legs.forEach(l => { const f = DB.f[l.g]; const r = f ? outcome(l, f) : null; l.r = r; if (f && f.s === 'post') l.res = resTxt(f); if (r === null) pending = true; else if (r === 'lost') lost = true; else if (r === 'won') eff *= l.odd; });
  if (lost) { b.st = 'lost'; b.ret = 0; }
  else if (pending) return false;
  else { b.st = eff > 1.0001 ? 'won' : 'push'; b.ret = r2(b.stake * eff); }
  b.tset = Date.now(); return true;
}
function settleAll() {
  let n = 0;
  BETS.forEach(b => {
    if (b.st !== 'open') return;
    if (b.mk === 'multi') { if (settleMulti(b)) n++; return; }
    const f = DB.f[b.g]; if (!f) return;
    const r = outcome(b, f); if (!r) return;
    b.st = r; b.ret = r === 'won' ? r2(b.stake * b.odd) : (r === 'push' || r === 'void') ? b.stake : 0; b.res = resTxt(f); b.tset = Date.now(); n++;
  });
  if (n) saveBets();
  safeGrade();
  return n;
}
/* =====================================================================
   🤖 KO SOZINHO: um bot que aposta sozinho, sem ninguém lhe mexer.
   Regra fixa: em cada combate do cartaz, aposta no lutador que a cabeça dele
   (o modelo puro, sem copiar as odds) acha que ganha, à odd da ESPN do momento.
   Teste às cegas 2022-26 (1.882 combates): acertou 61% e deu −2% por aposta.
   ===================================================================== */
function pilotRun() {
  if (!CFG.piOn) return 0;
  const now = Date.now(); let n = 0;
  const done = new Set(BETS.filter(b => b.acc === 'pi' && b.mk !== 'multi').map(b => b.g));
  Object.values(DB.f).filter(f => f.s === 'pre' && !done.has(f.id) && f.o && f.o.a > 1 && f.o.b > 1).sort((x, y) => x.d < y.d ? -1 : 1).forEach(f => {
    const t0 = new Date(f.d).getTime(); if (t0 < now + 5 * 60e3 || t0 > now + 8 * 864e5) return;
    const P = predict(f), sel = P.pK >= 0.5 ? 'A' : 'B', odd = sel === 'A' ? f.o.a : f.o.b;
    const stake = Math.max(CFG.min, r2(CFG.piStake)); if (accStats('pi').bal < stake) return;
    newBet('pi', f, { mk: 'ml', sel, odd }, stake, { auto: 1, pk: r2(sel === 'A' ? P.pK : 1 - P.pK), nv: r2(sel === 'A' ? P.pNV : 1 - P.pNV), src: f.o.p || 'ESPN' });
    n++;
  });
  if (n) saveBets();
  return n;
}
function botStats() {
  const B = BETS.filter(b => b.acc === 'pi' && b.auto), S = B.filter(b => b.st === 'won' || b.st === 'lost' || b.st === 'push');
  const w = S.filter(b => b.st === 'won').length, l = S.filter(b => b.st === 'lost').length;
  const dog = S.filter(b => b.nv != null && b.nv < 0.5), dw = dog.filter(b => b.st === 'won').length;
  const st = S.reduce((s, b) => s + b.stake, 0), ret = S.reduce((s, b) => s + (b.ret || 0), 0);
  const fav = S.filter(b => b.nv != null && b.nv >= 0.5), fw = fav.filter(b => b.st === 'won').length;
  const plOf = L => r2(L.reduce((s, b) => s + (b.ret || 0) - b.stake, 0));
  const byEv = {}; S.forEach(b => { const f = DB.f[b.g], k = f ? f.ev : '?'; (byEv[k] = byEv[k] || []).push(b); });
  const evs = Object.entries(byEv).map(([k, L]) => ({ k, n: (DB.ev[k] || {}).n || 'Cartaz', d: (DB.ev[k] || {}).d || L[0].gd, w: L.filter(b => b.st === 'won').length, l: L.filter(b => b.st === 'lost').length, pl: plOf(L) })).sort((a, b) => a.d < b.d ? 1 : -1);
  const byWc = {}; S.forEach(b => { const f = DB.f[b.g], k = f ? f.wc : '?'; const o = byWc[k] = byWc[k] || { n: 0, w: 0, pl: 0 }; o.n++; if (b.st === 'won') o.w++; o.pl += (b.ret || 0) - b.stake; });
  let run = 0; const curve = S.slice().sort((a, b) => (a.tset || a.t) - (b.tset || b.t)).map(b => (run += (b.ret || 0) - b.stake));
  const conf = S.filter(b => b.pk >= 0.7), cw = conf.filter(b => b.st === 'won').length;
  return { n: B.length, open: B.filter(b => b.st === 'open').length, openL: B.filter(b => b.st === 'open'), w, l, p: S.length - w - l, hit: w + l ? w / (w + l) : null, roi: st ? (ret - st) / st : null, pl: r2(ret - st), staked: r2(st),
    dogN: dog.length, dogW: dw, dogPl: plOf(dog), favN: fav.length, favW: fw, favPl: plOf(fav), confN: conf.length, confW: cw, evs, byWc, curve };
}

/* =====================================================================
   🛡️ BOLETIM SEGURO DO CARTAZ: seleções com ≥85% (e ≤95%), juntas enquanto
   o boletim fica ≥70%. Favorito grande, «passa da 1.ª ronda», «não vai até ao
   fim» em combates de pesados… Odds estimadas: mete as da Betano.
   ===================================================================== */
const SAFE_LEG = 0.85, SAFE_MAX = 0.96, SAFE_SLIP = 0.75, SAFE_MARGIN = 0.01, SAFE_LEGS = 4;
/* calibração das seleções seguras (ajustada em 2013-18, confirmada em 2019-21 e 2022-26): o Ko era prudente demais
   — «mais de 0,5 rondas» a 87% acertava 92%; o favorito a 84% acertava 92% */
const SAFE_CAL = { ml: [-0.268, 1.448], o05: [-0.308, 1.371], o15: [1.137, 0.314] };
const calP = (k, p) => { const c = SAFE_CAL[k]; return c ? Math.min(0.97, sig(c[0] + c[1] * logit(p))) : p; };
function eventsSorted() { return Object.values(DB.ev).filter(e => Object.values(DB.f).some(f => f.ev === e.id)).sort((a, b) => a.d < b.d ? -1 : 1); }
function upcomingIdx() {
  const E = eventsSorted(), now = Date.now();
  const i = E.findIndex(e => evFights(e.id).some(f => f.s !== 'post' && f.s !== 'off' && new Date(f.d).getTime() > now - 8 * 3600e3));
  return { E, i: i < 0 ? E.length - 1 : i };
}
function evAt(off) { const U = upcomingIdx(); return U.E[U.i + off] || null; }
const evFights = id => Object.values(DB.f).filter(f => f.ev === id).sort((a, b) => (a.d < b.d ? 1 : a.d > b.d ? -1 : 0) || b.ord - a.ord);   // do combate principal (o último da noite) para trás
function safeCands(off) {
  const E = evAt(off || 0); if (!E) return [];
  const now = Date.now(), out = [];
  evFights(E.id).filter(f => f.s === 'pre' && new Date(f.d).getTime() > now + 10 * 60e3 && f.o && f.o.a > 1 && f.o.b > 1).forEach(f => {
    const P = predict(f), favA = P.pNV >= 0.5, fav = favA ? 'A' : 'B';
    const opts = [
      { mk: 'ml', sel: fav, line: null, c: calP('ml', favA ? P.pNV : 1 - P.pNV) },
      { mk: 'tr', sel: 'o', line: 0.5, c: calP('o05', P.survFlat(2.5)) },
      { mk: 'tr', sel: 'o', line: 1.5, c: calP('o15', P.survFlat(7.5)) }];
    const keep = opts.filter(x => x.c >= SAFE_LEG && x.c <= SAFE_MAX);
    if (!keep.length) return;
    const best = keep.find(x => x.mk === 'ml') || keep.sort((a, b) => a.c - b.c)[0];   // favorito primeiro: tem odd real e as casas pagam-no abaixo do justo
    best.p = best.c;
    out.push(Object.assign(best, { g: f, odd: best.mk === 'ml' ? (fav === 'A' ? f.o.a : f.o.b) : r2(Math.max(1.02, 1 / (best.c * 1.06))), est: best.mk !== 'ml', lb: selLabel(f, best.mk, best.sel, best.line) }));
  });
  return out.sort((a, b) => b.p - a.p);
}
const slipP = L => L.reduce((a, c) => a * (c.p - SAFE_MARGIN), 1);   // promessa honesta do boletim
function safeAuto(C) {   // junta enquanto a promessa (com 1 ponto de folga por seleção) fica ≥ 75%; no máximo 4
  const pick = new Set(); let P = 1;
  C.forEach((c, i) => { if (pick.size >= SAFE_LEGS) return; const q = c.p - SAFE_MARGIN; if (!pick.size || P * q >= SAFE_SLIP) { P *= q; pick.add(i); } });
  return pick;
}
const safeLeg = (c, odd) => ({ g: c.g.id, gl: gLabel(c.g), gd: c.g.d, mk: c.mk, sel: c.sel, line: c.line, odd: r2(odd || c.odd), lb: c.lb, p: r2(c.p) });
function safeLogSave(list) {
  const L = LS.get('safe', {}); let ch = false;
  list.forEach(c => { const k = c.g.id + '|' + c.mk + '|' + c.sel + '|' + c.line; if (L[k]) return; L[k] = { g: c.g.id, mk: c.mk, sel: c.sel, line: c.line, p: r2(c.p), t: Date.now() }; ch = true; });
  const ks = Object.keys(L); if (ks.length > 500) ks.sort((a, b) => L[a].t - L[b].t).slice(0, ks.length - 500).forEach(k => delete L[k]);
  if (ch) LS.set('safe', L);
}
function safeGrade() {
  const L = LS.get('safe', {}); let ch = false;
  Object.values(L).forEach(l => { if (l.w != null) return; const f = DB.f[l.g]; if (!f) return; const r = outcome(l, f); if (r === 'won') l.w = 1; else if (r === 'lost') l.w = 0; else if (r) l.w = -1; else return; ch = true; });
  if (ch) LS.set('safe', L);
}
function safeStats() {
  const g = Object.values(LS.get('safe', {})).filter(l => l.w === 0 || l.w === 1);
  return g.length ? { n: g.length, w: g.filter(l => l.w === 1).length, p: g.reduce((a, l) => a + l.p, 0) / g.length } : null;
}
function slipKey(off) { const E = evAt(off || 0); return E ? E.id : null; }
function snapshotSlips() {
  const d = slipKey(0); if (!d) return; const old = SLIPS[d];
  if (old && (old.lock || old.legs.some(l => { const f = DB.f[l.g]; return !f || f.s !== 'pre' || new Date(f.d).getTime() <= Date.now(); }))) { old.lock = 1; LS.set('slips', SLIPS); return; }
  const C = safeCands(0), pick = safeAuto(C), legs = C.filter((_, i) => pick.has(i));
  if (legs.length) SLIPS[d] = { legs: legs.map(c => safeLeg(c)), p: r2(slipP(legs)), odd: r2(legs.reduce((a, c) => a * c.odd, 1)), t: Date.now() };
  const ks = Object.keys(SLIPS); if (ks.length > 60) ks.sort((a, b) => SLIPS[a].t - SLIPS[b].t).slice(0, ks.length - 60).forEach(k => delete SLIPS[k]);
  LS.set('slips', SLIPS);
}
function slipResult(S) {
  if (!S) return null; let w = 0, lost = false, pend = false;
  S.legs.forEach(l => { const f = DB.f[l.g]; const r = f ? outcome(l, f) : null; l.r = r; if (r == null) pend = true; else { if (r === 'won' || r === 'push' || r === 'void') w++; if (r === 'lost') lost = true; } });
  return { w, n: S.legs.length, st: lost ? 'lost' : pend ? 'open' : 'won' };
}

/* ---------- ficha do lutador: notas de 0 a 99 ---------- */
function fighterCard(M, s) {
  const x = fighterOf(M, s), sy = x.sy;
  const k = v => Math.round(clamp(v, 20, 99));
  const z = x.hz, B = { ko: 0.02, sub: 0.012 };
  const pw = z.eko > 0.05 ? (z.koW + 1) / (z.eko + 1) : 1, gr = z.esub > 0.05 ? (z.subW + 1) / (z.esub + 1) : 1, du = z.ekoL > 0.05 ? (z.koL + 1) / (z.ekoL + 1) : 1;
  return { x, ovr: k(70 + x.r * 10), pow: k(55 + 22 * Math.log(pw)), grap: k(55 + 22 * Math.log(gr)), chin: k(70 - 22 * Math.log(du)), exp: k(40 + 6 * Math.sqrt(x.k || 0) * 3), sy };
}
