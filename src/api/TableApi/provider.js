import { converter } from "./converter";

class TableApi {
  constructor({ url, token }) {
    this.url = url;
    this.token = token;
  }

  getTasks() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((data) => converter(data));
  }
}

export default new TableApi({ url: 'https://jsonplaceholder.typicode.com/users' });
