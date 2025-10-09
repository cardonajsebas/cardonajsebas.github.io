// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. INITIALIZE PROJECTS: Render the projects stored in projects.js
    // This is how you connect the two JS files.
    if (typeof renderProjects === 'function') {
        renderProjects();
    } else {
        console.error("renderProjects function not found. Did you link projects.js correctly?");
    }

    // 2. SMOOTH SCROLLING: Enhances UX for in-page navigation links
    document.querySelectorAll('#main-nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Prevent default jump behavior
            e.preventDefault(); 
            
            // Get the ID of the target section (e.g., '#about')
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Use the built-in smooth scroll behavior
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. OPTIONAL: Header/Navigation Active State Logic (Advanced)
    // This adds a class to the nav link corresponding to the section currently in view.
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('#main-nav a[href^="#"]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove 'active' class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Find the link matching the current section ID and add 'active'
                const currentLink = document.querySelector(`#main-nav a[href="#${entry.target.id}"]`);
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            }
        });
    }, {
        // Root margin helps detect section slightly before it hits the top
        rootMargin: '-50% 0px -50% 0px', 
        threshold: 0 // Minimal threshold needed with rootMargin
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});