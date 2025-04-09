import BaseApiResponse from './base-api-response.js';

/**
 * Class representing an exercise filter.
 * @class
 * @param {string} bodypart - The body part to filter exercises by.
 * @param {string} muscles - The muscles to filter exercises by.
 * @param {string} equipment - The equipment to filter exercises by.
 * @param {string} keyword - The keyword to search exercises by.
 * @param {number} [page=1] - The current page number.
 * @param {number} [limit=10] - The number of items per page.
 * @property {string} bodypart - The body part to filter exercises by.
 * @property {string} muscles - The muscles to filter exercises by.
 * @property {string} equipment - The equipment to filter exercises by.
 * @property {string} keyword - The keyword to search exercises by.
 * @property {number} page - The current page number.
 * @property {number} limit - The number of items per page.
 */
class ExerciseFilter {
  constructor(bodypart, muscles, equipment, keyword, page = 1, limit = 10) {
    this.bodypart = bodypart;
    this.muscles = muscles;
    this.equipment = equipment;
    this.keyword = keyword;
    this.page = page;
    this.limit = limit;
  }
}

/**
 * Class representing an exercise model.
 * @class
 * @param {Object} result - The exercise data object.
 * @param {string} result._id - The unique ID of the exercise.
 * @param {string} result.bodyPart - The body part targeted by the exercise.
 * @param {string} result.equipment - The equipment used for the exercise.
 * @param {string} result.gifUrl - The URL of the exercise GIF.
 * @param {string} result.name - The name of the exercise.
 * @param {string} result.target - The target muscle group.
 * @param {string} result.description - The description of the exercise.
 * @param {number} result.rating - The rating of the exercise.
 * @param {number} result.burnedCalories - The calories burned by the exercise.
 * @param {number} result.time - The time required for the exercise.
 * @param {number} result.popularity - The popularity score of the exercise.
 * @property {string} id - The unique ID of the exercise.
 * @property {string} bodyPart - The body part targeted by the exercise.
 * @property {string} equipment - The equipment used for the exercise.
 * @property {string} gifUrl - The URL of the exercise GIF.
 * @property {string} name - The name of the exercise.
 * @property {string} target - The target muscle group.
 * @property {string} description - The description of the exercise.
 * @property {number} rating - The rating of the exercise.
 * @property {number} burnedCalories - The calories burned by the exercise.
 * @property {number} time - The time required for the exercise.
 * @property {number} popularity - The popularity score of the exercise.
 */
class ExerciseModel {
  constructor(result) {
    this.id = result._id;
    this.bodyPart = result.bodyPart;
    this.equipment = result.equipment;
    this.gifUrl = result.gifUrl;
    this.name = result.name;
    this.target = result.target;
    this.description = result.description;
    this.rating = result.rating;
    this.burnedCalories = result.burnedCalories;
    this.time = result.time;
    this.popularity = result.popularity;
  }
}

/**
 * Class representing an exercise response.
 * @class
 * @extends BaseApiResponse
 * @param {Object} response - The API response object.
 * @param {Array} response.data.results - The array of exercise results.
 * @param {number} response.data.page - The current page number.
 * @param {number} response.data.perPage - The number of items per page.
 * @param {number} response.data.totalPages - The total number of pages.
 * @property {Array} results - The array of exercise results.
 * @property {number} page - The current page number.
 * @property {number} perPage - The number of items per page.
 * @property {number} totalPages - The total number of pages.
 */
class ExerciseResponse extends BaseApiResponse {
  constructor(response) {
    super(response);
  }

  /**
   * Get the array of ExerciseModel instances.
   * @returns {Array<ExerciseModel>} The array of ExerciseModel instances.
   */
  getExercises() {
    return this.results.map(exercise => new ExerciseModel(exercise));
  }
}

/**
 * Class representing an exercise rating patch request.
 * @class
 * @param {number} rate - The rating for the exercise.
 * @param {string} email - The email of the user.
 * @param {string} review - The review text for the exercise.
 * @property {number} rate - The rating for the exercise.
 * @property {string} email - The email of the user.
 * @property {string} review - The review text for the exercise.
 */
class ExerciseRatingPatchRequest {
  constructor(rate, email, review) {
    this.rate = rate;
    this.email = email;
    this.review = review;
  }
}

export { ExerciseFilter, ExerciseModel, ExerciseResponse, ExerciseRatingPatchRequest };