import React, { useState } from 'react';
import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import * as ImagePicker from 'expo-image-picker';

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

export function Profile() {
    const theme = useTheme();
    const { user } = useAuth();

    const [option, setOption] = useState<"dataEdit" | "passwordEdit">("dataEdit");
    const [avatar, setAvatar] = useState<string>(user.avatar);

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

                            <LogoutButton>
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
                                    defaultValue={user.name}
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
                                    defaultValue={user.driver_license}
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