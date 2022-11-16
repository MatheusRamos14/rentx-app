import styled from 'styled-components/native';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled(BorderlessButton)``;

export const Icon = styled(Feather).attrs({
    size: 24
})``;