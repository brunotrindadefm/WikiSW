import React from "react";
import { CustomText } from "./styles";

interface TextProps {
  text?: string;
  color?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  fontFamily?: string;
  size?: number;
}

export const Text: React.FC<TextProps> = ({ text, color, mt, mr, mb, ml, fontFamily, size }) => {
  return (
    <CustomText color={color} mt={mt} mr={mr} mb={mb} ml={ml} fontFamily={fontFamily} size={size}>
      {text}
    </CustomText>
  );
};
