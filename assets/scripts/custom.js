function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function handleScroll() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-indicators .nav-link');
    let activeSection = null;

    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
            activeSection = section;
        }
    });

    navLinks.forEach(link => link.classList.remove('active'));

    if (activeSection?.id) {
        document.querySelector(`.nav-indicators .nav-link[href="#${activeSection.id}"]`)?.classList.add('active');
    }
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);

/* Rzu-Informatique */
