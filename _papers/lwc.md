---
title: Learning with Confidence
conf: UAI
year: 2025
authors: Oliver Richardson
type: conference
extralinks:
  # - ['.pdf', '/files/papers/LwC.pdf']
  # - ['slides.pptx', '/files/slides/lwc-uai.pptx']
  - ['slides.pdf', '/files/slides/lwc-uai.pdf']
# hide: true
poster: /files/posters/LwC-poster.pdf
arxiv: https://arxiv.org/abs/2508.11037
awards:
    - oral
# code: https://github.com/orichardson/pdg-infer-uai
# recording: ???
tags: 
  - geometry
  - confidence
  - learning theory
---

**Abstract.**
We characterize a notion of confidence that arises when learning or updating beliefs. 
This notion of trust, or *learner's confidence*, can be used alongside (and is easily be mistaken for) probability or likelihood, but it is fundamentally a different concept. 
Although perhaps not as useful as probability itself, our notion of confidence captures and unifies many concepts in the literature, from Shafer's weight of evidence, to Kalman gain, as well as number of training epochs and learning rate.
We provide a mathematical definition of what it means to learn with confidence, and give two canonical ways of measuring confidence on a continuum. 
Under additional assumptions, we derive more compact representations of confidence-based learning in terms of vector fields and loss functions.
These representations induce an extended language of compound "parallel" observations. 
We illustrate our framework by analyzing standard ways of updating beliefs. 
