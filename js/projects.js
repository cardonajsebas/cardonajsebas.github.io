// js/projects.js

const projectsData = [
    {
        title: "Olist Data Warehouse",
        techStack: "PostgreSQL, SQL, Python, DBeaver, Draw.io",
        summary: "End-to-end data warehouse built on the Olist Brazilian E-Commerce dataset following Medallion Architecture in PostgreSQL. Includes ETL stored procedures for ingestion, data cleaning, type casting and Star Schema modeling. Delivered as SQL views with derived metrics for delivery performance, customer behavior and product analytics. Fully documented with a data catalog, naming conventions, architecture diagrams and data quality issue log. Managed via GitHub Projects with feature branches and pull requests.",
        link: "https://github.com/cardonajsebas/olist-data-warehouse",
        linkText: "View on GitHub →"
    },
    {
        title: "EHR Integration Pipeline",
        techStack: "Python, REST APIs, SQL, Salesforce",
        summary: "Automated ETL pipeline that extracts, compares and synchronizes records across EHR and Salesforce platforms. Implements modular Python validation scripts for provider, patient and appointment entities, simulating enterprise-grade healthcare data integration workflows with structured reconciliation and audit logging.",
        link: "https://github.com/cardonajsebas/ehr-integration-pipeline",
        linkText: "View on GitHub →"
    },
    {
        title: "Data Analysis Portfolio",
        techStack: "SQL, Python, Tableau, pandas, numpy, Matplotlib, Seaborn",
        summary: "Collection of data analysis projects including a Global Indicators study, modeling international datasets in SQL and visualizing regional trends in Tableau, and an E-Commerce Exploratory Data Analysis uncovering purchasing patterns using pandas, NumPy and Seaborn. Demonstrates end-to-end analytical workflow from raw data to business insights.",
        link: "https://github.com/cardonajsebas",
        linkText: "View on GitHub →"
    }
];

// RENDERING FUNCTION
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
