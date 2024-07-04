---
layout: default
title: Data Visualization and Analysis
---

# Data Visualization and Analysis

Here are my projects related to Data Visualization and Analysis:

{% for project in site.data.projects %}
{% if project.category == "Data Visualization and Analysis" %}
- [{{ project.title }}]({{ project.url }})
  - {{ project.description }}
{% endif %}
{% endfor %}
