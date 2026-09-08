observeSection("#about",()=>{let t=document.querySelectorAll("#about h2, #about p, .soft-skills h3, .soft-skills li");t.forEach(t=>{t.style.opacity="0",t.style.transform="translateY(30px)",t.style.transition="all 0.8s ease"}),setTimeout(()=>{t.forEach(t=>{t.style.opacity="1",t.style.transform="translateY(0)"})},300);let l=document.querySelectorAll("#about .progress-bar");l.forEach(t=>{let l=t.style.width;t.style.width="0%",t.style.transition="width 1.5s ease-in-out",setTimeout(()=>{t.style.width=l},800)})});

// Copyright RZU Informatique
