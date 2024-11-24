import React from "react";
import { FlatList } from "react-native";
import { Card } from "../Card";
import { Text } from "../Text";

const FakeData = [
  {
    id: 1,
    imageUrl: "https://tinyurl.com/mjj2h933",
  },
  {
    id: 2,
    imageUrl: "https://tinyurl.com/3xv6wbe9",
  },
  {
    id: 3,
    imageUrl: "https://tinyurl.com/2a3stp6w",
  },
];

export const HomeList = () => {
  return ( 
  <FlatList
   horizontal
   data={FakeData} 
   renderItem={({ item }) => <Card item={item}/>}
   keyExtractor={(item) => item.id.toString()}
   />
)
};