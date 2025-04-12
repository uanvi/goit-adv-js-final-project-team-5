import { createScrollUpButton } from './components/scroll-up-button.js';

import 'izitoast/dist/css/iziToast.min.css';
/// main logic
import { ExercisesFilterRenderer } from './exercises.js';

// Scroll Up Button
document.addEventListener('DOMContentLoaded', () => {
  createScrollUpButton();
});


new ExercisesFilterRenderer().init();
