import sys, json, math, collections, re, unicodedata; sys.path.insert(0, '/home/claude/ko-build')
import model
P = json.load(open('/home/claude/ko-build/params.json'))
keep = {}; out = model.run(P, keep)
def key(n):
    n = unicodedata.normalize('NFD', n or '').encode('ascii', 'ignore').decode().lower(); return re.sub(r'[^a-z]', '', n)
rec = collections.defaultdict(lambda: [0, 0, 0, 0]); last5 = collections.defaultdict(list); sty = {}
wcl = {}; name = {}; tott = {}
for f in model.F:
    for me, op, side, s in ((f['A'], f['B'], 'A', f.get('sa')), (f['B'], f['A'], 'B', f.get('sb'))):
        name[me] = me; wcl[me] = model.wclass(f); t = f.get('ta' if side == 'A' else 'tb')
        if t: tott[me] = t
        r = 'W' if f['w'] == side else 'D' if f['w'] == 'D' else 'NC' if f['w'] == 'NC' else 'L'
        rec[me][['W', 'L', 'D', 'NC'].index(r)] += 1
        last5[me].append([f['d'], op, r, f['m'], f['rd']]); last5[me] = last5[me][-5:]
        mins = model.fmin(f); so = f.get('sb' if side == 'A' else 'sa')
        if s and so and mins and mins > 0.5:
            z = sty.setdefault(me, dict(m=0, sl=0, sa=0, sab=0, td=0, tda=0, sub=0, kd=0, ctrl=0))
            for k in z: z[k] *= 0.85
            z['m'] += mins; z['sl'] += s['sl']; z['sa'] += s['sa']; z['sab'] += so['sl']; z['td'] += s['tl']; z['tda'] += s['ta']; z['sub'] += s['sub']; z['kd'] += s['kd']; z['ctrl'] += s['ctrl']
R, N, last, H = keep['R'], keep['N'], keep['last'], keep['H']
FI = {}
for n, d in last.items():
    if d < '2019-01-01': continue
    h = H.get(n, {}); z = sty.get(n); t = tott.get(n) or {}
    FI[key(n)] = dict(n=name[n], r=round(R.get(n, 0), 4), k=N.get(n, 0), l=d, wc=wcl[n], rec=rec[n][:3], f5=last5[n],
        dob=t.get('dob'), h=t.get('h'), re=t.get('r'), st=t.get('st') or '',
        hz=[round(h.get(k, 0), 3) for k in ('koW', 'koL', 'subW', 'subL', 'eko', 'ekoL', 'esub', 'esubL', 'min')],
        sy=None if not z or z['m'] < 3 else [round(z['sl'] / z['m'], 2), round(z['sab'] / z['m'], 2), round(z['sl'] / max(1, z['sa']), 2), round(z['td'] / z['m'] * 15, 2), round(z['td'] / max(1, z['tda']), 2), round(z['sub'] / z['m'] * 15, 2), round(z['ctrl'] / z['m'] / 60, 2)])
BASE = {k: [round(v[0], 1), round(v[1], 2), round(v[2], 2)] for k, v in keep['BASE'].items()}
cut = model.F[-1]['d']
seed = dict(v=1, cut=cut, par=P, base=BASE, rp={'3': [1, 0.81, 0.50], '5': [1, 0.93, 0.77, 0.49, 0.49]}, fi=FI,
            test=dict(win=dict(ko=0.6612, mk=0.5887, n=1882), meth=dict(ko=1.615, base=1.6562, mk=1.5449, n=1736), bot=dict(acerto=0.607, roi=-0.02, n=1882)))
json.dump(seed, open('/home/claude/ko-build/seed.json', 'w'), separators=(',', ':'), ensure_ascii=False)
import os; print(len(FI), 'lutadores', cut, os.path.getsize('/home/claude/ko-build/seed.json') // 1024, 'KB')
top = sorted(FI.values(), key=lambda x: -x['r'])[:8]; print([(x['n'], x['r'], x['wc']) for x in top])
