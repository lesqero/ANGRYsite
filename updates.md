---
title: updates page
layout: "updates_layout.njk"
---


<ul>
{%- for post in collections.posts -%}
  <li><a href="{{ post.page.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>