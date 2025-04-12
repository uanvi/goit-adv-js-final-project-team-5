// Initialize the ExerciseFavoriteRenderer to manage favorites
import { ExerciseElement } from './exercises.js';
import { getFavorites, removeExerciseFromFavorite } from './utils/favoritesStorage.js';
import yourEnergyAPI from './your-energy-api.js';
import { initModalListeners } from './modal.js';

class ExerciseFavoriteRenderer {
  constructor() {
    this._favoritesParent = document.getElementById('favorites-list');
    if (!this._favoritesParent) {
      throw new Error('Favorites list parent element not found');
    }
    this.initFavorites();
  }

  initFavorites() {
    this._favorites = getFavorites();
    if (this._favorites.length === 0) {
      this._favoritesParent.innerHTML = '<li class="no-favorites">' +
        '<p>It appears that you haven\'t added any exercises to your favorites yet. To get started, ' +
        'you can add exercises that you like to your favorites for easier access in the future.</p>' +
        '</li>';
    }
  }

  // Function to fetch exercises by ID and render them
  async loadAndRenderFavorites() {
    if (this._favorites.length === 0) {
      return;
    }

    this._favoritesParent.innerHTML = ''; // Clear any existing content
    const exercises = await this.fetchExercisesByIds(this._favorites);
    this.renderFavorites(exercises);
  }

  // Fetch exercises by their IDs
  async fetchExercisesByIds(ids) {
    try {
      const exercisePromises = ids.map(id => yourEnergyAPI.fetchExercisesById(id));
      return await Promise.all(exercisePromises);
    } catch (error) {
      console.error('Error fetching favorite exercises:', error);
    }
  }

  // Render the exercises to the favorites list
  renderFavorites(exercises) {

    const elements = exercises.map(exercise => {
      const exerciseElement = new ExerciseElement();
      exerciseElement.setId(exercise.id);
      exerciseElement.addFavoriteHeader(exercise.id);
      exerciseElement.addName(exercise.name);
      exerciseElement.addInfo(exercise.burnedCalories, exercise.bodyPart, exercise.target);
      return exerciseElement.build();
    });

    for (const element of elements) {
      this._favoritesParent.innerHTML += element.outerHTML;
    }
    initModalListeners();
    this.initRemoveButtons();
  }

  initRemoveButtons() {
    document
      .querySelectorAll('.exercise-header__remove-button')
      .forEach(element => element.addEventListener('click', event => this.handleRemoveClick(event)));
  }

  async handleRemoveClick(event) {
    event.preventDefault();
    const exerciseElement = event.target.closest('.exercises-list__item');

    removeExerciseFromFavorite(exerciseElement.dataset.id);
    this.initFavorites();
    exerciseElement.remove();
  }
}


// Load and render the favorites when the page is ready
document.addEventListener('DOMContentLoaded', () => {
  new ExerciseFavoriteRenderer().loadAndRenderFavorites();
});
