import React, { useEffect } from "react";
import { Container, Text, Logo } from "../../components";
import * as splashScreen from "expo-splash-screen";
import { NavigationProp } from "@react-navigation/native";

interface SplashScreenProps {
  navigation: NavigationProp<any>;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    splashScreen.preventAutoHideAsync();

    const timer = setTimeout(() => {
      navigation.navigate('home');

      splashScreen.hideAsync();
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Container align="center" justify="center">
      <Logo size="large" />
      <Text mt={9} fontFamily="semibold" text="Star Wars - Wiki" />
    </Container>
  );
};
