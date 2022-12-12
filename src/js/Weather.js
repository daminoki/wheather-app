export default class Weather {
  constructor(data, selectors) {
    this._feelsLike = data.feelsLike;
    this._humidity = data.humidity;
    this._temp = temp;
    this._tempMax = tempMax;
    this._tempMin = tempMin;
    this._cityName = cityName;
    this._visibility = visibility;
    this._mainWeatherCondition = mainWeatherCondition;
    this._weatherIcon = weatherIcon;
    this._wind = wind;    
  }

  setEventListeners() {
    this._feelsLike.textContent = 
  }
}
