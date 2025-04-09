import yourEnergyAPI from './your-energy-api.js';
import { FilterRequest } from './models/filter-models.js';
import { ExerciseFilter, ExerciseRatingPatchRequest } from './models/exercise-models.js';

// example Filters
const filterRequest = new FilterRequest('Body parts', 1, 5);
yourEnergyAPI.getFilters(filterRequest)
  .then(response => {
    console.log('Response:', response);
    console.log('Filters:', response.getFilters());
  })
  .catch(error => {
    console.error('Error:', error);
  });

// example Exercises by filter
const exerciseFilter = new ExerciseFilter('back', 'lats', 'barbell', 'pull', 1, 5);
yourEnergyAPI.fetchExercisesByFilter(exerciseFilter)
  .then(response => {
    console.log('Response:', response);
    console.log('Exercises:', response.getExercises());
  })
  .catch(error => {
    console.error('Error:', error);
  });

// example Exercises by ID
const exerciseId = '64f389465ae26083f39b1ab2';
yourEnergyAPI.fetchExercisesById(exerciseId)
  .then(response => {
    console.log('Response:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// example Exercise patch rating
const exerciseRatingRequest = new ExerciseRatingPatchRequest(
  3,
  `test${Date.now()}@gmail.com`, // it requires email to be uniq
  'Great exercise! Very effective.');
yourEnergyAPI.patchExerciseRating(exerciseId, exerciseRatingRequest)
  .then(response => {
    console.log('Response:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// example Quote
yourEnergyAPI.fetchQuoteOfTheDay().then(response => {
  console.log('Quote of the Day:', response);
  console.log('Quote:', response.quote);
  console.log('Author:', response.author);
}).catch(error => {
  console.error('Error fetching quote:', error);
});

// example Subscription
const email = `sub_test${Date.now()}@gmail.com`; // it requires email to be uniq
yourEnergyAPI.postSubscription(email)
  .then(response => {
    console.log('Subscription Response:', response);
  })
  .catch(
    error => {
      console.error('Error:', error);
    });
