---
layout: default
title: Machine Learning and AI Projects
---

<h1>Machine Learning and AI Projects</h1>

<div class="grid-container grid-2x2">

  <!-- Breast Cancer Diagnosis Project -->
  <div class="grid-item">
    <h2><a href="https://github.com/CarlosADuranVIllalobos/Breast_Cancer_Diagnosis_ML" class="contact-link" target="_blank">Breast Cancer Diagnosis Using Machine Learning</a></h2>

    <h3>Project Overview</h3>
    <p>Develop a machine learning model to improve the accuracy of breast cancer diagnosis using the Breast Cancer Wisconsin (Diagnostic) Dataset. This project aims to harness advanced analytics to classify tumors with higher precision as either malignant or benign.</p>

    <h3>Machine Learning Approaches</h3>
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

    <div class="image-container" style="margin-top: 20px;">
      <figure style="margin: 0;">
        <img src="/assets/images/Feature_Importance.png" alt="Feature Importance" style="width: 100%; height: auto;">
        <figcaption class="image-caption">Figure 1. Feature importance analysis highlighting key predictors of breast cancer.</figcaption>
      </figure>
    </div>

    <h3>Impact</h3>
    <ul>
      <li><strong>Model Effectiveness:</strong> Demonstrated substantial improvements in prediction metrics, potentially revolutionizing breast cancer diagnosis in medical practice.</li>
      <li><strong>Clinical Relevance:</strong> Insights from the models significantly enhance early detection and diagnosis, improving patient outcomes through timely and precise interventions.</li>
    </ul>

    <div class="image-container" style="margin-top: 20px;">
      <figure style="margin: 0;">
        <img src="/assets/images/Confusion_Matrix.png" alt="Confusion Matrix" style="width: 100%; height: auto;">
        <figcaption class="image-caption">Figure 2. Confusion matrix showing the performance of different machine learning techniques.</figcaption>
      </figure>
    </div>

    <h3>Read More</h3>
    <p>For more details, check the full project: <a href="https://github.com/CarlosADuranVIllalobos/Breast_Cancer_Diagnosis_ML" class="contact-link" target="_blank">Breast Cancer Diagnosis Using Machine Learning</a></p>
  </div>

   <!-- Health Assistant Chatbot Project -->
  <div class="grid-item">
    <h2><a href="https://github.com/CarlosADuranVIllalobos/Health-Assistant-Chatbot" class="contact-link" target="_blank">Health Assistant Chatbot</a></h2>

    <h3>Project Overview</h3>
    <p>This project demonstrates how to build an AI chatbot designed to provide basic medical advice. It leverages a medical dataset and symptom-to-illness mappings to infer possible illnesses based on user-reported symptoms.</p>

    <h3>Chatbot Features</h3>
    <ul>
      <li>Natural language understanding for identifying symptoms and health concerns.</li>
      <li>Integration with the GPT-Neo model for generating dynamic responses to unknown queries.</li>
      <li>Symptom analysis and health advice using predefined datasets.</li>
    </ul>

    <h3>Challenges and Solutions</h3>
    <ul>
      <li><strong>Handling Ambiguity:</strong> The chatbot often faced ambiguous user queries. By integrating the GPT-Neo model, we provided fallback responses for queries the model couldn’t handle directly, improving user experience.</li>
      <li><strong>Symptom-Illness Mapping:</strong> Mapping symptoms to possible illnesses was complex due to the vast dataset. We used natural language processing techniques to standardize user input and match it with known symptoms.</li>
      <li><strong>Training Custom Medical Corpus:</strong> The chatbot needed a highly specialized corpus for health-related queries. I manually curated a medical corpus to train the Natural Language Understanding (NLU) model effectively.</li>
    </ul>

    <h3>Impact</h3>
    <ul>
      <li><strong>Improved Accessibility to Health Information:</strong> The chatbot provides basic health advice to users, enhancing access to healthcare information in a scalable way, especially in regions with limited access to medical professionals.</li>
      <li><strong>Custom Medical Assistance:</strong> By integrating symptom analysis with predefined datasets, the chatbot helps users understand their symptoms better and directs them to appropriate advice or action.</li>
    </ul>

    <div class="image-container" style="width: 100%;">
      <figure style="margin: 0;">
        <img src="/assets/images/chatbot1.png" alt="Chatbot Running in index.html" style="width: 100%; height: auto;">
        <figcaption class="image-caption">Figure 1. Chatbot running in index.html.</figcaption>
      </figure>
    </div>

    <h3>Read More</h3>
    <p>For more details, check the full project: <a href="https://github.com/CarlosADuranVIllalobos/Health-Assistant-Chatbot" class="contact-link" target="_blank">Health Assistant Chatbot</a></p>
  </div>

</div>

<h2>Projects</h2>

Here are my projects related to Machine Learning and AI:

{% for project in site.data.projects %}
{% if project.category == "Machine Learning and AI" %}
- <a href="{{ project.url }}" class="contact-link" target="_blank">{{ project.title }}</a>  
  {{ project.description }}
  
{% endif %}
{% endfor %}


