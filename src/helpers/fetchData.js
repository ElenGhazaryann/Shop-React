function fetchData() {
  return fetch(
"https://api.harvardartmuseums.org/object?apikey=67d9edc0-e6a3-11e3-9798-57275476509a&sort=rank&sortorder=asc&size=12&page=198"  ).then((res) => res.json());
}

export default fetchData;
