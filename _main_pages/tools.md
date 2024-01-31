---
display: oli.util;
short: tools
colors:
    fg : '#342608'
    bg : '#F9FABB'
    # menu : '#9c6c06' #darkgoldenrod
    menu: '#008b8b' # darkcyan
    nav : '#E6C06F'
    border : '#CFB57B'
    shadow : '#253c05'
glyph: cog
order: 5
subtitle: Tools and Applications
---

# General Use

<ul>
<li>
    The <a href="https://github.com/orichardson/pdg">PDG Python Library</a>
    <ul><li>
    The online 
        <a href="https://orichardson.github.io/pdg/hgraph_editor">directed hypergraph editor</a>,
        for visualizing PDG structures.
    {% capture demo %}
    {% endcapture %}
    </li></ul></li>
<li>
<span markdown=1> [LaTeX library (.sty)]({{ site.baseurl }}/files/restatelinks.sty)</span>
for links in the margins to and from proofs elsewhere (e.g., in appendix)

{%- capture usage -%}
download `restatelinks.sty` using the link above,  
save it in the same folder as your .tex document, and  
use it something like this:

```latex
\documentclass{article}

% this is the file restatelinks.sty you can download above
\usepackage{restatelinks} 

\usepackage{amsthm,thmtools} % need theorem restate
\newtheorem{thm}{Theorem}

\begin{document}
    % instead of beginning a "thm", begin a "linked" environment
    \begin{linked}[Fancy Theorem Name]{thm}{label} 
        THEOREM TEXT
    \end{linked}

    ... intermediate text ...

    \recall{thm:label} % re-state the theorem
    % use "lproof" to get nice colors & a target for forward reference
    \begin{lproof} \label{proof:label}
        PROOF TEXT
    \end{lproof}
\end{document}
```
{%- endcapture -%}
{% include accordion.html
    content=usage
    text_folded=" ( instructions for use ) "
    text_unfolded="To use,"  %}
</li>
</ul>

# Cornell CIS: Links & Web Apps
 - [Materials](https://drive.google.com/drive/folders/1PNoxfNyq8dpLiEjNRrZrzfqUogz_msoZ?usp=drive_link)
    for [Grad Seminar](https://wiki.cs.cornell.edu/index.php?title=Grad_Seminar), the weekly PhD/MS student meeting and seminar.  
    I organized the event from Fall 2019 to Spring 2024, except for a 2-semester pandemic lapse.  
    Seminar Schedules: 
    [[Spring 24]](https://docs.google.com/spreadsheets/d/1XzqbWSRpkgGB4imlfuOmiRROp6f_vJWlhHhDCC4zImM/edit?usp=sharing)
    [[Fall 23]](https://docs.google.com/spreadsheets/d/1uvaxmpYPRZMTJZLnQzLw_GFU1I7KMzNP9XKxOVnotP8/edit?usp=sharing)
    [[Fall 22]](https://docs.google.com/spreadsheets/d/1jyscultcrHN3-cWCRnZQ2xMFXoCLeWEoTxr8j9RI2Go/)

    
- [TA Hour Reporting System](https://research.cs.cornell.edu/csgo/ta),
    to collect anonymous statistics about TA workload among graduate students. Built in 2021. The results are shared with the
    [Computer Science Graduate Organization (CSGO)](https://csgo.cs.cornell.edu) and the CS department (current DGS, Chair, and Associate Director).  

- <span class='depricated-tag label label-warning'>depricated</span>
    [CSGO Buddy System](https://research.cs.cornell.edu/csgo/buddy),
    an opt-out (random) group assignment and chat system, used by the CSGO 2020-2021 to facilitate regular student meetings during the start of the pandemic.
