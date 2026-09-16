const aboutContent = document.querySelectorAll("#about h2, #about p, .soft-skills h3, .soft-skills li");
const aboutProgressBars = document.querySelectorAll("#about .progress-bar");

aboutContent.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.8s ease";
});

aboutProgressBars.forEach((bar) => {
    bar.dataset.targetWidth = bar.style.width;
    bar.style.width = "0%";
    bar.style.transition = "width 1.5s ease-in-out";
});

observeSection("#about", () => {
    window.setTimeout(() => {
        aboutContent.forEach((element) => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        });
    }, 300);

    window.setTimeout(() => {
        aboutProgressBars.forEach((bar) => {
            bar.style.width = bar.dataset.targetWidth;
        });
    }, 800);
});

// Copyright RZU Informatique
