// Helper function to get favorites from local storage
function getFavorites() {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
}

// Helper function to save favorites to local storage
function saveFavorites(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Add a favorite exercise by ID
function addExerciseToFavorite(id) {
  const favorites = getFavorites();
  if (!favorites.includes(id)) {
    favorites.push(id);
    saveFavorites(favorites);
  }
}

// Remove a favorite exercise by ID
function removeExerciseFromFavorite(id) {
  let favorites = getFavorites();
  favorites = favorites.filter(favoriteId => favoriteId !== id);
  saveFavorites(favorites);
}

function toggleFavorite(exerciseId) {
  if (!exerciseId) return;
  const favorites = getFavorites();
  const index = favorites.indexOf(exerciseId);

  if (index >= 0) {
    removeExerciseFromFavorite(exerciseId);
  } else {
    addExerciseToFavorite(exerciseId);
  }
}

// Check if an exercise is a favorite
function isExerciseFavorite(id) {
  const favorites = getFavorites();
  return favorites.includes(id);
}

export { addExerciseToFavorite, removeExerciseFromFavorite, isExerciseFavorite, getFavorites, toggleFavorite };
