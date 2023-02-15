import React from 'react';
import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';

import {
    Container,
    Header,
    HeaderTop,
    HeaderTitle,
    LogoutButton,
    PhotoContainer,
    Photo,
    PhotoButton,
} from './styles';

export function Profile() {
    const theme = useTheme();

    return (
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
                    <Photo source={{ uri: 'https://www.github.com/MatheusRamos14.png' }}/>

                    <PhotoButton>
                        <Feather
                            name="camera"
                            size={24}
                            color={theme.colors.shape}
                        />
                    </PhotoButton>
                </PhotoContainer>
            </Header>
        </Container>
    )
}