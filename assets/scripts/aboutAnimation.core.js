window.observeSection = window.observeSection || function observeSection(selector, callback) {
    const section = document.querySelector(selector);
    if (!section) return;

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            callback();
            currentObserver.unobserve(entry.target);
        });
    }, { threshold: 0.3 });

    observer.observe(section);
};

// Copyright RZU Informatique
