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
          tooltip.style.position = 'fixed';
          tooltip.style.left = `${Math.max(12, Math.min(rect.left, window.innerWidth - 312))}px`;
          tooltip.style.top = `${Math.min(rect.bottom + 8, window.innerHeight - 120)}px`;
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

    document.querySelectorAll('.code-block').forEach(block => {
      const shell = document.createElement('div');
      shell.className = 'code-scroll-shell';
      block.parentNode.insertBefore(shell, block);
      shell.appendChild(block);

      const hint = document.createElement('span');
      hint.className = 'code-scroll-hint';
      hint.setAttribute('aria-hidden', 'true');
      hint.textContent = '›';
      shell.appendChild(hint);

      const updateHint = () => {
        const overflowing = block.scrollWidth > block.clientWidth + 2;
        const atEnd = block.scrollLeft + block.clientWidth >= block.scrollWidth - 4;
        hint.hidden = !overflowing;
        hint.classList.toggle('is-hidden', atEnd);
      };
      block.addEventListener('scroll', updateHint, { passive: true });
      window.addEventListener('resize', updateHint);
      updateHint();
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

// Copyright RZU Informatique
