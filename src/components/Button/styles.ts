import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

import { ButtonProps } from '.';

export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;
    height: 56px;

    background-color: ${({ color, theme }) => color ? color : theme.colors.main};
    opacity: ${({ enabled }) => enabled ? 1 : 0.3};

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: #FFF;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
`;