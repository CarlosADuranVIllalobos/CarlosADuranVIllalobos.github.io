---
layout: default
title: Data Visualization and Analysis
---

<h1 class="main-title">
    Data Analysis and Visualization
</h1>

<div class="grid-container grid-2x2">

    <div class="grid-item">
    <h2><a href="https://doi.org/10.1002/aic.17257" class="contact-link" target="_blank">Multivariate Statistical Data Analysis of Cell-Free Protein Synthesis</a>
    </h2>

    <h3>Project Overview</h3>

    <p>This project involved the analysis of experimental data obtained from an industrial partner. The goal was to optimize the production of cell-free protein synthesis (CFPS) systems by understanding the key factors that influence the synthesis process.</p>
    
    <h3>Using Multivariate Statistical Tools</h3>
    <p>My role was pivotal in employing advanced statistical tools such as Principal Component Analysis (PCA) and Partial Least Squares (PLS), facilitating insightful data interpretations that directly impacted production strategies.</p>

    <div class="image-container" style="width: 100%;">
      <figure style="margin: 0;">
        <img src="/assets/images/PCA.png" alt="Statistical Analysis 1" style="width: 100%; height: auto;">
        <figcaption class="image-caption">Figure 2. "Principal component analysis (PCA) of datasets D1–D5... (a) PCA loadings plot. (b) PCA scores plot"  from Duran-Villalobos et al., 2021.</figcaption>
      </figure>
    </div>
    
    <div class="image-container" style="width: 100%;">
      <figure style="margin: 0;">
        <img src="/assets/images/PLS.png" alt="Statistical Analysis 2" style="width: 100%; height: auto;">
        <figcaption class="image-caption">Figure 3. "Comparison of partial least squares (PLS) regression coefficients between shorter (a) and longer reactions (b)..."  from Duran-Villalobos et al., 2021.</figcaption>
      </figure>
    </div>

    <div style="clear: both;"></div>

    <h3>Impact on CFPS Optimization</h3>
    <p>The insights gained from these analyses enabled us to optimize the CFPS process, enhancing both the yield and quality of the synthesized proteins. By understanding and controlling the critical process parameters, we achieved more consistent and reliable outcomes.</p>

    <div class="image-container" style="width: 100%;">
      <figure style="margin: 0;">
        <img src="/assets/images/Monitoring_CFPS.png" alt="Statistical Analysis 3" style="width: 100%; height: auto;">
        <figcaption class="image-caption">Figure 9. "Normalised cumulative SPE batch charts for process monitoring"  from Duran-Villalobos et al., 2021.</figcaption>
      </figure>
    </div>

    <h3>Read More</h3>
    <p>For a detailed exploration of our methods and results, you can read the full article:</p>
    <p><a href="https://doi.org/10.1002/aic.17257" class="contact-link" target="_blank">Multivariate Statistical Data Analysis of Cell-Free Protein Synthesis</a></p>

  </div>


  <div class="grid-item">
    <h2><a href="https://github.com/CarlosADuranVIllalobos/Interactive-Dashboards" class="contact-link" target="_blank">Interactive Data Visualization of COVID-19 Vaccination Progress</a></h2>

    <h3>Project Overview</h3>
    
    <p>This project involved creating an interactive Tableau dashboard to visualize global COVID-19 vaccination progress. The goal is to provide insights into vaccination rates, pandemic trends, and the distribution of different vaccines.</p>

    <h3>Interactive Visualizations in Tableau</h3>
    <p>The dashboard features dynamic, user-interactive visualizations that allow users to explore data through various lenses:</p>
    <ul>
        <li>World Map highlighting vaccination coverage.</li>
        <li>Time Series Charts for trend analysis.</li>
        <li>Pie Charts depicting vaccine distribution.</li>
    </ul>

    <p><a href="https://public.tableau.com/shared/3J6YJQFY9?:display_count=n&:origin=viz_share_link" class="contact-link" target="_blank">Tableau dashbord link</a></p>

    <div class="image-container" style="width: 16cm;">
      <figure style="margin: 0;">
        <img src="/assets/images/dashboard_screenshot.png" alt="Dashboard screenshot" style="width: 100%; height: auto;">
        <figcaption class="image-caption"> Figure 1. "Interactive Dashboard Screenshot"</figcaption>
      </figure>
    </div>

    <h3>Impact on Public Health Understanding</h3>
    <p>These visualizations can help public health officials, researchers, and the general public understand the global vaccination landscape, identify trends, and make data-driven decisions to address the pandemic.</p>


    <h3>Read More</h3>
    <p>For a detailed exploration of the dashboard and its insights, you can view the full project:</p>
    <p><a href="https://github.com/CarlosADuranVIllalobos/Interactive-Dashboards" class="contact-link" target="_blank">Interactive Data Visualization of COVID-19 Vaccination Progress</a></p>
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
