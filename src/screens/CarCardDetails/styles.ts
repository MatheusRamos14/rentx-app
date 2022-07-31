import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    padding-top: ${getStatusBarHeight() + 32}px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    margin-top: 50px;
    margin-left: 24px;
`;

export const CarImages = styled.View``;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingHorizontal: 24,
        alignItems: 'center',
    },
})`
    width: 100%;

    /* padding: 0 24px; */
`;

export const Info = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
`;

export const Model = styled.View``;

export const Brand = styled.Text`
    color: ${({ theme }) => theme.colors.text_detail};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
    color: ${({ theme }) => theme.colors.text_detail};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;

    text-transform: uppercase;
`;

export const Value = styled.Text`
    color: ${({ theme }) => theme.colors.main};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
`;

export const Description = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    line-height: 25px;
    text-align: justify;
`;

export const Acessories = styled.View`
    width: 100%;

    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
`;

export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_primary};
    padding: 24px;
`;  