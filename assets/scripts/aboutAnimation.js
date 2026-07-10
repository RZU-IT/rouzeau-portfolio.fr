function observeSection(selector, callback) {
  const section = document.querySelector(selector);
  if (!section) return;

  new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
      callback();
      obs.unobserve(entries[0].target);
    }
  }, { threshold: 0.2 }).observe(section);
}

document.addEventListener("DOMContentLoaded", () => {
  observeSection("#about", () => {
    const elements = document.querySelectorAll(
      "#about h2, #about p, .soft-skills h3, .soft-skills li"
    );

    elements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.5s ease";
    });

    setTimeout(() => {
      elements.forEach(el => {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      });
    }, 100);

    const bars = document.querySelectorAll("#about .progress-bar");
    bars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = "0%";
      bar.style.transition = "width 1s ease-in-out";
      setTimeout(() => {
        bar.style.width = width;
      }, 200);
    });
  });
});

/* Rzu-Informatique */
