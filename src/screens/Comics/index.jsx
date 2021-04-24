import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import LoadData from "../../components/LoadData";
import MarvelController from "../../controllers/MarvelController";
import { ComicImage, ComicLabel, Container } from "./styles";

const marvelController = new MarvelController();

export default function Comics(data) {
  const characterId = data.route.params;
  const [comicsByCharacter, setComics] = useState([]);

  useEffect(() => {
    async function fetchComicsByCharacterId() {
      const data = await marvelController.fetchComicsByCharacterId({
        id: characterId,
      });
      setComics(await data.results);
    }

    if (comicsByCharacter.length === 0) fetchComicsByCharacterId();
  }, [comicsByCharacter]);

  return comicsByCharacter.length > 0 ? (
    <ScrollView style={{ backgroundColor: "#333" }}>
      {comicsByCharacter.map((comic) => {
        const sourceImage = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

        return (
          <Container key={comic.id}>
            <ComicLabel>{comic.title}</ComicLabel>
            <ComicImage source={{ uri: sourceImage }} />
          </Container>
        );
      })}
    </ScrollView>
  ) : (
    <LoadData />
  );
}
