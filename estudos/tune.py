import sys, math, json; sys.path.insert(0, '/home/claude/ko-build')
import model
def ll(p, y): p = min(max(p, 1e-6), 1 - 1e-6); return -math.log(p if y else 1 - p)
def score(P, lo='2013', hi='2019'):
    out = model.run(P); s = 0; n = 0
    for o in out:
        f = o['f']
        if lo <= f['d'][:4] < hi and f['w'] in ('A', 'B'): s += ll(o['pA'], f['w'] == 'A'); n += 1
    return s / n
P = dict(model.DEF); best = score(P); print('início', round(best, 4))
steps = dict(k0=0.3, n0=2, kmin=0.06, fin=0.2, new=0.15, age=0.02, reach=0.008, lay=0.06, s=0.4)
for rnd in range(3):
    for k, st in steps.items():
        for d in (st, -st):
            Q = dict(P); Q[k] = max(0.0, P[k] + d)
            if k == 's' and Q[k] < 0.2: continue
            v = score(Q)
            if v < best - 1e-5: best, P = v, Q; print(rnd, k, round(Q[k], 3), round(v, 4))
        steps[k] = st * 0.6
json.dump(P, open('params.json', 'w'), indent=1); print(P)
for lo, hi in (('2019', '2022'), ('2022', '2027')): print(lo, hi, round(score(P, lo, hi), 4))
