import MarvelRepository from "../repositories/MarvelRepository";

export default class MarvelController {
  async fetchCharacters() {
    return await MarvelRepository.fetchCharacters();
  }

  async fetchComics() {
    return await MarvelRepository.fetchComics();
  }
}
