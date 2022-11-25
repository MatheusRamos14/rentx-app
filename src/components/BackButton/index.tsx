import React, { useCallback } from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import {
    Container,
    Icon
} from './styles';

interface Props extends BorderlessButtonProps {
    color?: string;
}

export function BackButton({ color, ...rest }: Props) {
    const theme = useTheme();
    const { goBack, canGoBack } = useNavigation();

    const handleGoBack = useCallback(() => {
        if (!canGoBack()) return;

        goBack();
    }, [])

    return (
        <Container
            onPress={handleGoBack}
            {...rest}
        >
            <Icon
                name="chevron-left"
                color={color ? color : theme.colors.text}
            />
        </Container>
    )
}