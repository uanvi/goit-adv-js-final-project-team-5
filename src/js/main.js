import yourEnergyAPI from './your-energy-api.js';
import { FilterRequest } from './models/filter-models.js';
import { ExerciseFilter, ExerciseRatingPatchRequest } from './models/exercise-models.js';
import { createScrollUpButton } from './components/scroll-up-button.js';
import { Loader } from './components/loader.js';

import 'izitoast/dist/css/iziToast.min.css';
/// main logic
import { ExercisesFilterRenderer } from './exercises.js';

const loader = new Loader();

// example Filters
const filterRequest = new FilterRequest('Body parts', 1, 5);
loader.show();
yourEnergyAPI
  .fetchFilters(filterRequest)
  .then(response => {
    console.log('Response:', response);
    console.log('Filters:', response.getFilters());
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    loader.hide();
  });

// example Exercises by filter
const exerciseFilter = new ExerciseFilter(
  'back',
  'lats',
  'barbell',
  'pull',
  1,
  5,
);
loader.show();
yourEnergyAPI
  .fetchExercisesByFilter(exerciseFilter)
  .then(response => {
    console.log('Response:', response);
    console.log('Exercises:', response.getExercises());
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    loader.hide();
  });
// example Exercises by ID
const exerciseId = '64f389465ae26083f39b1ab2';
loader.show();
yourEnergyAPI
  .fetchExercisesById(exerciseId)
  .then(response => {
    console.log('Response:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    loader.hide();
  });

// example Exercise patch rating
const exerciseRatingRequest = new ExerciseRatingPatchRequest(
  3,
  `test${Date.now()}@gmail.com`, // it requires email to be uniq
  'Great exercise! Very effective.',
);
loader.show();
yourEnergyAPI
  .patchExerciseRating(exerciseId, exerciseRatingRequest)
  .then(response => {
    console.log('Response:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    loader.hide();
  });

// example Quote
loader.show();
yourEnergyAPI
  .fetchQuoteOfTheDay()
  .then(response => {
    console.log('Quote of the Day:', response);
    console.log('Quote:', response.quote);
    console.log('Author:', response.author);
  })
  .catch(error => {
    console.error('Error fetching quote:', error);
  })
  .finally(() => {
    loader.hide();
  });

// example Subscription
const email = `sub_test${Date.now()}@gmail.com`; // it requires email to be uniq
loader.show();
yourEnergyAPI
  .postSubscription(email)
  .then(response => {
    console.log('Subscription Response:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    loader.hide();
  });

// Scroll Up Button
document.addEventListener('DOMContentLoaded', () => {
  createScrollUpButton();
});


const page = new ExercisesFilterRenderer();

page.init();
