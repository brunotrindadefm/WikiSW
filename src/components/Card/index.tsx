import React from "react";
import { CardContainer, CardImage } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import useDataStore from "../../services/stores/dataStore";

interface CardProps {
  item: {
    imageUrl: string;
    title: string;
    subtitle: string;
    type: string;
  };
}

type StackNavigationParams = {
  details: undefined;
};

export const Card: React.FC<CardProps> = ({ item }) => {
  const { setSelectedData } = useDataStore();
  const navigation = useNavigation<StackNavigationProp<StackNavigationParams>>();

  const onSelectItem = () => {
    setSelectedData(item)
    navigation.navigate("details")
  }
  
  return (
    <CardContainer onPress={() => onSelectItem()}>
      <CardImage source={{ uri: item.imageUrl }} />
    </CardContainer>
  );
};
