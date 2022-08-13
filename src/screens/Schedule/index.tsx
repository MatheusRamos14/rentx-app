import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

import Arrow from '../../assets/arrow.svg';
import { BackButton } from '../../components/BackButton';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';
import {
    Calendar,
    DateData,
    MarkedDateProps,
    generateInterval
} from '../../components/Calendar';
import {
    Container,
    Header,
    Title,
    Dates,
    DateContainer,
    DateLabel,
    DateValueWrapper,
    DateValue,
    Content,
    Footer,
} from './styles';

interface RentalPeriodProps {
    startFormatted: string;
    endFormatted: string;
}

export function Schedule() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DateData>({} as DateData);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
    const [rentalPeriod, setRentalPeriod] = useState({} as RentalPeriodProps);

    const { params } = useRoute();
    const { car } = params as { car: CarDTO };

    const { navigate } = useNavigation();

    function handleNavigate() {
        if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
            Alert.alert('Escolha um período para alugar.')
        } else {
            navigate('ScheduleDetails', {
                car,
                dates: Object.keys(markedDates)
            })
        }
    }

    function handleChangeDate(date: DateData) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if (start.timestamp > end.timestamp) {
            start = end
            end = start;
        }

        setLastSelectedDate(end);

        const interval = generateInterval(start, end)
        setMarkedDates(interval);

        const firstDate = Object.keys(interval)[0];
        const lastDate = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(lastDate)), 'dd/MM/yyyy') 
        })        

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
                    <DateContainer>
                        <DateLabel>DE</DateLabel>
                        <DateValueWrapper hasValue={!!rentalPeriod.startFormatted}>
                            <DateValue>
                                {rentalPeriod.startFormatted}
                            </DateValue>
                        </DateValueWrapper>
                    </DateContainer>
                    <Arrow />
                    <DateContainer>
                        <DateLabel>ATÉ</DateLabel>
                        <DateValueWrapper hasValue={!!rentalPeriod.endFormatted}>
                            <DateValue>
                                {rentalPeriod.endFormatted}
                            </DateValue>
                        </DateValueWrapper>
                    </DateContainer>
                </Dates>
            </Header>

            <Content>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
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