import React from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from 'styled-components/native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
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
import { PasswordInput } from '../../../components/PasswordInput';

export function SignUpSecondStep() {
    const theme = useTheme();

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
                            />
                            <PasswordInput
                                iconName='lock'
                                placeholder='Repetir senha'
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                        </Inputs>

                        <Button
                            color={theme.colors.success}
                            title="Cadastrar"
                            onPress={() => { }}
                        />
                    </Form>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}