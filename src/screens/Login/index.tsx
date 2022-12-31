import React, { useState } from 'react';
import {
    Keyboard,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native';
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
import { PasswordInput } from '../../components/PasswordInput';

export function Login() {
    const theme = useTheme();
    const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container
                behavior='position'
                enabled
            >
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
                        value={email}
                        onChangeText={setEmail}
                    />

                    <PasswordInput
                        iconName='lock'
                        placeholder='Password'
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={setPassword}
                    />
                </Form>

                <Footer>
                    <Button
                        title="Login"
                        onPress={() => { }}
                        enabled
                    />
                    <Button
                        color={theme.colors.background_secondary}
                        title="Criar uma conta gratuita"
                        onPress={() => { }}
                        enabled
                        light
                    />
                </Footer>
            </Container>
        </TouchableWithoutFeedback>
    )
}