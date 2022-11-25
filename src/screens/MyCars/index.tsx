import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';

import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { LoadingCar } from '../../components/LoadingCar';

import {
    Container,
    Header,
    Title,
    SubTitle,
    Appointments,
    AppointmentsTitle,
    AppointmentsValue,
    CarCardWrapper,
    RentContainer,
    PeriodTitle,
    RentalPeriod,
    RentalValue,
} from './styles';

interface IResponseCarDTO {
    car: CarDTO;
    endDate: string;
    id: number;
    startDate: string;
    user_id: number;
}

export function MyCars() {
    const [cars, setCars] = useState<IResponseCarDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();

    useEffect(() => {
        async function fetchCars() {
            try {
                const { data } = await api.get('/schedules_byuser?user_id=1');

                setCars(data)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCars();
    }, [])

    return (
        <Container>
            <Header>
                <BackButton
                    color="#FFF"
                />
                <Title>
                    Seus agendamentos,{'\n'}
                    estão aqui.
                </Title>
                <SubTitle>
                    Conforto, segurança e praticidade.
                </SubTitle>
            </Header>

            {loading ? <LoadingCar /> :
                <>
                    <Appointments>
                        <AppointmentsTitle>
                            Agendamentos feitos
                        </AppointmentsTitle>
                        <AppointmentsValue>
                            {cars.length}
                        </AppointmentsValue>
                    </Appointments>
                    <FlatList
                        data={cars}
                        renderItem={({ item }) => (
                            <CarCardWrapper>
                                <Car
                                    data={item.car}
                                    handleNavigate={() => { console.log('Fala mano!') }}
                                />
                                <RentContainer>
                                    <PeriodTitle>
                                        PERÍODO
                                    </PeriodTitle>

                                    <RentalPeriod>
                                        <RentalValue>{item.startDate}</RentalValue>

                                        <AntDesign
                                            name="arrowright"
                                            size={14}
                                            color={theme.colors.text_detail}
                                            style={{ marginHorizontal: 10 }}
                                        />

                                        <RentalValue>{item.endDate}</RentalValue>
                                    </RentalPeriod>
                                </RentContainer>
                            </CarCardWrapper>
                        )}
                        keyExtractor={item => String(item.id)}
                        contentContainerStyle={{
                            marginTop: 4,
                            paddingHorizontal: 24,
                        }}
                    />
                </>
            }
        </Container>
    )
}