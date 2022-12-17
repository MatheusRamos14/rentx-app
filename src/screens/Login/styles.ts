import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;

    padding: 0 24px;
`;

export const Header = styled.View`
    width: 100%;
    
    padding: 0 8px;
    margin-top: ${getStatusBarHeight() + 115}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(40)}px;
    font-family: ${({ theme}) => theme.fonts.secondary_600};

    margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme}) => theme.fonts.primary_400};
`;

export const Form = styled.View`
    width: 100%;

    margin: 64px 0;
`;

export const Footer = styled.View`
    width: 100%;
`;
