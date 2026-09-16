window.observeSection = function observeSection(selector, callback, options = {}) {
    const section = document.querySelector(selector);
    if (!section) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const defaults = isMobile
        ? { threshold: 0, rootMargin: "0px 0px -42% 0px" }
        : { threshold: 0.2, rootMargin: "0px" };
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            callback();
            currentObserver.unobserve(entry.target);
        });
    }, { ...defaults, ...options });

    observer.observe(section);
};

// Copyright RZU Informatique
