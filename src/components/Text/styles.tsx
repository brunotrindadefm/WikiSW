import styled from "styled-components/native";

export const CustomText = styled.Text`
    color: ${({theme}) => theme.colors.light};
    margin-top: ${({theme}) => theme.metrics.px(14)};
    font-size: ${({theme}) => theme.metrics.px(21)};
    font-family: ${({theme}) => theme.fonts.semibold};
`;