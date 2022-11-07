import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Title,
} from './styles';

export interface ButtonProps extends RectButtonProps {
    title: string;
    color?: string;
    loading?: boolean;
    enabled?: boolean;
}

export function Button({ title, color, loading, enabled, ...rest }: ButtonProps) {
    return (
        <Container
            color={color}
            enabled={enabled === undefined ? true : enabled}
            {...rest}
        >
            {loading ?
                <ActivityIndicator
                    size="small"
                    color="white"
                />
                :
                <Title>{title}</Title>
            }
        </Container>
    )
}