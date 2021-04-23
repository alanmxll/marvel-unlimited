import React from "react";
import { TouchableHighlight } from "react-native";

import { FlatGrid } from "react-native-super-grid";
import Card from "../Card";

export default function List({ data }) {
  return (
    <FlatGrid
      data={data}
      spacing={10}
      style={{ marginTop: 10, flex: 1 }}
      renderItem={({ item }) => {
        return (
          <TouchableHighlight activeOpacity={0.1} underlayColor={"#444"} onPress={() => console.log('HERO:', item.comics)}>
            <Card
              key={`${item.id}`}
              heroName={item.name}
              thumbnail={item.thumbnail}
            />
          </TouchableHighlight>
        );
      }}
    />
  );
}
