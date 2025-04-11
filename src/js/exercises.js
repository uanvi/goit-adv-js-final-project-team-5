import icons from '../img/svg/sprite.svg';
import yourEnergyAPI from './your-energy-api.js';
import { FilterRequest } from './models/filter-models.js';
import { capitalizeFirstLetter } from './helpers.js';
import { ExerciseFilter } from './models/exercise-models.js';

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

class ExerciseElement {
  constructor() {
    this._element = document.createElement('li');
    this._element.classList.add('exercises-list__item');

    this._header = document.createElement('div');
    this._header.classList.add('exercise-header');


    this._nameBlock = document.createElement('h3');
    this._nameBlock.classList.add('exercise-name');

    this._infoBlock = document.createElement('div');
    this._infoBlock.classList.add('exercise-info');
  }

  addHeader(rating) {
    const leftBlock = document.createElement('div');
    leftBlock.classList.add('exercise-header__left');
    const workoutName = document.createElement('p');
    workoutName.classList.add('exercise-workout');
    workoutName.textContent = 'WORKOUT';
    leftBlock.append(workoutName);
    const ratingElement = document.createElement('p');
    ratingElement.classList.add('exercise-rating');
    ratingElement.textContent = `${rating}`;
    const span = document.createElement('span');
    span.append(this._createSvg('star', 'exercise-rating__icon', 24, 24));
    ratingElement.append(span);
    leftBlock.append(ratingElement);

    const startButton = document.createElement('button');
    startButton.classList.add('exercise-header__start-button');
    startButton.textContent = 'Start';
    startButton.append(this._createSvg('exercise-start','exercise-arrow', 13, 13));
    this._header.append(leftBlock, startButton);
  }

  addName(workoutName) {
    this._nameBlock.append(this._createSvg('runner','exercise-name-icon', 13, 13));
    this._nameBlock.append(workoutName);
  }

  addInfo(calories, bodyPart, target) {
    this._infoBlock.append(this._createInfoTextElement('Burned calories: ', calories));
    this._infoBlock.append(this._createInfoTextElement('Body part: ', bodyPart));
    this._infoBlock.append(this._createInfoTextElement('Target: ', target));
  }

  build() {
    this._element.append(this._header, this._nameBlock, this._infoBlock);
    return this._element;
  }

  setId(_id) {
    this._element.dataset.id = _id;
  }

  _createInfoTextElement(title, text, className = 'truncate-text') {
    const element = document.createElement('p');
    element.classList.add(className);
    const titleElement = document.createElement('strong');
    titleElement.classList.add('exercise-info__title');
    titleElement.textContent = title;
    element.append(titleElement);
    element.append(document.createTextNode(text));
    return element;
  }

  _createSvg(iconName, cssClass) {
    const svgElement = document.createElement('svg');
    svgElement.classList.add(cssClass);
    const useElement = document.createElement('use');
    useElement.setAttribute('href', `${icons}#${iconName}`);
    svgElement.appendChild(useElement);
    return svgElement;
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
      const response = await yourEnergyAPI.fetchFilters(filterRequest);
      const items = response.getFilters();
      this._pages = response.totalPages;
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

  async _onCardClick(event) {
    event.preventDefault();
    const target = event.target.closest('.exercises-filters__item');
    if (target) {
      const filterName = target.dataset.name;
      const filter = target.dataset.filter;
      const request = this._buildRequest(filterName, filter);
      const response = await yourEnergyAPI.fetchExercisesByFilter(request);
      this._renderExercises(response);
    }
  }

  _renderExercises(data) {
    this._exercisesParent.innerHTML = '';

    if (!data || !data.results || data.results.length === 0) {
      this._exercisesParent.innerHTML = '<p>No exercises found.</p>';
      return;
    }

    this._pages = data.totalPages;
    const exercises = data.getExercises();

    this._elements = exercises.map((exercise) => {
      const exerciseElement = new ExerciseElement();
      exerciseElement.setId(exercise.id);
      exerciseElement.addHeader(exercise.rating);
      exerciseElement.addName(exercise.name);
      exerciseElement.addInfo(exercise.burnedCalories, exercise.bodyPart, exercise.target);
      return exerciseElement.build();
    });

    for (const element of this._elements) {
      this._exercisesParent.innerHTML += element.outerHTML;
    }
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
    this._exercisesFilterParent.removeEventListener('click', this._onFilterClick.bind(this));
    this._exercisesFilterParent.addEventListener('click', this._onFilterClick.bind(this));

    this._exercisesParent.removeEventListener('click', this._onCardClick.bind(this));
    this._exercisesParent.addEventListener('click', this._onCardClick.bind(this));
  }

  _buildRequest(filterName, filter) {
    if (filter.toLowerCase() === 'muscle') {
      return new ExerciseFilter(null, filterName, null, null, this._page, this._limit);
    } else if (filter.toLowerCase() === 'equipment') {
      return new ExerciseFilter(null, null, filterName, null, this._page, this._limit);
    } else if (filter.toLowerCase() === 'body parts') {
      return new ExerciseFilter(filterName, null, null, null, this._page, this._limit);
    }
  }
}

const page = new ExercisesFilterRenderer();
export { page as ExercisesFilterRenderer };