import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background_primary};

    padding: ${getStatusBarHeight() + 16}px 24px 0;
`;

export const Header = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Steps = styled.View`
    flex-direction: row;
    align-self: flex-end;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(40)}px;

    margin-top: 48px;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;

    margin-top: 16px;
`;

export const Form = styled.View`
    width: 100%;
`;

export const FormTitle = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(20)}px;
    
    margin-top: 64px;
    margin-bottom: 24px;
`;

export const Inputs = styled.View`
    margin-bottom: 8px;
`;
