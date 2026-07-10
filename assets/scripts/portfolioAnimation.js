document.addEventListener("DOMContentLoaded",function(){let t=document.querySelectorAll("#portfolio .portfolio-thumb");function e(){let o=document.getElementById("portfolio"),n=o.getBoundingClientRect();n.top<window.innerHeight-100&&(t.forEach((t,e)=>{setTimeout(()=>{t.style.opacity=1,t.style.transform="translateY(0)",t.style.animation="bounceIn 0.8s ease"},200*e)}),window.removeEventListener("scroll",e))}t.forEach(t=>{t.style.opacity=0,t.style.transform="translateY(40px)",t.style.transition="all 0.8s ease-out"}),window.addEventListener("scroll",e),e()});

/* Rzu-Informatique */
