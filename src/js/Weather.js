/* eslint-disable operator-assignment */
import api from '../utils/api';

export default class Weather {
  constructor() {
    this._api = api;
    this._selectedItem = null;

    this._apiKey = 'e6970efb880b105e85f3508dd47a2c23';
    this._baseCurrentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this._currentWeatherUrl = new URL(this._baseCurrentWeatherUrl);
    this._currentWeatherUrl.searchParams.append('units', 'metric');
    this._currentWeatherUrl.searchParams.append('appid', this._apiKey);
    this._baseForecastWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    this._forecastWeatherUrl = new URL(this._baseForecastWeatherUrl);
    this._forecastWeatherUrl.searchParams.append('units', 'metric');
    this._forecastWeatherUrl.searchParams.append('appid', this._apiKey);

    this._currentWeatherData = null;
    this._forecastWeatherData = null;

    this._cityName = document.querySelector('.main-information__city');
    this._weatherIcon = document.querySelector('.main-information__weather-icon');
    this._date = document.querySelector('.main-information__current-date');
    this._time = document.querySelector('.main-information__current-time');
    this._temp = document.querySelector('.main-information__temp');
    this._weatherDescription = document.querySelector('.main-information__weather-description');
    this._visibility = document.querySelector('.widgets__main_description-visibility');
    this._wind = document.querySelector('.widgets__main_description-wind');
    this._humidity = document.querySelector('.widgets__main_description-humidity');
    this._feelsLike = document.querySelector('.widgets__main_description-feels-like');
    this._weatherMain = document.querySelector('.main-information__temp-diff');
    this._sunrise = document.querySelector('.widgets__main_description-sunrise');
    this._sunset = document.querySelector('.widgets__main_description-sunset');

    this._dayOne = document.querySelector('.widgets__forecast_day-one');
    this._dayTwo = document.querySelector('.widgets__forecast_day-two');
    this._dayThree = document.querySelector('.widgets__forecast_day-three');
    this._dayFour = document.querySelector('.widgets__forecast_day-four');
    this._dayFive = document.querySelector('.widgets__forecast_day-five');

    this._iconDayElements = document.querySelectorAll('.widgets__forecast_img');
    this._descriptionDayElements = document.querySelectorAll('.widgets__forecast_temp');
    this._tempDayElements = document.querySelectorAll('.widgets__forecast_temp_l');

    this._hourTempElements = document.querySelectorAll('.hourly-forecast__temp');
    this._hourIconElements = document.querySelectorAll('.hourly-forecast__icon');
  }

  async init() {
    window.addEventListener('itemSelectedEvent', async (e) => {
      const { selectedItem } = e.detail;
      this._selectedItem = selectedItem;

      // create method toggleLoader to toggle load_opened class
      const loader = document.querySelector('.load');
      const wrapper = document.querySelector('.wrapper');

      // not opened, but display/show
      if (!wrapper.classList.contains('wrapper_opened')) {
        loader.classList.add('load_opened');
      }

      await Promise.all(
        [
          this._fetchCurrentWeatherData(),
          this._fetchForecastWeatherData(),
        ],
      );

      // not opened, but display/show
      loader.classList.remove('load_opened');

      if (!this._currentWeatherData || !this._forecastWeatherData) return;

      wrapper.classList.add('wrapper_opened');

      this._setСurrentData();
      this._setTime();
      this._setForecastData();
    });
  }

  async _fetchCurrentWeatherData() {
    this._currentWeatherUrl.searchParams.set('lat', this._selectedItem.geometry.lat);
    this._currentWeatherUrl.searchParams.set('lon', this._selectedItem.geometry.lng);
    this._currentWeatherData = await this._api(this._currentWeatherUrl);
  }

  async _fetchForecastWeatherData() {
    this._forecastWeatherUrl.searchParams.set('lat', this._selectedItem.geometry.lat);
    this._forecastWeatherUrl.searchParams.set('lon', this._selectedItem.geometry.lng);
    this._forecastWeatherData = await this._api(this._forecastWeatherUrl);
  }

  static _getUrl(icon) {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  _setСurrentData() {
    const {
      weather,
      main: { temp, humidity, feels_like },
      visibility,
      wind: { speed },
    } = this._currentWeatherData;

    const [{
      description,
      icon,
    }] = weather;

    // eslint-disable-next-line prefer-destructuring
    this._cityName.textContent = this._selectedItem.formatted.split(',')[0];
    this._weatherIcon.src = Weather._getUrl(icon);
    this._temp.textContent = `${Math.round(temp)}°`;
    this._weatherDescription.textContent = description;
    this._weatherDescription.textContent = `${this._weatherDescription.textContent[0].charAt(0).toUpperCase()}${this._weatherDescription.textContent.slice(1)}`;
    this._weatherMain.textContent = this._currentWeatherData.weather[0].main;
    this._weatherMain.textContent = `${this._weatherMain.textContent[0].charAt(0).toUpperCase()}${this._weatherMain.textContent.slice(1)}`;
    this._visibility.textContent = `${Math.round(visibility / 1000)} km`;
    this._wind.textContent = `${Math.round(speed)} m/s`;
    this._humidity.textContent = `${humidity}%`;
    this._feelsLike.textContent = `${Math.round(feels_like)}°`;
  }

  _setTime() {
    const {
      dt,
      sys: { sunrise, sunset },
    } = this._currentWeatherData;

    const fullDate = new Date(dt * 1000);
    const sunriseTime = new Date(sunrise * 1000);
    const sunsetTime = new Date(sunset * 1000);

    const dateOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      timeZone: this._selectedItem.annotations.timezone.name,
    };
    this._date.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(fullDate);

    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: this._selectedItem.annotations.timezone.name,
    };
    this._time.textContent = new Intl.DateTimeFormat('ru-RU', timeOptions).format(fullDate);
    this._sunrise.textContent = new Intl.DateTimeFormat('ru-RU', timeOptions).format(sunriseTime);
    this._sunset.textContent = new Intl.DateTimeFormat('ru-RU', timeOptions).format(sunsetTime);
  }

  _setForecastData() {
    const dateOptions = {
      weekday: 'short',
      timeZone: this._selectedItem.annotations.timezone.name,
    };

    const {
      list,
    } = this._forecastWeatherData;

    console.log(list);

    // пожалуй есть смысл вынести new Intl.DateTimeFormat() в отдельный метод
    // туда будут прокидываться dateOptions и дата и возвращаться отформатированная дата
    // можно будет переиспользовать тут и внутри _setTime()

    // TODO: refactor this (create function (utils))
    this._dayOne.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(list[0].dt * 1000));
    this._dayTwo.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(list[8].dt * 1000));
    this._dayThree.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(list[16].dt * 1000));
    this._dayFour.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(list[24].dt * 1000));
    this._dayFive.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(list[32].dt * 1000));

    let itemIndex = 0;

    this._iconDayElements = [...this._iconDayElements].map((item, index) => {
      const itemName = item;
      if (index !== 0) itemIndex = itemIndex + 8;
      itemName.src = Weather._getUrl(list[itemIndex].weather[0].icon);
      return itemName;
    });

    let descriptionIndex = 0;
    this._descriptionDayElements = [...this._descriptionDayElements].map((item, index) => {
      const itemName = item;
      if (index !== 0) descriptionIndex = descriptionIndex + 8;
      itemName.textContent = list[descriptionIndex].weather[0].main;
      return itemName;
    });

    let tempIndex = 0;
    this._tempDayElements = [...this._tempDayElements].map((item, index) => {
      const itemName = item;
      if (index !== 0) tempIndex = tempIndex + 8;
      itemName.textContent = `${Math.round(list[tempIndex].main.temp)}°`;
      return itemName;
    });

    this._hourTempElements = [...this._hourTempElements].map((item, index) => {
      const itemName = item;
      itemName.textContent = `${Math.round(list[index].main.temp)}°`;
      return itemName;
    });

    this._hourIconElements = [...this._hourIconElements].map((item, index) => {
      const itemName = item;
      itemName.src = Weather._getUrl(list[index].weather[0].icon);
      return itemName;
    });
  }
}
