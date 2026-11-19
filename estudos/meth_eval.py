import sys, math, json; sys.path.insert(0,'.')
import model
P=json.load(open('params.json'))
def ev(P, lo, hi, verbose=False):
    out=model.run(P); K=('Ako','Asub','Adec','Bko','Bsub','Bdec')
    S={'Ko':0,'base':0,'mercado':0}; n=0; cal={k:[0,0] for k in ('fin','ko','sub')}
    for o in out:
        f=o['f']
        if not(lo<=f['d'][:4]<hi) or f['w'] not in ('A','B') or f['m'] not in ('KO','SUB','DEC') or 'o' not in f: continue
        oo=f['o']
        if not all(oo['ml']) or not all(oo['ko']) or not all(oo['sub']) or not all(oo['dec']): continue
        oa,ob=oo['ml']; q=(1/oa)/(1/oa+1/ob)
        y=f['w']+{'KO':'ko','SUB':'sub','DEC':'dec'}[f['m']]
        mk={'Ako':1/oo['ko'][0],'Asub':1/oo['sub'][0],'Adec':1/oo['dec'][0],'Bko':1/oo['ko'][1],'Bsub':1/oo['sub'][1],'Bdec':1/oo['dec'][1]}
        s=sum(mk.values()); mk={k:v/s for k,v in mk.items()}
        m=model.method_probs(o['lam'],o['T'],q)
        # base: só taxas da categoria, sem lutador
        lam0={k:(o['lam']['Ako']+o['lam']['Bko'])/2 if 'ko' in k else (o['lam']['Asub']+o['lam']['Bsub'])/2 for k in o['lam']}
        b=model.method_probs(lam0,o['T'],q)
        for nm,d in (('Ko',m),('base',b),('mercado',mk)): S[nm]+=-math.log(max(1e-6,d[y]))
        n+=1
        pf=m['Ako']+m['Asub']+m['Bko']+m['Bsub']; cal['fin'][0]+=pf; cal['fin'][1]+=f['m']!='DEC'
        cal['ko'][0]+=m['Ako']+m['Bko']; cal['ko'][1]+=f['m']=='KO'; cal['sub'][0]+=m['Asub']+m['Bsub']; cal['sub'][1]+=f['m']=='SUB'
    return n,{k:round(v/n,4) for k,v in S.items()},{k:(round(a/n,3),round(b/n,3)) for k,(a,b) in cal.items()}
if __name__=='__main__':
    for lo,hi in (('2013','2019'),('2019','2022'),('2022','2027')): print(lo,hi,*ev(P,lo,hi))
