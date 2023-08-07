---
display: Oliver Richardson
short: about
colors:
    fg : '#000000'
    bg : '#FFFFFF'
    menu : '#BBBBBB'
    nav : '#F8F8F8'
    border : '#E7E7E7'
    shadow : '#e7e7e7'
glyph: user
order: 0
# subtitle: include(subtitle-links.md)
subtitle: <a class="mono" href="mailto:oli@cs.cornell.edu">oli@cs.cornell.edu</a>
# special_css: /css/about.css
---

{% comment %}
{% endcomment %}
{% capture subtitle %}
[[CV]](/files/cv.pdf)
[[Google Scholar]](https://scholar.google.com/citations?user=5_yI4jIAAAAJ)
[[Github]](https://github.com/orichardson)
[[DBLP]](https://dblp.org/pid/281/7499.html)
<!-- [[Twitter]]()
[[Instagram]]() -->
{% endcapture %}

<div class="portrait">
<!-- ![portrait](/images/me-1.jpg) -->
<!-- <img src="/images/me-1-cropped.jpg" style="width:200px;float:right;margin-left:15px;border-radius:50%;"/> -->
<!-- <img src="/images/me-2-cropped.jpg" style="width:25vw; margin-left:15px;border-radius:50%;"/> -->
<!-- <img src="/images/me-3-cropped.jpg" style="width:350px;float:right;margin:15px;border-radius:50%;"/> -->
<!-- <img src="/images/me-3-cropped.jpg" style="width:350px;margin:15px;border-radius:50%;"/> -->
<img src="/images/me-3--crop2.jpg" style="width:350px;margin:15px;margin-left:30px;border-radius:50%;"/>
</div>

I am a theorist with broad scientific training, who loves to make pretty things out of math and code.
Currently, I am a 
<!-- fifth-year -->
PhD candidate in Computer Science at Cornell, advised by 
[Joe Halpern](http://www.cs.cornell.edu/home/halpern).
<!-- I am a theorist, but love to write code. -->
 <!-- with broad mathematical and scientific training. -->
Prior that, I did an MPhil in CS at the University of Cambridge.
As an undergraduate, I studied biology, pure math, and applied machine learning;
now I do applied math and theoretical machine learning.

<!-- I have broad interests and broad technical expertise. -->

For now, my research focuses primarily on a unified theory of probabilistic modeling that allows
for inconsistent beliefs. This theory is based on a class of models I invented, called
[Probabilistic Dependency Graphs (PDGs)](https://orichardson.github.io/pdg/), which can be inconsistent
subsume traditional graphical models (BNs, factor graphs, causal models), yet can also model modern machine learning settings (Classification, GANs, VAEs, ...).  This gives rise to an intuitive epistemic interpretation of loss functions as a degree of inconsistency, learning/inference/adversarial attack algorithms as ways of resolving that inconsistency. 

<!-- Critically, PDGs can contain inconsistent probabilistic information, and that degree of inconsistency
turns out to be quite important. -->

{{ subtitle }}


