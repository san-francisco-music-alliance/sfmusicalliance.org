---
layout: default
published: true
permalink: /news/
title: News
color: "#000"
order: 0
---

<article>
<h4> Latest @SFMusicAlliance tweets </h4>
<script src="https://snapwidget.com/js/snapwidget.js"></script>
<iframe src="https://snapwidget.com/embed/238774" class="snapwidget-widget" allowTransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; "></iframe>
</article>

{% for n in site.news  reversed %}
<article>
  <h4> {{ n.title }} </h4>
  <date>{{ n.date | date: '%B %d, %Y' }}</date>
  {{ n.content }}
</article>
{% endfor %}

