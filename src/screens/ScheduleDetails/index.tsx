import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { RentalPeriodProps } from '../Schedule';
import {
  Container,
  Header,
  CarImages,
  Content,
  Info,
  Model,
  Brand,
  Name,
  Rent,
  Period,
  Value,
  Acessories,
  RentPeriod,
  CalendarWrapper,
  CalendarIcon,
  PeriodContainer,
  DateGroup,
  Label,
  DateValue,
  Arrow,
  Separator,
  Totals,
  Values,
  Math,
  Total,
  Footer,
} from './styles';

export function ScheduleDetails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps)

  const theme = useTheme();
  const { navigate } = useNavigation();

  const { params } = useRoute();
  const { car, dates } = params as { car: CarDTO, dates: Date[] };

  const rentTotal = Number(dates.length * car.rent.price)

  async function handleSchedule() {
    const scheduleByCar = await api.get(`/schedules/${car.id}`)

    const unavailable_dates = [
      ...scheduleByCar.data.unavailable_dates,
      ...dates
    ]

    api.put(`/schedules/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
    .then(() => handleNavigate())
    .catch(() => Alert.alert('Não foi possível confirmar o agendamento'))
  }

  function handleNavigate() {
    navigate('Confirmation')
  }

  useEffect(() => {
    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
    })
  }, [])

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={car.photos}
        />
      </CarImages>

      <Content>
        <Info>
          <Model>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Model>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Value>R$ {car.rent.price}</Value>
          </Rent>
        </Info>

        <Acessories>
          {car.accessories.map(item => (
            <Accessory
              key={item.type}
              title={item.name}
              icon={getAccessoryIcon(item.type)}
            />
          ))}
        </Acessories>

        <RentPeriod>
          <CalendarWrapper>
            <CalendarIcon
              name="calendar"
              color={theme.colors.shape}
            />
          </CalendarWrapper>

          <PeriodContainer>
            <DateGroup>
              <Label>DE</Label>
              <DateValue>{rentalPeriod.startFormatted}</DateValue>
            </DateGroup>
            <Arrow
              name="chevron-right"
              color={theme.colors.text_detail}
            />
            <DateGroup>
              <Label>ATÉ</Label>
              <DateValue>{rentalPeriod.endFormatted}</DateValue>
            </DateGroup>
          </PeriodContainer>
        </RentPeriod>

        <Separator />

        <Totals>
          <Label>TOTAL</Label>
          <Values>
            <Math>
              R$ {car.rent.price} x{dates.length} diárias
            </Math>

            <Total>
              {Number(rentTotal).toLocaleString('pt-BR', { style: "currency", currency: 'BRL' })}
            </Total>
          </Values>
        </Totals>

      </Content>

      <Footer>
        <Button
          onPress={handleNavigate}
          title="Alugar agora"
          color={theme.colors.success}
        />
      </Footer>

    </Container>
  );
}