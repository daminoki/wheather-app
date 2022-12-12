import api from '../api/api';
// import { renderResults } from './renderResults';

const cityList = [
  { title: 'Kirov', lat: 58.59665, lon: 49.66007 },
  { title: 'Karaganda', lat: 49.83333, lon: 73.1658 },
  { title: 'Kazan, Russia', lat: 55.796391, lon: 49.108891 },
  { title: 'Kazan, Turkey', lat: 40.205166, lon: 32.681183 },
  { title: 'Kumeny', lat: 58.10887, lon: 49.91614 },
  { title: 'Kostroma', lat: 57.767193, lon: 40.976257 },
];

// eslint-disable-next-line no-unused-vars
const listItem = (title) => `<button class="search__dropdown-button">${title}</button>`;

function contains(query) {
  return cityList.filter((city) => city.title.toLowerCase().includes(query.toLowerCase()));
}

const server = {
  search(query) {
    return new Promise((resolve) => {
      setTimeout(
        () => resolve({
          list: query ? contains(query) : [],
        }),
        150,
      );
    });
  },
};

function debounce(callee, timeoutMs) {
  return function perform(...args) {
    const previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= timeoutMs) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs);
  };
}

export default class Search {
  constructor(wrapperSelector) {
    this._api = api;
    this._wrapper = document.querySelector(wrapperSelector);
    this._inputEl = this._wrapper.querySelector('.search__input');
    this._dropdownTemplate = this._wrapper.querySelector('.search__dropdown-template');
    this._dropdownEl = this._dropdownTemplate
      .content
      .querySelector('.search__dropdown')
      .cloneNode(true);
    this._dropdownItemEl = this._dropdownEl.querySelector('.search__dropdown-button');
    this._results = [];
    this.debouncedHandle = debounce(this.handleInput.bind(this), 250);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  init() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputEl.addEventListener('input', this.debouncedHandle);
  }

  renderResults(dropdownEl, results) {
    this._wrapper.append(dropdownEl);
    dropdownEl.innerHTML = '';
    results.forEach((item) => {
      dropdownEl.insertAdjacentHTML(
        'beforeend',
        `<button class="search__dropdown-button">${item.title}</button>`,
      );
    });
  }

  async handleInput({ target }) {
    const { value } = target;

    const { list } = await server.search(value);
    this._results = list;

    if (!this._results.length) {
      this._inputEl.classList.remove('search__input_opened');
    } else {
      this._inputEl.classList.add('search__input_opened');
    }

    this.renderResults(this._dropdownEl, this._results);

    this._dropdownEl.addEventListener('click', async (e) => {
      const selectedItemIndex = [...this._dropdownEl.children].indexOf(e.target);
      const selectedItem = this._results[selectedItemIndex];

      await this._fetchSelectedItemData(selectedItem);
      this._dropdownEl.remove();
      this._inputEl.classList.remove('search__input_opened');
      this._inputEl.value = '';
    });
  }

  async _fetchSelectedItemData(selectedItem) {
    const apiKey = 'e6970efb880b105e85f3508dd47a2c23';
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${selectedItem.lat}&lon=${selectedItem.lon}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${selectedItem.lat}&lon=${selectedItem.lon}&cnt=5&units=metric&appid=${apiKey}`;
    const currentData = await this._api(currentUrl);
    const forecastData = await this._api(forecastUrl);
    console.log(currentData, forecastData);
  }

  _handleEscClose(e) {
    if (e.key === 'Escape') {
      this._dropdownEl.remove();
      this._inputEl.classList.remove('search__input_opened');
      this._inputEl.value = '';
    }
  }
}
