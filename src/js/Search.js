const cityList = [
  { title: 'Kirov', lat: 58.59665, lon: 49.66007 },
  { title: 'Karaganda', lat: 49.83333, lon: 73.1658 },
  { title: 'Kazan Russia', lat: 55.796391, lon: 49.108891 },
  { title: 'Kazan Turkey', lat: 40.205166, lon: 32.681183 },
  { title: 'Kumeny', lat: 58.10887, lon: 49.91614 },
  { title: 'Kostroma', lat: 57.767193, lon: 40.976257 },
];

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
  }

  init() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputEl.addEventListener('input', this.debouncedHandle);
  }

  async handleInput({ target }) {
    const { value } = target;

    const { list } = await server.search(value);

    if (!list.length) {
      this._dropdownEl.innerHTML = '';
      this._inputEl.classList.remove('search__input_opened');
      return;
    }

    this._inputEl.classList.add('search__input_opened');
    this._wrapper.append(this._dropdownEl);
    const buttonList = String(list.map((item) => `<button class="search__dropdown-button">${item.title}</button>`)).split(',').join('');
    this._dropdownEl.innerHTML = buttonList;

    this._dropdownEl.addEventListener('click', (e) => {
      list.forEach((item) => {
        if (e.target.textContent === item.title) {
          const { lat } = item;
          const { lon } = item;
          console.log(lat, lon);
        }
      });
    });
  }
}
