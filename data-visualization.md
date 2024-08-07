---
layout: default
title: Data Visualization and Analysis
---

# Data Visualization and Analysis

Here are my projects related to Data Visualization and Analysis:

{% for project in site.data.projects %}
{% if project.category == "Data Visualization and Analysis" %}
- <a href="{{ project.url }}" class="contact-link" target="_blank">{{ project.title }}</a>  
  {{ project.description }}
  
{% endif %}
{% endfor %}
