import React from "react";
import { Hero, ScreenScrollContainer, Text, GoBack } from "../../components";
import useDataStore from "../../services/stores/dataStore";

export const Details = () => {
  const { selectedData } = useDataStore();

  if (!selectedData) {
    return <Text text="Não temos informações :("></Text>;
  }

  {
    return (
      <ScreenScrollContainer>
        <Hero item={selectedData} onDetail={true} />
        <GoBack />
      </ScreenScrollContainer>
    );
  }
};
