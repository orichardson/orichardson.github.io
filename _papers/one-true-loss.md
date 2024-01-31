---
title: "Loss as the Inconsistency of a Probabilistic Dependency Graph: Choose Your Model, not Your Loss Function"
conf: AISTATS
year: 2022
arxiv: https://arxiv.org/abs/2202.11862
poster: /files/posters/one-true-loss-poster.png
authors: Oliver Richardson
type: conference
awards:
    - oral
extralinks:
    - ['slides.pptx', '/files/slides/one-true-loss--15min.pptx']
layout: page
---

{% if page.authors %}
    {{ page.authors }}
{% endif %}
{{ site.baseurl }}

<img style="float:right;" width="200px" src="{{ site.baseurl }}/files/posters/one-true-loss-thumb.png"/>
<span style="max-width:80ch;margin-top:20px;">
<b>Abstract.</b>
In a world blessed with a great diversity of loss functions, we argue that that choice between them is not a matter of taste or pragmatics, but of model. Probabilistic depencency graphs (PDGs) are probabilistic models that come equipped with a measure of "inconsistency". We prove that many standard loss functions arise as the inconsistency of a natural PDG describing the appropriate scenario, and use the same approach to justify a well-known connection between regularizers and priors. We also show that the PDG inconsistency captures a large class of statistical divergences, and detail benefits of thinking of them in this way, including an intuitive visual language for deriving inequalities between them. In variational inference, we find that the ELBO, a somewhat opaque objective for latent variable models, and variants of it arise for free out of uncontroversial modeling assumptions -- as do simple graphical proofs of their corresponding bounds. Finally, we observe that inconsistency becomes the log partition function (free energy) in the setting where PDGs are factor graphs.
</span>