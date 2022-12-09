export default class Api {
  constructor(url) {
    this._url = url;
  }

  async fetchData() {
    try {
        const response = await fetch(this._url);
        const data = await response.json();
    } catch (err) {
        alert(err);
    }
  }
}
