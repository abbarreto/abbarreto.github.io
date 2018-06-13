---
title: 'Unindo Python e Latex para gerar provas'
collection: posts
author: Adriano
date: 2018-06-11
permalink: /posts/2018/06/Primeiro-Post/
excerpt: 'resumo do post'
tags:
  - Tag1
  - Tag2
  - Tag3
  - Tag4
---
# Unindo Python e $$\LaTeX$$ para gerar provas
  
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
