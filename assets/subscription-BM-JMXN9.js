import{i as s}from"./vendor-RkJB11I5.js";import{E as a,y as l}from"./nav-Diypcpzf.js";function c(){const e=document.createElement("button");e.id="scrollUpBtn",e.title="Up",e.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path d="M12 4L12 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 11L12 4L19 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,document.body.appendChild(e),window.addEventListener("scroll",()=>{window.scrollY>300?e.classList.add("show"):e.classList.remove("show")}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}document.addEventListener("DOMContentLoaded",()=>{c()});new a().init();document.addEventListener("DOMContentLoaded",()=>{var o;const e=document.getElementById("subscriptionForm"),n=(o=e==null?void 0:e.elements)==null?void 0:o.email,i=t=>{s.warning({message:t,position:"topCenter"})},r=t=>{s.success({message:t,position:"topCenter"}),n.value=""};e==null||e.addEventListener("submit",async t=>{if(t.preventDefault(),!n.checkValidity()){i("Please enter a valid email address.");return}const d=await l.postSubscription(n.value.trim());r(d)})});
//# sourceMappingURL=subscription-BM-JMXN9.js.map
