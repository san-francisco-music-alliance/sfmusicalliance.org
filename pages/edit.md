---
layout: default
permalink: /edit
published: true
title: edit
color: '#fecb2e'
hidden: true
order: 99999
---
<h3>Add content</h3>
<h4>
  <a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org/new/master/_news" target="_blank">News</a>
  <a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org/tree/master/_news" target="_blank"><i>(see all)</i></a>
</h4>

<h4>
  <a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org/new/master/_sfmapresents" target="_blank">SFMA Presents</a>
  <a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org/tree/master/_sfmapresents" target="_blank"><i>(see all)</i></a>
</h4>


<h4>
  <a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org/tree/master/_data/about" target="_blank">About</a>
</h4>


<h4>
  <a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org/tree/master/_data/who" target="_blank">Who</a>
</h4>

<h3>Edit Templates</h3>

{% assign sortedPages = site.pages | sort:"order" %}
{% for page in sortedPages %}
  {% if page.title !=  'index' and page.hidden != true %}
<h4><a href="http://prose.io/#san-francisco-music-alliance/sfmusicalliance.org/edit/master/{{ page.path }}" target="_blank">{{ page.path }}</a></h4>
  {% endif %}
{% endfor %}



<h3>Upload/Download images</h3>

<h4>
  <a href="https://github.com/san-francisco-music-alliance/sfmusicalliance.org/tree/master/media" target="_blank">upload to media/</a>
</h4>
