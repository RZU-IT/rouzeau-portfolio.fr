document.addEventListener("DOMContentLoaded", () => {
    const cards = [...document.querySelectorAll("#work .media")];

    cards.forEach((card, index) => {
        const icon = card.querySelector("i");
        const body = card.querySelector(".media-body");
        if (!icon || !body) return;

        icon.style.opacity = "0";
        icon.style.transform = "translateY(-50px) scale(0.5)";
        icon.style.transition = "all 0.6s ease-out";
        body.style.opacity = "0";
        body.style.transform = `translateX(${index % 2 === 0 ? "-40px" : "40px"})`;
        body.style.transition = "all 0.6s ease-out";
    });

    observeSection("#work", () => {
        cards.forEach((card, index) => {
            const icon = card.querySelector("i");
            const body = card.querySelector(".media-body");
            if (!icon || !body) return;

            window.setTimeout(() => {
                icon.style.opacity = "1";
                icon.style.transform = "translateY(0) scale(1.2)";
                body.style.opacity = "1";
                body.style.transform = "translateX(0)";
                window.setTimeout(() => {
                    icon.style.transform = "translateY(0) scale(1)";
                }, 300);
            }, 180 + 150 * index);
        });
    });
});

// Copyright RZU Informatique
