import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    IconContainer,
    InputText,
} from './styles';

interface Props extends TextInputProps {
    iconName?: React.ComponentProps<typeof Feather>['name']
}

export function PasswordInput({ iconName="lock", value, ...rest }: Props) {
    const theme = useTheme();
    const [secure, setSecure] = useState(true);
    const [filled, setFilled] = useState(false);
    const [focused, setFocused] = useState(false);

    function handleChangeSecure() {
        setSecure(prev => !prev);
    }

    function handleFocus() {
        setFocused(true);
    }

    function handleBlur() {
        setFocused(false);

        setFilled(!!value);
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
                focused={focused}
                secureTextEntry={secure}
                onFocus={handleFocus}
                onBlur={handleBlur}
                autoCorrect={false}
                autoCapitalize="none"                
                {...rest}
            />

            <IconContainer focused={focused}>
                <BorderlessButton onPress={handleChangeSecure}>
                    <Feather
                        name={secure ? 'eye' : 'eye-off'}
                        size={24}
                        color={theme.colors.text}
                    />
                </BorderlessButton>
            </IconContainer>
        </Container>
    )
}