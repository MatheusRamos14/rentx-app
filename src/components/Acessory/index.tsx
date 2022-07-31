import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
    Container,
    Title,
} from './styles';

interface AcessoryProps {
    title: string;
    icon: React.FC<SvgProps>
}

export function Acessory({ title, icon: Icon }:  AcessoryProps) {
    return (
        <Container>
            <Icon />
            
            <Title>{title}</Title>
        </Container>
    )
}