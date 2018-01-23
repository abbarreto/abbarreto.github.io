---
layout: archive
title: "Artigos"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  Você pode também encontrar meus artigos no <u><a href="{{author.googlescholar}}">meu perfil no Google Scholar</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
