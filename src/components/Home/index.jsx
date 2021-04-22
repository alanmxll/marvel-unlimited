import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import MarvelController from "../../controllers/MarvelController";
import List from "../List";
import Title from "../Title";
import { Container } from "./styles";

const marvelController = new MarvelController();

export default function Home() {
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
      <Title />
      {heroes.length > 0 && <List data={heroes} />}
    </Container>
  );
}
