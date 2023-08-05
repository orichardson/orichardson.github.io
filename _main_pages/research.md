---
# options: .rsch  .research  .main  .contrib  .out
display: oli.{math, reflect};
# title: research
short: research
colors: 
    fg :     '#FFFFFF'
    bg :     '#000000'
    menu :   '#000000'
    nav :    '#4a4a4a'
    border : '#636363'
    shadow : '#777777'
glyph: flask
order: 2
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
