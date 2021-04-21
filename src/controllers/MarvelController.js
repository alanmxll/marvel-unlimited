import MarvelRepository from "../repositories/MarvelRepository";

export default class MarvelController {
  async fetchComics() {
    return await MarvelRepository.fetchComics();
  }
}
