import{i as m,a as $}from"./vendor-RkJB11I5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();class M{constructor(e){this.page=e.page,this.perPage=e.perPage,this.totalPages=e.totalPages,this.results=e.results}}class U{constructor(e,t,i){this.filter=e,this.name=t,this.imgURL=i}}class V{constructor(e,t,i){this.filter=e,this.page=t,this.limit=i}}class J extends M{constructor(e){super(e)}getFilters(){return this.results.map(e=>new U(e.filter,e.name,e.imgURL))}}class b{constructor(e,t,i,n,r=1,c=10){this.bodypart=e,this.muscles=t,this.equipment=i,this.keyword=n,this.page=r,this.limit=c}}class S{constructor(e){this.id=e._id,this.bodyPart=e.bodyPart,this.equipment=e.equipment,this.gifUrl=e.gifUrl,this.name=e.name,this.target=e.target,this.description=e.description,this.rating=e.rating,this.burnedCalories=e.burnedCalories,this.time=e.time,this.popularity=e.popularity}}class K extends M{constructor(e){super(e)}getExercises(){return this.results.map(e=>new S(e))}}class W{constructor(e,t,i){this.rate=e,this.email=t,this.review=i}}class j{constructor(e){this.quote=e.quote,this.author=e.author}}function p(s){if(s.response)switch(s.response.status){case 400:m.warning({message:"Bad request: invalid request body.",position:"topCenter"});break;case 404:m.error({message:"Endpoint not found.",position:"topCenter"});break;case 409:m.warning({message:"You are already subscribed.",position:"topCenter"});break;case 500:m.error({message:"Server error: please try again later.",position:"topCenter"});break;default:m.error({message:"Unknown server error occurred.",position:"topCenter"})}else m.error({message:"Unexpected error. Please check your connection and try again."});throw console.error("API Error:",s),s}const Y="https://your-energy.b.goit.study/api";class z{constructor(){this._api=$.create({baseURL:Y,headers:{"Content-Type":"application/json"}})}async fetchFilters(e){try{const t=await this._api.get("/filters",{params:e});return new J(t.data)}catch(t){console.error("Error fetching filters:",t),p(t)}}async fetchExercisesByFilter(e){try{const t=await this._api.get("/exercises",{params:e});return new K(t.data)}catch(t){console.error("Error fetching exercises by filter:",t),p(t)}}async fetchExercisesById(e){try{const t=await this._api.get(`/exercises/${e}`);return new S(t.data)}catch(t){console.error("Error fetching exercises by ID:",t),p(t)}}async patchExerciseRating(e,t){try{const i=await this._api.patch(`/exercises/${e}/rating`,t);return new S(i.data)}catch(i){console.error("Error updating exercise rating:",i),p(i)}}async fetchQuoteOfTheDay(){try{const e=await this._api.get("/quote");return new j(e.data)}catch(e){console.error("Error fetching quote of the day:",e),p(e)}}async postSubscription(e){try{return(await this._api.post("/subscription",{email:e})).data.message}catch(t){console.error("Error posting subscription:",t),p(t)}}}const x=new z,R="/goit-adv-js-final-project-team-5/assets/sprite-BX3BWf88.svg";function w(s){return s.charAt(0).toUpperCase()+s.slice(1)}function E(){const s=localStorage.getItem("favorites");return s?JSON.parse(s):[]}function k(s){localStorage.setItem("favorites",JSON.stringify(s))}function X(s){const e=E();e.includes(s)||(e.push(s),k(e))}function P(s){let e=E();e=e.filter(t=>t!==s),k(e)}function G(s){if(!s)return;E().indexOf(s)>=0?P(s):X(s)}function Q(s){return E().includes(s)}const o={closeModalButton:"[data-modal-close]",modalContainer:"[data-modal]",exerciseModal:".modal",ratingModal:".add-rating-modal",addToFavoritesButton:".btn-modal-add-fav",imgModalExercise:".img-modal-exercise",titleModal:".title-modal",ratingValue:".rating-value",statsList:".stats-list",descText:".desc-text",btnFavText:".btn-fav-text",iconFavBtnUse:".icon-fav-btn-use",openRatingModalButton:"[data-add-rating-open]",closeRatingModalButton:"[data-add-rating-close]",ratingForm:".add-rating-form",addRatingValue:".add-rating-value",iconModalRatingStar:".icon-modal-rating-star",addRatingRadioBtn:".add-rating-radio-btn",openModalButtons:"[data-modal-open]",ratingStars:".rating-stars"},l={visuallyHidden:"visually-hidden",favAdded:"fav-added",modalOpen:"modal-open",gold:"gold"},Z=document.querySelector(o.closeModalButton),C=document.querySelector(o.modalContainer),f=document.querySelector(o.exerciseModal),g=document.querySelector(o.ratingModal),I=document.querySelector(o.addToFavoritesButton);let y=null;async function D(s){y=s;const e=await x.fetchExercisesById(s);T(e),A(),se(),C.classList.toggle(l.visuallyHidden),H(),ne()}function ee(){document.querySelector(o.imgModalExercise).src="",document.querySelector(o.titleModal).textContent="",document.querySelector(o.ratingValue).textContent="0",document.querySelector(o.statsList).innerHTML="",document.querySelector(o.descText).textContent=""}function T(s){ee(),document.querySelector(o.imgModalExercise).src=s.gifUrl,document.querySelector(o.titleModal).textContent=s.name.trim(),document.querySelector(o.descText).textContent=s.description.trim(),document.querySelector(o.ratingValue).textContent=s.rating,oe(s.rating),te(s)}function te(s){const e=document.querySelector(o.statsList);e.innerHTML="";let t="";s.target&&(t+=_("Target",s.target)),s.bodyPart&&(t+=_("BodyPart",s.bodyPart)),s.equipment&&(t+=_("Equipment",s.equipment)),s.popularity&&(t+=_("Popular",s.popularity)),s.burnedCalories&&(t+=_("Burned Calories",`${s.burnedCalories}/${s.time} min`)),e.insertAdjacentHTML("beforeend",t)}function _(s,e){return`<li class="stats-item">
    <p class="stats-title">${s}</p>
    <p class="stats-value">${e}</p>
  </li>`}function A(){const s=Q(y);I.classList.toggle(l.favAdded,s),document.querySelector(o.btnFavText).textContent=s?"Remove from favorites":"Add to favorites",document.querySelector(o.iconFavBtnUse).setAttribute("href",`./img/svg/sprites.svg#${s?"trash-bin":"heart"}`)}function se(){I.addEventListener("click",s=>{s.currentTarget.classList.toggle(l.favAdded),G(y),A(),s.stopImmediatePropagation()})}function H(){document.addEventListener("keydown",N),document.body.classList.add(l.modalOpen)}function ie(){document.removeEventListener("keydown",N),document.body.classList.remove(l.modalOpen),y=null}function N(s){s.key==="Escape"&&B()}function B(){g.classList.add(l.visuallyHidden),f.classList.remove(l.visuallyHidden),C.classList.add(l.visuallyHidden),ie()}Z.addEventListener("click",B);C.addEventListener("click",s=>{q(s,f.getBoundingClientRect())||q(s,g.getBoundingClientRect())||B(),s.stopImmediatePropagation()});function q(s,e){return e.top<=s.clientY&&s.clientY<=e.top+e.height&&e.left<=s.clientX&&s.clientX<=e.left+e.width}function ne(){const s=document.querySelector(o.openRatingModalButton);document.querySelector(o.addRatingValue).textContent="0",s.addEventListener("click",i=>{g.classList.remove(l.visuallyHidden),f.classList.add(l.visuallyHidden),H(),t(),i.stopImmediatePropagation()}),document.querySelector(o.closeRatingModalButton).addEventListener("click",i=>{g.classList.add(l.visuallyHidden),f.classList.remove(l.visuallyHidden),O(g.querySelector("form")),i.stopImmediatePropagation()});function t(){document.querySelectorAll(o.addRatingRadioBtn).forEach(n=>{n.addEventListener("click",r=>{const c=Number(r.currentTarget.value);document.querySelector(o.addRatingValue).textContent=`${c}`,document.querySelectorAll(o.iconModalRatingStar).forEach((a,u)=>{a.classList.toggle(l.gold,u<c)}),r.stopImmediatePropagation()})})}document.querySelector(o.ratingForm).addEventListener("submit",re)}function O(s){s.elements.email.value="",s.elements.comment.value="",s.elements.radio.forEach(e=>e.checked=!1),document.querySelector(o.addRatingValue).textContent="0",document.querySelectorAll(o.iconModalRatingStar).forEach(e=>e.classList.remove(l.gold))}async function re(s){s.preventDefault();const e=parseInt(document.querySelector(o.addRatingValue).textContent??"0"),t=s.target,i=t.elements.email.value,n=t.elements.comment.value;let r=new le;if(!e)r.warning("Choose your rating");else if(!i)r.warning("Enter your email");else if(!n)r.warning("Leave a comment");else{const c=new W(e,i,n),a=await x.patchExerciseRating(y,c);O(t),r.success("Rating successfully updated"),g.classList.add(l.visuallyHidden),f.classList.remove(l.visuallyHidden),T(a)}s.stopImmediatePropagation()}function ae(){document.querySelectorAll(o.openModalButtons).forEach(e=>{e.addEventListener("click",t=>{D(t.currentTarget.value)})})}function oe(s){const e=document.querySelector(o.ratingStars);e.innerHTML="",e.append(...ce(5,s))}function ce(s,e){const t=[];for(let i=0;i<s;i++){const n=Math.min(100,Math.max(0,(e-i)*100)),r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("width","18"),r.setAttribute("height","18"),r.setAttribute("class","icon icon-modal-star");const c=`gradient-${i}-${n}`;r.innerHTML=`
      <defs>
        <linearGradient id="${c}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="${n}%" stop-color="var(--color-accent)" />
          <stop offset="${n}%" stop-color="var(--color-rating)" />
        </linearGradient>
      </defs>
      <use href="./img/svg/sprites.svg#star" fill="url(#${c})"></use>
    `,t.push(r)}return t}class le{warning(e){m.warning({message:e,position:"topCenter"})}success(e){m.success({message:e,position:"topCenter"})}error(e){m.error({message:e,position:"topCenter"})}}class de{constructor(){this._element=document.createElement("li"),this._element.classList.add("exercises-filters__item"),this._image=document.createElement("img"),this._image.classList.add("exercises-filters__image"),this._image.setAttribute("loading","lazy"),this._overlay=document.createElement("div"),this._overlay.classList.add("exercises-filters__overlay"),this._overlayTitle=document.createElement("h5"),this._overlayText=document.createElement("p"),this._overlayText.classList.add("exercises-filters__overlay-text")}setImage(e){this._image.src=e}setTitle(e){this._overlayTitle.textContent=w(e)}setText(e){this._overlayText.textContent=w(e)}setFilterName(e,t){this._element.dataset.name=e,this._element.dataset.filter=t}setImageAlt(e){this._image.alt=e}build(){return this._overlay.append(this._overlayTitle,this._overlayText),this._element.append(this._image,this._overlay),this._element}}class ue{constructor(){this._element=document.createElement("li"),this._element.classList.add("exercises-list__item"),this._header=document.createElement("div"),this._header.classList.add("exercise-header"),this._nameBlock=document.createElement("h3"),this._nameBlock.classList.add("exercise-name"),this._infoBlock=document.createElement("div"),this._infoBlock.classList.add("exercise-info")}addHeader(e,t){const i=document.createElement("div");i.classList.add("exercise-header__left");const n=document.createElement("p");n.classList.add("exercise-workout"),n.textContent="WORKOUT",i.append(n);const r=document.createElement("p");r.classList.add("exercise-rating"),r.textContent=`${e}`;const c=document.createElement("span");c.append(this._createSvg("star","exercise-rating__icon",24,24)),r.append(c),i.append(r);const a=document.createElement("button");a.type="button",a.classList.add("exercise-header__start-button"),a.classList.add("btn-start"),a.textContent="Start",a.value=t,a.setAttribute("data-modal-open",""),a.append(this._createSvg("exercise-start","exercise-arrow",13,13)),this._header.append(i,a)}addName(e){this._nameBlock.append(this._createSvg("runner","exercise-name-icon",13,13)),this._nameBlock.append(e)}addInfo(e,t,i){this._infoBlock.append(this._createInfoTextElement("Burned calories: ",e)),this._infoBlock.append(this._createInfoTextElement("Body part: ",t)),this._infoBlock.append(this._createInfoTextElement("Target: ",i))}build(){return this._element.append(this._header,this._nameBlock,this._infoBlock),this._element}setId(e){this._element.dataset.id=e}_createInfoTextElement(e,t,i="truncate-text"){const n=document.createElement("p");n.classList.add(i);const r=document.createElement("strong");return r.classList.add("exercise-info__title"),r.textContent=e,n.append(r),n.append(document.createTextNode(t)),n}_createSvg(e,t){const i=document.createElement("svg");i.classList.add(t);const n=document.createElement("use");return n.setAttribute("href",`${R}#${e}`),i.appendChild(n),i}addFavoriteHeader(e){const t=document.createElement("div");t.classList.add("exercise-header__left");const i=document.createElement("p");i.classList.add("exercise-workout"),i.textContent="WORKOUT",t.append(i);const n=document.createElement("button");n.classList.add("exercise-header__remove-button"),n.append(this._createSvg("trash","exercise-trash")),n.addEventListener("click",c=>{const a=this._element.dataset.id;console.log(`Removing exercise with ID: ${a}`),this.handleRemoveClick(c,a)}),t.append(n);const r=document.createElement("button");r.type="button",r.classList.add("exercise-header__start-button"),r.classList.add("btn-start"),r.textContent="Start",r.value=e,r.setAttribute("data-modal-open",""),r.append(this._createSvg("exercise-start","exercise-arrow",13,13)),this._header.append(t,r)}handleRemoveClick(e,t){e.preventDefault(),console.log(`Exercise with ID ${t} will be removed`),P(t),this.removeExerciseFromUI(t)}removeExerciseFromUI(e){const t=document.querySelector(`[data-id="${e}"]`);t&&t.remove()}}class he{constructor(){if(this._exercisesFilterParent=document.getElementById("exercises-filters"),this._exercisesParent=document.getElementById("exercises-list"),!this._exercisesFilterParent)throw new Error("Exercises filter parent element not found");this._paginationElement=document.querySelector(".exercises-pagination>ul"),this._breadcrumbs=document.querySelector(".breadcrumbs"),this._searchContainer=document.getElementById("search-container"),this._searchInput=this._searchContainer.querySelector(".search-input"),this._page=1,this._limit=12,this._pages=1,this._elements=[],this._isCategory=!1}async init(){this._setPageLimit(),await this._fetchFilters(),this._renderFilters(),this._addEventListeners()}_setPageLimit(){this._page=1,window.innerWidth<=768?this._limit=9:this._limit=12}async _fetchFilters(){const e=this._exercisesFilterParent.querySelector(".exercises-filters__selected");if(!e)throw new Error("Filter button not found");const t=e.dataset.name,i=new V(t,this._page,this._limit);try{const n=await x.fetchFilters(i),r=n.getFilters();this._pages=n.totalPages,r.length>0&&(this._elements=r.map(c=>{const a=new de;return a.setImage(c.imgURL),a.setTitle(c.name),a.setText(c.filter),a.setFilterName(c.name,c.filter),a.setImageAlt(c.name),a.build()})),this._pages=n.totalPages}catch(n){console.error("Error fetching filters:",n)}}_renderFilters(){this._exercisesParent.replaceChildren(...this._elements),this._renderPagination(),this._addBreadcrumbs(),this._isCategory=!0,localStorage.removeItem("exerciseFilter"),this._searchContainer.classList.add("hidden")}async _onCardClick(e){e.preventDefault();const t=e.target.closest(".exercises-filters__item");if(t){this._searchContainer.classList.remove("hidden"),this._addBreadcrumbs(t.dataset.name);const i=t.dataset.name,n=t.dataset.filter,r=this._buildRequest(i,n);localStorage.setItem("exerciseFilter",JSON.stringify(r)),await this._loadAndRenderExercises(r),ae()}}async _loadAndRenderExercises(e){const t=await x.fetchExercisesByFilter(e);this._renderExercises(t),this._renderPagination(),this._isCategory=!1}_addBreadcrumbs(e=null){if((this._breadcrumbs.children.length>1||!e&&this._breadcrumbs.children.length>1)&&this._breadcrumbs.children[1].remove(),!e)return;const t=document.createElement("li");t.classList.add("breadcrumbs__item");const i=document.createElement("span");i.textContent="/",t.append(i),t.append(w(e)),this._breadcrumbs.append(t)}_renderPagination(){const e=[],t=document.createElement("li");t.classList.add("exercises-pagination__dots"),t.textContent="...";const i=(a,u,v,h)=>{const d=document.createElement("li");d.classList.add("exercises-pagination__item"),d.classList.add(a),d.classList.add("exercises-pagination__arrow"),d.dataset.page=u,this._page===u&&d.classList.add("disabled");const L=document.createElement("svg");L.classList.add(v);const F=document.createElement("use");return F.setAttribute("href",`${R}#${h}`),L.appendChild(F),d.append(L),d},n=()=>{const a=i("exercises-pagination__beginning",1,"exercises-pagination__beginning__arrow","pagination-left-double-arrow"),u=i("exercises-pagination__previous",this._page===1?1:this._page-1,"exercises-pagination__arrow","pagination-left-single-arrow");e.push(a),e.push(u),this._page>=3&&e.push(t)},r=()=>{const a=i("exercises-pagination__last",this._pages,"exercises-pagination__arrow","pagination-right-double-arrow"),u=i("exercises-pagination__next",this._page===this._pages?this._pages:this._page+1,"exercises-pagination__arrow","pagination-right-single-arrow");this._page<=this._pages-2&&e.push(t),e.push(u),e.push(a)},c=(a,u=1)=>{const v=[];for(let h=u;h<=a;h++){const d=document.createElement("li");d.classList.add("exercises-pagination__item"),d.classList.add("exercises-pagination__number"),h===this._page&&d.classList.add("exercises-pagination__current"),d.textContent=h,d.dataset.page=h,v.push(d)}return v};if(this._pages<=3&&e.push(...c(this._pages)),this._pages>3){n();const a=this._page===1?1:this._page===this._pages?this._page-2:this._page-1,u=a+2;e.push(...c(u,a)),r()}this._paginationElement.innerHTML="";for(const a of e)this._paginationElement.innerHTML+=a.outerHTML}async _onPageClick(e){e.preventDefault();const t=e.target.closest(".exercises-pagination__item");if(!t||t.classList.contains("disabled"))return;const i=parseInt(t.dataset.page);if(isNaN(i)||(this._page=i),this._isCategory){await this._fetchFilters(),this._renderFilters();return}const n=JSON.parse(localStorage.getItem("exerciseFilter"));n.page=this._page,localStorage.setItem("exerciseFilter",JSON.stringify(n)),await this._loadAndRenderExercises(n)}_renderExercises(e){if(this._exercisesParent.innerHTML="",!e||!e.results||e.results.length===0){this._exercisesParent.innerHTML="<p>No exercises found.</p>";return}this._pages=e.totalPages;const t=e.getExercises();this._elements=t.map(i=>{const n=new ue;return n.setId(i.id),n.addHeader(i.rating,i.id),n.addName(i.name),n.addInfo(i.burnedCalories,i.bodyPart,i.target),n.build()});for(const i of this._elements)this._exercisesParent.innerHTML+=i.outerHTML}async _onFilterClick(e){e.preventDefault(),this._setPageLimit(),this._exercisesFilterParent.querySelectorAll(".exercises-filters__selected").forEach(i=>{i.classList.remove("exercises-filters__selected")}),e.target.classList.add("exercises-filters__selected"),await this._fetchFilters(),this._renderFilters()}_addEventListeners(){this._exercisesFilterParent.removeEventListener("click",this._onFilterClick.bind(this)),this._exercisesFilterParent.addEventListener("click",this._onFilterClick.bind(this)),this._exercisesParent.removeEventListener("click",this._onCardClick.bind(this)),this._exercisesParent.addEventListener("click",this._onCardClick.bind(this)),this._paginationElement.addEventListener("click",this._onPageClick.bind(this)),this._searchContainer.querySelector(".search-button").addEventListener("click",this._onSearchClick.bind(this)),this._searchInput.addEventListener("keyup",this._onSearchKeyUp.bind(this))}async _onSearchClick(e){e.preventDefault();const t=this._searchInput.value.trim();if(t){const i=JSON.parse(localStorage.getItem("exerciseFilter"));i.keyword=t,localStorage.setItem("exerciseFilter",JSON.stringify(i)),this._searchInput.value="",await this._loadAndRenderExercises(i)}}async _onSearchKeyUp(e){e.preventDefault();const t=this._searchInput.value.trim();e.key==="Enter"&&t&&await this._onSearchClick(e)}_buildRequest(e,t){if(t.toLowerCase()==="muscles")return new b(null,e,null,null,this._page,this._limit);if(t.toLowerCase()==="equipment")return new b(null,null,e,null,this._page,this._limit);if(t.toLowerCase()==="body parts")return new b(e,null,null,null,this._page,this._limit)}}document.addEventListener("DOMContentLoaded",function(){const s=document.querySelectorAll(".nav-list-link"),e=document.querySelectorAll(".copyright-link"),t=window.location.pathname.split("/").filter(n=>n&&n.length>0);let i;t.length==0?i="index.html":i=t[t.length-1],s.forEach(n=>{n.getAttribute("href").endsWith(i)&&n.classList.add("active")}),e.forEach(n=>{n.getAttribute("href").endsWith(i)&&n.classList.add("active")})});export{b as E,V as F,W as a,he as b,ue as c,E as g,ae as i,x as y};
//# sourceMappingURL=nav-DRcZxhMd.js.map
