---
title: Leading Change Institutes
layout: page
slug: institutes
permalink: /institutes/
---

{% for institute in site.institutes %}
    <h2><a href="{{ institute.url }}">{{institute.title}}</a></h2>
{% endfor %}
