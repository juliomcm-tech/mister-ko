// Teste do Mister Ko com cartazes falsos no formato da ESPN (MMA/UFC)
import { chromium } from '/opt/npm-tools/node_modules/playwright/index.mjs';
import http from 'http'; import fs from 'fs'; import path from 'path';
const ROOT = '/home/claude/mister-ko', OUT = '/home/claude/tools-ko/shots', PORT = +(process.env.PORT || 8795);
fs.mkdirSync(OUT, { recursive: true });
const srv = http.createServer((q, r) => { let p = decodeURIComponent(q.url.split('?')[0]); if (p === '/') p = '/index.html'; const f = path.join(ROOT, p); if (!fs.existsSync(f)) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'Content-Type': p.endsWith('.html') ? 'text/html' : p.endsWith('.js') ? 'text/javascript' : p.endsWith('.png') ? 'image/png' : p.endsWith('.webp') ? 'image/webp' : 'application/json' }); r.end(fs.readFileSync(f)); }).listen(PORT);
const seed = JSON.parse(fs.readFileSync(ROOT + '/seed.json'));
const act = Object.values(seed.fi).filter(x => x.l >= '2025-06-01' && x.k >= 4);
const byWc = {}; act.forEach(x => (byWc[x.wc] = byWc[x.wc] || []).push(x));
const pairs = []; Object.entries(byWc).forEach(([wc, L]) => { L.sort((a, b) => b.r - a.r); for (let i = 0; i + 1 < L.length && pairs.length < 26; i += 7) pairs.push([L[i], L[i + 1], wc]); });
const WCT = { 'Lightweight': 'Lightweight', 'Welterweight': 'Welterweight', 'Middleweight': 'Middleweight', 'Heavyweight': 'Heavyweight', 'Light Heavyweight': 'Light Heavyweight', 'Featherweight': 'Featherweight', 'Bantamweight': 'Bantamweight', 'Flyweight': 'Flyweight', 'W Strawweight': "Women's Strawweight", 'W Flyweight': "Women's Flyweight", 'W Bantamweight': "Women's Bantamweight" };
const day = (n, h) => { const d = new Date(Date.now() + n * 864e5); d.setUTCHours(h, 0, 0, 0); return d.toISOString().replace(':00.000Z', 'Z'); };
let MODE = 'pre';
let aid = 5000000;
const mk = (ev, list, dayOff, done) => ({ id: ev.id, name: ev.name, shortName: ev.sn, date: day(dayOff, 22), competitions: list.map(([a, b, wc], i) => {
  const ia = String(aid++), ib = String(aid++);
  const st = done ? { type: { state: 'post', completed: true, name: 'STATUS_FINAL', shortDetail: 'Final' }, period: i % 3 === 0 ? 3 : 1 + i % 2, displayClock: i % 3 === 0 ? '5:00' : '2:1' + i % 10, result: i % 3 === 0 ? { name: 'decision-unanimous', displayName: 'Decision - Unanimous' } : i % 3 === 1 ? { name: 'kotko', displayName: 'KO/TKO' } : { name: 'submission', displayName: 'Submission' } } : { type: { state: 'pre', completed: false, name: 'STATUS_SCHEDULED' } };
  return { id: ev.id + '0' + i, date: day(dayOff, 22 + Math.floor(i / 4)), type: { text: WCT[wc] || wc, abbreviation: 'LW' }, format: { regulation: { periods: i === list.length - 1 ? 5 : 3 } }, status: st,
    competitors: [{ id: ia, order: 1, winner: done && i % 4 !== 2, athlete: { id: ia, displayName: a.n, flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/usa.png', alt: 'EUA' }, headshot: { href: 'https://a.espncdn.com/x/' + ia + '.png' } }, records: [{ type: 'total', summary: a.rec.join('-') }] },
                  { id: ib, order: 2, winner: done && i % 4 === 2, athlete: { id: ib, displayName: b.n, flag: { href: 'https://a.espncdn.com/i/teamlogos/countries/500/bra.png', alt: 'Brasil' } }, records: [{ type: 'total', summary: b.rec.join('-') }] }] };
}) });
const E1 = { id: '600100', name: 'UFC Fight Night: Teste vs Passado', sn: 'UFC FN' }, E2 = { id: '600200', name: 'UFC 335: Grande vs Cartaz', sn: 'UFC 335' };
const past = mk(E1, pairs.slice(0, 10), -2, true);   // já acabou (depois do arquivo)
let fut = mk(E2, pairs.slice(10, 23), 2, false);
const ODDS = {};
fut.competitions.forEach((c, i) => { const [A, B] = c.competitors; const favA = i % 3 !== 1; ODDS[c.id] = { items: [{ provider: { id: '100', name: 'DraftKings' }, details: `${(favA ? A : B).athlete.displayName} -${150 + i * 20}`,
  homeAthleteOdds: { athlete: { $ref: `http://sports.core.api.espn.com/v2/sports/mma/athletes/${B.athlete.id}?lang=en` }, favorite: !favA, moneyLine: favA ? 130 + i * 15 : -(150 + i * 20), current: { victoryMethod: { koTkoDq: { american: '+400' }, submission: { american: '+900' }, points: { american: '+250' } } } },
  awayAthleteOdds: { athlete: { $ref: `http://sports.core.api.espn.com/v2/sports/mma/athletes/${A.athlete.id}?lang=en` }, favorite: favA, moneyLine: favA ? -(150 + i * 20) : 130 + i * 15, current: { victoryMethod: { koTkoDq: { american: '+200' }, submission: { american: '+600' }, points: { american: '+150' } } } } }] }; });
const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 400, height: 860 }, deviceScaleFactor: 2 });
let reqs = 0;
await ctx.route(/site\.api\.espn\.com|sports\.core\.api\.espn\.com|corsproxy|allorigins/, r => { reqs++; const u = decodeURIComponent(r.request().url());
  if (/scoreboard/.test(u)) { const evs = [past, fut].filter(e => { const m = u.match(/dates=(\d{8})-(\d{8})/); if (!m) return true; const d = e.date.slice(0, 10).replace(/-/g, ''); return d >= m[1] && d <= m[2]; }); return r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ events: evs }) }); }
  const m = u.match(/competitions\/(\d+)\/odds/); if (m) return r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(ODDS[m[1]] || { items: [] }) });
  r.fulfill({ status: 404, body: '' }); });
await ctx.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
await ctx.route(/espncdn/, r => r.fulfill({ status: 404, body: '' }));
const pg = await ctx.newPage(); const errs = []; pg.on('pageerror', e => errs.push(e.message)); pg.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await pg.goto(`http://localhost:${PORT}/`); await pg.waitForFunction(() => typeof SEED !== 'undefined' && SEED, null, { timeout: 15000 });
await pg.waitForTimeout(400); await pg.screenshot({ path: OUT + '/0-inicio-vazio.png' });
const t0 = Date.now(); await pg.evaluate(() => refresh()); await pg.waitForFunction(() => !BUSY, null, { timeout: 60000 });
console.log('atualização', ((Date.now() - t0) / 1000).toFixed(1) + 's', 'pedidos', reqs);
console.log('estado', JSON.stringify(await pg.evaluate(() => ({ combates: Object.keys(DB.f).length, eventos: Object.keys(DB.ev).length, preds: Object.keys(PREDS).length, espnReplay: getModel().nEspn, slips: Object.keys(SLIPS), bot: BETS.filter(b => b.acc === 'pi').length }))));
console.log('exemplo', JSON.stringify(await pg.evaluate(() => { const f = Object.values(DB.f).find(x => x.s === 'pre' && x.o); const P = predict(f); return { f: gLabel(f), pK: P.pK.toFixed(3), nv: P.pNV && P.pNV.toFixed(3), pA: P.pA.toFixed(3), W: P.W, pdec: P.pdec.toFixed(3), m6: Object.fromEntries(MET_K.map(k => [k, P.m6[k].toFixed(3)])), soma: MET_K.reduce((s, k) => s + P.m6[k], 0).toFixed(4), o15: probs(P, 'tr', 'o', 1.5).w.toFixed(3), surv15: P.surv(P.T).toFixed(3) }; })));
await pg.waitForTimeout(400); await pg.screenshot({ path: OUT + '/1-inicio.png' });
await pg.evaluate(() => { window.scrollTo(0, 700); }); await pg.waitForTimeout(200); await pg.screenshot({ path: OUT + '/1b-inicio.png' });
await pg.evaluate(() => { BOPEN = true; DAY = 0; go('jogos'); }); await pg.waitForTimeout(400); await pg.screenshot({ path: OUT + '/2-combates.png' });
await pg.evaluate(() => window.scrollTo(0, 1100)); await pg.waitForTimeout(200); await pg.screenshot({ path: OUT + '/3-cartoes.png' });
const fid = await pg.evaluate(() => Object.values(DB.f).filter(x => x.s === 'pre' && x.o).sort((a, b) => b.d < a.d ? -1 : 1)[0].id);
for (const [t, f] of [['ana', '4-analise'], ['mk', '5-odds'], ['eq', '6-lutadores']]) { await pg.evaluate(([id, t]) => { GT = t; openFight(id); }, [fid, t]); await pg.waitForTimeout(250); await pg.screenshot({ path: OUT + `/${f}.png` }); }
await pg.evaluate(id => { GT = 'ana'; openFight(id); document.getElementById('sheetBox').scrollTop = 520; }, fid); await pg.waitForTimeout(200); await pg.screenshot({ path: OUT + '/4b-curva.png' });
// odds da Betano e aposta (duelo)
await pg.evaluate(id => { GT = 'mk'; openFight(id); }, fid);
await pg.fill('#bo_ma', '1,80'); await pg.fill('#bo_mb', '2,10'); await pg.fill('#bo_Ako', '3,40'); await pg.fill('#bo_dy', '2,60'); await pg.fill('#bo_dn', '1,50');
await pg.evaluate(id => saveBO(id), fid); await pg.waitForTimeout(200);
console.log('valor', JSON.stringify(await pg.evaluate(id => { const P = predict(DB.f[id]); return P.cands.filter(c => c.src === 'Betano').map(c => `${selLabel(DB.f[id], c.mk, c.sel, c.line)} p${c.p.toFixed(2)} ev${c.ev.toFixed(2)}`); }, fid)));
await pg.evaluate(id => { closeSheet(); openBet(id); }, fid); await pg.waitForTimeout(200);
await pg.fill('#bOdd', '1,80'); await pg.fill('#bStake', '2'); await pg.waitForTimeout(100); await pg.click('#bGo'); await pg.waitForTimeout(300); await pg.screenshot({ path: OUT + '/7-duelo.png' });
await pg.evaluate(() => closeSheet());
// método
await pg.evaluate(id => { openBet(id); BF.mk = 'met'; BF.sel = 'Ako'; presetBF(); drawBet(); }, fid); await pg.waitForTimeout(150); await pg.screenshot({ path: OUT + '/7b-metodo.png' });
await pg.fill('#bOdd', '3,40'); await pg.fill('#bStake', '1'); await pg.click('#bGo'); await pg.waitForTimeout(200); await pg.evaluate(() => closeSheet());
// boletim seguro
const slip = await pg.evaluate(() => { DAY = 0; BOPEN = true; BT = 'seg'; go('jogos'); return SS.C.map(c => c.lb + ' ' + Math.round(c.p * 100) + '%'); });
console.log('seguro', JSON.stringify(slip));
// agora o cartaz acaba: resultados
aid = 5000000 + 20; fut = mk(E2, pairs.slice(10, 23), 2, true); fut.date = past.date; fut.competitions.forEach((c, i) => { c.id = '600200' + '0' + i; c.date = day(-1, 22); });
await pg.evaluate(() => { DB.days = {}; refresh(); }); await pg.waitForFunction(() => !BUSY, null, { timeout: 60000 });
console.log('liquidação', JSON.stringify(await pg.evaluate(() => BETS.filter(b => b.st !== 'pass').map(b => [b.acc, b.lb, b.st, b.res]).slice(0, 12))));
console.log('veredito', JSON.stringify(await pg.evaluate(() => { const S = statsAll(); return { n: S.n, win: S.win, mN: S.mN, mW: S.mW, bn: S.bn }; })));
for (const [v, f] of [['inicio', '8-inicio-depois'], ['jogos', '9-cartaz-acabado'], ['duelo', '10-duelo'], ['contas', '11-contas'], ['mais', '12-mais']]) { await pg.evaluate(v => { DAY = -1; go(v); }, v); await pg.waitForTimeout(250); await pg.screenshot({ path: OUT + `/${f}.png` }); }
await pg.evaluate(() => { ACCF = 'pi'; go('contas'); }); await pg.waitForTimeout(200); await pg.screenshot({ path: OUT + '/13-bot.png', fullPage: true });
for (const [fn, f] of [['openStats', '14-stats'], ['openRank', '15-ranking'], ['openHow', '16-como'], ['openHelp', '17-ajuda'], ['openCfg', '18-cfg']]) { await pg.evaluate(fn => window[fn](), fn); await pg.waitForTimeout(250); await pg.screenshot({ path: OUT + `/${f}.png` }); }
const chk = await pg.evaluate(() => {
  const A = { n: 'Ana A', aid: '1', k: 'anaa' }, B = { n: 'Bea B', aid: '2', k: 'beab' };
  const f = (o) => Object.assign({ id: 'x', ev: 'e', s: 'post', A, B, sr: 3, w: 'A', m: 'KO', rd: 2, t: 60 }, o);
  const t = [];
  t.push(['decisão técnica R2: mais de 2,5 perde', outcome({ mk: 'tr', sel: 'o', line: 2.5 }, f({ m: 'DEC', rd: 2, t: 180 })) === 'lost']);
  t.push(['decisão técnica: até ao fim = não', outcome({ mk: 'dist', sel: 'y' }, f({ m: 'DEC', rd: 2 })) === 'lost']);
  t.push(['decisão normal: até ao fim = sim', outcome({ mk: 'dist', sel: 'y' }, f({ m: 'DEC', rd: 3, t: 300 })) === 'won']);
  t.push(['sem vencedor marcado: pendente', outcome({ mk: 'ml', sel: 'A' }, f({ w: null })) === null]);
  t.push(['ordem trocada pela ESPN: segue o lutador', outcome({ mk: 'ml', sel: 'A', sa: '1' }, f({ A: B, B: A, w: 'B' })) === 'won']);
  t.push(['adversário substituído: o lutador da aposta saiu → anulada', outcome({ mk: 'ml', sel: 'A', sa: '9' }, f({})) === 'void']);
  t.push(['DQ conta como KO no método', outcome({ mk: 'met', sel: 'Ako' }, f({ m: 'DQ' })) === 'won']);
  t.push(['empate: vencedor devolvido', outcome({ mk: 'ml', sel: 'A' }, f({ w: 'D', m: 'DEC', rd: 3 })) === 'push']);
  t.push(['método desconhecido: pendente', outcome({ mk: 'dist', sel: 'n' }, f({ m: null })) === null]);
  t.push(['«TKO - submission to strikes» é KO', methodOf({ result: { name: 'tko', displayName: 'TKO - Submission to Strikes' } }) === 'KO']);
  t.push(['calibW sem dados = peso inicial', Math.abs(calibW().w - CFG.mktW) < 1e-9]);
  return t;
});
const bad = chk.filter(x => !x[1]); console.log('verificações', chk.length - bad.length + '/' + chk.length, bad.length ? JSON.stringify(bad) : 'todas ok');
console.log('erros JS:', errs.filter(e => !/ERR_FAILED|404/.test(e)).length ? errs : 'nenhum');
await b.close(); srv.close();
