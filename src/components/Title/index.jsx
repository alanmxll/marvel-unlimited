import React from "react";
import { Container, TitleText } from "./styles";

export default function Title() {
  return (
    <Container>
      <TitleText color={"white"}>MARVEL</TitleText>
      <TitleText color={"red"} fontWeight={"bold"}>
        UNLIMITED
      </TitleText>
    </Container>
  );
}
