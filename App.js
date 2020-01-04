import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import GlobalContext from "./contexts/mainContext";

// screens
import HomeScreen from "./screen/HomeScreen";
import DetailScreen from "./screen/DetailScreen";
import IntroScreen from "./screen/IntroScreen";

// const instructions = Platform.select({
//   ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
//   android:
//     "Double tap R on your keyboard to reload,\n" +
//     "Shake or press menu button for dev menu",
// });

const Stack = createStackNavigator();

const headerOption = {
  headerTintColor: "#fff",
  headerStyle: {
    backgroundColor: "#f20024",
  },
};

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <GlobalContext>
      <NavigationContainer>
        <Stack.Navigator>
          {loaded || (
            <Stack.Screen
              name="Intro"
              component={IntroScreen}
              options={{
                headerShown: false,
              }}
            />
          )}
          <Stack.Screen
            name="Home"
            options={{ ...headerOption, title: "OMDB Searcher" }}
          >
            {props => <HomeScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Detail" options={headerOption}>
            {props => <DetailScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContext>
  );
};

export default App;
