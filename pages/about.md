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

__Leadership Team__

__Ambassadors__

{% for ambassador in site.data.ambassadors.array %}
	<h2>{{ambassador.name}}</h2>
	<img src="{{site.baseurl}}/media/{{ambassador.image}}">
	<p>{{ambassador.bio}}</p>	
{% endfor %}
