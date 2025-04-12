var I=t=>{throw TypeError(t)};var q=(t,e,s)=>e.has(t)||I("Cannot "+s);var b=(t,e,s)=>(q(t,e,"read from private field"),s?s.call(t):e.get(t)),S=(t,e,s)=>e.has(t)?I("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),P=(t,e,s,n)=>(q(t,e,"write to private field"),n?n.call(t,s):e.set(t,s),s),E=(t,e,s)=>(q(t,e,"access private method"),s);import{a as X}from"./assets/vendor-DYiOAYln.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();class A{constructor(e){this.page=e.page,this.perPage=e.perPage,this.totalPages=e.totalPages,this.results=e.results}}class z{constructor(e,s,n){this.filter=e,this.name=s,this.imgURL=n}}class O{constructor(e,s,n){this.filter=e,this.page=s,this.limit=n}}class Z extends A{constructor(e){super(e)}getFilters(){return this.results.map(e=>new z(e.filter,e.name,e.imgURL))}}class C{constructor(e,s,n,i,r=1,a=10){this.bodypart=e,this.muscles=s,this.equipment=n,this.keyword=i,this.page=r,this.limit=a}}class B{constructor(e){this.id=e._id,this.bodyPart=e.bodyPart,this.equipment=e.equipment,this.gifUrl=e.gifUrl,this.name=e.name,this.target=e.target,this.description=e.description,this.rating=e.rating,this.burnedCalories=e.burnedCalories,this.time=e.time,this.popularity=e.popularity}}class ee extends A{constructor(e){super(e)}getExercises(){return this.results.map(e=>new B(e))}}class H{constructor(e,s,n){this.rate=e,this.email=s,this.review=n}}class te{constructor(e){this.quote=e.quote,this.author=e.author}}const se="https://your-energy.b.goit.study/api";class ne{constructor(){this._api=X.create({baseURL:se,headers:{"Content-Type":"application/json"}})}async fetchFilters(e){try{const s=await this._api.get("/filters",{params:e});return new Z(s.data)}catch(s){throw console.error("Error fetching filters:",s),s}}async fetchExercisesByFilter(e){try{const s=await this._api.get("/exercises",{params:e});return new ee(s.data)}catch(s){throw console.error("Error fetching exercises by filter:",s),s}}async fetchExercisesById(e){try{const s=await this._api.get(`/exercises/${e}`);return new B(s.data)}catch(s){throw console.error("Error fetching exercises by ID:",s),s}}async patchExerciseRating(e,s){try{const n=await this._api.patch(`/exercises/${e}/rating`,s);return new B(n.data)}catch(n){throw console.error("Error updating exercise rating:",n),n}}async fetchQuoteOfTheDay(){try{const e=await this._api.get("/quote");return new te(e.data)}catch(e){throw console.error("Error fetching quote of the day:",e),e}}async postSubscription(e){try{return(await this._api.post("/subscription",{email:e})).data.message}catch(s){throw console.error("Error posting subscription:",s),s}}}const m=new ne;(()=>{var r,a,M,d,N,$;const t="quote-of-the-day-container",e="quoteOfTheDay";class s{constructor({text:c,author:f,date:w=null}){S(this,a);S(this,r);this.text=c,this.author=f,this.date=w||new Date}set date(c){P(this,r,E(this,a,M).call(this,c))}get date(){return b(this,r)}isFresh(){return b(this,r)===E(this,a,M).call(this,new Date)}toJSON(){return{text:this.text,author:this.author,date:b(this,r)}}}r=new WeakMap,a=new WeakSet,M=function(c){return c.toISOString().split("T")[0]};class n{static async getQuote(){const c=E(this,d,N).call(this);if(c!=null&&c.isFresh())return c;const f=await m.fetchQuoteOfTheDay(),w=new s({text:f.quote,author:f.author});return E(this,d,$).call(this,w),w}}d=new WeakSet,N=function(){const c=JSON.parse(localStorage.getItem(e));return c&&(c.date=new Date(c==null?void 0:c.date)),c?new s(c):null},$=function(c){localStorage.setItem(e,JSON.stringify(c))},S(n,d);async function i(){const u=document.querySelector(`[data-role="${t}"]`);if(u===null)throw new Error(`Failed to render quote: element with data-role "${t}" not found.`);try{const c=await n.getQuote();u.innerHTML=`
        <p class="quote-text">${c.text}</p>
        <p class="quote-author">${c.author}</p>
      `}catch(c){console.error("Error fetching quote:",c)}}document.addEventListener("DOMContentLoaded",i)})();const U="favorites";function V(){try{return JSON.parse(localStorage.getItem(U))||[]}catch{return[]}}function ie(t){if(!t)return;const e=V(),s=e.indexOf(t);s>=0?e.splice(s,1):e.push(t),localStorage.setItem(U,JSON.stringify(e))}const l={closeModalButton:"[data-modal-close]",modalContainer:"[data-modal]",exerciseModal:".modal",ratingModal:".add-rating-modal",addToFavoritesButton:".btn-modal-add-fav",imgModalExercise:".img-modal-exercise",titleModal:".title-modal",ratingValue:".rating-value",statsList:".stats-list",descText:".desc-text",btnFavText:".btn-fav-text",iconFavBtnUse:".icon-fav-btn-use",openRatingModalButton:"[data-add-rating-open]",closeRatingModalButton:"[data-add-rating-close]",ratingForm:".add-rating-form",addRatingValue:".add-rating-value",iconModalRatingStar:".icon-modal-rating-star",addRatingRadioBtn:".add-rating-radio-btn",openModalButtons:"[data-modal-open]",ratingStars:".rating-stars"},h={visuallyHidden:"visually-hidden",favAdded:"fav-added",modalOpen:"modal-open",gold:"gold"},re=document.querySelector(l.closeModalButton),k=document.querySelector(l.modalContainer),v=document.querySelector(l.exerciseModal),y=document.querySelector(l.ratingModal),D=document.querySelector(l.addToFavoritesButton);let L=null;async function ae(t){L=t;const e=await m.fetchExercisesById(t);J(e),Q(),le(),k.classList.toggle(h.visuallyHidden),K(),ue()}function oe(){document.querySelector(l.imgModalExercise).src="",document.querySelector(l.titleModal).textContent="",document.querySelector(l.ratingValue).textContent="0",document.querySelector(l.statsList).innerHTML="",document.querySelector(l.descText).textContent=""}function J(t){oe(),document.querySelector(l.imgModalExercise).src=t.gifUrl,document.querySelector(l.titleModal).textContent=t.name.trim(),document.querySelector(l.descText).textContent=t.description.trim(),document.querySelector(l.ratingValue).textContent=t.rating,pe(t.rating),ce(t)}function ce(t){const e=document.querySelector(l.statsList);e.innerHTML="";let s="";t.target&&(s+=x("Target",t.target)),t.bodyPart&&(s+=x("BodyPart",t.bodyPart)),t.equipment&&(s+=x("Equipment",t.equipment)),t.popularity&&(s+=x("Popular",t.popularity)),t.burnedCalories&&(s+=x("Burned Calories",`${t.burnedCalories}/${t.time} min`)),e.insertAdjacentHTML("beforeend",s)}function x(t,e){return`<li class="stats-item">
    <p class="stats-title">${t}</p>
    <p class="stats-value">${e}</p>
  </li>`}function Q(){const t=V().includes(L);D.classList.toggle(h.favAdded,t),document.querySelector(l.btnFavText).textContent=t?"Remove from favorites":"Add to favorites",document.querySelector(l.iconFavBtnUse).setAttribute("href",`./img/svg/sprites.svg#${t?"trash-bin":"heart"}`)}function le(){D.addEventListener("click",t=>{t.currentTarget.classList.toggle(h.favAdded),ie(L),Q(),t.stopImmediatePropagation()})}function K(){document.addEventListener("keydown",j),document.body.classList.add(h.modalOpen)}function de(){document.removeEventListener("keydown",j),document.body.classList.remove(h.modalOpen),L=null}function j(t){t.key==="Escape"&&R()}function R(){y.classList.add(h.visuallyHidden),v.classList.remove(h.visuallyHidden),k.classList.add(h.visuallyHidden),de()}re.addEventListener("click",R);k.addEventListener("click",t=>{T(t,v.getBoundingClientRect())||T(t,y.getBoundingClientRect())||R(),t.stopImmediatePropagation()});function T(t,e){return e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width}function ue(){const t=document.querySelector(l.openRatingModalButton);document.querySelector(l.addRatingValue).textContent="0",t.addEventListener("click",n=>{y.classList.remove(h.visuallyHidden),v.classList.add(h.visuallyHidden),K(),s(),n.stopImmediatePropagation()}),document.querySelector(l.closeRatingModalButton).addEventListener("click",n=>{y.classList.add(h.visuallyHidden),v.classList.remove(h.visuallyHidden),Y(y.querySelector("form")),n.stopImmediatePropagation()});function s(){document.querySelectorAll(l.addRatingRadioBtn).forEach(i=>{i.addEventListener("click",r=>{const a=Number(r.currentTarget.value);document.querySelector(l.addRatingValue).textContent=`${a}`,document.querySelectorAll(l.iconModalRatingStar).forEach((o,d)=>{o.classList.toggle(h.gold,d<a)}),r.stopImmediatePropagation()})})}document.querySelector(l.ratingForm).addEventListener("submit",he)}function Y(t){t.elements.email.value="",t.elements.comment.value="",t.elements.radio.forEach(e=>e.checked=!1),document.querySelector(l.addRatingValue).textContent="0",document.querySelectorAll(l.iconModalRatingStar).forEach(e=>e.classList.remove(h.gold))}async function he(t){var a,o;t.preventDefault();const e=parseInt(document.querySelector(l.addRatingValue).textContent??"0"),s=t.target,n=s.elements.email.value,i=s.elements.comment.value;let r=new fe;if(!e)r.info("Choose your rating");else if(!n)r.info("Enter your email");else if(!i)r.info("Leave a comment");else try{const d=new H(e,n,i),_=await m.patchExerciseRating(L,d);Y(s),r.success("Rating successfully updated"),y.classList.add(h.visuallyHidden),v.classList.remove(h.visuallyHidden),J(_)}catch(d){r.error(`Error: ${((o=(a=d==null?void 0:d.response)==null?void 0:a.data)==null?void 0:o.message)??d.message}`)}t.stopImmediatePropagation()}function me(){document.querySelectorAll(l.openModalButtons).forEach(e=>{e.addEventListener("click",s=>{ae(s.currentTarget.value)})})}function pe(t){const e=document.querySelector(l.ratingStars);e.innerHTML="",e.append(...ge(5,t))}function ge(t,e){const s=[];for(let n=0;n<t;n++){const i=Math.min(100,Math.max(0,(e-n)*100)),r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("width","18"),r.setAttribute("height","18"),r.setAttribute("class","icon icon-modal-star");const a=`gradient-${n}-${i}`;r.innerHTML=`
      <defs>
        <linearGradient id="${a}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${i}%" stop-color="var(--color-accent)" />
          <stop offset="${i}%" stop-color="var(--color-rating)" />
        </linearGradient>
      </defs>
      <use href="./img/svg/sprites.svg#star" fill="url(#${a})"></use>
    `,s.push(r)}return s}class fe{info(e){alert(e)}success(e){alert(e)}error(e){alert(e)}}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelectorAll(".nav-list-link"),e=window.location.pathname.split("/").filter(n=>n&&n.length>0);let s;e.length==0?s="index.html":s=e[e.length-1],t.forEach(n=>{n.getAttribute("href").endsWith(s)&&n.classList.add("active")})});function _e(){const t=document.createElement("button");t.id="scrollUpBtn",t.title="Up",t.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path d="M12 4L12 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 11L12 4L19 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,document.body.appendChild(t),window.addEventListener("scroll",()=>{window.scrollY>300?t.classList.add("show"):t.classList.remove("show")}),t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}class ye{constructor(){this.backdrop=document.createElement("div"),this.backdrop.className="loader-backdrop",this.backdrop.innerHTML='<div class="loader"></div>'}show(){document.body.contains(this.backdrop)||document.body.appendChild(this.backdrop)}hide(){document.body.contains(this.backdrop)&&document.body.removeChild(this.backdrop)}}const G="/goit-adv-js-final-project-team-5/assets/sprite-D9KaOlX4.svg";function F(t){return t.charAt(0).toUpperCase()+t.slice(1)}class Ee{constructor(){this._element=document.createElement("li"),this._element.classList.add("exercises-filters__item"),this._image=document.createElement("img"),this._image.classList.add("exercises-filters__image"),this._image.setAttribute("loading","lazy"),this._overlay=document.createElement("div"),this._overlay.classList.add("exercises-filters__overlay"),this._overlayTitle=document.createElement("h5"),this._overlayText=document.createElement("p"),this._overlayText.classList.add("exercises-filters__overlay-text")}setImage(e){this._image.src=e}setTitle(e){this._overlayTitle.textContent=F(e)}setText(e){this._overlayText.textContent=F(e)}setFilterName(e,s){this._element.dataset.name=e,this._element.dataset.filter=s}setImageAlt(e){this._image.alt=e}build(){return this._overlay.append(this._overlayTitle,this._overlayText),this._element.append(this._image,this._overlay),this._element}}class xe{constructor(){this._element=document.createElement("li"),this._element.classList.add("exercises-list__item"),this._header=document.createElement("div"),this._header.classList.add("exercise-header"),this._nameBlock=document.createElement("h3"),this._nameBlock.classList.add("exercise-name"),this._infoBlock=document.createElement("div"),this._infoBlock.classList.add("exercise-info")}addHeader(e,s){const n=document.createElement("div");n.classList.add("exercise-header__left");const i=document.createElement("p");i.classList.add("exercise-workout"),i.textContent="WORKOUT",n.append(i);const r=document.createElement("p");r.classList.add("exercise-rating"),r.textContent=`${e}`;const a=document.createElement("span");a.append(this._createSvg("star","exercise-rating__icon",24,24)),r.append(a),n.append(r);const o=document.createElement("button");o.type="button",o.classList.add("exercise-header__start-button"),o.classList.add("btn-start"),o.textContent="Start",o.value=s,o.setAttribute("data-modal-open",""),o.append(this._createSvg("exercise-start","exercise-arrow",13,13)),this._header.append(n,o)}addName(e){this._nameBlock.append(this._createSvg("runner","exercise-name-icon",13,13)),this._nameBlock.append(e)}addInfo(e,s,n){this._infoBlock.append(this._createInfoTextElement("Burned calories: ",e)),this._infoBlock.append(this._createInfoTextElement("Body part: ",s)),this._infoBlock.append(this._createInfoTextElement("Target: ",n))}build(){return this._element.append(this._header,this._nameBlock,this._infoBlock),this._element}setId(e){this._element.dataset.id=e}_createInfoTextElement(e,s,n="truncate-text"){const i=document.createElement("p");i.classList.add(n);const r=document.createElement("strong");return r.classList.add("exercise-info__title"),r.textContent=e,i.append(r),i.append(document.createTextNode(s)),i}_createSvg(e,s){const n=document.createElement("svg");n.classList.add(s);const i=document.createElement("use");return i.setAttribute("href",`${G}#${e}`),n.appendChild(i),n}}class ve{constructor(){if(this._exercisesFilterParent=document.getElementById("exercises-filters"),this._exercisesParent=document.getElementById("exercises-list"),!this._exercisesFilterParent)throw new Error("Exercises filter parent element not found");this._paginationElement=document.querySelector(".exercises-pagination>ul"),this._breadcrumbs=document.querySelector(".breadcrumbs"),this._searchContainer=document.getElementById("search-container"),this._searchInput=this._searchContainer.querySelector(".search-input"),this._page=1,this._limit=12,this._pages=1,this._elements=[],this._isCategory=!1}async init(){this._setPageLimit(),await this._fetchFilters(),this._renderFilters(),this._addEventListeners()}_setPageLimit(){this._page=1,window.innerWidth<=768?this._limit=9:this._limit=12}async _fetchFilters(){const e=this._exercisesFilterParent.querySelector(".exercises-filters__selected");if(!e)throw new Error("Filter button not found");const s=e.dataset.name,n=new O(s,this._page,this._limit);try{const i=await m.fetchFilters(n),r=i.getFilters();this._pages=i.totalPages,r.length>0&&(this._elements=r.map(a=>{const o=new Ee;return o.setImage(a.imgURL),o.setTitle(a.name),o.setText(a.filter),o.setFilterName(a.name,a.filter),o.setImageAlt(a.name),o.build()})),this._pages=i.totalPages}catch(i){console.error("Error fetching filters:",i)}}_renderFilters(){this._exercisesParent.replaceChildren(...this._elements),this._renderPagination(),this._addBreadcrumbs(),this._isCategory=!0,localStorage.removeItem("exerciseFilter"),this._searchContainer.classList.add("hidden")}async _onCardClick(e){e.preventDefault();const s=e.target.closest(".exercises-filters__item");if(s){this._searchContainer.classList.remove("hidden"),this._addBreadcrumbs(s.dataset.name);const n=s.dataset.name,i=s.dataset.filter,r=this._buildRequest(n,i);localStorage.setItem("exerciseFilter",JSON.stringify(r)),await this._loadAndRenderExercises(r),me()}}async _loadAndRenderExercises(e){const s=await m.fetchExercisesByFilter(e);this._renderExercises(s),this._renderPagination(),this._isCategory=!1}_addBreadcrumbs(e=null){if((this._breadcrumbs.children.length>1||!e&&this._breadcrumbs.children.length>1)&&this._breadcrumbs.children[1].remove(),!e)return;const s=document.createElement("li");s.classList.add("breadcrumbs__item");const n=document.createElement("span");n.textContent="/",s.append(n),s.append(F(e)),this._breadcrumbs.append(s)}_renderPagination(){const e=[],s=document.createElement("li");s.classList.add("exercises-pagination__dots"),s.textContent="...";const n=(o,d,_,g)=>{const u=document.createElement("li");u.classList.add("exercises-pagination__item"),u.classList.add(o),u.classList.add("exercises-pagination__arrow"),u.dataset.page=d,this._page===d&&u.classList.add("disabled");const c=document.createElement("svg");c.classList.add(_);const f=document.createElement("use");return f.setAttribute("href",`${G}#${g}`),c.appendChild(f),u.append(c),u},i=()=>{const o=n("exercises-pagination__beginning",1,"exercises-pagination__beginning__arrow","pagination-left-double-arrow"),d=n("exercises-pagination__previous",this._page===1?1:this._page-1,"exercises-pagination__arrow","pagination-left-single-arrow");e.push(o),e.push(d),this._page>=3&&e.push(s)},r=()=>{const o=n("exercises-pagination__last",this._pages,"exercises-pagination__arrow","pagination-right-double-arrow"),d=n("exercises-pagination__next",this._page===this._pages?this._pages:this._page+1,"exercises-pagination__arrow","pagination-right-single-arrow");this._page<=this._pages-2&&e.push(s),e.push(d),e.push(o)},a=(o,d=1)=>{const _=[];for(let g=d;g<=o;g++){const u=document.createElement("li");u.classList.add("exercises-pagination__item"),u.classList.add("exercises-pagination__number"),g===this._page&&u.classList.add("exercises-pagination__current"),u.textContent=g,u.dataset.page=g,_.push(u)}return _};if(this._pages<=3&&e.push(...a(this._pages)),this._pages>3){i();const o=this._page===1?1:this._page===this._pages?this._page-2:this._page-1,d=o+2;e.push(...a(d,o)),r()}this._paginationElement.innerHTML="";for(const o of e)this._paginationElement.innerHTML+=o.outerHTML}async _onPageClick(e){e.preventDefault();const s=e.target.closest(".exercises-pagination__item");if(!s||s.classList.contains("disabled"))return;const n=parseInt(s.dataset.page);if(isNaN(n)||(this._page=n),this._isCategory){await this._fetchFilters(),this._renderFilters();return}const i=JSON.parse(localStorage.getItem("exerciseFilter"));i.page=this._page,localStorage.setItem("exerciseFilter",JSON.stringify(i)),await this._loadAndRenderExercises(i)}_renderExercises(e){if(this._exercisesParent.innerHTML="",!e||!e.results||e.results.length===0){this._exercisesParent.innerHTML="<p>No exercises found.</p>";return}this._pages=e.totalPages;const s=e.getExercises();this._elements=s.map(n=>{const i=new xe;return i.setId(n.id),i.addHeader(n.rating,n.id),i.addName(n.name),i.addInfo(n.burnedCalories,n.bodyPart,n.target),i.build()});for(const n of this._elements)this._exercisesParent.innerHTML+=n.outerHTML}async _onFilterClick(e){e.preventDefault(),this._setPageLimit(),this._exercisesFilterParent.querySelectorAll(".exercises-filters__selected").forEach(n=>{n.classList.remove("exercises-filters__selected")}),e.target.classList.add("exercises-filters__selected"),await this._fetchFilters(),this._renderFilters()}_addEventListeners(){this._exercisesFilterParent.removeEventListener("click",this._onFilterClick.bind(this)),this._exercisesFilterParent.addEventListener("click",this._onFilterClick.bind(this)),this._exercisesParent.removeEventListener("click",this._onCardClick.bind(this)),this._exercisesParent.addEventListener("click",this._onCardClick.bind(this)),this._paginationElement.addEventListener("click",this._onPageClick.bind(this)),this._searchContainer.querySelector(".search-button").addEventListener("click",this._onSearchClick.bind(this)),this._searchInput.addEventListener("keyup",this._onSearchKeyUp.bind(this))}async _onSearchClick(e){e.preventDefault();const s=this._searchInput.value.trim();if(s){const n=JSON.parse(localStorage.getItem("exerciseFilter"));n.keyword=s,localStorage.setItem("exerciseFilter",JSON.stringify(n)),this._searchInput.value="",await this._loadAndRenderExercises(n)}}async _onSearchKeyUp(e){e.preventDefault();const s=this._searchInput.value.trim();e.key==="Enter"&&s&&await this._onSearchClick(e)}_buildRequest(e,s){if(s.toLowerCase()==="muscles")return new C(null,e,null,null,this._page,this._limit);if(s.toLowerCase()==="equipment")return new C(null,null,e,null,this._page,this._limit);if(s.toLowerCase()==="body parts")return new C(e,null,null,null,this._page,this._limit)}}const Le=new ve,p=new ye,we=new O("Body parts",1,5);p.show();m.fetchFilters(we).then(t=>{console.log("Response:",t),console.log("Filters:",t.getFilters())}).catch(t=>{console.error("Error:",t)}).finally(()=>{p.hide()});const be=new C("back","lats","barbell","pull",1,5);p.show();m.fetchExercisesByFilter(be).then(t=>{console.log("Response:",t),console.log("Exercises:",t.getExercises())}).catch(t=>{console.error("Error:",t)}).finally(()=>{p.hide()});const W="64f389465ae26083f39b1ab2";p.show();m.fetchExercisesById(W).then(t=>{console.log("Response:",t)}).catch(t=>{console.error("Error:",t)}).finally(()=>{p.hide()});const Se=new H(3,`test${Date.now()}@gmail.com`,"Great exercise! Very effective.");p.show();m.patchExerciseRating(W,Se).then(t=>{console.log("Response:",t)}).catch(t=>{console.error("Error:",t)}).finally(()=>{p.hide()});p.show();m.fetchQuoteOfTheDay().then(t=>{console.log("Quote of the Day:",t),console.log("Quote:",t.quote),console.log("Author:",t.author)}).catch(t=>{console.error("Error fetching quote:",t)}).finally(()=>{p.hide()});const Ce=`sub_test${Date.now()}@gmail.com`;p.show();m.postSubscription(Ce).then(t=>{console.log("Subscription Response:",t)}).catch(t=>{console.error("Error:",t)}).finally(()=>{p.hide()});document.addEventListener("DOMContentLoaded",()=>{_e()});Le.init();const qe=t=>{t.response?alert({400:"Bad request: invalid request body.",404:"Endpoint not found.",409:"You are already subscribed.",500:"Server error: please try again later."}[t.response.status]||"Unknown server error occurred."):alert("Unexpected error. Please check your connection and try again."),console.error("API Error:",t)};document.addEventListener("DOMContentLoaded",()=>{var i;const t=document.getElementById("subscriptionForm"),e=(i=t==null?void 0:t.elements)==null?void 0:i.email,s=r=>alert(r),n=r=>{s(r),e.value=""};t==null||t.addEventListener("submit",async r=>{if(r.preventDefault(),!e.checkValidity()){s("Please enter a valid email address.");return}try{const a=await m.postSubscription(e.value.trim());n(a)}catch(a){qe(a)}})});
//# sourceMappingURL=index.js.map
