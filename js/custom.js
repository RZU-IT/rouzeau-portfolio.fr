// Fonction pour vérifier si un élément est dans la vue
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Fonction pour gérer le défilement et les animations
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav a');

    sections.forEach((section, index) => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');

            // Mettre à jour le lien de navigation actif
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
}

// Ajouter un écouteur d'événement pour le défilement
window.addEventListener('scroll', handleScroll);

// Initialiser les animations au chargement de la page
document.addEventListener('DOMContentLoaded', handleScroll);

// Fonction pour le défilement fluide vers les sections
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
