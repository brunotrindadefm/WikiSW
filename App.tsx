import React, { useEffect } from "react";
import 'react-native-gesture-handler'
import * as splashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";
import { Routes } from "./src/routes";
import { theme } from "./src/styles";
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SourceSansPro_600SemiBold,
  SourceSansPro_900Black,
} from "@expo-google-fonts/source-sans-pro";

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  });

  useEffect(() => {
    splashScreen.preventAutoHideAsync();
    
    if (fontsLoaded) {
      splashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
