import styled from "styled-components/native";

export const GoBackContainer = styled.TouchableOpacity`
    position: absolute;
    top: ${({theme}) => theme.metrics.px(42)}px;
    padding-left: ${({theme}) => theme.metrics.px(22)}px;
`