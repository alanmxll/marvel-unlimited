import { HASH, PUBLIC_APIKEY, TIMESTAMP } from "@env";

export default class MarvelRepository {
  static async fetchCharacters() {
    const uri = `https://gateway.marvel.com:443/v1/public/characters?ts=${TIMESTAMP}&apikey=${PUBLIC_APIKEY}&hash=${HASH}&limit=100`;

    return await fetch(uri)
      .then((response) => response.json())
      .then((jsonParsed) => jsonParsed.data)
      .catch((error) => console.log(error));
  }

  static async fetchComics() {
    const uri = `https://gateway.marvel.com:443/v1/public/comics?ts=${TIMESTAMP}&apikey=${PUBLIC_APIKEY}&hash=${HASH}&limit=100&orderBy=modified`;

    return await fetch(uri)
      .then((response) => response.json())
      .then((jsonParsed) => jsonParsed.data)
      .catch((error) => console.log(error));
  }

  static async fetchComicsByCharacterId({ id }) {
    const uri = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=${TIMESTAMP}&apikey=${PUBLIC_APIKEY}&hash=${HASH}&limit=100`;

    return await fetch(uri)
      .then((response) => response.json())
      .then((jsonParsed) => jsonParsed.data)
      .catch((error) => console.log(error));
  }
}
