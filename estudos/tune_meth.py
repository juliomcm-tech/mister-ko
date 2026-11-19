import sys, json; sys.path.insert(0,'.')
import meth_eval
P=json.load(open('params.json')); P.update(bdec=0.998, ls=1.0, lk=1.0)
f=lambda Q: meth_eval.ev(Q,'2013','2019')[1]['Ko']
best=f(P); print(best)
steps=dict(ls=0.2, lk=0.15, c=1.5, beta=0.2, decay=0.08, bdec=0.0015)
for rnd in range(3):
    for k,st in steps.items():
        for d in (st,-st):
            Q=dict(P); Q[k]=P[k]+d
            if Q[k]<=0 or (k in ('decay','bdec') and Q[k]>=1): continue
            v=f(Q)
            if v<best-1e-5: best,P=v,Q; print(rnd,k,round(Q[k],4),v)
        steps[k]=st*0.5
json.dump(P,open('params.json','w'),indent=1); print(P)
for lo,hi in (('2013','2019'),('2019','2022'),('2022','2027')): print(lo,hi,*meth_eval.ev(P,lo,hi))
