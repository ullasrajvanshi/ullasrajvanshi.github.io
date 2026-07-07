---
layout: archive
permalink: /year-archive/
title: "Blog"
author_profile: true
---

{% include base_path %}

Coming soon — thoughts on Data & AI strategy, consulting, and the future of intelligent systems.

{% assign postsByYear = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
  <h2>{{ year.name }}</h2>
  {% for post in year.items %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
