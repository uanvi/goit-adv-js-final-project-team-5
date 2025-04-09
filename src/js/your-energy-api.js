import axios from 'axios';
import { FilterRequest, FilterResponse } from './models/filter-models.js';

const API_URL = 'https://your-energy.b.goit.study/api';

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
      return new FilterResponse(response);
    } catch (error) {
      console.error('Error fetching filters:', error);
      throw error;
    }
  }
}

const yourEnergyAPI = new YourEnergyAPI();
export default yourEnergyAPI;