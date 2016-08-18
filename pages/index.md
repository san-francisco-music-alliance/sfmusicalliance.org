---
permalink: /index
published: true
layout: default
title: 'index'
color: '#fecb2e'
---

<script>
//So that we see the initial animation
setTimeout(function() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(!isMobile) window.location = document.querySelector('nav a').href
}, 1750)
</script>