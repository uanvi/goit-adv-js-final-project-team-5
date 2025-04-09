/**
 * QuoteModel
 * Represents a quote model.
 *
 * @class
 * @param {Object} response - The API response object.
 * @param {string} response.quote - The quote text.
 * @param {string} response.author - The author of the quote.
 * @property {string} quote - The quote text.
 * @property {string} author - The author of the quote.
 */
class QuoteModel {
  constructor(response) {
    this.quote = response.quote;
    this.author = response.author;
  }
}

export default QuoteModel;