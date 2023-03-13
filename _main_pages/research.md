---
# options: .rsch  .research  .main  .contrib  .out
display: oli.{math, reflect};
# title: research
short: research
colors: 
    fg : '#082525'
    bg : '#a3f4cd'
    menu : '#00856A'
    nav : '#1e7c67'
    border : '#073600'
    shadow : '#e0fff9'
glyph: education
---

<h2> Publications </h2>

<h3> Conference Papers </h3>
<ul>
{% for paper in site.papers %}
<li>
    <b>{{paper.title}}</b><br/>
    <a href="{{paper.arxiv}}">[ arxiv ]</a>
    {{ paper.content }} 
</li>
{% endfor %}
</ul>
