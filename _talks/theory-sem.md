---
title: "How to Compute with PDGs: Inference, Inconsistency Measurement, and the Close Relationship Between the Two"
venue: Cornell CS Theory Seminar
date: 2024-02-19
labels:
    - { type: "invtalk", text: "Invited Talk"}
links:
    - ['talk page', 'https://www.cs.cornell.edu/content/how-compute-pdgs-inference-inconsistency-measurement-and-close-relationship-between-two']
    - ['slides.pptx', '/files/slides/theory-sem-24.pptx']
abstract: >
    Probabilistic Dependency Graphs (PDGs) are a flexible modeling tool that plays two seemingly different roles. On one hand, PDGs specify a joint distribution; in this capacity, they are an especially modular and interpretable generalization of standard probabilistic graphical models. On the other hand, PDGs have a natural inconsistency measure; in this capacity, they are a principled model-based way to specify a loss function. Yet, until now, there has been no practical way to compute with PDGs in either role: no inference algorithm, and no (provably correct) way to calculate the degree of inconsistency.

    We present the first tractable inference algorithm for PDGs with discrete variables, making the asymptotic complexity of PDG inference similar to that of the graphical models they generalize. Our algorithm also happens to also calculate inconsistency as a byproduct. The key components are: 

    (1) the observation that, in many cases, the distribution a PDG specifies can be formulated as a convex optimization problem (with exponential cone constraints), 
    (2) a construction that allows us to express these problems compactly for PDGs of bounded treewidth,
    (3) contributions to the theory of PDGs that justify the construction, and 
    (4) an appeal to interior point methods that can solve such problems in polynomial time. 
    In addition, we prove that there is an almost-linear reduction from approximate PDG inference to inconsistency approximation.  In this sense, precisely quantifying one's inconsistencies is no easier than optimally resolving them.   Thus, the two views of PDGs are essentially equivalent---not only semantically, but algorithmically as well.
    This talk is based on joint work with Joseph Halpern and Christopher De Sa.
---

