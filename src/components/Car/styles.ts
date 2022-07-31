import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;
    height: ${RFValue(126)}px;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    flex-direction: row;
    align-items: center;
    
    padding: 24px;
    margin: 16px 0;
`;

export const Details = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Photo = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: ${RFValue(160)}px;
    height: ${RFValue(92)}px;
`;

export const Brand = styled.Text`
    color: ${({ theme }) => theme.colors.text_detail};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;

    letter-spacing: 1.1px;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(15)}px;

    margin-top: ${RFValue(4)}px;
`;

export const About = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: 16px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
    color: ${({ theme }) => theme.colors.text_detail};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
    letter-spacing: 1.1px;
`;

export const Price = styled.Text`
    color: ${({ theme }) => theme.colors.main};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(15)}px;
    
    margin-top: ${RFValue(4)}px;
`;

export const Type = styled.View`
    margin-left: 24px;
`;
