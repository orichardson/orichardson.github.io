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
<ul class='paperlist'>
{% for paper in site.papers %}
{% if paper.hide %}{% else %}
<li>
    <!-- <b>{{paper.title}}</b><br/> -->
    <b><i> {{ paper.title }} </i></b>
    <br/>
    {{ paper.authors }}
    <br/>
    {{ paper.conf }} {{ paper.year }}
    <br/>
    {%if paper.arxiv %}  <a href="{{paper.arxiv}}">[ arxiv ]</a>   {% endif %}
    {%if paper.openreview %}  <a href="{{paper.openreview}}">[ OpenReview ]</a>   {% endif %}
    {%if paper.poster %}  <a href="{{paper.poster}}">[ poster ]</a>   {% endif %}
    {%if paper.code %}  <a href="{{paper.code}}">[ code ]</a>   {% endif %}
    {%if paper.blog %}  <a href="{{paper.blog}}">[ blog ]</a>   {% endif %}
    <br>

    {{ paper.content }} 
</li>
{% endif %}
{% endfor %}
</ul>
