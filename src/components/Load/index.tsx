import React from 'react';
import { useTheme } from 'styled-components/native'; 

import {
    Container,
} from './styles';

export function Load() {
    const theme = useTheme();

    return (
        <Container
            color={theme.colors.main}
            size="large"
        />
    )
}