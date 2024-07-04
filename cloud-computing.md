---
layout: default
title: Cloud Computing and Big Data
---

# Cloud Computing and Big Data

Here are my projects related to Cloud Computing and Big Data:

{% for project in site.data.projects %}
{% if project.category == "Cloud Computing and Big Data" %}
- [{{ project.title }}]({{ project.url }})
  - {{ project.description }}
{% endif %}
{% endfor %}
