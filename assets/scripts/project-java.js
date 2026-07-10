document.addEventListener('DOMContentLoaded', function() {
      const abbrs = document.querySelectorAll('abbr[data-title]');
      const tooltip = document.getElementById('abbr-tooltip');

      abbrs.forEach(abbr => {
        abbr.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();

          const title = this.getAttribute('data-title');
          const rect = this.getBoundingClientRect();

          tooltip.style.display = 'block';
          tooltip.style.left = `${rect.left + window.scrollX}px`;
          tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
          tooltip.innerHTML = title;

          setTimeout(() => {
            tooltip.style.opacity = '1';
          }, 10);

          const hideTooltip = () => {
            tooltip.style.opacity = '0';
            setTimeout(() => {
              tooltip.style.display = 'none';
            }, 200);
            document.removeEventListener('click', hideTooltip);
          };

          document.addEventListener('click', hideTooltip);
        });
      });
    });

    const sections = document.querySelectorAll("section");
    function showSectionOnScroll() {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          section.style.animationPlayState = "running";
        }
      });
    }
    window.addEventListener("scroll", showSectionOnScroll);
    window.addEventListener("load", showSectionOnScroll);

/* Rzu-Informatique */
