---
permalink: /edit
published: true
layout: default
title: 'edit'
color: '#fecb2e'
hidden: true
order: 99999
---
<h3>Add</h3>
<h4>
  <a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org-default/new/master/_news" target="_blank">News</a>
  <a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org-default/tree/master/_news" target="_blank"><i>(see all)</i></a>
</h4>

<h4>
  <a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org-default/new/master/_sfmapresents" target="_blank">SFMA Presents</a>
  <a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org-default/tree/master/_sfmapresents" target="_blank"><i>(see all)</i></a>
</h4>

<h4>
  <a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org-default/tree/master/_data/who" target="_blank">Who</a>
</h4>

<h3>Edit</h3>

{% assign sortedPages = site.pages | sort:"order" %}
{% for page in sortedPages %}
  {% if page.title !=  'index' and page.hidden != true %}
<h4><a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org-default/edit/master/{{ page.path }}" target="_blank">{{ page.path }}</a></h4>
  {% endif %}
{% endfor %}

