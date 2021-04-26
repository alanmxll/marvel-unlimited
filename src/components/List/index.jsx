import React from "react";
import { FlatList, TouchableHighlight } from "react-native";
import Card from "../Card";

export default function List({ data, navigation, onReached }) {
  return (
    <FlatList
      data={data}
      columnWrapperStyle={{ margin: 5, justifyContent: "space-between" }}
      numColumns={3}
      keyExtractor={({ id }) => id}
      onEndReachedThreshold={0.1}
      onEndReached={onReached}
      renderItem={({ item }) => {
        return (
          <TouchableHighlight
            activeOpacity={1}
            underlayColor={"#444"}
            onPress={() => {
              navigation.navigate("Comics", item.id);
            }}
          >
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
