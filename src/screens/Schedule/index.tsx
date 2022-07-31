import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Arrow from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import {
    Container,
    Header,
    Title,
    Dates,
    Date,
    DateLabel,
    DateValueWrapper,
    DateValue,
    Content,
    Footer,
} from './styles';

export function Schedule() {
    const { navigate } = useNavigation();

    function handleNavigate() {
        navigate('ScheduleDetails')
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <Header>
                <BackButton
                    color="#FFF"
                />
                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel {'\n'}
                </Title>

                <Dates>
                    <Date>
                        <DateLabel>DE</DateLabel>
                        <DateValueWrapper hasValue={false}>
                            <DateValue>
                                
                            </DateValue>
                        </DateValueWrapper>
                    </Date>
                    <Arrow />
                    <Date>
                        <DateLabel>ATÉ</DateLabel>
                        <DateValueWrapper hasValue={false}>
                            <DateValue>
                                
                            </DateValue>
                        </DateValueWrapper>
                    </Date>
                </Dates>
            </Header>

            <Content>
                <Calendar />
            </Content>

            <Footer>
                <Button
                    onPress={handleNavigate}
                    title='Confirmar'
                />
            </Footer>
        </Container>
    )
}