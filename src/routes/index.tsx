import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Details, Home, SplashScreen } from "../screens";

type RootStackParamList = {
    splash: undefined;
    home: undefined;
    details: undefined
  };    

export const Routes = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={SplashScreen}/>
        <Stack.Screen name="home" component={Home}/> 
        <Stack.Screen name="details" component={Details}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};
