import MarvelRepository from "../repositories/MarvelRepository";

export default class MarvelController {
  async fetchCharacters() {
    return await MarvelRepository.fetchCharacters();
  }

  async fetchMoreCharacters({ offset }) {
    return await MarvelRepository.fetchMoreCharacters({ offset });
  }

  async fetchComics() {
    return await MarvelRepository.fetchComics();
  }

  async fetchComicsByCharacterId({ id }) {
    return await MarvelRepository.fetchComicsByCharacterId({ id });
  }
}
