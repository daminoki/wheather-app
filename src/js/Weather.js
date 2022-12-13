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
    // this._cityName = data.name;
    // this._feelsLike = data.feelsLike;
    // this._humidity = data.humidity;
    // this._temp = data.temp;
    // this._tempMax = data.tempMax;
    // this._tempMin = data.tempMin;
    // this._cityName = data.cityName;
    // this._visibility = data.visibility;
    // this._mainWeatherCondition = data.mainWeatherCondition;
    // this._weatherIcon = data.weatherIcon;
    // this._wind = data.wind;
  }

  init() {
    window.addEventListener('itemSelectedEvent', async (e) => {
      const { selectedItem } = e.detail;
      this._fetchCurrentWeatherData(selectedItem);
      this._fetchForecastWeatherData(selectedItem);
    });
  }

  async _fetchCurrentWeatherData(selectedItem) {
    this._currentWeatherUrl.searchParams.append('lat', selectedItem.lat);
    this._currentWeatherUrl.searchParams.append('lon', selectedItem.lon);
    const currentData = await this._api(this._currentWeatherUrl);
    console.log(currentData);
  }

  async _fetchForecastWeatherData(selectedItem) {
    this._forecastWeatherUrl.searchParams.append('lat', selectedItem.lat);
    this._forecastWeatherUrl.searchParams.append('lon', selectedItem.lon);
    const forecastData = await this._api(this._forecastWeatherUrl);
    console.log(forecastData);
  }
}
