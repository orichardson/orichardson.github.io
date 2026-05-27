---
title: "Local Inconsistency Resolution: The Interplay between Attention and Control in Probabilistic Models"
conf: AISTATS 
year: 2026
month: May
authors: Oliver&nbsp;Richardson, Mehran&nbsp;Shakerinava, Mandana&nbsp;Samiei, Abdessamad&nbsp;El&nbsp;Kabid, Joseph&nbsp;Viviano, Ali&nbsp;Parviz, Yoshua&nbsp;Bengio
poster: /files/posters/LIR-AISTATS-poster.pdf
type: conference
supercedes: lir
awards:
    - spotlight
arxiv: https://arxiv.org/abs/2604.17140
# extralinks:
#     - 
---

**Abstract.**
We present a generic algorithm for learning
and approximate inference with an intuitive
epistemic interpretation: iteratively focus on
a subset of the model and resolve inconsistencies
using the parameters under control. This
framework, which we call Local Inconsistency
Resolution (LIR) is built upon Probabilistic
Dependency Graphs (PDGs), which provide a
flexible representational foundation capable of
capturing inconsistent beliefs. We show how
LIR unifies and generalizes a wide variety of
important algorithms in the literature, including
the Expectation-Maximization (EM) algorithm,
belief propagation, adversarial training,
GANs, and GFlowNets. In the last case, LIR
actually suggests a more natural loss, which
we demonstrate improves GFlowNet convergence.
Each method can be recovered as a specific
instance of LIR by choosing a procedure
to direct focus (attention and control). We
implement this algorithm for discrete PDGs
and study its properties on synthetically generated
PDGs, comparing its behavior to the
global optimization semantics of the full PDG.


**Notes.**
Earlier versions of the core idea in this work in "Local Resolution Algorithm, presented at ICML workshops in 2023, and in Chapter 7 of my PhD dissertation. My co-authors helped develop a general implementation and synthetic experiments, test the hypotheses posed by the paper, and generally bring it into the form the paper is in now.