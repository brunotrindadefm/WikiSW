import React from "react";
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
} from "./styles";
import { colors } from "../../styles/colors";
import { Text, Logo, Tag, IconButton, PlayButton } from "../index";

interface HeroProps {
  item: {
    imageUrl: string;
    title: string;
    subtitle: string;
    type: string;
  };
  onDetail: boolean;
}

export const Hero: React.FC<HeroProps> = ({ item, onDetail }) => {
  return (
    <HeroContainer>
      <HeroImageBackground source={{ uri: item.imageUrl }}>
        <HeroGradient colors={[colors.grey, "transparent", colors.grey]}>
          {!onDetail && <Logo size="small"></Logo>}
          <Tag mt={onDetail ? 224 : 200} children={item.type}></Tag>
          <Text fontFamily="bold" size={28} mt={7} text={item.title}></Text>
          <Text size={18} mt={1.5} mb={onDetail ? 10 : 0} text={item.subtitle}></Text>
          <ButtonsView>
            <IconButton label="Favoritos" iconName="add-circle-outline" />
            <PlayButton />
            {!onDetail && (
              <IconButton label="Saiba mais" iconName="add-circle-outline" />
            )}
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>
    </HeroContainer>
  );
};
