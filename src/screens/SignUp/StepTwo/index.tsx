import React, { useState } from 'react';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { PasswordInput } from '../../../components/PasswordInput';
import {
    Container,
    Header,
    Steps,
    Title,
    SubTitle,
    Form,
    FormTitle,
    Inputs,
} from './styles';
import { api } from '../../../services/api';

interface Params {
    name: string;
    email: string;
    driverLicense: string;
}

export function SignUpSecondStep() {
    const theme = useTheme();
    const { navigate } = useNavigation();

    const { params } = useRoute();
    const {
        name,
        email,
        driverLicense: driver_license
    } = params as Params;

    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');

    function handleRegister() {
        if (!password || !confirmation)
            Alert.alert('É necessário preencher os dois campos.');

        if (password !== confirmation)
            Alert.alert('As senhas não coincidem.');

        // Registro
        const signUpData = { name, email, password, driver_license }

        api.post('/users', signUpData)
            .then(() => {
                navigate('Confirmation', {
                    nextScreen: 'Login',
                    title: 'Conta criada!'
                })
            })
            .catch(err => {
                Alert.alert("Opa", "Erro inesperado ao tentar efetuar cadastro.")
            })
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButton />

                        <Steps>
                            <Bullet />
                            <Bullet active />
                        </Steps>
                    </Header>

                    <Title>
                        Crie sua {'\n'}
                        conta
                    </Title>
                    <SubTitle>
                        Faça seu cadastro de {'\n'}
                        forma rápida e fácil.
                    </SubTitle>

                    <Form>
                        <FormTitle>2. Senha</FormTitle>

                        <Inputs>
                            <PasswordInput
                                iconName='lock'
                                placeholder='Senha'
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <PasswordInput
                                iconName='lock'
                                placeholder='Repetir senha'
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={confirmation}
                                onChangeText={setConfirmation}
                            />
                        </Inputs>

                        <Button
                            color={theme.colors.success}
                            title="Cadastrar"
                            onPress={handleRegister}
                        />
                    </Form>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}