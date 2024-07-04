---
layout: default
title: Home
---


# Welcome to my portfolio!

Here are some of my projects:

{% for project in site.data.projects %}
- [{{ project.title }}]({{ project.url }})
  - {{ project.description }}
{% endfor %}
