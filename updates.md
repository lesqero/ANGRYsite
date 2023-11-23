---
title: updates page
layout: "updates_layout.njk"
---

<div class="row">

{%- for post in collections.posts -%}
  <div class="col-md-6">
  <div class="p-3 mb-4 bg-beige_a rounded-1"><a class="m-3" href="{{ post.page.url }}">{{ post.data.title }}</a></div>
  </div>
{%- endfor -%}


</div>