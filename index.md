---
layout: default
title: Home
---

<h1 style="font-family: 'Roboto', sans-serif; color: #4040FB ; text-align: center; margin-top: 30px">
    <span>
        Data-Driven Innovations for the Future
    </span>
</h1>

<style>
    .text {
        flex: 1;
        margin-right: 20px;
    }

    .skills-table {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: space-between;
        background-color: #121212; /* Dark background color for the skills section */
        padding: 10px;
        border-radius: 8px;
        margin-bottom: 20px; /* Separation between skill containers */
    }

    .skills-table .skill-item {
        flex: 1 1 calc(18% - 30px); /* Adjust to fit three items per row */
        text-align: center;
        vertical-align: top;
        padding: 10px;
        background-color: #444; /* Darker background for each skill item */
        border-radius: 8px;
    }

    .image-wrapper {
        width: 80%; /* Adjust to desired width */
        height: 0;
        padding-bottom: 80%; /* This creates a square aspect ratio */
        position: relative;
        overflow: hidden;
        margin: 0 auto; /* Center the image wrapper */
    }

    .skills-table img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover; /* This will crop the image to fit the wrapper */
    }

    .skills-table h3 {
        font-size: 1.5em; /* Larger title */
        /*color: #fff; /* White text color */
    }

    .skills-table p {
        font-size: 0.9em; /* Smaller description */
        /*color: #ccc; /* Lighter text color */
    }

    .skills-table a {
        text-decoration: none;
        color: inherit;
    }

    .skills-table a:hover {
        color: purple; /* Hover color */
    }

    /* Light mode styles */
    body.light-mode .skills-table {
        background-color: #ffffff; /* Light background color for the skills section */
    }

    body.light-mode .skills-table .skill-item {
        background-color: #f0f1f2;; /* Light background for each skill item */
        color: #000000; /* Dark text color */
    }

    body.light-mode .skills-table a:hover {
        color: purple; /* Hover color */
    }

    /* Dark mode styles */
    body.dark-mode .skills-table {
        background-color: #121212; /* Dark background color for the skills section */
        color: #fff; /* Light text color */
    }

    body.dark-mode .skills-table .skill-item {
        background-color: #1d1d1dea; /* Darker background for each skill item */
        color: #fff; /* Light text color */
    }

    body.dark-mode .skills-table a:hover {
        color: rgb(64, 64, 251); /* Hover color */
    }

        .intro-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .text {
        flex: 1;
        margin-right: 20px;
    }

    .intro-container .circular-image-container {
        flex: 0 0 250px; /* Adjust the size as needed */
        margin-left: 20px;
    }

    .circular-image {
        width: 100%;
        height: auto;
        border-radius: 50%;
        overflow: hidden;
    }
</style>


<p style="text-align: center">
    Welcome to my portfolio! Here are some examples of my projects. Explore them below.
</p>

<div class="skills-table" style= "margin-top: 50px">
    <div class="skill-item">
        <a href="./machine-learning">
            <div class="image-wrapper">
                <img src="/assets/images/machine_learning.jpg" alt="Machine Learning & AI">
            </div>
            <h3>Machine Learning & AI</h3>
            <p>Explore projects related to machine learning models, including breast cancer diagnosis and predictive maintenance.</p>
        </a>
    </div>
    <div class="skill-item">
        <a href="./data-visualization">
            <div class="image-wrapper">
                <img src="/assets/images/data_viz.jpg" alt="Data Analysis & Visualization">
            </div>
            <h3>Data Analysis & Visualization</h3>
            <p>Discover interactive dashboards and exploratory data analysis projects.</p>
        </a>
    </div>
    <div class="skill-item">
        <a href="./cloud-computing">
            <div class="image-wrapper">
                <img src="/assets/images/cloud_data.jpg" alt="Cloud & Big Data">
            </div>
            <h3>Cloud & Big Data</h3>
            <p>Learn about scalable data pipelines and big data processing projects.</p>
        </a>
    </div>
    <div class="skill-item">
        <a href="./bioinformatics">
            <div class="image-wrapper">
                <img src="/assets/images/bioinformatics.jpg" alt="Bioinformatics">
            </div>
            <h3>Bioinformatics</h3>
            <p>Dive into genomic data analysis and protein structure prediction projects.</p>
        </a>
    </div>
    <div class="skill-item">
        <a href="./control-systems">
            <div class="image-wrapper">
                <img src="/assets/images/control_systems.jpg" alt="Process Control">
            </div>
            <h3>Process Control</h3>
            <p>Understand advanced process control systems and optimization algorithms.</p>
        </a>
    </div>
</div>

<h2 id="about"  style="margin-top: 50px">
About me
</h2>

<div class="intro-container">
    <div class="text">
        <p>Hello, I'm <strong>Carlos A. Duran Villalobos</strong>, a dedicated Data Scientist and Process Control engineer with substantial expertise in machine learning, data analysis, and process optimization.</p> 
        
        <p>I hold a PhD and subsequently worked as a postdoctoral researcher at the University of Manchester, where my background in bioinformatics and control systems enabled me to contribute to various innovative projects and publish impactful research articles.</p>

        <p> Currently, I am eager to transition out of academia and have been actively pursuing state-of-the-art courses in AI and machine learning, driven by my personal interests and enthusiasm for these areas.</p>
    </div>

    <div class="circular-image-container">
        <img src="{{ '/assets/images/profile_picture.jpg' | relative_url }}" alt="Profile Picture" class="circular-image">
    </div>
</div>

## Contact

I have published several articles in renowned journals. You can find my research on [ResearchGate](https://www.researchgate.net/profile/Carlos-Duran-Villalobos/research).

For more information about my work and projects, feel free to contact me via [LinkedIn](https://www.linkedin.com/in/carlos-a-duran-villalobos/) or [GitHub](https://github.com/CarlosADuranVillalobos).