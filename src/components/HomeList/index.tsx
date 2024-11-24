import React from "react";
import { FlatList } from "react-native";
import { Card, Text } from "../index";
import { ListContainer } from "./styles";
import { theme } from "../../styles";

interface HomeListProps {
  data: any[];
  title: string
}

export const HomeList: React.FC<HomeListProps> = ({ data, title }) => {
  return (
    <ListContainer>
      <Text ml={12} fontFamily='black' size={18} text={title} />
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingLeft: theme.metrics.px(12),
          paddingTop: theme.metrics.px(12),
          paddingBottom: theme.metrics.px(16)
        }}
      />
    </ListContainer>
  );
};
