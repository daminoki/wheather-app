export default class Weather {
  constructor(
    feelsLike,
    humidity,
    temp,
    tempMax,
    tempMin,
    cityName,
    visibility,
    mainWeatherCondition,
    weatherIcon,
    wind,
  ) {
    this._feelsLike = feelsLike;
    this._humidity = humidity;
    this._temp = temp;
    this._tempMax = tempMax;
    this._tempMin = tempMin;
    this._cityName = cityName;
    this._visibility = visibility;
    this._mainWeatherCondition = mainWeatherCondition;
    this._weatherIcon = weatherIcon;
    this._wind = wind;
  }
}
