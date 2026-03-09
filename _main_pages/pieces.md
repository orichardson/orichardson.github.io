---
display: oli.reflect;
# display: oli.random
# display: oli.reflect;
short: pieces
# colors: { fg: '#ffd5f2', bg: '#4d0036', menu: '#5E0042', nav: '#8c6d80', border: '#856879', shadow: '#f7c3e8' }
colors:
    fg: '#ffd5f2'
    bg: '#4d0036'
    menu: '#5E0042'
    nav: '#8c6d80'
    border: '#856879'
    shadow: '#f7c3e8'
## old rsch colors
# colors: 
#     fg : '#082525'
#     bg : '#a3f4cd'
#     menu : '#00856A'
#     nav : '#1e7c67'
#     border : '#073600'
#     shadow : '#e0fff9'
glyph: comment
order: 9
# subtitle: thoughts
subtitle: ideas in writing
# hide: truer
---

{%- assign date_format = site.minima.date_format | default: "%-d %b, %Y" -%}


<h2 class="">Pieces</h2>
<!-- <ul> -->
{% assign pieces = site.pieces | where: 'hide', nil %}
{%- for piece in pieces %}
<!-- <li> -->
  <h4>
  <a class="post-link" href="{{ piece.url | relative_url }}">
      {{ piece.title | escape }}
    </a>
  <span class="smallgray float-right">{{ piece.date | date: date_format }}</span></h4>
  <!-- {{ essay.excerpt }} -->
  {{ piece.tldr }}
<!-- </li> -->
{%- endfor -%}
<!-- </ul> -->


<br>

{% if site.paginate %}
  {% assign posts = paginator.posts %}
{% else %}
  {% assign posts = site.posts %}
{% endif %}
{% assign posts = posts | where: 'hide',nil %}

{%- if posts.size > 0 -%}
  <h2 class="post-list-heading">Dated Blog Posts</h2>
  <ul class="post-list">
    {%- for post in posts -%}
    <li>
      <!-- <h3> -->
        <a class="post-link" href="{{ post.url | relative_url }}">
          {{ post.title | escape }}
        </a>
        <span class="post-meta">{{ post.date | date: date_format }}</span>
      <!-- </h3> -->
      {%- if site.show_excerpts -%}
        {{ post.excerpt }}
      {%- endif -%}
    </li>
    {%- endfor -%}
  </ul>
  {% if site.paginate %}
    <div class="pager">
      <ul class="pagination">
      {%- if paginator.previous_page %}
        <li><a href="{{ paginator.previous_page_path | relative_url }}" class="previous-page">{{ paginator.previous_page }}</a></li>
      {%- else %}
        <li><div class="pager-edge">•</div></li>
      {%- endif %}
        <li><div class="current-page">{{ paginator.page }}</div></li>
      {%- if paginator.next_page %}
        <li><a href="{{ paginator.next_page_path | relative_url }}" class="next-page">{{ paginator.next_page }}</a></li>
      {%- else %}
        <li><div class="pager-edge">•</div></li>
      {%- endif %}
      </ul>
    </div>
  {%- endif %}
{%- endif -%}