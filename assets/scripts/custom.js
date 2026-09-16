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
document.addEventListener('DOMContentLoaded', () => {
    handleScroll();

    if (!window.matchMedia('(max-width: 768px)').matches) return;

    const animatedBlocks = document.querySelectorAll('.section:not(#home) .wow');
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            currentObserver.unobserve(entry.target);
        });
    }, { threshold: 0, rootMargin: '0px 0px -42% 0px' });

    animatedBlocks.forEach((block) => {
        block.style.animation = 'none';
        block.style.opacity = '0';
        block.style.transform = 'translateY(24px)';
        block.style.transition = 'opacity 0.65s ease, transform 0.65s ease';
        observer.observe(block);
    });
});

// Copyright RZU Informatique
