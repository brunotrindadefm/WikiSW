import React from "react";
import { HomeList, Hero, ScreenScrollContainer } from "../../components";

export const Home = () => {
  const FakeDataCharacteres = [
    {
      id: 1,
      title: "The Mandalorian",
      subtitle: "A Star Wars Story",
      imageUrl: "https://tinyurl.com/mjj2h933",
    },
    {
      id: 2,
      title: "The Force Awakens",
      subtitle: "The Return of the Jedi",
      imageUrl: "https://tinyurl.com/3xv6wbe9",
    },
    {
      id: 3,
      title: "Return of the Jedi",
      subtitle: "The Epic Battle Continues",
      imageUrl: "https://tinyurl.com/2a3stp6w",
    },
  ];

  {
    return (
      <ScreenScrollContainer>
        <Hero
          item={{
            title: "Episodoisja",
            subtitle: "maconha",
            type: "personagem",
            imageUrl: "https://tinyurl.com/2a3stp6w",
          }}
        />
        <HomeList title="Personagens" data={FakeDataCharacteres} />
        <HomeList title="Filmes" data={FakeDataCharacteres} />
      </ScreenScrollContainer>
    );
  }
};
