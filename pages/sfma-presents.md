---
layout: default
published: true
permalink: /sfma-presents/
title: SFMA Presents
color: '#fc3158'
order: 2
---
{% for n in site.sfmapresents  reversed %}
<article>
  <h4> {{ n.title }} </h4>
  <date>{{ n.date | date: '%B %d, %Y' }}</date>
  {{ n.content }}
</article>
{% endfor %}
