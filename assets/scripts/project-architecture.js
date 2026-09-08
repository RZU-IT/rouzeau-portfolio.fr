document.addEventListener('DOMContentLoaded', function() {
      const tooltip = document.getElementById('abbr-tooltip');
      const abbrs = document.querySelectorAll('abbr[data-title]');

      abbrs.forEach(abbr => {
        abbr.addEventListener('click', function(e) {
          e.stopPropagation();

          const rect = this.getBoundingClientRect();
          tooltip.style.display = 'block';
          tooltip.style.left = `${rect.left + window.scrollX}px`;
          tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
          tooltip.textContent = this.dataset.title;

          setTimeout(() => {
            tooltip.style.opacity = '1';
          }, 10);

          const closeTooltip = () => {
            tooltip.style.opacity = '0';
            setTimeout(() => {
              tooltip.style.display = 'none';
            }, 200);
            document.removeEventListener('click', closeTooltip);
          };

          setTimeout(() => {
            document.addEventListener('click', closeTooltip);
          }, 0);
        });
      });
    });

    function showFullscreen(img) {
      const viewer = document.getElementById('fullscreen-viewer');
      const fullImg = viewer.querySelector('img');
      fullImg.src = img.src;
      fullImg.alt = img.alt;
      viewer.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function hideFullscreen() {
      const viewer = document.getElementById('fullscreen-viewer');
      viewer.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

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

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const tooltip = document.getElementById('abbr-tooltip');
        tooltip.style.opacity = '0';
        setTimeout(() => {
          tooltip.style.display = 'none';
        }, 200);
      }
    });

// Copyright RZU Informatique
