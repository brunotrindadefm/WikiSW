import React from 'react'
import { CardContainer, CardImage } from './styles';

interface CardProps {
    item: {
        imageUrl: string
    }
}

export const Card: React.FC<CardProps> = ({item}) => {
    return (
        <CardContainer>
            <CardImage source={{ uri: item.imageUrl }}/>
        </CardContainer>
    );
}