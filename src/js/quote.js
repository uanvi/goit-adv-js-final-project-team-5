import yourEnergyAPI from './your-energy-api.js';

(() => {
  const ROLE = 'quote-of-the-day-container';
  const storageKey = 'quoteOfTheDay';

  class Quote {
    #date;

    /**
     * @param {String} text
     * @param {String} author
     * @param {Date} date
     */
    constructor({ text, author, date = null }) {
      this.text = text;
      this.author = author;
      this.date = date || new Date();
    }

    get date() {
      return this.#date;
    }

    /**
     * @param {Date} date
     */
    set date(date) {
      this.#date = this.#formatDate(date);
    }

    isFresh() {
      return this.#date === this.#formatDate(new Date());
    }

    #formatDate(date) {
      return date.toISOString().split('T')[0];
    }

    toJSON() {
      return {
        text: this.text,
        author: this.author,
        date: this.#date,
      };
    }
  }

  class QuoteProvider {
    static #load() {
      const quoteData = JSON.parse(localStorage.getItem(storageKey));
      if (quoteData) {
        quoteData.date = new Date(quoteData?.date);
      }
      return quoteData ? new Quote(quoteData) : null;
    }

    static #save(quote) {
      localStorage.setItem(storageKey, JSON.stringify(quote));
    }

    static async getQuote() {
      const storedQuote = this.#load();
      if (storedQuote?.isFresh()) {
        return storedQuote;
      }

      const quote = await yourEnergyAPI.fetchQuoteOfTheDay();
      const newQuote = new Quote({
        text: quote.quote,
        author: quote.author,
      });
      this.#save(newQuote);

      return newQuote;
    }
  }

  async function renderQuote() {
    const quoteContainer = document.querySelector(`[data-role="${ROLE}"]`);
    if (quoteContainer === null) {
      throw new Error(`Failed to render quote: element with data-role "${ROLE}" not found.`);
    }
    try {
      const quote = await QuoteProvider.getQuote();
      quoteContainer.innerHTML = `
        <p class="quote-text">${quote.text}</p>
        <p class="quote-author">${quote.author}</p>
      `;
    } catch (e) {
      console.error('Error fetching quote:', e);
    }
  }

  document.addEventListener('DOMContentLoaded', renderQuote);
})();
