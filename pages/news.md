---
layout: default
published: no
permalink: /news/
title: News
color: '#000'
order: 0
---


<!-- don't write anything below here -->

{% for n in site.news reversed %}
  {% if n.published == true  %}
<article>
  <h4> {{ n.title }} </h4>
  <date>{{ n.date | date: '%B %d, %Y' }}</date>
  {{ n.content }}
</article>
  {% endif %}
{% endfor %}
