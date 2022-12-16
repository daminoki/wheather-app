import api from '../utils/api';
import { cityList } from '../utils/constants';
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
    dropdownItemClass,
    inputOpenedClass,
  }) {
    this._wrapper = document.querySelector(searchWrapper);
    this._inputEl = this._wrapper.querySelector(searchInput);
    this._dropdownItemClass = dropdownItemClass;
    this._inputOpenedClass = inputOpenedClass;
    this._dropdownTemplate = this._wrapper.querySelector(dropdownTemplate);
    this._dropdownEl = this._dropdownTemplate
      .content
      .querySelector(dropdown)
      .cloneNode(true);
    this._dropdownItemEl = this._dropdownEl.querySelector(dropdownItem);
    this._results = [];
    this._debouncedHandle = debounce(this._handleInput.bind(this), 250);
    this._api = api;
  }

  setEventListeners() {
    this._inputEl.addEventListener('input', this._debouncedHandle);
    this._handleClick();
    window.addEventListener('click', (e) => {
      if (!e.target.contains(this._dropdownItemEl)) {
        this._handleClose();
      }
    });
  }

  async _handleInput({ target }) {
    const { value } = target;
    const { list } = await server.search(value);
    this._results = list;
    this._toggleInputView();
    this._renderResults();
  }

  _toggleInputView() {
    if (!this._results.length) {
      this._inputEl.classList.remove(this._inputOpenedClass);
    } else {
      this._inputEl.classList.add(this._inputOpenedClass);
    }
  }

  _renderResults() {
    this._wrapper.append(this._dropdownEl);
    this._dropdownEl.innerHTML = '';

    this._results.forEach((item) => {
      this._dropdownEl.insertAdjacentHTML(
        'beforeend',
        `<button class=${this._dropdownItemClass}>${item.title}</button>`,
      );
    });
  }

  async _handleClick() {
    this._dropdownEl.addEventListener('click', async (e) => {
      const selectedItemIndex = [...this._dropdownEl.children].indexOf(e.target);
      const selectedItem = this._results[selectedItemIndex];

      const itemSelectedEvent = new CustomEvent('itemSelectedEvent', {
        detail: {
          selectedItem,
        },
      });
      window.dispatchEvent(itemSelectedEvent);

      this._handleClose();
    });
  }

  _handleClose() {
    this._dropdownEl.remove();
    this._inputEl.classList.remove(this._inputOpenedClass);
    this._inputEl.value = '';
  }
}
