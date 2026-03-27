// js/projects.js

const projectsData = [
    {
        title: "Olist - Data Warehouse (Phase 1)",
        techStack: "PostgreSQL, SQL, Python, DBeaver, Draw.io",
        summary: "Built an end-to-end data warehouse from scratch on the Olist Brazilian E-Commerce dataset using Medallion Architecture in PostgreSQL. Includes ETL stored procedures, Star Schema modeling, and full data quality validation.",
        link: "https://github.com/cardonajsebas/olist-data-warehouse",
        linkText: "View Phase 1 on GitHub →"
    },
    {
        title: "Olist - Cloud Migration (Phase 2)",
        techStack: "GCP, BigQuery, dbt, GitHub Actions, Python, CLI",
        summary: "Migrated the local warehouse to GCP. Implemented dbt for transformations and testing, with a CI/CD pipeline via GitHub Actions to automate builds on every pull request.",
        link: "https://github.com/cardonajsebas/olist-analytics-engineering",
        linkText: "View Phase 2 on GitHub →"
    },
    {
        title: "EHR Integration Pipeline",
        techStack: "Python, REST APIs, SQL, Salesforce",
        summary: "Automated ETL pipeline synchronizing records across EHR and Salesforce platforms. Features modular Python validation scripts for enterprise-grade healthcare data reconciliation.",
        link: "https://github.com/cardonajsebas/ehr-integration-pipeline",
        linkText: "View on GitHub →"
    },
    {
        title: "Data Analysis Portfolio",
        techStack: "SQL, Python, Tableau, pandas, NumPy, Seaborn",
        summary: "Analytical portfolio covering global development indicators and E-commerce EDA, demonstrating workflows from raw data ingestion to stakeholder-ready insights.",
        link: "https://github.com/cardonajsebas",
        linkText: "View on GitHub →"
    }
];

function buildTechTags(techStack) {
    return techStack.split(',').map(tech => `<span class="tech-tag">${tech.trim()}</span>`).join('');
}

function renderStandardCard(project) {
    return `
        <article class="project-card">
            <h3>${project.title}</h3>
            <div class="tech-stack-container">${buildTechTags(project.techStack)}</div>
            <p class="summary">${project.summary}</p>
            <a href="${project.link}" target="_blank" class="project-link">${project.linkText}</a>
        </article>
    `;
}

function renderProjects() {
    const projectGrid = document.getElementById('project-grid');
    if (projectGrid) {
        projectGrid.innerHTML = projectsData.map(renderStandardCard).join('');
    }
}