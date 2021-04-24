import styled from "styled-components/native";

export const Container = styled.View`
  border-radius: 5px;
  margin-top: 10px;
  height: 450px;
`;

export const ComicLabel = styled.Text`
  align-self: center;
  color: #fff;
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export const ComicImage = styled.Image`
  flex: 1;
  width: null;
  height: null;
  resize-mode: contain;
  margin: 10px;
`;
