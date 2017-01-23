---
layout: default
published: true
permalink: /news/
title: News
color: '#000'
order: 0
---

{% for n in site.news reversed %}
  {% if n.published == true  %}
<article>
  <h4> {{ n.title }} </h4>
  <date>{{ n.date | date: '%B %d, %Y' }}</date>
  {{ n.content }}
</article>
  {% endif %}
{% endfor %}