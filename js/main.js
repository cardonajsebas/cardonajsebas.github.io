// js/main.js

function initSite() {
    // 1. INITIALIZE PROJECTS
    if (typeof renderProjects === 'function') {
        renderProjects();
    } else {
        console.error("renderProjects function not found. Did you link projects.js correctly?");
    }

    // 2. SMOOTH SCROLLING
    document.querySelectorAll('#main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3. ACTIVE NAV STATE
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('#main-nav a[href^="#"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const currentLink = document.querySelector(`#main-nav a[href="#${entry.target.id}"]`);
                if (currentLink) currentLink.classList.add('active');
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));
}

// Guard: if DOM is already parsed (scripts at bottom of body), run immediately.
// Otherwise wait for DOMContentLoaded.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
} else {
    initSite();
}