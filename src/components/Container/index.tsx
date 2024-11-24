import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface ContainerProps {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  bg?: string;
  w?: number;
  h?: number;
}

export const Container = styled.View<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  background-color: ${({ bg, theme }) => theme.colors[bg || 'grey']};
  width: ${({ w, theme }) => (w ? `${theme.metrics.px(w)}px` : "100%")};
  height: ${({ h, theme }) => (h ? `${theme.metrics.px(h)}px` : "100%")};
`;

export const ScreenScrollContainer = styled(ScrollView)<ContainerProps>`
  background-color: ${({ bg, theme }) => theme.colors[bg || 'grey']};
`