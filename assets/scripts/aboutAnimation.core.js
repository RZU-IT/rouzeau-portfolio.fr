function observeSection(e,r){let t=document.querySelector(e);if(!t)return;let n=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(r(),t.unobserve(e.target))})},{threshold:.3});n.observe(t)}

/* Rzu-Informatique */
