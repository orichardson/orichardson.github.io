---
title: Qualitative Mechanism Independence
conf: NeurIPS
year: 2024
authors: Oliver Richardson, Spencer Peters, and Joseph Halpern
type: conference
extralinks:
  # - ['.pdf', '/files/papers/QIM.pdf']
  - ['slides.pptx', '/files/slides/QIM-5min.pptx']
poster: /files/posters/QIM-poster.pdf
arxiv: https://arxiv.org/abs/2501.15488
# code: https://github.com/orichardson/pdg-infer-uai
# recording: ???
tags: 
  - causality
  - information theory
  - graphical models
---

**Abstract.**
We define what it means for a joint probability distribution to be compatible with a set of independent causal mechanisms, at a qualitative level—or, more precisely, with a directed hypergraph A, which is the qualitative structure of a probabilistic dependency graph (PDG). When A represents a qualitative Bayesian network, QIM-compatibility with A reduces to satisfying the appropriate conditional independencies. But giving semantics to hypergraphs using QIM-compatibility lets us do much more. For one thing, we can capture functional dependencies. For another, we can capture important aspects of causality using compatibility: we can use compatibility to understand cyclic causal graphs, and to demonstrate structural compatibility, we must essentially produce a causal model. Finally, QIM-compatibility has deep connections to information theory. Applying compatibility to cyclic structures helps to clarify a longstanding conceptual issue in information theory.