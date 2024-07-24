---
layout: default
title: Data Visualization and Analysis
---

<h1 class="main-title">
    Data Visualization and Analysis
</h1>

<div class="grid-container grid-2x2">
  <div class="grid-item">
    <h2>Data Visualization Project</h2>
    <p>This project showcases interactive data visualization using Power BI. You can explore the project repository on GitHub:</p>
    <p><a href="https://github.com/CarlosADuranVillalobos/data-visualization-project" class="contact-link" target="_blank">View Project on GitHub</a></p>
    <div class="image-container" style="width: 16cm;">
      <img src="/assets/images/power_bi_visualization.jpg" alt="Power BI Visualization">
    </div>
  </div>

  <div class="grid-item">
    <h2><a href="https://doi.org/10.1002/aic.17257" class="contact-link" target="_blank">Multivariate Statistical Data Analysis of Cell-Free Protein Synthesis</a></h2>
 
    <p>This project involves the analysis of experimental data obtained from an industrial partner. The goal is to optimize the production of cell-free protein synthesis (CFPS) systems by understanding the key factors that influence the synthesis process.</p>
    
    <h3>Using Multivariate Statistical Tools</h3>
    <p>We employed multivariate statistical tools, specifically Principal Component Analysis (PCA) and Partial Least Squares (PLS), to analyze the complex relationships between various process parameters and the resulting protein yield.</p>

    <div class="image-container" style="width: 16cm;">
      <figure style="margin: 0;">
        <img src="/assets/images/PCA.png" alt="Statistical Analysis 1" style="width: 100%; height: auto;">
        <figcaption class="image-caption">Figure 2. "Principal component analysis (PCA) of datasets D1–D5... (a) PCA loadings plot. (b) PCA scores plot"  from Duran-Villalobos et al., 2021.</figcaption>
      </figure>
    </div>
    
    <div class="image-container" style="width: 16cm;">
      <figure style="margin: 0;">
        <img src="/assets/images/PLS.png" alt="Statistical Analysis 2" style="width: 100%; height: auto;">
        <figcaption class="image-caption">Figure 3. "Comparison of partial least squares (PLS) regression coefficients between shorter (a) and longer reactions (b)..."  from Duran-Villalobos et al., 2021.</figcaption>
      </figure>
    </div>

    <div style="clear: both;"></div>

    <h3>Key Findings</h3>
    <p>Through PCA, we identified the principal components that capture the most variance in the data, pinpointing the key factors influencing CFPS. PLS further revealed the correlations between these factors and the protein yield, providing deeper insights into the process dynamics.</p>

    <h3>Impact on CFPS Optimization</h3>
    <p>The insights gained from these analyses enabled us to optimize the CFPS process, enhancing both the yield and quality of the synthesized proteins. By understanding and controlling the critical process parameters, we achieved more consistent and reliable outcomes.</p>

    <div class="image-container" style="width: 16cm;">
      <figure style="margin: 0;">
        <img src="/assets/images/Monitoring_CFPS.png" alt="Statistical Analysis 3" style="width: 100%; height: auto;">
        <figcaption class="image-caption">Figure 9. "Normalised cumulative SPE batch charts for process monitoring"  from Duran-Villalobos et al., 2021.</figcaption>
      </figure>
    </div>

    <h3>Read More</h3>
    <p>For a detailed exploration of our methods and results, you can read the full article:</p>
    <p><a href="https://doi.org/10.1002/aic.17257" class="contact-link" target="_blank">Multivariate Statistical Data Analysis of Cell-Free Protein Synthesis</a></p>

  </div>
</div>

### Projects
Here are my projects related to Data Visualization and Analysis:

{% for project in site.data.projects %}
{% if project.category == "Data Visualization and Analysis" %}
- <a href="{{ project.url }}" class="contact-link" target="_blank">{{ project.title }}</a>  
  {{ project.description }}
  
{% endif %}
{% endfor %}
