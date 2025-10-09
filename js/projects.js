// js/projects.js

// 1. DATA ARRAY: Store your projects as a structured array of objects
const projectsData = [
    {
        title: "EHR Integration Pipeline Development",
        techStack: "Python, SQL, Salesforce",
        summary: "A comprehensive data engineering project in Python that simulates an electronic health record (EHR) integration flow. Focuses on robust API data extraction, data transformation, and loading into a relational database, mirroring real-world healthcare data challenges.",
        link: "https://github.com/cardonajsebas/ehr-integration-pipeline",
        linkText: "View on GitHub →"
    },
    {
        title: "E-commerce Business Intelligence & Analysis",
        techStack: "Python, EDA, Business Intelligence",
        summary: "Detailed Kaggle project utilizing SQL and advanced data analysis techniques to uncover key trends, customer segmentation, and performance metrics within a large e-commerce dataset. Demonstrates ability to drive business decision-making through insights.",
        link: "https://www.kaggle.com/code/jsebascardona/e-commerce-project",
        linkText: "View on Kaggle →"
    },
    {
        title: "Educational Data Modeling and Prediction",
        techStack: "SQL, Spreadsheets, Data Visualization",
        summary: "A personal project focused on modeling and predicting educational outcomes. Showcases skill in data cleaning, exploratory data analysis (EDA), and implementing statistical models to derive actionable conclusions in the education sector.",
        link: "https://github.com/cardonajsebas/personal_project_education",
        linkText: "View on GitHub →"
    }
];

// 2. RENDERING FUNCTION
function renderProjects() {
    const projectGrid = document.getElementById('project-grid');
    if (!projectGrid) return;

    const cardsHtml = projectsData.map(project => {
        const techTags = project.techStack
            .split(',')
            .map(tech => tech.trim())
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');

        return `
            <article class="project-card">
                <h3>${project.title}</h3>
                <div class="tech-stack-container"> 
                    ${techTags}
                </div>
                <p class="summary">${project.summary}</p>
                <a href="${project.link}" target="_blank" class="project-link">${project.linkText}</a>
            </article>
        `;
    }).join('');

    projectGrid.innerHTML = cardsHtml;
}
