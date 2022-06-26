import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { StatusBar } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;

  background-color: ${({ theme }) => theme.colors.header};

  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  padding: ${RFValue(32)}px 16px;
`;

export const Total = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  margin-right: 8px;
`;

export const Main = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};

  padding: 0 16px;
`;