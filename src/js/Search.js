import api from '../utils/api';
import debounce from '../utils/debounce';

export default class Search {
  constructor({
    searchWrapper,
    searchInput,
    dropdownTemplate,
    dropdown,
    dropdownItem,
    dropdownItemClass,
    inputOpenedClass,
    buttonElement,
    previousRequest,
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
    this._debouncedHandle = debounce(this._handleInput.bind(this), 500);
    this._api = api;
    this._buttonElement = document.querySelector(buttonElement);
    this._previousRequest = document.querySelector(previousRequest);
    this._history = [];
    // this._apiKey = process.env.SEARCH_API_KEY;
    this._apiKey = '64258599b0544063661b2622e864c201';
  }

  setEventListeners() {
    this._inputEl.addEventListener('input', this._debouncedHandle);
    this._handleClick();
    window.addEventListener('click', (e) => {
      if (!e.target.contains(this._dropdownItemEl)) {
        this._handleClose();
      }
    });

    this._previousRequest.addEventListener('click', async (e) => {
      const previousRequestItemArr = this._previousRequest.querySelectorAll('.previous-request__wrapper');
      const previousRequestItem = [...previousRequestItemArr].map((item) => item.querySelector('.previous-request__city-name'));
      if (e.target.classList.contains('previous-request__city-name')) {
        const selectedItemIndex = previousRequestItem.indexOf(e.target);
        const selectedItem = this._history[selectedItemIndex];

        const itemSelectedEvent = new CustomEvent('itemSelectedEvent', {
          detail: {
            selectedItem,
          },
        });
        window.dispatchEvent(itemSelectedEvent);
      } else if (e.target.classList.contains('previous-request__close-icon')) {
        const Two = [...previousRequestItemArr].map((item) => item.querySelector('.previous-request__close-icon'));
        const selectedItemIndex = Two.indexOf(e.target);
        const selectedItem = previousRequestItemArr[selectedItemIndex];
        selectedItem.remove();
      }

      this._hidePreviousRequest();
    });
  }

  async _handleInput({ target }) {
    const { value } = target;
    if (value.length < 4) return;
    const list = await api(`http://api.positionstack.com/v1/forward?access_key=${this._apiKey}&query=${value}&timezone_module=1`);
    this._results = list.data;
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
        `<button class=${this._dropdownItemClass}>${item.label}</button>`,
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
      this._handleHistory(selectedItem);
    });
  }

  _handleHistory(selectedItem) {
    if (!this._history.includes(selectedItem) && this._history.length <= 3) {
      this._history.push(selectedItem);
      this._previousRequest.insertAdjacentHTML('beforeend', `
      <div class="previous-request__wrapper">
      <button type="button" class="previous-request__city-name">${selectedItem.name}</button>
      <button type="button" class="previous-request__close-icon"></button>
    </div>
      `);
    }
  }

  _handleClose() {
    this._dropdownEl.remove();
    this._inputEl.classList.remove(this._inputOpenedClass);
    this._inputEl.value = '';
  }

  _hidePreviousRequest() {
    const wrapper = document.querySelector('.wrapper');
    const th = document.querySelector('.previous-request__wrapper');

    if (!this._previousRequest.contains(th)) {
      wrapper.classList.remove('wrapper_opened');
    }
  }
}
