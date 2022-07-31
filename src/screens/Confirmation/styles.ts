import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.header};

    align-items: center;

    padding: ${getStatusBarHeight() + RFValue(65)}px 0;
`;

export const Info = styled.View`
    width: 100%;

    align-items: center;

    margin-top: 20px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.background_secondary};
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(30)}px;

    margin-top: 40px;
`;

export const Subtitle = styled.Text`
    color: ${({ theme }) => theme.colors.text_detail};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    text-align: center;

    margin-top: 20px;
`;

export const Footer = styled.View`
    width: 100%;
    
    align-items: center;

    position: absolute;
    bottom: 0;

    padding-bottom: ${getBottomSpace() + 45}px;
`;

export const Button = styled(RectButton)`
    width: 80px;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.shape_dark};

    align-items: center;
    justify-content: center;
`;

export const Label = styled.Text`
    color: ${({ theme }) => theme.colors.background_secondary};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
`;
