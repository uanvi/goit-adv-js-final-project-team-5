import icons from '../img/svg/sprite.svg';
import yourEnergyAPI from './your-energy-api.js';
import { FilterRequest } from './models/filter-models.js';
import { capitalizeFirstLetter } from './helpers.js';
import { ExerciseFilter } from './models/exercise-models.js';
import { initModalListeners } from './modal.js';
import { removeExerciseFromFavorite } from './utils/favoritesStorage.js';

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

  addHeader(rating, id) {
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

    this.initStartButton(leftBlock, id);
  }

  addName(workoutName) {
    this._nameBlock.append(this._createSvg('runner', 'exercise-name-icon', 13, 13));
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

  addFavoriteHeader(id) {
    const leftBlock = document.createElement('div');
    leftBlock.classList.add('exercise-header__left');
    const workoutName = document.createElement('p');
    workoutName.classList.add('exercise-workout');
    workoutName.textContent = 'WORKOUT';
    leftBlock.append(workoutName);

    // Create the "Remove" button instead of the rating
    const removeButton = document.createElement('button');
    removeButton.classList.add('exercise-header__remove-button');
    removeButton.append(this._createSvg('trash', 'exercise-trash')); // You can use a specific "remove" icon
    leftBlock.append(removeButton);

    this.initStartButton(leftBlock, id);
  }

  initStartButton(leftBlock, id) {
    const startButton = document.createElement('button');
    startButton.classList.add('exercise-header__start-button');
    startButton.classList.add('btn-start');
    startButton.textContent = 'Start';
    startButton.value = id;
    startButton.setAttribute('data-modal-open', '');
    startButton.append(this._createSvg('exercise-start', 'exercise-arrow', 13, 13));
    this._header.append(leftBlock, startButton);
  }
}

class ExercisesFilterRenderer {
  constructor() {
    this._exercisesFilterParent = document.getElementById('exercises-filters');
    this._exercisesParent = document.getElementById('exercises-list');
    if (!this._exercisesFilterParent) {
      throw new Error('Exercises filter parent element not found');
    }
    this._paginationElement = document.querySelector('.exercises-pagination>ul');
    this._breadcrumbs = document.querySelector('.breadcrumbs');
    this._searchContainer = document.getElementById('search-container');
    this._searchInput = this._searchContainer.querySelector('.search-input');

    this._page = 1;
    this._limit = 12;
    this._pages = 1;
    this._elements = [];
    this._isCategory = false;
  }

  async init() {
    this._setPageLimit();
    await this._fetchFilters();
    this._renderFilters();
    this._addEventListeners();
  }

  _setPageLimit() {
    this._page = 1;
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
    this._exercisesParent.replaceChildren(...this._elements);
    this._renderPagination();
    this._addBreadcrumbs();
    this._isCategory = true;
    localStorage.removeItem('exerciseFilter');
    this._searchContainer.classList.add('hidden');
  }

  async _onCardClick(event) {
    event.preventDefault();
    const target = event.target.closest('.exercises-filters__item');
    if (target) {
      this._searchContainer.classList.remove('hidden');
      this._addBreadcrumbs(target.dataset.name);
      const filterName = target.dataset.name;
      const filter = target.dataset.filter;
      const request = this._buildRequest(filterName, filter);
      localStorage.setItem('exerciseFilter', JSON.stringify(request));
      await this._loadAndRenderExercises(request);
    }
  }

  async _loadAndRenderExercises(request) {
    const response = await yourEnergyAPI.fetchExercisesByFilter(request);
    this._renderExercises(response);
    this._renderPagination();
    this._isCategory = false;
    initModalListeners();
  }

  _addBreadcrumbs(breadcrumb = null) {
    if (this._breadcrumbs.children.length > 1 || !breadcrumb && this._breadcrumbs.children.length > 1) {
      this._breadcrumbs.children[1].remove();
    }

    if (!breadcrumb) {
      return;
    }

    const breadcrumbElement = document.createElement('li');
    breadcrumbElement.classList.add('breadcrumbs__item');
    const item = document.createElement('span');
    item.textContent = '/';
    breadcrumbElement.append(item);
    breadcrumbElement.append(capitalizeFirstLetter(breadcrumb));
    this._breadcrumbs.append(breadcrumbElement);
  }

  _renderPagination() {
    const items = [];
    const dots = document.createElement('li');
    dots.classList.add('exercises-pagination__dots');
    dots.textContent = '...';
    const renderItem = (cssClass, page, svgClass, svgIcon) => {
      const item = document.createElement('li');
      item.classList.add('exercises-pagination__item');
      item.classList.add(cssClass);
      item.classList.add('exercises-pagination__arrow');
      item.dataset.page = page;
      if (this._page === page) {
        item.classList.add('disabled');
      }
      const svgElement = document.createElement('svg');
      svgElement.classList.add(svgClass);
      const useElement = document.createElement('use');
      useElement.setAttribute('href', `${icons}#${svgIcon}`);
      svgElement.appendChild(useElement);
      item.append(svgElement);
      return item;
    };
    const renderPreviousButtons = () => {
      const firstButton = renderItem(
        'exercises-pagination__beginning',
        1,
        'exercises-pagination__beginning__arrow',
        'pagination-left-double-arrow');
      const previousButton = renderItem(
        'exercises-pagination__previous',
        this._page === 1 ? 1 : this._page - 1,
        'exercises-pagination__arrow',
        'pagination-left-single-arrow');
      items.push(firstButton);
      items.push(previousButton);
      if (this._page >= 3) {
        items.push(dots);
      }
    };

    const renderNextButtons = () => {
      const lastButton = renderItem(
        'exercises-pagination__last',
        this._pages,
        'exercises-pagination__arrow',
        'pagination-right-double-arrow');
      const nextButton = renderItem(
        'exercises-pagination__next',
        this._page === this._pages ? this._pages : this._page + 1,
        'exercises-pagination__arrow',
        'pagination-right-single-arrow');

      if (this._page <= this._pages - 2) {
        items.push(dots);
      }

      items.push(nextButton);
      items.push(lastButton);
    };
    const renderPaginationItem = (itemsCount, initialPage = 1) => {
      const list = [];
      for (let i = initialPage; i <= itemsCount; i++) {
        const item = document.createElement('li');
        item.classList.add('exercises-pagination__item');
        item.classList.add('exercises-pagination__number');
        if (i === this._page) {
          item.classList.add('exercises-pagination__current');
        }
        item.textContent = i;
        item.dataset.page = i;
        list.push(item);
      }

      return list;
    };

    if (this._pages <= 3) {
      items.push(...renderPaginationItem(this._pages));
    }

    if (this._pages > 3) {
      renderPreviousButtons();
      const initialPage = this._page === 1 ? 1 : this._page === this._pages ? this._page - 2 : this._page - 1;
      const itemsCount = initialPage + 2;
      items.push(...renderPaginationItem(itemsCount, initialPage));
      renderNextButtons();
    }

    this._paginationElement.innerHTML = '';
    for (const item of items) {
      this._paginationElement.innerHTML += item.outerHTML;
    }
  }

  async _onPageClick(event) {
    event.preventDefault();
    const target = event.target.closest('.exercises-pagination__item');
    if (!target || target.classList.contains('disabled')) {
      return;
    }

    const page = parseInt(target.dataset.page);
    if (!isNaN(page)) {
      this._page = page;
    }

    if (this._isCategory) {
      await this._fetchFilters();
      this._renderFilters();
      return;
    }

    const request = JSON.parse(localStorage.getItem('exerciseFilter'));
    request.page = this._page;
    localStorage.setItem('exerciseFilter', JSON.stringify(request));
    await this._loadAndRenderExercises(request);
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
      exerciseElement.addHeader(exercise.rating, exercise.id);
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

    this._paginationElement.addEventListener('click', this._onPageClick.bind(this));
    this._searchContainer.querySelector('.search-button').addEventListener('click', this._onSearchClick.bind(this));
    this._searchInput.addEventListener('keyup', this._onSearchKeyUp.bind(this));
  }

  async _onSearchClick(event) {
    event.preventDefault();
    const searchValue = this._searchInput.value.trim();
    if (searchValue) {
      const request = JSON.parse(localStorage.getItem('exerciseFilter'));
      request.keyword = searchValue;
      localStorage.setItem('exerciseFilter', JSON.stringify(request));
      this._searchInput.value = '';
      await this._loadAndRenderExercises(request);
    }
  }

  async _onSearchKeyUp(event) {
    event.preventDefault();
    const searchValue = this._searchInput.value.trim();
    if (event.key === 'Enter' && searchValue) {
      await this._onSearchClick(event);
    }
  }

  _buildRequest(filterName, filter) {
    if (filter.toLowerCase() === 'muscles') {
      return new ExerciseFilter(null, filterName, null, null, this._page, this._limit);
    } else if (filter.toLowerCase() === 'equipment') {
      return new ExerciseFilter(null, null, filterName, null, this._page, this._limit);
    } else if (filter.toLowerCase() === 'body parts') {
      return new ExerciseFilter(filterName, null, null, null, this._page, this._limit);
    }
  }
}


export { ExercisesFilterRenderer, ExerciseElement };