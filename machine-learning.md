---
layout: default
title: Machine Learning and AI Projects
---

# Machine Learning and AI Projects

Here are my projects related to Machine Learning and AI:

{% for project in site.data.projects %}
{% if project.category == "Machine Learning and AI Projects" %}
- <a href="{{ project.url }}" class="contact-link" target="_blank">{{ project.title }}</a>  
  {{ project.description }}
  
{% endif %}
{% endfor %}
