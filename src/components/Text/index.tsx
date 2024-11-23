import React from "react";
import { CustomText } from "./styles";

interface CustomTextProps {
  logoText: string
}

export const Text: React.FC<CustomTextProps> = ({ logoText }) => {
  {
    return <CustomText >{logoText}</CustomText>;
  }
};

