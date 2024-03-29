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
  const [loading, setLoading] = useState<boolean>(false);

  const theme = useTheme();
  const { navigate } = useNavigation();

  const { params } = useRoute();
  const { car, dates } = params as { car: CarDTO, dates: Date[] };

  const rentTotal = Number(dates.length * car.price)

  async function handleSchedule() {
    setLoading(true);

    api.post(`/schedules`, {
      id: car.id,
      unavailable_dates: dates
    })
    .then(() => {
      setLoading(false);
      handleNavigate()
    })
    .catch(() => Alert.alert('Não foi possível confirmar o agendamento'))
  }

  function handleNavigate() {
    navigate('Confirmation', {
      nextScreen: 'Home', 
      title: 'Carro alugado!',
      auxiliar: 'Agora você só precisa ir\naté a concessionária da RENTX\npegar o seu automóvel'
    })
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
            <Period>{car.period}</Period>
            <Value>R$ {car.price}</Value>
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
              R$ {car.price} x{dates.length} diárias
            </Math>

            <Total>
              {Number(rentTotal).toLocaleString('pt-BR', { style: "currency", currency: 'BRL' })}
            </Total>
          </Values>
        </Totals>

      </Content>

      <Footer>
        <Button
          onPress={handleSchedule}
          title="Alugar agora"
          color={theme.colors.success}
          loading={loading}
          enabled={!loading}
        />
      </Footer>

    </Container>
  );
}