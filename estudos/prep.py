"""Mister Ko · prepara os dados (Greco1899/scrape_ufc_stats + shortlikeafox/ultimate_ufc_dataset)."""
import csv, json, re, unicodedata, collections, datetime as dt
G = '/home/claude/ko-data/Greco1899_scrape_ufc_stats/'
S = '/home/claude/ko-data/shortlikeafox_ultimate_ufc_dataset/ufc-master.csv'
def key(n):
    n = unicodedata.normalize('NFD', n or '').encode('ascii', 'ignore').decode().lower()
    return re.sub(r'[^a-z]', '', n)
sp = lambda s: re.sub(r'\s+', ' ', (s or '').strip())
E = {sp(e['EVENT']): dt.datetime.strptime(e['DATE'].strip(), '%B %d, %Y').date().isoformat() for e in csv.DictReader(open(G + 'ufc_event_details.csv'))}
def secs(t):
    m, s = t.strip().split(':'); return int(m) * 60 + int(s)
def ofrac(s):
    a = re.match(r'(\d+) of (\d+)', s or ''); return (int(a[1]), int(a[2])) if a else (0, 0)
# estatísticas por combate e lutador
ST = collections.defaultdict(lambda: dict(kd=0, sl=0, sa=0, tl=0, ta=0, sub=0, ctrl=0, hl=0, gl=0))
for r in csv.DictReader(open(G + 'ufc_fight_stats.csv')):
    if not r['ROUND'].startswith('Round'): continue
    k = (sp(r['EVENT']), sp(r['BOUT']), key(r['FIGHTER']))
    d = ST[k]; l, a = ofrac(r['SIG.STR.']); d['sl'] += l; d['sa'] += a
    l, a = ofrac(r['TD']); d['tl'] += l; d['ta'] += a
    d['kd'] += int(r['KD'] or 0) if (r['KD'] or '').isdigit() else 0
    d['sub'] += int(r['SUB.ATT'] or 0) if (r['SUB.ATT'] or '').isdigit() else 0
    try: d['ctrl'] += secs(r['CTRL'])
    except Exception: pass
    d['hl'] += ofrac(r['HEAD'])[0]; d['gl'] += ofrac(r['GROUND'])[0]
TOT = {}
for r in csv.DictReader(open(G + 'ufc_fighter_tott.csv')):
    def inch(h):
        m = re.match(r"(\d+)' (\d+)", h or ''); return int(m[1]) * 12 + int(m[2]) if m else None
    rc = re.match(r'(\d+)', r['REACH'] or ''); 
    try: dob = dt.datetime.strptime(r['DOB'].strip(), '%b %d, %Y').date().isoformat()
    except Exception: dob = None
    TOT.setdefault(key(r['FIGHTER']), dict(h=inch(r['HEIGHT']), r=int(rc[1]) if rc else None, st=(r['STANCE'] or '').strip(), dob=dob))
F = []
for r in csv.DictReader(open(G + 'ufc_fight_results.csv')):
    ev = sp(r['EVENT']); d = E.get(ev)
    if not d: continue
    bout = sp(r['BOUT']); m = re.match(r'(.+?) vs\.? (.+)', bout)
    if not m: continue
    A, B = sp(m[1]), sp(m[2]); oc = r['OUTCOME'].strip()
    w = {'W/L': 'A', 'L/W': 'B', 'D/D': 'D', 'NC/NC': 'NC'}.get(oc)
    me = r['METHOD'].strip()
    meth = 'DEC' if me.startswith('Decision') else 'KO' if me.startswith('KO') or me.startswith('TKO') or me == 'Could Not Continue' else 'SUB' if me.startswith('Submission') else 'DQ' if me == 'DQ' else 'OTHER'
    tf = r['TIME FORMAT'].strip(); sr = 5 if tf.startswith('5 Rnd') else 3 if tf.startswith('3 Rnd') else None
    try: rd = int(r['ROUND']); t = secs(r['TIME'])
    except Exception: rd, t = None, None
    wc = r['WEIGHTCLASS']
    F.append(dict(d=d, ev=ev, A=A, B=B, w=w, m=meth, rd=rd, t=t, sr=sr, wc=wc, title='Title' in wc, fem="Women" in wc,
                  sa=ST.get((ev, bout, key(A))), sb=ST.get((ev, bout, key(B)))))
F.sort(key=lambda f: f['d'])
# odds (shortlikeafox): juntar por data (±1 dia) e nomes
OD = {}
for r in csv.DictReader(open(S)):
    OD.setdefault(frozenset((key(r['R_fighter']), key(r['B_fighter']))), []).append(r)
def am(x):
    try: x = float(x)
    except Exception: return None
    if abs(x) < 100: return None
    return 1 + x / 100 if x > 0 else 1 + 100 / -x
n = 0
for f in F:
    L = OD.get(frozenset((key(f['A']), key(f['B']))))
    if not L: continue
    for r in L:
        if abs((dt.date.fromisoformat(r['date']) - dt.date.fromisoformat(f['d'])).days) <= 2:
            rA = key(r['R_fighter']) == key(f['A'])
            P = lambda a, b: (am(r[a]), am(r[b])) if rA else (am(r[b]), am(r[a]))
            f['o'] = dict(ml=P('R_odds', 'B_odds'), ko=P('r_ko_odds', 'b_ko_odds'), sub=P('r_sub_odds', 'b_sub_odds'), dec=P('r_dec_odds', 'b_dec_odds'))
            n += 1; break
for f in F:
    for s, nm in (('ta', 'A'), ('tb', 'B')): f[s] = TOT.get(key(f[nm]))
json.dump(F, open('fights.json', 'w'))
print(len(F), 'combates', F[0]['d'], F[-1]['d'], '· com odds', n, '· com stats', sum(1 for f in F if f['sa']))
print(collections.Counter((f['d'][:4], 'o' in f) for f in F if f['d'] >= '2010').most_common(40)[:0])
