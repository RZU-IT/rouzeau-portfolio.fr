document.addEventListener("DOMContentLoaded", function () {
    // Lien vers les sections avec défilement manuel
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").replace("#", "");
            const target = document.getElementById(targetId);

            if (target) {
                // Scroll vers la section ciblée sans animation CSS ni scroll auto de fullPage
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth" // tu peux mettre "auto" si tu ne veux aucune animation JS
                });
            }
        });
    });
});
