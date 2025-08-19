---
title: "A Unified Theory of Probabilistic Modeling, Dependence, and Inconsistency"
conf: PhD Thesis, Cornell University, 
month: August
year: 2024
# arxiv: https://arxiv.org/abs/2202.11862
authors: Oliver Richardson
type: thesis
# awards:
# extralinks:
#     - ['slides.pptx', '/files/slides/one-true-loss--15min.pptx']
extralinks:
    - ['.pdf', '/files/oli-dissertation.pdf']
layout: page
---
<div style="margin-top:20px;" markdown=1> <!--max-width:80ch;-->
<!-- <img style="float:right;margin-left:15px;margin-bottom:5px;border-radius:20px;filter:invert(1);" 
    src="{{ site.baseurl }}/files/posters/one-true-loss-thumb4.png"/> -->
**Abstract.**
What should you do with conflicting information? To be _rational_ in the traditional sense, you must immediately resolve the inconsistency, so as to maintain a consistent (probabilistic) picture of the world. But how? And is it really critical to do so immediately?  Inconsistency is clearly undesirable, but, as we will soon show, we stand to gain a lot by representing it. 

This thesis develops a broad theory of how to approach probabilistic modeling with possibly-inconsistent information, unifying and reframing much of the literature in graphical models and machine learning in the process. The key ingredient is a novel kind of graphical model, called a Probabilistic Dependency Graph (PDG), which allows for arbitrary (even conflicting) pieces of probabilistic information. 
 - In Part I, we establish PDGs as a generalization of other models of mental state, including traditional graphical models such as Bayesian Networks and Factor Graphs, as well as causal models, and even generalizations of probability distributions, such as Dempster-Shafer Belief functions. 
 - In Part II, we show that PDGs also capture modern neural representations. Surprisingly, standard loss functions can be viewed as the inconsistency of a PDG that models the situation appropriately.
Furthermore, many important algorithms in AI are instances of a simple approach to resolving inconsistencies. 
 - In Part III, we provide algorithms for PDG inference, and uncover a deep algorithmic equivalence between the problems of inference and calculating a PDG’s numerical degree of inconsistency. We also develop powerful yet inutuitive principles for reasoning with (and about) PDGs.
<!-- (475 pages) -->
</div>