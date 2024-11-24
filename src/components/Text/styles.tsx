import styled from "styled-components/native";
import { Text as NativeText } from "react-native";

interface CustomTextProps {
  color?: string;
  size?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  fontFamily?: string;
}

export const CustomText = styled(NativeText)<CustomTextProps>`
  color: ${({ theme, color = "white" }) => theme.colors[color]};
  margin-top: ${({ theme, mt = 0 }) => theme.metrics.px(mt)};
  margin-bottom: ${({ theme, mb = 0 }) => theme.metrics.px(mb)};
  margin-left: ${({ theme, ml = 0 }) => theme.metrics.px(ml)};
  margin-right: ${({ theme, mr = 0 }) => theme.metrics.px(mr)};
  font-size: ${({ theme, size = 21 }) => theme.metrics.px(size)};
  font-family: ${({ theme, fontFamily = "regular" }) => theme.fonts[fontFamily]};
`;
