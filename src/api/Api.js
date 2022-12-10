export default class Api {
  constructor(url) {
    this._url = url;
  }

  async getFetchResults() {
    try {
      const response = await fetch(this._url);
      const { data } = await response.json();

      return data || null;
    } catch (err) {
      alert(err);
    }
  }
}
