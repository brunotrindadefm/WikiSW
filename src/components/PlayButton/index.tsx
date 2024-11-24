import React from "react";
import { Text } from "../index";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../../styles";
import { PlayButtonContainer } from "./styles";

interface PlayButtonProps {
    onPress?: () => void
}

export const PlayButton: React.FC<PlayButtonProps> = ({ onPress }) => {
    return (
        <PlayButtonContainer>
            <Ionicons name='play' size={theme.metrics.px(12)} color={theme.colors.black}/>
            <Text fontFamily='bold' size={14} text='Play' color={theme.colors.black}></Text>
        </PlayButtonContainer>
    )
}