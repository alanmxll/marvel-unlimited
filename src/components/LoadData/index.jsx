import React from "react";
import { ActivityIndicator } from "react-native";
import { Container } from "./styles";

export default function LoadData() {
  return (
    <Container>
      <ActivityIndicator size="large" color="#fff" />
    </Container>
  );
}
