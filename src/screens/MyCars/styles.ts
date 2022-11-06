import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    width: 100%;
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

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.secondary_400};
    font-size: ${RFValue(15)}px;

    margin-top: 24px;
    margin-bottom: 36px;
`;

export const Appointments = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 24px;
`;

export const AppointmentsTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
`;

export const AppointmentsValue = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(15)}px;
`;

export const CarCardWrapper = styled.View`
    width: 100%;

    margin-bottom: 16px;
`;

export const RentContainer = styled.View`
    width: 100%;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 16px 24px;
    margin-top: -12px;
`;

export const PeriodTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text_detail};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
`;

export const RentalPeriod = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const RentalValue = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(13)}px;
`;
