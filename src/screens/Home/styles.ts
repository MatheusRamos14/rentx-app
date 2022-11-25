import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList, FlatListProps } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background_primary};
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

export const CarList = styled(
  FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>
).attrs({
  contentContainerStyle: {
    padding: 16,
  },
  showVerticalScrollIndicator: false
})``

export const ButtonContainer = styled.View`
  width: 100%;

  justify-content: center;
  align-items: flex-end;
`;

export const Button = styled(RectButton)`
  width: 64px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 30px;

  justify-content: center;
  align-items: center;

  margin: 12px 22px;
`;

export const ButtonIcon = styled(Ionicons).attrs({
  size: 32,
  name: 'ios-car-sport-sharp',
  color: '#FFF'
})``;
