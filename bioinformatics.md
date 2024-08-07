---
layout: default
title: Bioinformatics Projects
---

# Bioinformatics Projects

#Here are my projects related to Bioinformatics:

{% for project in site.data.projects %}
{% if project.category == "Bioinformatics Projects" %}
- <a href="{{ project.url }}" class="contact-link" target="_blank">{{ project.title }}</a>  
  {{ project.description }}
  
{% endif %}
{% endfor %}
