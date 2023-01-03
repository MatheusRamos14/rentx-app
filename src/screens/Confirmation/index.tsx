import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation, useRoute } from '@react-navigation/native';

import Logo from '../../assets/logo_background_gray.svg';
import Check from '../../assets/done.svg';

import {
    Container,
    Info,
    Title,
    Subtitle,
    Footer,
    Button,
    Label,
} from './styles';

interface Params {
    title: string;
    auxiliar?: string;
    nextScreen: any;
}

export function Confirmation() {
    const { params } = useRoute();
    const { title, auxiliar, nextScreen } = params as Params;

    const { width } = useWindowDimensions();
    const { navigate } = useNavigation();

    function handleNavigate() {
        navigate(nextScreen)
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <Logo
                width={RFValue(width)}
                height={RFValue(235)}
                />

            <Info>
                <Check
                    width={RFValue(80)}
                    height={RFValue(80)}                    
                />

                <Title>{title}</Title>

                <Subtitle>{auxiliar}</Subtitle>
            </Info>

            <Footer>
                <Button onPress={handleNavigate}>
                    <Label>Ok</Label>
                </Button>
            </Footer>
        </Container>
    )
}