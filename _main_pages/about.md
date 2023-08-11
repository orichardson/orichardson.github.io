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
content_class: container-narrow
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

<!-- <div class="col-md-6 col-"> -->
<!-- <div style="width:55px;float:right;margin-left:15px;">
<img src="/images/theu.png" width=50px/>
<img src="/images/ucam.png" width=50px/>
<img src="/images/cornell-seal.png" width=50px/>
</div> -->

I am a theorist with broad scientific training, who loves to make pretty things out of math and code.
Currently, I am a 
<!-- fifth-year -->
PhD candidate in Computer Science at Cornell, advised by 
[Joe Halpern](http://www.cs.cornell.edu/home/halpern).
<!-- I am a theorist, but love to write code. -->
 <!-- with broad mathematical and scientific training. -->

- Before starting my PhD, I did an MPhil at the University of Cambridge,
    where I did research in diagrammatic reasoning with [Mateja Jamnik]().
- As an undergraduate at the University of Utah,
    I studied biology, 
    pure math (tropical geometry, with [Aaron Betram]()), 
    and applied machine learning (structured prediction, with [Vivek Srikumar]()).
 <!-- ;**
 now I do applied math and theoretical machine learning.** -->


<!-- <div>
<img src="/images/cornell-seal.png" height=50px/>
<img src="/images/ucam.png" height=50px/>
<img src="/images/theu.png" height=50px/>
</div> -->


<!-- I have broad interests and broad technical expertise. -->

For now, my research focuses primarily on a unified theory of probabilistic modeling that allows
for inconsistent beliefs. This theory is based on a class of models I invented, called
[Probabilistic Dependency Graphs (PDGs)](https://orichardson.github.io/pdg/), which
subsume traditional graphical models (Bayesian networks, factor graphs, causal models), and also model modern machine learning settings (Classification, GANs, VAEs, ...). 
This gives rise to an intuitive interpretation of loss functions as a degree of inconsistency, and learning/inference/adversarial attack algorithms as ways to resolve that inconsistency. 

<!-- Critically, PDGs can contain inconsistent probabilistic information, and that degree of inconsistency
turns out to be quite important. -->

{{ subtitle }}


