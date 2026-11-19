"""Mister Ko · modelo MMA walk-forward (nada vê o futuro).
1) Força: rating logístico tipo Elo/Glicko — K grande para quem tem poucos combates, finalizações contam mais.
2) Covariáveis: idade, envergadura, paragem longa, estreia.
3) Método: riscos concorrentes (Poisson). Cada lutador tem um ritmo de KO e de finalização por minuto
   = base da categoria × ataque dele × fragilidade do adversário. Sem finalização em T minutos → decisão.
"""
import json, math, collections, datetime as dt
F = json.load(open('/home/claude/ko-build/fights.json'))
sig = lambda x: 1 / (1 + math.exp(-x))
DEF = dict(k0=0.9, n0=4.0, kmin=0.18, fin=0.35, split=0.5, new=-0.25, age=0.035, age0=31.0, reach=0.012, lay=0.10, s=1.0,
           c=2.5, beta=0.35, decay=0.85)
def years(a, b):
    return (dt.date.fromisoformat(a) - dt.date.fromisoformat(b)).days / 365.25
def fmin(f):
    if f['rd'] is None or f['t'] is None: return None
    return (f['rd'] - 1) * 5 + f['t'] / 60
def run(P=DEF, keep=None):
    R = collections.defaultdict(float); N = collections.Counter(); last = {}
    # método: contagens com decaimento por combate
    H = collections.defaultdict(lambda: dict(min=0.0, koW=0.0, koL=0.0, subW=0.0, subL=0.0, eko=0.0, esub=0.0, ekoL=0.0, esubL=0.0))
    BASE = collections.defaultdict(lambda: [0.0, 0.0, 0.0])   # por categoria: minutos, KOs, subs (acumulado, só passado)
    out = []
    for f in F:
        A, B = f['A'], f['B']; wc = wclass(f)
        # ----- previsão -----
        x = (R[A] - R[B]) / P['s']
        if N[A] == 0: x += P['new']
        if N[B] == 0: x -= P['new']
        ta, tb = f.get('ta') or {}, f.get('tb') or {}
        agA = years(f['d'], ta['dob']) if ta.get('dob') else None; agB = years(f['d'], tb['dob']) if tb.get('dob') else None
        if agA and agB: x -= P['age'] * (max(0, agA - P['age0']) - max(0, agB - P['age0']))
        if ta.get('r') and tb.get('r'): x += P['reach'] * (ta['r'] - tb['r'])
        lA = years(f['d'], last[A]) if A in last else 0; lB = years(f['d'], last[B]) if B in last else 0
        x -= P['lay'] * (max(0, lA - 1) - max(0, lB - 1))
        pA = sig(x)
        b = BASE[wc]; bm = b[0] if b[0] > 500 else None
        bko = (b[1] + 20) / (b[0] + 20 / 0.02) if True else 0.02   # KOs por minuto (com prior 0,02)
        bsub = (b[2] + 10) / (b[0] + 10 / 0.012)
        ha, hb = H[A], H[B]; c = P['c']
        oKA = (ha['koW'] + c) / (ha['eko'] + c); dKB = (hb['koL'] + c) / (hb['ekoL'] + c)
        oKB = (hb['koW'] + c) / (hb['eko'] + c); dKA = (ha['koL'] + c) / (ha['ekoL'] + c)
        oSA = (ha['subW'] + c) / (ha['esub'] + c); dSB = (hb['subL'] + c) / (hb['esubL'] + c)
        oSB = (hb['subW'] + c) / (hb['esub'] + c); dSA = (ha['subL'] + c) / (ha['esubL'] + c)
        g = math.exp(P['beta'] * x)   # o mais forte finaliza mais
        ls, lk = P.get('ls', 1.0), P.get('lk', 1.0)
        lam = dict(Ako=ls * lk * bko * oKA * dKB * g ** 0.5, Asub=ls * bsub * oSA * dSB * g ** 0.5, Bko=ls * lk * bko * oKB * dKA / g ** 0.5, Bsub=ls * bsub * oSB * dSA / g ** 0.5)
        T = 25 if f['sr'] == 5 else 15
        meth = method_probs(lam, T, pA)
        out.append(dict(f=f, pA=pA, x=x, lam=lam, T=T, meth=meth, nA=N[A], nB=N[B]))
        # ----- atualização -----
        if f['w'] not in ('A', 'B', 'D'): 
            last[A] = last[B] = f['d']; continue
        y = 1.0 if f['w'] == 'A' else 0.0 if f['w'] == 'B' else 0.5
        wgt = 1.0
        if f['m'] in ('KO', 'SUB'): wgt += P['fin']
        if f['m'] == 'DEC' and f.get('split'): wgt *= P['split']
        kA = max(P['kmin'], P['k0'] / (1 + N[A] / P['n0'])); kB = max(P['kmin'], P['k0'] / (1 + N[B] / P['n0']))
        e = y - pA
        R[A] += kA * wgt * e; R[B] -= kB * wgt * e
        N[A] += 1; N[B] += 1; last[A] = last[B] = f['d']
        mins = fmin(f)
        if mins is not None and f['m'] != 'OTHER':
            b[0] *= P.get('bdec', 0.998); b[1] *= P.get('bdec', 0.998); b[2] *= P.get('bdec', 0.998)
            b[0] += mins; b[1] += f['m'] == 'KO'; b[2] += f['m'] == 'SUB'
            for me, op, win in ((A, B, f['w'] == 'A'), (B, A, f['w'] == 'B')):
                h = H[me]
                for k in h: h[k] *= P['decay']
                h['min'] += mins; h['eko'] += bko * mins; h['ekoL'] += bko * mins; h['esub'] += bsub * mins; h['esubL'] += bsub * mins
                if f['m'] == 'KO': h['koW' if win else 'koL'] += 1
                if f['m'] == 'SUB': h['subW' if win else 'subL'] += 1
    if keep is not None: keep.update(R=dict(R), N=dict(N), last=last, H={k: dict(v) for k, v in H.items()}, BASE={k: list(v) for k, v in BASE.items()})
    return out
def wclass(f):
    w = f['wc']
    for k in ('Strawweight', 'Flyweight', 'Bantamweight', 'Featherweight', 'Lightweight', 'Welterweight', 'Middleweight', 'Light Heavyweight', 'Heavyweight', 'Catch', 'Open'):
        if k in w:
            if k == 'Heavyweight' and 'Light Heavyweight' in w: continue
            return ('W ' if 'Women' in w else '') + k
    return 'Other'
def method_probs(lam, T, pA=None):
    L = sum(lam.values()); pf = 1 - math.exp(-L * T)
    o = {k: v / L * pf for k, v in lam.items()}
    pdec = 1 - pf
    if pA is None: return o
    # o vencedor da decisão sai do rating; depois reescala cada lado para bater certo com pA
    fa, fb = o['Ako'] + o['Asub'], o['Bko'] + o['Bsub']
    # decisão: dividir para que o total de A seja pA (limitado)
    da = min(max(pA - fa, 0.02 * pdec), 0.98 * pdec) if pdec > 0 else 0
    res = dict(Ako=o['Ako'], Asub=o['Asub'], Adec=da, Bko=o['Bko'], Bsub=o['Bsub'], Bdec=pdec - da)
    sA = res['Ako'] + res['Asub'] + res['Adec']; sB = 1 - sA
    for k in ('Ako', 'Asub', 'Adec'): res[k] *= pA / sA
    for k in ('Bko', 'Bsub', 'Bdec'): res[k] *= (1 - pA) / sB
    return res
