// Initialize the ExerciseFavoriteRenderer to manage favorites
import { ExerciseElement } from './exercises.js';
import { getFavorites } from './utils/favoritesStorage.js';
import yourEnergyAPI from './your-energy-api.js';
import { initModalListeners } from './modal.js';

class ExerciseFavoriteRenderer {
  constructor() {
    this._favoritesParent = document.getElementById('favorites-list');
    if (!this._favoritesParent) {
      throw new Error('Favorites list parent element not found');
    }
    this._favorites = getFavorites();
  }


  // Function to fetch exercises by ID and render them
  async loadAndRenderFavorites() {
    this._favoritesParent.innerHTML = ''; // Clear any existing content

    if (this._favorites.length === 0) {
      this._favoritesParent.innerHTML = '<p>No favorites added yet.</p>';
      return;
    }

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

  }
}

const favoriteRenderer = new ExerciseFavoriteRenderer();


// Load and render the favorites when the page is ready
document.addEventListener('DOMContentLoaded', () => {
  favoriteRenderer.loadAndRenderFavorites();
});
