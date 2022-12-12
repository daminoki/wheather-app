import api from '../api/api';
import { renderResults } from './renderResults';
import { cityList } from './constants';
import debounce from '../utils/debounce';

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

export default class Search {
  constructor({
    searchWrapper,
    searchInput,
    dropdownTemplate,
    dropdown,
    dropdownItem,
  }) {
    this._wrapper = document.querySelector(searchWrapper);
    this._inputEl = this._wrapper.querySelector(searchInput);
    this._dropdownTemplate = this._wrapper.querySelector(dropdownTemplate);
    this._dropdownEl = this._dropdownTemplate
      .content
      .querySelector(dropdown)
      .cloneNode(true);
    this._dropdownItemEl = this._dropdownEl.querySelector(dropdownItem);
    this._results = [];
    this.debouncedHandle = debounce(this.handleInput.bind(this), 250);
    this._api = api;
  }

  setEventListeners() {
    this._inputEl.addEventListener('input', this.debouncedHandle);
    window.addEventListener('click', (e) => {
      if (!e.target.contains(this._dropdownItemEl)) {
        this._handleClose();
      }
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

    renderResults(this._wrapper, this._dropdownEl, this._results);

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
    const apiKey = process.env.WEATHER_API_KEY;
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${selectedItem.lat}&lon=${selectedItem.lon}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${selectedItem.lat}&lon=${selectedItem.lon}&cnt=5&units=metric&appid=${apiKey}`;
    const currentData = await this._api(currentUrl);
    const forecastData = await this._api(forecastUrl);
    console.log(currentData, forecastData);
  }

  _handleClose() {
    this._dropdownEl.remove();
    this._inputEl.classList.remove('search__input_opened');
    this._inputEl.value = '';
  }
}
