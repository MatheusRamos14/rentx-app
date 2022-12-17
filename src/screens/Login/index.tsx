import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import {
    Container,
    Header,
    Title,
    SubTitle,
    Form,
    Footer,
} from './styles';

export function Login() {
    const theme = useTheme();

    return (
        <Container>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <Header>
                <Title>
                    Estamos {'\n'}
                    quase lá.
                </Title>
                <SubTitle>
                    Faça seu login para começar {'\n'}
                    uma experiência incrível.
                </SubTitle>
            </Header>

            <Form>
                <Input
                    iconName='mail'
                    placeholder='E-mail'
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize="none"
                />
            </Form>

            <Footer>
                <Button
                    title="Login"
                    onPress={() => {}}
                    enabled
                />
                <Button
                    color={theme.colors.background_secondary}
                    title="Criar uma conta gratuita"
                    onPress={() => {}}
                    enabled
                    light
                />
            </Footer>
        </Container>
    )
}