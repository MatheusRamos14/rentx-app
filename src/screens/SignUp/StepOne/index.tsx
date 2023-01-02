import React from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
    const { navigate } = useNavigation();

    function handleAdvance() {
        navigate('SignUpSecondStep');
    }

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
                            <Input
                                placeholder='Nome'
                                iconName='user'
                                autoCapitalize='sentences'
                                autoCorrect={false}
                            />
                            <Input
                                placeholder='E-mail'
                                iconName='mail'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                autoCorrect={false}
                            />
                            <Input
                                placeholder='CNH'
                                iconName='credit-card'
                                keyboardType='numeric'
                                autoCapitalize='none'
                                autoCorrect={false}
                            />
                        </Inputs>

                        <Button
                            title="Próximo"
                            onPress={handleAdvance}
                        />
                    </Form>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}