---
published: true
layout: default
permalink: /sfma-presents/
title: 'SFMA Presents'
color: '#fc3158'
order: 2
---

In Progress. Check back soon


{% for n in site.sfmapresents  reversed %}
<article>
  <h4> {{ n.title }} </h4>
  <date>{{ n.date | date: '%B %d, %Y' }}</date>
  {{ n.content }}
</article>
{% endfor %}

