import React, { useState } from 'react';
import {
    Alert, 
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [driverLicense, setDriverLicense] = useState('');

    async function handleAdvance() {
        try {
            const data = { name, email, driverLicense };
            const schema = Yup.object({
                name: Yup.string().required('O campo Nome é obrigatório.'),
                email: Yup.string().required('O campo E-mail é obrigatório.').email('Por favor, insira um e-mail válido.'),
                driverLicense: Yup.string().required('O campo CNH é obrigatório.')
            });

            await schema.validate(data)

            navigate('SignUpSecondStep', data);
        } catch (error) {
            if (error instanceof Yup.ValidationError)
                Alert.alert(error.message);
            else
                console.log(error);
        }
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
                                value={name}
                                onChangeText={setName}
                            />
                            <Input
                                placeholder='E-mail'
                                iconName='mail'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                autoCorrect={false}
                                value={email}
                                onChangeText={setEmail}
                            />
                            <Input
                                placeholder='CNH'
                                iconName='credit-card'
                                keyboardType='numeric'
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={driverLicense}
                                onChangeText={setDriverLicense}
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