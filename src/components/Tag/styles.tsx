import { View } from "react-native";
import styled from "styled-components/native";

interface TagContainerProps {
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
}

export const TagContainer = styled(View)<TagContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  height: ${({ theme }) => theme.metrics.px(24)}px;
  padding-horizontal: ${({ theme }) => theme.metrics.px(4)}px;
  border-radius: ${({ theme }) => theme.metrics.px(24)}px;
  max-width: ${({ theme }) => theme.metrics.px(91)}px;
  margin-top: ${({ theme, mt = 0 }) => theme.metrics.px(mt)};
  margin-bottom: ${({ theme, mb = 0 }) => theme.metrics.px(mb)};
  margin-left: ${({ theme, ml = 0 }) => theme.metrics.px(ml)};
  margin-right: ${({ theme, mr = 0 }) => theme.metrics.px(mr)};
`;
