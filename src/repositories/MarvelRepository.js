export default class MarvelRepository {
  static async fetchCharacters() {
    const timestamp = "1618974384";
    const apiKey = "369b76237da30b6966271996029d7a9e";
    const hash = "77ef50442aff7785105eb4c735374688";
    const uri = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}&limit=1`;

    return await fetch(uri)
      .then((response) => response.json())
      .then((jsonParsed) => jsonParsed.data)
      .catch((error) => console.log(error));
  }
}
