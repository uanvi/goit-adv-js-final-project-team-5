import"./assets/nav-CBehZ9Dz.js";import"./assets/quote-D01Bs8Rl.js";import"./assets/subscription-BgxjFMXZ.js";import"./assets/vendor-RkJB11I5.js";const a=document.querySelector(".mac-menu"),s=document.querySelector(".close-btn"),o=document.querySelector(".menu-backdrop"),c=document.querySelector(".menu-backdrop>.menu");function e(){c.classList.contains("is-open")?(c.classList.remove("is-open"),o.removeEventListener("click",r),document.removeEventListener("keydown",i),s.removeEventListener("click",e)):(c.classList.add("is-open"),o.addEventListener("click",r),document.addEventListener("keydown",i),s.addEventListener("click",e))}a.addEventListener("click",e);const i=t=>{t.code==="Escape"&&e()},r=t=>{t.target===o&&e();const n=t.target.closest("a");n!=null&&n.classList.contains("nav-link")&&e(),n!=null&&n.classList.contains("soc-link")&&e()};
//# sourceMappingURL=index.js.map
