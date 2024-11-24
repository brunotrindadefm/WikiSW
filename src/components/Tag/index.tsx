import React from "react";
import { TagContainer } from "./styles";
import { Text } from "../Text";

interface TagProps {
    children: string;
    mt?: number;
    mb?: number;
    ml?: number;
    mr?: number;
}

export const Tag: React.FC<TagProps> = ({ children, mt, mb, mr, ml }) => (
    <TagContainer mt={mt} mr={mr} ml={ml} mb={mb}>
        <Text fontFamily='bold' size={14} text={children} />
    </TagContainer>
)