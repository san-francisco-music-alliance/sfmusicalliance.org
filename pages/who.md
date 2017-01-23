---
layout: default
published: true
permalink: /who/
title: Who
order: 2
color: '#8F63A5'
---

Please send us your info if you'd like to be included.

We're trying to compile everyone involved in the SF music industry in an attempt to communicate better and create more opportunity for one another.


<section class="who">

{% for category_hash in site.data.who %}
{% assign category = category_hash[1] %}

{% if category.members %}
<details>
{% else %}
<details class="empty">
{% endif %}
  <summary>
    <big>{{category.category}}</big>
  </summary>
  <ul style="list-style-type: square">
    {% if category.members %}
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
    {% else %}
    <li>
      Nothing here yet. <a href="{{ site.url }}/contact#email">Have any suggestions?</a>
    </li>
    {% endif %}
  </ul>
</details>

{% endfor %}

</section>


