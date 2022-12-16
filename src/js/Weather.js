import api from '../utils/api';

export default class Weather {
  constructor() {
    this._api = api;
    this._selectedItem = null;

    this._apiKey = process.env.WEATHER_API_KEY;
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

    this._hourIconOne = document.querySelector('.hourly-forecast__icon_one');
    this._hourIconTwo = document.querySelector('.hourly-forecast__icon_two');
    this._hourIconThree = document.querySelector('.hourly-forecast__icon_three');
    this._hourIconFour = document.querySelector('.hourly-forecast__icon_four');
    this._hourIconFive = document.querySelector('.hourly-forecast__icon_five');
    this._hourIconSix = document.querySelector('.hourly-forecast__icon_six');
    this._hourIconSeven = document.querySelector('.hourly-forecast__icon_seven');
    this._hourIconEight = document.querySelector('.hourly-forecast__icon_eight');

    this._hourTempOne = document.querySelector('.hourly-forecast__temp_one');
    this._hourTempTwo = document.querySelector('.hourly-forecast__temp_two');
    this._hourTempThree = document.querySelector('.hourly-forecast__temp_three');
    this._hourTempFour = document.querySelector('.hourly-forecast__temp_four');
    this._hourTempFive = document.querySelector('.hourly-forecast__temp_five');
    this._hourTempSix = document.querySelector('.hourly-forecast__temp_six');
    this._hourTempSeven = document.querySelector('.hourly-forecast__temp_seven');
    this._hourTempEight = document.querySelector('.hourly-forecast__temp_eight');
  }

  async init() {
    window.addEventListener('itemSelectedEvent', async (e) => {
      const { selectedItem } = e.detail;
      this._selectedItem = selectedItem;

      loading true
      await Promise.all(
        [
          this._fetchCurrentWeatherData(),
          this._fetchForecastWeatherData(),
        ],
      );
      loading false

      this._setСurrentData();
      this._setTime();
      this._setForecastData();
      console.log(this._currentWeatherData, this._forecastWeatherData);
    });
  }

  async _fetchCurrentWeatherData() {
    this._currentWeatherUrl.searchParams.set('lat', this._selectedItem.lat);
    this._currentWeatherUrl.searchParams.set('lon', this._selectedItem.lon);
    this._currentWeatherData = await this._api(this._currentWeatherUrl);
  }

  async _fetchForecastWeatherData() {
    this._forecastWeatherUrl.searchParams.set('lat', this._selectedItem.lat);
    this._forecastWeatherUrl.searchParams.set('lon', this._selectedItem.lon);
    this._forecastWeatherData = await this._api(this._forecastWeatherUrl);
  }

  static _getUrl(icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  _setСurrentData() {
    const {
      name,
      weather,
      main: { temp, humidity, feels_like },
      visibility,
      wind: { speed },
    } = this._currentWeatherData;

    const [{
      description,
      icon,
    }] = weather;

    this._cityName.textContent = name;
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
      timeZone: this._selectedItem.timezone_module.name,
    };
    this._date.textContent = new Intl.DateTimeFormat('en-US', dateOptions).format(fullDate);

    const timeOptions = {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: this._selectedItem.timezone_module.name,
    };
    this._time.textContent = new Intl.DateTimeFormat('ru-RU', timeOptions).format(fullDate);
    this._sunrise.textContent = new Intl.DateTimeFormat('ru-RU', timeOptions).format(sunriseTime);
    this._sunset.textContent = new Intl.DateTimeFormat('ru-RU', timeOptions).format(sunsetTime);
  }

  _setForecastData() {
    const dateOptions = {
      weekday: 'short',
      timeZone: this._selectedItem.timezone_module.name,
    };

    // тоже было бы неплохо использовать деструктуризацию, чтобы сразу получить list или другие поля
    // и не писать длинные this._forecastWeatherData.list... и тд

    // пожалуй есть смысл вынести new Intl.DateTimeFormat() в отдельный метод
    // туда будут прокидываться dateOptions и дата и возвращаться отформатированная дата
    // можно будет переиспользовать тут и внутри _setTime()

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

    // зачем приводится к строке?
    this._tempDayOne.textContent = `${String(this._forecastWeatherData.list[0].weather[0].main)}`;
    this._tempDayTwo.textContent = `${String(this._forecastWeatherData.list[8].weather[0].main)}`;
    this._tempDayThree.textContent = `${String(this._forecastWeatherData.list[16].weather[0].main)}`;
    this._tempDayFour.textContent = `${String(this._forecastWeatherData.list[24].weather[0].main)}`;
    this._tempDayFive.textContent = `${String(this._forecastWeatherData.list[32].weather[0].main)}`;

    // лучше использовать Math.round() или toFixed()
    this._lowTempDayOne.textContent = `${String(this._forecastWeatherData.list[0].main.temp).split('.')[0]}°`;
    this._lowTempDayTwo.textContent = `${String(this._forecastWeatherData.list[8].main.temp).split('.')[0]}°`;
    this._lowTempDayThree.textContent = `${String(this._forecastWeatherData.list[16].main.temp).split('.')[0]}°`;
    this._lowTempDayFour.textContent = `${String(this._forecastWeatherData.list[24].main.temp).split('.')[0]}°`;
    this._lowTempDayFive.textContent = `${String(this._forecastWeatherData.list[32].main.temp).split('.')[0]}°`;

    // можно сделать намного проще и удобнее, если взять из html все hourIcon и hourTemp элементы,
    // а затем пройтись по ним forEach и для каждого вставить src и textContent
    // используя индекс текущего элемента, чтобы взять соответствующие данные
    // например:
    // this._hourTempElements = document.querySelectorAll('.hourly-forecast__temp');
    // this._hourTempElements.forEach((item, index) => {
    //   item.textContent = list[index].main.temp
    // });

    // list[0], list[8], list[16]... тоже надо переделать на проход циклом
    this._hourIconOne.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[0].weather[0].icon}@2x.png`;
    this._hourIconTwo.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[1].weather[0].icon}@2x.png`;
    this._hourIconThree.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[2].weather[0].icon}@2x.png`;
    this._hourIconFour.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[3].weather[0].icon}@2x.png`;
    this._hourIconFive.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[4].weather[0].icon}@2x.png`;
    this._hourIconSix.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[5].weather[0].icon}@2x.png`;
    this._hourIconSeven.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[6].weather[0].icon}@2x.png`;
    this._hourIconEight.src = `http://openweathermap.org/img/wn/${this._forecastWeatherData.list[7].weather[0].icon}@2x.png`;

    // лучше использовать Math.round() или toFixed()
    this._hourTempOne.textContent = `${String(this._forecastWeatherData.list[0].main.temp).split('.')[0]}°`;
    this._hourTempTwo.textContent = `${String(this._forecastWeatherData.list[1].main.temp).split('.')[0]}°`;
    this._hourTempThree.textContent = `${String(this._forecastWeatherData.list[2].main.temp).split('.')[0]}°`;
    this._hourTempFour.textContent = `${String(this._forecastWeatherData.list[3].main.temp).split('.')[0]}°`;
    this._hourTempFive.textContent = `${String(this._forecastWeatherData.list[4].main.temp).split('.')[0]}°`;
    this._hourTempSix.textContent = `${String(this._forecastWeatherData.list[5].main.temp).split('.')[0]}°`;
    this._hourTempSeven.textContent = `${String(this._forecastWeatherData.list[6].main.temp).split('.')[0]}°`;
    this._hourTempEight.textContent = `${String(this._forecastWeatherData.list[7].main.temp).split('.')[0]}°`;
  }

  // молодец, проделана огромная работа!! (тьмок)
}
