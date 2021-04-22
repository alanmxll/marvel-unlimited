import React from "react";
import Card from "../Card";
import { Container } from "./styles";

export default function List({ data }) {
  return (
    <Container>
      {data &&
        data.map((e) => {
          return (
            <Card key={`${e.id}`} heroName={e.name} thumbnail={e.thumbnail} />
          );
        })}
    </Container>
  );
}
