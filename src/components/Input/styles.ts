import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    
    flex-direction: row;
    `;

export const IconContainer = styled.View`
    background-color: ${({ theme }) => theme.colors.background_secondary};
    
    padding: 16px;
    margin-right: 2px;
`;

export const InputText = styled(TextInput)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;

    padding: 0 23px;
`;
