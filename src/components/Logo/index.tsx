import React from "react";
import { LogoImage } from "./styles";
import logoImage from "../../../assets/LogoEmpire.png";

const sizes = {
  small: 32,
  large: 94
}

interface LogoProps  {
  size?: keyof typeof sizes;
}

export const Logo: React.FC<LogoProps> = ({ size = 'large' }) => {
  {
    return <LogoImage source={logoImage} size={sizes[size]} />;
  }
};
