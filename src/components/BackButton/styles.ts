import styled from 'styled-components/native';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled(BorderlessButton)`
  width: 24px;
  height: 24px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather).attrs({
    size: 24
})``;