import React from "react";
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
    const { goBack } = useNavigation();

    return (
        <Container
            onPress={goBack}
            {...rest}
        >
            <Icon
                name="chevron-left"
                color={color ? color : theme.colors.text}
            />
        </Container>
    )
}