import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-self: center;
`;

export const TitleText = styled.Text`
  font-size: 32px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
  font-style: italic;
  color: ${({ color }) => color};
  margin: 2px;
`;
