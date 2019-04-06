---
title: 'Unindo Python e $$\LaTeX$$ para gerar provas'
collection: posts
author: Adriano
date: 2018-06-11
permalink: /posts/2018/06/Primeiro-Post/
excerpt: 'O pacote pythontex permite rodar um código em python dentro de um documento escrito em TeX. Então, utilizei esse pacote para elaborar provas objetivas, multipla-escolha, com um código que gera aleatóriamente os valores dos dados das questões, embaralha as alternativas de resposta e imprime o gabarito no final da prova.'
tags:
  - LaTeX
  - Python
---
O pacote pythontex permite rodar um código em python dentro de um documento escrito em TeX. Então, utilizei esse pacote para elaborar provas objetivas, multipla-escolha, com um código que gera aleatóriamente os valores dos dados das questões, embaralha as alternativas de resposta e imprime o gabarito no final da prova.

## PythonTeX
---
Link para o pacote [PythonTeX].

### Instalação
---
Aqui vai o texto explicando sobre o código... Exemplo do código usando o pacote *pythontex*:
    
```python
    \usepackage{pythontex}
    \begin{pycode}  
    import random
    import math
    def atribValor(Vmin, Vmax, s):  
    	valor = random.randrange(Vmin, stop = Vmax, step = s, _int = int)
    	return valor
    def geraAlter(listaRqX,seqX):
    	while len(listaRqX)<=3:
    			item = random.choice(seqX)
    			if (item) not in listaRqX:
    				listaRqX.append(item)
    	random.shuffle(listaRqX)
    	return listaRqX
    \end{pycode}
```



[pythontex]: <https://ctan.org/pkg/pythontex>