/**
 * Class representing a filter model.
 * @class
 * @param {string} filter - The filter type.
 * @param {string} name - The name of the filter.
 * @param {string} imgURL - The URL of the filter image.
 * @property {string} filter - The filter type.
 * @property {string} name - The name of the filter.
 * @property {string} imgURL - The URL of the filter image.
 */
class FilterModel {
  constructor(filter, name, imgURL) {
    this.filter = filter;
    this.name = name;
    this.imgURL = imgURL;
  }
}

/**
 * Class representing a filter request.
 * @class
 * @param {string} filter - The filter type.
 * @param {number} page - The current page number.
 * @param {number} limit - The number of items per page.
 * @property {string} filter - The filter type.
 * @property {number} page - The current page number.
 * @property {number} limit - The number of items per page.
 */
class FilterRequest {
    constructor(filter, page, limit) {
        this.filter = filter;
        this.page = page;
        this.limit = limit;
    }
}

/**
 * Class representing a filter response.
 * @class
 * @param {Object} response - The API response object.
 * @param {Array} response.data.results - The array of filter results.
 * @param {number} response.data.page - The current page number.
 * @param {number} response.data.perPage - The number of items per page.
 * @param {number} response.data.totalPages - The total number of pages.
 * @property {Array} filters - The array of FilterModel instances.
 * @property {number} page - The current page number.
 * @property {number} perPage - The number of items per page.
 * @property {number} totalPages - The total number of pages.
 */
class FilterResponse {
    constructor(response) {
        this.filters = response.data.results.map(result => new FilterModel(result.filter, result.name, result.imgURL));
        this.page = response.data.page;
        this.perPage = response.data.perPage;
        this.totalPages = response.data.totalPages;
    }
}

export { FilterModel, FilterRequest, FilterResponse };