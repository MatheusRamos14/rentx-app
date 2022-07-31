import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 108px;
    height: 92px;
    background-color: #F4F5F6;

    align-items: center;
    
    padding: 16px 0;
    margin-bottom: 8px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(13)}px;

    margin-top: 12px;
`;
