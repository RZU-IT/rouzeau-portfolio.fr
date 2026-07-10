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

    function showFullscreen(img) {
      const viewer = document.createElement('div');
      viewer.id = 'fullscreen-viewer';
      viewer.style.position = 'fixed';
      viewer.style.top = '0';
      viewer.style.left = '0';
      viewer.style.width = '100vw';
      viewer.style.height = '100vh';
      viewer.style.backgroundColor = 'rgba(0,0,0,0.95)';
      viewer.style.display = 'flex';
      viewer.style.justifyContent = 'center';
      viewer.style.alignItems = 'center';
      viewer.style.zIndex = '1000';
      viewer.style.cursor = 'zoom-out';

      const fullImg = document.createElement('img');
      fullImg.src = img.src;
      fullImg.style.maxWidth = '90%';
      fullImg.style.maxHeight = '90%';
      fullImg.style.border = '3px solid #D43F52';
      fullImg.style.borderRadius = '10px';

      const caption = document.createElement('div');
      caption.textContent = img.alt;
      caption.style.position = 'absolute';
      caption.style.bottom = '30px';
      caption.style.color = '#ccc';
      caption.style.fontSize = '1.1rem';

      viewer.appendChild(fullImg);
      viewer.appendChild(caption);
      document.body.appendChild(viewer);

      viewer.onclick = function() {
        document.body.removeChild(viewer);
      };

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          document.body.removeChild(viewer);
        }
      });
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

/* Rzu-Informatique */
