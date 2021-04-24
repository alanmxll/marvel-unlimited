import React, { useEffect, useState } from "react";
import List from "../../components/List";
import LoadData from "../../components/LoadData";
import MarvelController from "../../controllers/MarvelController";
import { Container } from "./styles";

const marvelController = new MarvelController();

export default function Home({ navigation }) {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const data = await marvelController.fetchCharacters();
      setHeroes(await data.results);
    }

    if (heroes.length === 0) fetchCharacters();
  }, [heroes]);

  return (
    <Container>
      {heroes.length > 0 ? (
        <List data={heroes} navigation={navigation} />
      ) : (
        <LoadData />
      )}
    </Container>
  );
}
