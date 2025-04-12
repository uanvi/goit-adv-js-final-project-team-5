import{g as i,y as n,a as o,i as a}from"./assets/nav-CBehZ9Dz.js";import"./assets/quote-D01Bs8Rl.js";import"./assets/vendor-RkJB11I5.js";class d{constructor(){if(this._favoritesParent=document.getElementById("favorites-list"),!this._favoritesParent)throw new Error("Favorites list parent element not found");this._favorites=i()}async loadAndRenderFavorites(){if(this._favoritesParent.innerHTML="",this._favorites.length===0){this._favoritesParent.innerHTML="<p>No favorites added yet.</p>";return}const t=await this.fetchExercisesByIds(this._favorites);this.renderFavorites(t)}async fetchExercisesByIds(t){try{const r=t.map(e=>n.fetchExercisesById(e));return await Promise.all(r)}catch(r){console.error("Error fetching favorite exercises:",r)}}renderFavorites(t){const r=t.map(e=>{const s=new o;return s.setId(e.id),s.addFavoriteHeader(e.id),s.addName(e.name),s.addInfo(e.burnedCalories,e.bodyPart,e.target),s.build()});for(const e of r)this._favoritesParent.innerHTML+=e.outerHTML;a()}}const c=new d;document.addEventListener("DOMContentLoaded",()=>{c.loadAndRenderFavorites()});
//# sourceMappingURL=favorites.js.map
