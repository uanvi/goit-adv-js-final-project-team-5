import yourEnergyApi from './your-energy-api.js';
import { FilterRequest } from './models/filter-models.js';
import { capitalizeFirstLetter } from './helpers.js';

class ExerciseFilterElement {
  constructor() {
    this._element = document.createElement('li');
    this._element.classList.add('exercises-filters__item');
    this._image = document.createElement('img');
    this._image.classList.add('exercises-filters__image');
    this._image.setAttribute('loading', 'lazy');
    this._overlay = document.createElement('div');
    this._overlay.classList.add('exercises-filters__overlay');
    this._overlayTitle = document.createElement('h5');
    this._overlayText = document.createElement('p');
    this._overlayText.classList.add('exercises-filters__overlay-text');
  }

  setImage(src) {
    this._image.src = src;
  }

  setTitle(title) {
    this._overlayTitle.textContent = capitalizeFirstLetter(title);
  }

  setText(text) {
    this._overlayText.textContent = capitalizeFirstLetter(text);
  }

  setFilterName(name, filter) {
    this._element.dataset.name = name;
    this._element.dataset.filter = filter;
  }

  setImageAlt(alt) {
    this._image.alt = alt;
  }

  build() {
    this._overlay.append(this._overlayTitle, this._overlayText);
    this._element.append(this._image, this._overlay);
    return this._element;
  }
}

class ExercisesFilterRenderer {
  constructor() {
    this._exercisesFilterParent = document.getElementById('exercises-filters');
    this._exercisesParent = document.getElementById('exercises-list');
    if (!this._exercisesFilterParent) {
      throw new Error('Exercises filter parent element not found');
    }
    this._breadcrumbs = document.querySelector('.breadcrumbs');

    this._page = 1;
    this._limit = 12;
    this._pages = 1;
    this._elements = [];
  }

  async init() {
    this._setPageLimit();
    await this._fetchFilters();
    this._renderFilters();
    this._addEventListeners();
  }

  _setPageLimit() {
    this._pages = 1;
    // if mobile
    if (window.innerWidth <= 768) {
      this._limit = 9;
    } else {
      this._limit = 12;
    }
  }

  async _fetchFilters() {
    const filterButton = this._exercisesFilterParent.querySelector('.exercises-filters__selected');
    if (!filterButton) {
      throw new Error('Filter button not found');
    }
    const filterName = filterButton.dataset.name;
    const filterRequest = new FilterRequest(filterName, this._page, this._limit);
    try {
      const response = await yourEnergyApi.fetchFilters(filterRequest);
      const items = response.getFilters();
      if (items.length > 0) {
        this._elements = items.map((item) => {
          const filterElement = new ExerciseFilterElement();
          filterElement.setImage(item.imgURL);
          filterElement.setTitle(item.name);
          filterElement.setText(item.filter);
          filterElement.setFilterName(item.name, item.filter);
          filterElement.setImageAlt(item.name);
          return filterElement.build();
        });
      }
      this._pages = response.totalPages;
    } catch (error) {
      console.error('Error fetching filters:', error);
    }
  }

  _renderFilters() {
    this._exercisesParent.innerHTML = '';
    this._exercisesParent.append(...this._elements);
    // todo: add pagination
  }

  _onCardClick(event) {
    // todo
  }

  async _onFilterClick(event) {
    event.preventDefault();
    this._setPageLimit();
    // remove active class from all filters
    const filters = this._exercisesFilterParent.querySelectorAll('.exercises-filters__selected');
    filters.forEach((filter) => {
      filter.classList.remove('exercises-filters__selected');
    });
    // add active class to the clicked filter
    event.target.classList.add('exercises-filters__selected');
    await this._fetchFilters();
    this._renderFilters();
  }

  _addEventListeners() {
    this._exercisesFilterParent.addEventListener('click', this._onFilterClick.bind(this));
  }
}

const page = new ExercisesFilterRenderer();
export { page as ExercisesFilterRenderer };