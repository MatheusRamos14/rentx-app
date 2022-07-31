import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

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

export function Confirmation() {
    const { width } = useWindowDimensions();

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

                <Title>
                    Carro alugado!
                </Title>

                <Subtitle>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel.
                </Subtitle>
            </Info>

            <Footer>
                <Button>
                    <Label>Ok</Label>
                </Button>
            </Footer>
        </Container>
    )
}