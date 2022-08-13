import styled, { css } from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface selected {
    hasValue: boolean;
}

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;

    background-color: ${({ theme }) => theme.colors.header};

    padding: 0 24px;
    padding-top: ${getStatusBarHeight() + 18}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(30)}px;

    margin-top: 24px;
`;

export const Dates = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 32px;
`;

export const DateContainer = styled.View`
    width: 30%;
`;

export const DateLabel = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;

    margin-bottom: 8px;
`;

export const DateValueWrapper = styled.View<selected>`
    width: 100%;

    justify-content: center;

    ${({ hasValue, theme }) => !hasValue && css`
        border-bottom-width: 1px;
        border-bottom-color: ${theme.colors.text};
    `}
`;

export const DateValue = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingTop: 33,
        paddingHorizontal: 16,
    },
    showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
    width: 100%;

    padding: 24px;
`;