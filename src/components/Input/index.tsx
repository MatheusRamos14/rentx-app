import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    IconContainer,
    InputText,
} from './styles';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
}

export function Input({ iconName, value, ...rest }: Props) {
    const theme = useTheme();
    const [filled, setFilled] = useState(false);
    const [focused, setFocused] = useState(false);

    function handleFocus() {
        setFocused(true);
    }

    function handleBlur() {
        setFocused(false);

        setFilled(!!value)
    }

    return (
            <Container>
                <IconContainer focused={focused}>
                    <Feather
                        name={iconName}
                        size={24}
                        color={(focused || filled) ? theme.colors.main : theme.colors.text_detail}
                    />
                </IconContainer>

                <InputText
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    focused={focused}
                    autoCorrect={false}
                    autoCapitalize="none"
                    {...rest}
                />
            </Container>
        )
    }