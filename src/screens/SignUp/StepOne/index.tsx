import React from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Input } from '../../../components/Input';
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

export function SignUpFirstStep() {
    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <BackButton />

                        <Steps>
                            <Bullet active />
                            <Bullet />
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
                        <FormTitle>1. Dados</FormTitle>

                        <Inputs>
                            <Input placeholder='Nome' iconName='user' />
                            <Input placeholder='E-mail' iconName='mail' />
                            <Input placeholder='CNH' iconName='credit-card' />
                        </Inputs>

                        <Button
                            title="Próximo"
                            onPress={() => { }}
                        />
                    </Form>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}