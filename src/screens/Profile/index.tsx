import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback 
} from 'react-native';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import {
    Container,
    Header,
    HeaderTop,
    HeaderTitle,
    LogoutButton,
    PhotoContainer,
    Photo,
    PhotoButton,
    Content,
    Options,
    Option,
    OptionTitle,
    Section,
} from './styles';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';

export function Profile() {
    const theme = useTheme();
    const { user, signOut, updateUser } = useAuth();

    const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");
    const [avatar, setAvatar] = useState<string>(user.avatar);

    const [name, setName] = useState(user.name);
    const [driverLicense, setDriverLicense] = useState(user.driver_license);

    function handleChangeOption(option: "dataEdit" | "passwordEdit") {
        setOption(option)
    }

    async function handleChangeAvatar() {
        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 4],
            quality: 1
        })

        if (result.cancelled) return;

        setAvatar(result.uri);
    }

    async function handleUserUpdate() {
        try {
            const schema = Yup.object({
                name: Yup.string().required("O campo nome é obrigatório"),
                driverLicense: Yup.string().required("O campo CNH é obrigatório")
            })
            
            const data = { name, driverLicense };
            await schema.validate(data);

            await updateUser({
                id: user.id,
                avatar,
                driver_license: driverLicense,
                email: user.email,
                name,
                token: user.token
            });

            Alert.alert("Perfil atualizado!");
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Opa', error.message);
            } else {
                const err = error as any;
                console.log(err);
                Alert.alert('Não foi possível atualizar o perfil');
            }
        }
    }

    async function handleLogout() {
        Alert.alert(
            "Tem certeza?",
            "Se sair, será preciso conexão com a internet para efetuar login novamente.",
            [
                {
                    text: "Cancelar",
                    onPress: () => {}
                },
                {
                    text: "Sair",
                    onPress: async () => await signOut()
                }
            ]
        )
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <HeaderTop>
                            <BackButton color={theme.colors.shape} />

                            <HeaderTitle>
                                Editar Perfil
                            </HeaderTitle>

                            <LogoutButton onPress={handleLogout}>
                                <Feather
                                    name="power"
                                    size={24}
                                    color={theme.colors.shape}
                                />
                            </LogoutButton>
                        </HeaderTop>

                        <PhotoContainer>
                            {!!avatar && <Photo source={{ uri: avatar }} />}

                            <PhotoButton onPress={handleChangeAvatar}>
                                <Feather
                                    name="camera"
                                    size={24}
                                    color={theme.colors.shape}
                                />
                            </PhotoButton>
                        </PhotoContainer>
                    </Header>

                    <Content style={{ marginBottom: useBottomTabBarHeight() }}>
                        <Options>
                            <Option
                                active={option === 'dataEdit'}
                                onPress={() => handleChangeOption("dataEdit")}
                            >
                                <OptionTitle active={option === 'dataEdit'}>
                                    Dados
                                </OptionTitle>
                            </Option>
                            <Option
                                active={option === 'passwordEdit'}
                                onPress={() => handleChangeOption("passwordEdit")}
                            >
                                <OptionTitle active={option === 'passwordEdit'}>
                                    Trocar Senha
                                </OptionTitle>
                            </Option>
                        </Options>

                        {option === 'dataEdit' ? (
                            <Section>
                                <Input
                                    iconName='user'
                                    placeholder='Nome'
                                    defaultValue={name}
                                    value={name}
                                    onChangeText={setName}
                                />
                                <Input
                                    iconName='mail'
                                    editable={false}
                                    defaultValue={user.email}
                                />
                                <Input
                                    iconName='credit-card'
                                    placeholder='CNH'
                                    keyboardType="numeric"
                                    defaultValue={driverLicense}
                                    value={driverLicense}
                                    onChangeText={setDriverLicense}
                                />         

                                <Button
                                    title="Salvar alterações"
                                    onPress={handleUserUpdate}
                                />                       
                            </Section>
                        ) : (
                            <Section>
                                <PasswordInput
                                    placeholder='Senha atual'
                                />
                                <PasswordInput
                                    placeholder='Nova senha'
                                />
                                <PasswordInput
                                    placeholder='Repetir senha'
                                />
                            </Section>
                        )}
                        
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}