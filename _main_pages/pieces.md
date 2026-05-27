---
display: oli.reflect;
# display: oli.random
# display: oli.reflect;
short: pieces
# colors: { fg: '#ffd5f2', bg: '#4d0036', menu: '#5E0042', nav: '#8c6d80', border: '#856879', shadow: '#f7c3e8' }
colors:
    fg: '#ffd5f2'
    bg: '#4d0036'
    # menu: '#5E0042'
    menu: '#6f034f'
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


<h2 class="">Pieces
</h2>
<div class="smallgray float-right">[last updated]</div>
<br/>
<!-- <ul> -->
{% assign pieces = site.pieces | sort: 'date' | reverse %}
{% unless site.future %}
  {% assign pieces = pieces | where: 'hide', nil | where_exp: "p", "p.date <= site.time" %}
{% endunless %}
{%- for piece in pieces %}
  {%- assign is_draft = false %}
  {%- if piece.hide or piece.date > site.time %}{% assign is_draft = true %}{% endif %}
  <h4>
  <a class="post-link" href="{{ piece.url | relative_url }}">
      {{ piece.title | escape }}
    </a>
  {% if is_draft %}<span class="smallgray">[draft]</span>{% endif %}
  <span class="smallgray float-right">{{ piece.date | date: date_format }}</span></h4>
  {{ piece.tldr }}
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
