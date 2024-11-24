import styled from "styled-components/native";
import { Image } from "react-native";

interface LogoImageProps {
  size: number,
  source: string
}

export const LogoImage = styled(Image)<LogoImageProps>`
  height: ${({ size, theme }) => theme.metrics.px(size)}px;
  width: ${({ size, theme }) => theme.metrics.px(size)}px;
`;
