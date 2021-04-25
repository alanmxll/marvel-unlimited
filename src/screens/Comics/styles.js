import styled from "styled-components/native";

export const Container = styled.ScrollView`
  background-color: #333;
`;

export const ComicCard = styled.View`
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  height: 500px;
  margin-top: 20px;
`;

export const LabelCard = styled.View`
  flex: 1;
  margin-top: 400px;
  height: 150px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
`;

export const ComicLabel = styled.Text`
  align-self: center;
  color: #fff;
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 5px;
  font-weight: bold;
`;

export const ComicImage = styled.Image`
  flex: 1;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const DetailsButton = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.75);
  height: 35px;
  border: 1px solid white;
  border-radius: 50px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  
`;

export const TextButton = styled.Text`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`;
