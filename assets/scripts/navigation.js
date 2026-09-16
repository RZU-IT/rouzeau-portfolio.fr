document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").replace("#", "");
            const target = document.getElementById(targetId);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

window.addEventListener("pageshow", function () {
    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
            document.documentElement.classList.remove("restoring-scroll");
        });
    });
});

// Copyright RZU Informatique
