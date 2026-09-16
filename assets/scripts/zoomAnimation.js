document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("#zoom h2");
    const subtitles = document.querySelectorAll("#zoom h3");
    const content = document.querySelectorAll("#zoom p, #zoom li");

    [title, ...subtitles, ...content].filter(Boolean).forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "all 0.5s ease-out";
    });

    observeSection("#zoom", () => {
        if (title) {
            window.setTimeout(() => {
                title.style.opacity = "1";
                title.style.transform = "translateY(0)";
            }, 100);
        }

        subtitles.forEach((subtitle) => {
            window.setTimeout(() => {
                subtitle.style.opacity = "1";
                subtitle.style.transform = "translateY(0)";
            }, 200);
        });

        content.forEach((element) => {
            window.setTimeout(() => {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }, 300);
        });
    });
});

// Copyright RZU Informatique
