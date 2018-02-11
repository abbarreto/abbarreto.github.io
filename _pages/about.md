---
permalink: /year-archive/
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Página pessoal de Adriano B. Barreto
====================================
******
{% include base_path %}
~Prefiro ter perguntas que não podem ser respondidas do que respostas que não podem ser questionadas.~(Richard Feynman)
{% capture written_year %}'None'{% endcapture %}
{% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% if year != written_year %}
    <h2 id="{{ year | slugify }}" class="archive__subtitle">{{ year }}</h2>
    {% capture written_year %}{{ year }}{% endcapture %}
  {% endif %}
  {% include archive-single.html %}
{% endfor %}
