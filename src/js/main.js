import yourEnergyAPI from './your-energy-api.js';
import { FilterRequest } from './models/filter-models.js';

// example
const filterRequest = new FilterRequest('Body parts', 1, 5);
yourEnergyAPI.getFilters(filterRequest)
  .then(response => {
    console.log('Filters:', response);
  })
  .catch(error => {
    console.error('Error:', error);
  });