import React from "react";
import { CardLabel, Container, HeroImage } from "./styles";

export default function Card({ heroName, thumbnail }) {
  const sourceImage = `${thumbnail.path}.${thumbnail.extension}`;
  return (
      <Container>
        <HeroImage source={{ uri: sourceImage }} />
        <CardLabel>{heroName}</CardLabel>
      </Container>
  );
}
