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
    this._temp = document.querySelector('.main-information__temp');
    this._weatherDescription = document.querySelector('.main-information__weather-description');
    this._visibility = document.querySelector('.widgets__main_description-visibility');
  }

  async init() {
    window.addEventListener('itemSelectedEvent', async (e) => {
      const { selectedItem } = e.detail;

      console.log(selectedItem);

      await Promise.all(
        [
          this._fetchCurrentWeatherData(selectedItem),
          this._fetchForecastWeatherData(selectedItem),
        ],
      );

      this._setData();
      console.log(123, this._currentWeatherData.dt, this._currentWeatherData.timezone);
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

  _setData() {
    this._cityName.textContent = this._currentWeatherData.name;
    this._weatherIcon.src = `http://openweathermap.org/img/wn/${this._currentWeatherData.weather[0].icon}@2x.png`;
    // const fullDate = new Date((this._currentWeatherData.dt
    //   + this._currentWeatherData.timezone) * 1000);
    // const fullDate1 = new Date(fullDate).toISOString();
    // console.log(fullDate1);
    // const options = {
    //   weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    // };
    // this._date.textContent = new Intl.DateTimeFormat('en-US', options).format(fullDate1);
    this._temp.textContent = `${String(this._currentWeatherData.main.temp).split('.')[0]}°`;
    this._weatherDescription.textContent = this._currentWeatherData.weather[0].description;
    this._weatherDescription.textContent = `${this._weatherDescription.textContent[0].charAt(0).toUpperCase()}${this._weatherDescription.textContent.slice(1)}`;
    this._visibility.textContent = `${this._currentWeatherData.visibility / 1000} km`;
  }
}
