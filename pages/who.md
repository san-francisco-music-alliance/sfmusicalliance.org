---
layout: default
published: true
permalink: /who/
title: Who
order: 2
color: '#c377e0'
---
{% for category_hash in site.data.who %}
{% assign category = category_hash[1] %}
#### {{category.category}}
<ul style="list-style-type: square">
  {% for person in category.members %}
    <li>
      <span>
        {% if person.email%}
          <a href="mailto:{{person.email}}">{{person.name}}</a>
        {% else %}
          {{person.name}}
        {% endif %}
      </span>
      {% if person.website%}
        <span> - <a href="{{person.website}}" target="_blank"> website </a></span>
      {% endif %}
    </li>
  {% endfor %}
</ul>
{% endfor %}
