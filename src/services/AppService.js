import axios from "axios";

export default class getData {
  // abajo: constructor(urlRequerida) {...
  constructor() {
    // abajo: `...src/data/${urlRequerida}.json`
    this.url = "https://cdn.jsdelivr.net/gh/theBowja/genshin-db@main/src/data";
  }

  async to(thisUrl) {
    try {
      return await axios.get(`${this.url}${thisUrl}`);
    } catch (error) {
      throw error;
    }
  }
}
