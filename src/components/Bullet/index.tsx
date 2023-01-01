import React from 'react';
import { ViewProps } from 'react-native';

import {
    Container,
} from './styles';

interface Props extends ViewProps {
    active?: boolean; 
}

export function Bullet({ active }: Props) {
    return (
        <Container active={active} />
    )
}