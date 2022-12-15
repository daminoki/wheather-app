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
    // this._forecastWeatherUrl.searchParams.append('cnt', '5');
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

    this._iconDayOne = document.querySelector('.widgets__forecast_img_day-one');
    this._iconDayTwo = document.querySelector('.widgets__forecast_img_day-two');
    this._iconDayThree = document.querySelector('.widgets__forecast_img_day-three');
    this._iconDayFour = document.querySelector('.widgets__forecast_img_day-four');
    this._iconDayFive = document.querySelector('.widgets__forecast_img_day-five');

    this._tempDayOne = document.querySelector('.widgets__forecast_temp_day-one');
    this._tempDayTwo = document.querySelector('.widgets__forecast_temp_day-two');
    this._tempDayThree = document.querySelector('.widgets__forecast_temp_day-three');
    this._tempDayFour = document.querySelector('.widgets__forecast_temp_day-four');
    this._tempDayFive = document.querySelector('.widgets__forecast_temp_day-five');

    this._lowTempDayOne = document.querySelector('.widgets__forecast_temp_l_day-one');
    this._lowTempDayTwo = document.querySelector('.widgets__forecast_temp_l_day-two');
    this._lowTempDayThree = document.querySelector('.widgets__forecast_temp_l_day-three');
    this._lowTempDayFour = document.querySelector('.widgets__forecast_temp_l_day-four');
    this._lowTempDayFive = document.querySelector('.widgets__forecast_temp_l_day-five');
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
      this._setForecastData(selectedItem);
      console.log(this._forecastWeatherData, this._lowTempDayOne);
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
    this._weatherMain.textContent = this._currentWeatherData.weather[0].main;
    this._weatherMain.textContent = `${this._weatherMain.textContent[0].charAt(0).toUpperCase()}${this._weatherMain.textContent.slice(1)}`;
    this._visibility.textContent = `${Math.round(this._currentWeatherData.visibility / 1000)} km`;
    this._wind.textContent = `${String(this._currentWeatherData.wind.speed).split('.')[0]} m/s`;
    this._humidity.textContent = `${this._currentWeatherData.main.humidity}%`;
    this._feelsLike.textContent = `${String(this._currentWeatherData.main.feels_like).split('.')[0]}°`;
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

    const sunriseTime = new Date(this._currentWeatherData.sys.sunrise * 1000);
    const sunsetTime = new Date(this._currentWeatherData.sys.sunset * 1000);
    this._sunrise.textContent = new Intl.DateTimeFormat('ru-RU', timeOptions).format(sunriseTime);
    this._sunset.textContent = new Intl.DateTimeFormat('ru-RU', timeOptions).format(sunsetTime);
  }

  _setForecastData(selectedItem) {
    const dateOptions = {
      weekday: 'short',
      timeZone: selectedItem.timezone_module.name,
    };
    this._dayOne.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(this._forecastWeatherData.list[0].dt * 1000));
    this._dayTwo.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(this._forecastWeatherData.list[8].dt * 1000));
    this._dayThree.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(this._forecastWeatherData.list[16].dt * 1000));
    this._dayFour.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(this._forecastWeatherData.list[24].dt * 1000));
    this._dayFive.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(new Date(this._forecastWeatherData.list[32].dt * 1000));

    this._iconDayOne.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[0].weather[0].icon}@2x.png`;
    this._iconDayTwo.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[8].weather[0].icon}@2x.png`;
    this._iconDayThree.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[16].weather[0].icon}@2x.png`;
    this._iconDayFour.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[24].weather[0].icon}@2x.png`;
    this._iconDayFive.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[32].weather[0].icon}@2x.png`;

    this._tempDayOne.textContent = `${String(this._forecastWeatherData.list[0].weather[0].main)}`;
    this._tempDayTwo.textContent = `${String(this._forecastWeatherData.list[8].weather[0].main)}`;
    this._tempDayThree.textContent = `${String(this._forecastWeatherData.list[16].weather[0].main)}`;
    this._tempDayFour.textContent = `${String(this._forecastWeatherData.list[24].weather[0].main)}`;
    this._tempDayFive.textContent = `${String(this._forecastWeatherData.list[32].weather[0].main)}`;

    this._lowTempDayOne.textContent = `${String(this._forecastWeatherData.list[0].main.temp).split('.')[0]}°`;
    this._lowTempDayTwo.textContent = `${String(this._forecastWeatherData.list[8].main.temp).split('.')[0]}°`;
    this._lowTempDayThree.textContent = `${String(this._forecastWeatherData.list[16].main.temp).split('.')[0]}°`;
    this._lowTempDayFour.textContent = `${String(this._forecastWeatherData.list[24].main.temp).split('.')[0]}°`;
    this._lowTempDayFive.textContent = `${String(this._forecastWeatherData.list[32].main.temp).split('.')[0]}°`;
  }
}
