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
subtitle: <a class="mono" href="mailto:oli@cs.cornell.edu">oli<span style="margin-left:5px;margin-right:5px;font-family:sans-serif;">@</span>cs.cornell.edu</a>
content_class: container-narrow
# special_css: /css/about.css
redirect_from:
  - /
---
{% comment %}
{% capture subtitle %}
[[CV]](/files/cv.pdf)
[[Google Scholar]](https://scholar.google.com/citations?user=5_yI4jIAAAAJ)
[[Github]](https://github.com/orichardson)
[[DBLP]](https://dblp.org/pid/281/7499.html)
<!-- [[Twitter]]()
[[Instagram]]() -->
{% endcapture %}
{% endcomment %}

<div class="portrait">
<!-- ![portrait](/images/me-1.jpg) -->
<!-- <img src="{{ site.baseurl }}/images/me-1-cropped.jpg" style="width:200px;float:right;margin-left:15px;border-radius:50%;"/> -->
<!-- <img src="{{ site.baseurl }}/images/me-2-cropped.jpg" style="width:25vw; margin-left:15px;border-radius:50%;"/> -->
<!-- <img src="{{ site.baseurl }}/images/me-3-cropped.jpg" style="width:350px;float:right;margin:15px;border-radius:50%;"/> -->
<!-- <img src="{{ site.baseurl }}/images/me-3--crop2.jpg" 
    style="width:360px;margin:15px;border-radius:50%;border:2px solid black;max-width:90vw;"/> -->
<img src="{{ site.baseurl }}/images/me4-cropped.jpg" 
    style="width:290px;margin:15px;border-radius:30%;border:2px solid black;max-width:80vw;"/>
<!-- <img src="{{ site.baseurl }}/images/me-3-cropped.jpg" 
style="width:450px;margin:15px;border-radius:50%;border:2px solid black;max-width:90vw;"/> -->
<!-- <img src="/images/me-3--crop2.jpg" style="width:350px;margin:15px;margin-left:30px;border-radius:50%;"/> -->
<!-- <img src="/images/me-2-cropped.jpg" style="width:350px;height=305px;margin:15px;margin-left:30px;border-radius:50%;"/> -->
<div class="icon-panel">
<!-- <a href="mailto:" title="email"><i class="fas fa-envelope"></i></a> -->
    <a href="https://github.com/orichardson" title="GitHub" style="margin-right:-5px"
             target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github" style="margin-right:-9px"></i>
        <br/>
        <span class="icon-label">[github/</span>
        </a>
    <a href="https://gitlab.com/zaytuna" title="GitLab">
        <i class="fab fa-gitlab" style="margin-left:-9px"></i>
        <br/>
        <span class="icon-label">gitlab]</span>
        </a>
    <br/>
    <br/>
    <a href="https://scholar.google.com/citations?user=5_yI4jIAAAAJ" title="Google Scholar">
        <div style="margin-bottom:-5px;"><i class="ai ai-google-scholar"></i></div>
        <!-- <br/> -->
        <span class="icon-label">[scholar]</span>
        </a>
    <br/>
    <br/>
    <a href="{{ site.baseurl }}/files/cv.pdf" title="CV">
        <i class="fa fa-snowflake"></i>
        <br/>
        <span class="icon-label">[CV.pdf]</span>
        </a>
</div>
</div>

<!-- <div class="col-md-6 col-"> -->
<!-- <div style="width:55px;float:right;margin-left:15px;">
<img src="/images/theu.png" width=50px/>
<img src="/images/ucam.png" width=50px/>
<img src="/images/cornell-seal.png" width=50px/>
</div> -->

<div class="seal" style="margin-top:-10px">
    <a href="https://mila.quebec"><img src="{{ site.baseurl }}/images/mila-logo.png" style="width:5.2em;"/></a> <br/>
    <a href="https://www.umontreal.ca/"><img src="{{ site.baseurl }}/images/udm-logo.png" style="width:4.3em;margin-top:4px;"/></a>
</div>
<!-- **Bio.&nbsp;&nbsp;** -->
I am a theorist with broad scientific training, who loves to make pretty things out of math and code.
In September 2024, I joined [MILA](https://mila.quebec/en) as a postdoc under [Yoshua Bengio](https://yoshuabengio.org/profile/). 
I develop natural mathematical foundations for fallible agents, which are well-suited to modern AI systems.
<!-- Currently, I am a PhD candidate in Computer Science at Cornell University, advised by [Joe Halpern](http://www.cs.cornell.edu/home/halpern). -->
My work combines 
machine learning, probabilistic graphical models, information theory, programming languages, category theory, microeconomics, causality, and logic.
See my <a onclick="event.preventDefault();$('.navtab-research>a').click();" href="{{ site.baseurl }}/research/">research page</a> for more information!
{% comment %}
<!-- I am a theorist, but love to write code. -->
<!-- with broad mathematical and scientific training. -->
<!-- My research focuses primarily on a unified theory of probabilistic modeling that allows
for inconsistent beliefs. This theory is based on a class of models I invented, called
[Probabilistic Dependency Graphs (PDGs)](https://orichardson.github.io/pdg/), which
subsume traditional graphical models (Bayesian networks, factor graphs, causal models), and also model modern machine learning settings (Classification, GANs, VAEs, ...). 
This gives rise to an intuitive interpretation of loss functions as a degree of inconsistency, and learning/inference/adversarial attack algorithms as ways to resolve that inconsistency.  -->
<!-- Critically, PDGs can contain inconsistent probabilistic information, and that degree of inconsistency
turns out to be quite important. -->
<!-- Before starting my PhD, I did an MPhil at the University of Cambridge,
    where I did research in diagrammatic reasoning with [Mateja Jamnik]().
As an undergraduate at the University of Utah,
    I studied biology, 
    pure math (tropical geometry, with [Aaron Betram]()), 
    and applied machine learning (structured prediction, with [Vivek Srikumar]()). -->
{% endcomment %}

<div class="seal">
    <a href="https://www.cs.cornell.edu/"><img src="{{ site.baseurl }}/images/cornell-seal.png" style="width:3.8em;margin-right:0.5em"/></a><br/>
    <a href="https://www.cam.ac.uk/"><img src="{{ site.baseurl }}/images/ucam.png" style="width:3.0em;margin-top:8px;margin-right:0.6em"/></a><br/>
    <a href="https://www.utah.edu"><img src="{{ site.baseurl }}/images/theu.png" style="width:3.7em;margin-top:5px;margin-right:0.6em"/></a>
</div>
I received my PhD in Computer Science from Cornell University in 2024, where I was advised by [Joe Halpern](http://www.cs.cornell.edu/home/halpern).
Before that, I did an MPhil in CS at the University of Cambridge under [Mateja Jamnik](https://www.cl.cam.ac.uk/~mj201/).
I earned three majors (Mathematics, Cell & Molecular Biology, and Computer Science) and three minors (Chemistry, Physics, Cognitive Science) as an undergraduate at the University of Utah. There, my research focused on pure math (tropical geometry, with [Aaron Bertram](https://www.math.utah.edu/~bertram/)) and applied machine learning (structured prediction for natural language, with [Vivek Srikumar](https://svivek.com/)).
<!-- ;**
 now I do applied math and theoretical machine learning.** -->

Even before that, I [made video games](https://gitlab.com/zaytuna) in my free time.
<!-- I also play many sports and improvise on the piano! -->
I also improvise on the piano!

<br>
{{ subtitle }}

<!-- MUSIC! SHould wait until I have another page + more improv. 
<h4 >Improvization</h4>
<div class="loading">
<iframe width="100%" height="450"  scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/349382933&amp;color=7e00bc&amp;;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
</div>
-->