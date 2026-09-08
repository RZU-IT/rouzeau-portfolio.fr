document.querySelectorAll("abbr[data-title]").forEach(t=>{t.addEventListener("click",function(t){t.preventDefault(),document.querySelectorAll("abbr[data-title]").forEach(t=>t.classList.remove("show-tooltip")),this.classList.add("show-tooltip")})}),document.addEventListener("click",function(t){t.target.closest("abbr[data-title]")||document.querySelectorAll("abbr[data-title]").forEach(t=>t.classList.remove("show-tooltip"))});

// Copyright RZU Informatique
