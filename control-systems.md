---
layout: default
title: Control Systems and Process Optimization
---

<h1 class="main-title">
    <span>
        Control Systems and Process Optimization
    </span>
</h1>

 <div class="image-container" style="width: 16cm" >
      <img src="/assets/images/industrial_tanks.jpg" alt="Your Image">
</div>


## Featured Project: <a href="https://doi.org/10.1016/j.compchemeng.2019.106620" class="contact-link" target="_blank">Multivariate Statistical Process Control of an Industrial-Scale Fed-Batch Simulator</a>.
 
Imagine you are running a large factory that produces penicillin. The main challenge is to ensure every batch of penicillin is consistently high quality. Maintaining consistent quality is difficult due to inherent variations in raw materials and process conditions. Each batch of penicillin might have different characteristics, making it hard to achieve uniform quality. Advanced control strategies can help mitigate these issues by predicting and adjusting for these variations in real-time.

<h3 class="centered-heading">
    The Solution: Using Advanced Control Strategies
</h3>
<div class="grid-container grid-2x2">
  <div class="grid-item">
    <h4>Batch-to-Batch Optimization (B2B)</h4>
    <p>This strategy involves adjusting the conditions of each new batch based on the results of previous batches. By learning from past batches, the process can be fine-tuned to improve quality and consistency over time. This iterative approach ensures that the production process becomes more efficient and reliable with each batch.</p>
    <p>In B2B optimization, the optimal MVT is obtained by iteratively updating the process model with data from each new batch. The model is used to solve an optimization problem that minimizes the difference between the desired and predicted outcomes, resulting in a progressively refined trajectory.</p>
    <div class="image-container" style="width: 10cm;">
      <figure style="margin: 0;">
        <img src="assets/images/B2B.png" alt="b2b" style="width: 100%; height: auto;">
        <figcaption class="image-caption">
        Figure 1. "Batch to batch (B2B) optimisation flowchart" from Duran-Villalobos et al., 2020.
        </figcaption>
      </figure>
    </div>
  </div>

  <div class="grid-item">
    <h4>Model Predictive Control (MPC)</h4>
    <p>MPC is a powerful control strategy that uses a model of the process to predict future outcomes and make real-time adjustments. In this project, MPC is used to adjust the glucose feed rate in the fermentation process, ensuring that the penicillin yield remains consistent. By predicting potential deviations and correcting them promptly, MPC minimizes variability between batches, leading to higher quality and more consistent production.</p>
    <p>In MPC, the optimal MVT is achieved by solving an optimization problem at each control point to minimize deviations from the desired set-point, while considering constraints and the current state of the process.</p>
     <div class="image-container" style="width: 10cm;">
    <figure style="margin: 0;">
      <img src="assets/images/MPC.png" alt="b2b" style="width: 100%; height: auto;">
      <figcaption class="image-caption">
        Figure 2. "Model Predictive Control (MPC) flowchart" from Duran-Villalobos et al., 2020.
      </figcaption>
    </figure>
  </div>


  </div>
 
  <div class="grid-item">
    <h4>Validity Constraints</h4>
    <p>To ensure the reliability of the predictive models used in MPC, validity constraints are applied. These constraints restrict the decisional space to conditions that are known to be valid based on historical data. This prevents the model from making predictions that are too far removed from the conditions it was trained on, thereby ensuring that the adjustments made are both safe and effective.</p>
  </div>
  <div class="grid-item">
    <h4>Using Bootstrap Calculations</h4>
    <p>Confidence intervals are essential for understanding the reliability of predictions made by the models. In this project, bootstrap calculations were used to determine these intervals, providing a robust measure of confidence. This approach ensures that the control strategies are not only effective but also reliable, with a clear understanding of the potential variability in outcomes.</p>
  </div>
</div>

### Key Results
**Improved Consistency and Yield:** By applying batch-to-batch optimization and MPC, the project demonstrated significant improvements in both the consistency and quality of the penicillin produced. The optimized process resulted in a more stable yield, with less variation between batches. This is crucial for meeting quality standards and ensuring the reliability of the production process.

<div class="image-container" style="width: 18cm;">
  <figure style="margin: 0;">
    <img src="assets/images/B2B_campaign.png" alt="b2b" style="width: 100%; height: auto;">
    <figcaption class="image-caption">
      Figure 5. "Final penicillin concentration for the B2B campaign..."  from Duran-Villalobos et al., 2020.
    </figcaption>
  </figure>
</div>

**Results for B2B and MPC Strategies:** The results indicated that the B2B strategy improved the overall consistency and quality of the production process. MPC further enhanced these results by making real-time adjustments, leading to a significant reduction in variability and an increase in yield consistency.

<table class="data-table"  style="width: 60%">
  <thead>
    <tr>
      <th>Control methodology</th>
      <th>Yield average</th>
      <th>MSE to the set-point</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>No control</td>
      <td>21.84 g/l</td>
      <td>1.22 g/l</td>
    </tr>
    <tr>
      <td>B2B</td>
      <td>30.12 g/l</td>
      <td>1.63 g/l</td>
    </tr>
    <tr>
      <td>B2B + MPC </td>
      <td>29.92 g/l</td>
      <td>0.69 g/l</td>
    </tr>
  </tbody>
</table>

### Conclusion
By using advanced optimization and control techniques, this project demonstrates a significant improvement in the consistency and yield of penicillin production. The combination of batch-to-batch optimization and model predictive control, supported by reliable models and robust validation methods, offers a powerful approach to managing industrial-scale production processes.

<h3>Read More</h3>
<p>For a detailed exploration of our methods and results, you can read the full article:</p>
<p><a href="https://doi.org/10.1016/j.compchemeng.2019.106620" class="contact-link" target="_blank">Multivariate Statistical Data Analysis of Cell-Free Protein Synthesis</a></p>

### Projects

Here are my projects related to Control Systems and Process Optimization:

{% for project in site.data.projects %}
{% if project.category == "Control Systems and Process Optimization" %}
- <a href="{{ project.url }}" class="contact-link" target="_blank">{{ project.title }}</a>  
  {{ project.description }}

{% endif %}
{% endfor %}
