import React from "react";
import { ButtonContainer } from "./styles";
import { Text } from "../index";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../styles";

interface IconButtonProps {
    iconName?: keyof typeof Ionicons.glyphMap;
    label?: string;
    onPress?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ iconName, label, onPress }) => {
    return (
        <ButtonContainer onPress={onPress}>
            <Ionicons name={iconName} color={theme.colors.white} size={theme.metrics.px(24)}/>
            <Text fontFamily='semibold' size={10} mt={6} text={label}></Text>
        </ButtonContainer>
    )
}