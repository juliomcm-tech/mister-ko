# Mister Ko · estudos (MMA / UFC)

## Dados (grátis, no GitHub)
- **Greco1899/scrape_ufc_stats**: todos os eventos, combates, resultados, estatísticas por ronda e ficha de cada lutador do ufcstats.com, de 1994 até hoje. **Atualizado todos os dias** pelo autor (último: 18/11/2026, com o UFC 334). 9.001 combates.
- **shortlikeafox/ultimate_ufc_dataset**: odds de fecho do vencedor (2010–2026) e odds de método (KO/finalização/decisão, 2013–2026). 6.859 combates juntos aos do ufcstats.
- Ao vivo, na app: ESPN (cartazes e resultados no site API; odds DraftKings, vencedor e método, no core API).

## Modelo (`model.py`)
1. **Força**: rating logístico tipo Elo/Glicko. K = 0,31/(1+n/6), mínimo 0,28. Finalização conta +34%. Estreia −0,25. Idade depois dos 31: −0,074 por ano. Envergadura: +0,028 por polegada.
2. **Método — riscos concorrentes**: ritmo de KO e de finalização por minuto = base da categoria (com esquecimento) × ataque do lutador × fragilidade do adversário (empírico-Bayes, c=1,75, decaimento 0,89 por combate) × exp(0,3·força)^±½. P(decisão) = exp(−ΣλT).
3. **Rondas**: risco por ronda medido em 6.800 combates — 3 rondas: 1 · 0,81 · 0,50; 5 rondas: 1 · 0,93 · 0,77 · 0,49 · 0,49.

## Teste às cegas (afinado 2013-18, escolhido 2019-21, testado 2022-26)
| | Ko | Casas (fecho) | Moeda ao ar |
|---|---|---|---|
| Vencedor (log-loss) | 0,661 | 0,589 | 0,693 |
| Método, 6 desfechos (log-loss) | 1,615 | 1,545 | 1,792 |
| Método, só média da categoria | 1,656 | | |

- Misturar Ko com as odds no vencedor nunca bateu as odds sozinhas (peso ótimo ≈ 100% odds). A app começa em 95% e aprende.
- Bot «Ko sozinho» (aposta no lutador que o Ko acha que ganha, à odd de fecho): 2013-18 59,1% / −1,1%; 2019-21 57,3% / −5,8%; 2022-26 **60,7% / −2,0%**.
- Apostar onde o Ko discorda das odds: −5% a −21% (não usar).

## Conclusão honesta
As odds de MMA sabem muito (lesões, cortes de peso, campos de treino). O Ko serve para pôr preço em **todos** os desfechos (método e rondas), mesmo os que a casa não mostra, e para avisar quando a Betano paga acima do justo.
