---
layout: default
published: true
permalink: /about/
title: About
color: '#E4B363'
order: 4
---


The Primary Goal of the SFMA is to coordinate the SF Music Industry to identify and pursue
collaborative projects that help ensure the vibrancy, success, and sustainability of the San
Francisco music community.

The San Francisco Music Alliance will engage in a variety of initiatives and educational activities throughout the entire city. SFMA will be led by Ambassadors representing artists, the
music industry and community organizations. In partnership with the San Francisco Entertainment Commission, the Mayor’s Office of Economic and Workforce Development and other community partners. The SFMA will support the diverse array of small businesses, nonprofit, and creative groups that contribute significantly to the vibrancy of San Francisco’s various community corridors.

<section class="about-lists">

<ul class="about-list-left">
  <li>
    <p class="list-category">Ambassadors</p>
  </li>
  {% for ambassador in site.data.about.ambassadors.array %}
    <li>
      <p class="name">{{ambassador.name}}</p>
      <img src="{{site.baseurl}}/media/{{ambassador.image}}" />
      {% if ambassador.bio %}
        <details>
          <summary>info</summary>
          {{ambassador.bio}}
        </details>
      {% endif%}
    </li>
  {% endfor %}
</ul>

<ul class="about-list-right">
  <li>
    <p class="list-category">Leadership Team</p>
  </li>
  {% for leader in site.data.about.leaders.array %}
    <li>
      <p class="name">{{leader.name}}</p>
      <img src="{{site.baseurl}}/media/{{leader.image}}" />
      {% if leader.bio %}
        <details>
          <summary>info</summary>
          {{leader.bio}}
        </details>
      {% endif%}
    </li>
  {% endfor %}

  <li>
    <p class="list-category">Entertainment Commission</p>
  </li>
  {% for ec in site.data.about.entertainment-commission.array %}
    <li>
      <p class="name">{{ec.name}}</p>
      <img src="{{site.baseurl}}/media/{{ec.image}}" />
      {% if ec.bio %}
        <details>
          <summary>info</summary>
          {{ec.bio}}
        </details>
      {% endif%}
    </li>
  {% endfor %}

  <li>
    <p class="list-category">OEWD</p>
  </li>
  {% for oewd in site.data.about.oewd.array %}
    <li>
      <p class="name">{{oewd.name}}</p>
      {% if oewd.image %}
        <img src="{{site.baseurl}}/media/{{oewd.image}}" />
      {% endif %}
      {% if oewd.bio %}
        <details>
          <summary>info</summary>
          {{oewd.bio}}
        </details>
      {% endif%}
    </li>
  {% endfor %}
</ul>

</section>
