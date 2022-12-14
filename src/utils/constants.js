export const cityList = [
  {
    title: 'Kirov',
    lat: 58.59665,
    lon: 49.66007,
    timezone_module: {
      name: 'Europe/Moscow',
    },
  },
  {
    title: 'Karaganda',
    lat: 49.83333,
    lon: 73.1658,
    timezone_module: {
      name: 'Asia/Almaty',
    },
  },
  {
    title: 'Kazan, Russia',
    lat: 55.796391,
    lon: 49.108891,
    timezone_module: {
      name: 'Europe/Moscow',
    },
  },
  {
    title: 'Kazan, Turkey',
    lat: 40.205166,
    lon: 32.681183,
    timezone_module: {
      name: 'Europe/Istanbul',
    },
  },
  {
    title: 'Kumeny',
    lat: 58.10887,
    lon: 49.91614,
    timezone_module: {
      name: 'Europe/Moscow',
    },
  },
  {
    title: 'Kostroma',
    lat: 57.767193,
    lon: 40.976257,
    timezone_module: {
      name: 'Europe/Moscow',
    },
  },
  {
    title: 'Korston',
    lat: 43.1056,
    lon: 131.874,
    timezone_module: {
      name: 'Asia/Vladivostok',
    },
  },
];

export const listItem = (title) => `<button class="search__dropdown-button">${title}</button>`;

export const selectors = {
  searchWrapper: '.search',
  searchInput: '.search__input',
  dropdownTemplate: '.search__dropdown-template',
  dropdown: '.search__dropdown',
  dropdownItem: '.search__dropdown-button',
};
