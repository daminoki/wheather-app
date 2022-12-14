import api from '../utils/api';

export default class Weather {
  constructor() {
    this._api = api;

    this._apiKey = process.env.WEATHER_API_KEY;
    this._baseCurrentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
    this._currentWeatherUrl = new URL(this._baseCurrentWeatherUrl);
    this._currentWeatherUrl.searchParams.append('units', 'metric');
    this._currentWeatherUrl.searchParams.append('appid', this._apiKey);
    this._baseForecastWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';
    this._forecastWeatherUrl = new URL(this._baseForecastWeatherUrl);
    this._forecastWeatherUrl.searchParams.append('cnt', '5');
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
    this._maxTemp = document.querySelector('.main-information__temp-diff_highest');
    this._minTemp = document.querySelector('.main-information__temp-diff_lowest');
  }

  async init() {
    window.addEventListener('itemSelectedEvent', async (e) => {
      const { selectedItem } = e.detail;

      await Promise.all(
        [
          this._fetchCurrentWeatherData(selectedItem),
          this._fetchForecastWeatherData(selectedItem),
        ],
      );

      this._setСurrentData();
      this._setTime(selectedItem);
    });
  }

  async _fetchCurrentWeatherData(selectedItem) {
    this._currentWeatherUrl.searchParams.set('lat', selectedItem.lat);
    this._currentWeatherUrl.searchParams.set('lon', selectedItem.lon);
    this._currentWeatherData = await this._api(this._currentWeatherUrl);
  }

  async _fetchForecastWeatherData(selectedItem) {
    this._forecastWeatherUrl.searchParams.set('lat', selectedItem.lat);
    this._forecastWeatherUrl.searchParams.set('lon', selectedItem.lon);
    this._forecastWeatherData = await this._api(this._forecastWeatherUrl);
  }

  _setСurrentData() {
    this._cityName.textContent = this._currentWeatherData.name;
    this._weatherIcon.src = `http://openweathermap.org/img/wn/${this._currentWeatherData.weather[0].icon}@2x.png`;
    this._temp.textContent = `${String(this._currentWeatherData.main.temp).split('.')[0]}°`;
    this._weatherDescription.textContent = this._currentWeatherData.weather[0].description;
    this._weatherDescription.textContent = `${this._weatherDescription.textContent[0].charAt(0).toUpperCase()}${this._weatherDescription.textContent.slice(1)}`;
    this._visibility.textContent = `${this._currentWeatherData.visibility / 1000} km`;
    this._wind.textContent = `${String(this._currentWeatherData.wind.speed).split('.')[0]} m/s`;
    this._humidity.textContent = `${this._currentWeatherData.main.humidity}%`;
    this._feelsLike.textContent = `${String(this._currentWeatherData.main.feels_like).split('.')[0]}°`;
    this._maxTemp.textContent = `H: ${String(this._currentWeatherData.main.temp_max).split('.')[0]}°`;
    this._minTemp.textContent = `L: ${String(this._currentWeatherData.main.temp_max).split('.')[0]}°`;
  }

  _setTime(selectedItem) {
    const fullDate = new Date(this._currentWeatherData.dt * 1000);
    const dateOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      timeZone: selectedItem.timezone_module.name,
    };
    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: selectedItem.timezone_module.name,
    };
    this._date.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(fullDate);
    this._time.textContent = new Intl.DateTimeFormat('ru-RU', timeOptions).format(fullDate);
  }
}
