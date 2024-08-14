---
layout: default
title: Machine Learning and AI Projects
---

# Machine Learning and AI Projects


<h2><a href="https://github.com/CarlosADuranVIllalobos/Breast_Cancer_Diagnosis_ML" class="contact-link" target="_blank">Breast Cancer Diagnosis Using Machine Learning</a></h2>

  <h3>Project Overview</h3>
<p><strong>Objective:</strong> Develop a machine learning model to improve the accuracy of breast cancer diagnosis using the Breast Cancer Wisconsin (Diagnostic) Dataset. This project aims to harness advanced analytics to classify tumors with higher precision as either malignant or benign.</p>

<h3>Machine learning approaches</h3>
<ul>
<li><strong>Random Forest:</strong> A method that uses many simple models (decision trees) to make better predictions together.</li>
<li><strong>Gradient Boosting:</strong> A technique that improves predictions by learning from the mistakes of previous models.</li>
<li><strong>Partial Least Squares Regression (PLS):</strong> A method that simplifies complex data to make it easier to understand and work with.</li>
<li><strong>Neural Networks:</strong> Systems modeled after the human brain that learn from large amounts of data to recognize patterns.</li>
</ul>

<h3>Challenges and Solutions</h3>
<p>Throughout the project, I tackled various challenges using advanced data science techniques to ensure the effectiveness of our machine learning models:</p>
<ul>
  <li><strong>Data Preprocessing:</strong> Implemented advanced techniques for handling missing data, encoding categorical variables, and scaling features to ensure high-quality inputs for model training.</li>
  <li><strong>Feature Engineering:</strong> Applied domain expertise to create new features and reduce dimensionality, enhancing model interpretability and performance.</li>
  <li><strong>Model Training:</strong> Trained various machine learning models and tuned hyperparameters to optimize performance.</li>
  <li><strong>Model Evaluation:</strong> Evaluated model performance using accuracy, precision, recall, F1 score, ROC AUC, and confusion matrix analysis to assess effectiveness in predicting breast cancer.</li>
</ul>


<div class="horizontal-images" style="display: flex; justify-content: space-around; align-items: center;">
    <div class="image-container" style="flex: 1; margin: 5px; max-width: 22cm;">
      <figure style="margin: 0;">
        <img src="/assets/images/Feature_Importance.png" alt="Feature Importance" style="width: 100%; height: auto;">
        <figcaption class="image-caption">Figure 1. Feature importance analysis highlighting key predictors of breast cancer.</figcaption>
      </figure>
    </div>

    <div style="flex: 1; margin: 5px; overflow-x: auto;">
      <table class="data-table" style="width: 100%">
      <caption style="caption-side: top; text-align: center; font-size: 20px; font-weight: bold; margin: 10px 0;">Model Performance Metrics</caption>
        <thead>
          <tr>
            <th>Model</th>
            <th>Accuracy</th>
            <th>Precision</th>
            <th>Recall</th>
            <th>F1 Score</th>
            <th>ROC AUC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Random Forest</td>
            <td>0.964912</td>
            <td>0.953488</td>
            <td>0.953488</td>
            <td>0.953488</td>
            <td>0.997707</td>
          </tr>
          <tr>
            <td>Gradient Boosting</td>
            <td>0.947368</td>
            <td>0.930233</td>
            <td>0.930233</td>
            <td>0.930233</td>
            <td>0.995414</td>
          </tr>
          <tr>
            <td>PLS Regression</td>
            <td>0.973684</td>
            <td>0.976190</td>
            <td>0.953488</td>
            <td>0.964706</td>
            <td>0.994759</td>
          </tr>
          <tr>
            <td>Neural Network</td>
            <td>0.991228</td>
            <td>1.000000</td>
            <td>0.976744</td>
            <td>0.988235</td>
            <td>0.988863</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>



<h3>Impact</h3>
<ul>
  <li><strong>Model Effectiveness:</strong> Demonstrated substantial improvements in prediction metrics, potentially revolutionizing breast cancer diagnosis in medical practice.</li>
  <li><strong>Clinical Relevance:</strong> Insights from the models significantly enhance early detection and diagnosis, improving patient outcomes through timely and precise interventions.</li>
</ul>

<div class="image-container" style="width: 22cm;">
    <figure style="margin: 0;">
      <img src="/assets/images/Confusion_Matrix.png" alt="Confusion Matrix" style="width: 100%; height: auto;">
      <figcaption class="image-caption">Figure 2. Confusion matrix showing the performance of different machine learning techniques.</figcaption>
    </figure>
  </div>

<h3>Key Achievements</h3>
<ul>
  <li><strong>Best Performing Model:</strong> Developed and tuned a Neural Network model that outperformed other techniques in accuracy, precision, and F1 score.</li>
  <li><strong>Data-driven Insights:</strong> Provided actionable insights that could be used directly in clinical settings to improve diagnostic accuracy.</li>
</ul>

<h3>Read More</h3>
<p>For a detailed exploration of our methods and results, you can view the full project:</p>
<p><a href="https://github.com/CarlosADuranVIllalobos/Breast_Cancer_Diagnosis_ML" class="contact-link" target="_blank">Breast Cancer Diagnosis Using Machine Learning</a></p>


### Projects
Here are my projects related to Machine Learning and AI:

{% for project in site.data.projects %}
{% if project.category == "Machine Learning and AI Projects" %}
- <a href="{{ project.url }}" class="contact-link" target="_blank">{{ project.title }}</a>  
  {{ project.description }}
  
{% endif %}
{% endfor %}
