import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface FocusProps {
    focused: boolean;
}

export const Container = styled.View`
    width: 100%;
    
    flex-direction: row;

    margin-bottom: 8px;
`;

export const IconContainer = styled.View<FocusProps>`
    background-color: ${({ theme }) => theme.colors.background_secondary};

    ${({ theme, focused }) => focused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.main};
    `}
    
    padding: 16px;
    margin-right: 2px;
`;

export const InputText = styled(TextInput)<FocusProps>`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};

    ${({ theme, focused }) => focused && css`
        border-bottom-width: 2px;
        border-bottom-color: ${theme.colors.main};
    `}
    
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;

    padding: 0 23px;
`;
