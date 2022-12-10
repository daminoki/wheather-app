const cityList = [
  'Kirov',
  'Karaganda',
  'Kazan, Russia',
  'Kazan, Turkey',
];

function contains(query) {
  return cityList.filter((title) => title.toLowerCase().includes(query.toLowerCase()));
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
      return;
    }

    this._wrapper.append(this._dropdownEl);
    const buttonList = String(list.map((item) => `<button class="search__dropdown-button">${item}</button>`)).split(',').join('');
    this._dropdownEl.innerHTML = buttonList;
  }

  // слушать набор текста в инпуте
  // использовать debounce
  // получать данные с апи, использую input.value
  // открывать дропдаун и выводить в него полученные данные
  // слушать событие клика по элементу дропдауна
  // брать данные элемента кликнутого дропдауна и использовать их для вывода
  // информации на странице и поиска погоды (lat, lon)
  // закрыть дропдаун
  // очищаем input
  // добавить слушатель на кнопку clear - закрывать дропдаун и очищать input
}
