---
layout: default
title: Control Systems and Process Optimization
---

# Control Systems and Process Optimization

Here are my projects related to Control Systems and Process Optimization:

{% for project in site.data.projects %}
{% if project.category == "Control Systems and Process Optimization" %}
- [{{ project.title }}]({{ project.url }})
  - {{ project.description }}
{% endif %}
{% endfor %}
