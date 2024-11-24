import React, {useEffect} from "react";
import { Logo } from "../../components";
import { Container, Text } from "../../components";
import { NavigationProp } from "@react-navigation/native";

interface SplashScreenProps {
  navigation: NavigationProp<any>
} 

export const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home')
    }, 5000)

  }, [navigation])
  return (
    <Container align="center" justify="center">
      <Logo />
      <Text logoText="Star Wars - Wiki" />
    </Container>
  );
};
