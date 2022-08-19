import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons';

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

export const Acessories = styled.View`
    width: 100%;

    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 32px;
`;

export const RentPeriod = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

`;

export const CalendarWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.main};
    margin-right: 29px;
    padding: 12px;
`;


export const CalendarIcon = styled(Feather).attrs({
    size: RFValue(24),
})``;


export const PeriodContainer = styled.View`
    flex: 1;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


export const DateGroup = styled.View``;


export const Label = styled.Text`
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};

    margin-bottom: 8px;
`;

export const DateValue = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Arrow = styled(Feather).attrs({
    size: RFValue(16)
})``;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.line};

    padding: 0 20px;
    margin: 15px 0;
`;

export const Totals = styled.View`
    width: 100%;
`;

export const Values = styled.View`
    width: 100%;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Math = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const Total = styled.Text`
    color: ${({ theme }) => theme.colors.success};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
`;

export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_primary};
    padding: 24px;
`; 