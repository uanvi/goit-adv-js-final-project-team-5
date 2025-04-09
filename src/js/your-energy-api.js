import axios from 'axios';
import { FilterRequest, FilterResponse } from './models/filter-models.js';
import { ExerciseFilter, ExerciseModel, ExerciseResponse } from './models/exercise-models.js';

const API_URL = 'https://your-energy.b.goit.study/api';

/**
 * YourEnergyAPI class
 * This class is used to interact with the Your Energy API.
 */
class YourEnergyAPI {
  constructor() {
    this._api = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Fetches filters from the API.
   * @param {FilterRequest} filterRequest
   * @returns {Promise<FilterResponse>}
   */
  async getFilters(filterRequest) {
    try {
      const response = await this._api.get('/filters', {
        params: filterRequest,
      });
      return new FilterResponse(response.data);
    } catch (error) {
      console.error('Error fetching filters:', error);
      throw error;
    }
  }

  /**
   * Fetches exercises by filter from the API.
   * @param {ExerciseFilter} exerciseFilter
   * @returns {Promise<ExerciseResponse>}
   */
  async fetchExercisesByFilter(exerciseFilter) {
    try {
      const response = await this._api.get('/exercises', {
        params: exerciseFilter,
      });
      return new ExerciseResponse(response.data);
    } catch (error) {
      console.error('Error fetching exercises by filter:', error);
      throw error;
    }
  }

  /**
   * Fetches exercises by ID from the API.
   * @param {string} id
   * @returns {Promise<ExerciseModel>}
   */
  async fetchExercisesById(id) {
    try {
      const response = await this._api.get(`/exercises/${id}`);
      return new ExerciseModel(response.data);
    } catch (error) {
      console.error('Error fetching exercises by ID:', error);
      throw error;
    }
  }

  /**
   * Updates exercise rating by ID.
   * @param {string} id
   * @param {ExerciseRatingPatchRequest} request
   * @returns {Promise<ExerciseModel>}
   */
  async patchExerciseRating(id, request) {
    try {
      const response = await this._api.patch(`/exercises/${id}/rating`, request);
      return new ExerciseModel(response.data);
    } catch (error) {
      console.error('Error updating exercise rating:', error);
      throw error;
    }
  }
}

const yourEnergyAPI = new YourEnergyAPI();
export default yourEnergyAPI;