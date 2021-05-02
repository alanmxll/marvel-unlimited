import React, { useEffect, useState } from "react";
import Carousel from "react-native-snap-carousel";
import LoadData from "../../components/LoadData";
import MarvelController from "../../controllers/MarvelController";
import {
  ComicCard,
  ComicImage,
  ComicLabel,
  Container,
  DetailsButton,
  LabelCard,
  TextButton,
} from "./styles";

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
    <Container>
      <Carousel
        data={comicsByCharacter}
        renderItem={({ item }) => {
          const sourceImage = `${item.thumbnail.path}.${item.thumbnail.extension}`;

          return (
            <ComicCard key={item.id}>
              <ComicImage source={{ uri: sourceImage }} />
              <LabelCard>
                <ComicLabel>{item.title}</ComicLabel>
                <DetailsButton
                  activeOpacity={0.1}
                  underlayColor={"#fff"}
                  onPress={() => {
                    navigation.navigate("Details", item);
                  }}
                >
                  <TextButton>See details</TextButton>
                </DetailsButton>
              </LabelCard>
            </ComicCard>
          );
        }}
        sliderWidth={425}
        itemWidth={325}
      />
    </Container>
  ) : (
    <LoadData />
  );
}
