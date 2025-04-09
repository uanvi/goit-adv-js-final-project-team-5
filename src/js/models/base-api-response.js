/**
 * BaseApiResponse class
 * This class is used to represent the base structure of an API response.
 * It contains properties for pagination and results.
 *
 * @class
 * @param {Object} response - The API response object.
 * @param {Array} response.results - The array of results.
 * @param {number} response.page - The current page number.
 * @param {number} response.perPage - The number of items per page.
 * @param {number} response.totalPages - The total number of pages.
 * @property {Array} results - The array of results.
 * @property {number} page - The current page number.
 * @property {number} perPage - The number of items per page.
 * @property {number} totalPages - The total number of pages.
 */
class BaseApiResponse {
  constructor(response){
    this.page = response.page;
    this.perPage = response.perPage;
    this.totalPages = response.totalPages;
    this.results = response.results;
  }
}

export default BaseApiResponse;