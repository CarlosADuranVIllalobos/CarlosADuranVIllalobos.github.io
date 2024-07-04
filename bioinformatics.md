---
layout: default
title: Bioinformatics Projects
---

# Bioinformatics Projects

Here are my projects related to Bioinformatics:

{% for project in site.data.projects %}
{% if project.category == "Bioinformatics Projects" %}
- [{{ project.title }}]({{ project.url }})
  - {{ project.description }}
{% endif %}
{% endfor %}
