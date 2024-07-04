---
layout: default
title: Machine Learning and AI Projects
---

# Machine Learning and AI Projects

Here are my projects related to Machine Learning and AI:

{% for project in site.data.projects %}
{% if project.category == "Machine Learning and AI Projects" %}
- [{{ project.title }}]({{ project.url }})
  - {{ project.description }}
{% endif %}
{% endfor %}
