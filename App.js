import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StatusBar } from "react-native";
import Comics from "./src/components/Comics";
import Home from "./src/components/Home";
import Title from "./src/components/Title";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitle: Title,
          headerStyle: {
            backgroundColor: "#333",
            elevation: 0,
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Comics" component={Comics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
