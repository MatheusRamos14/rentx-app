import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
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
  Date,
  Arrow,
  Separator,
  Totals,
  Values,
  Math,
  Total,
  Footer,
} from './styles';

export function ScheduleDetails() {
  const theme = useTheme();
  const { navigate } = useNavigation();

  function handleNavigate() {
    navigate('Confirmation')
  }

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
          imagesUrl={
            ['https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png']
          }
        />
      </CarImages>

      <Content>
        <Info>
          <Model>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Model>
          <Rent>
            <Period>Ao dia</Period>
            <Value>R$ 580</Value>
          </Rent>
        </Info>

        <Acessories>
          <Accessory
            title="380km/h"
            icon={speedSvg}
          />
          <Accessory
            title="3.2s"
            icon={accelerationSvg}
          />
          <Accessory
            title="800 HP"
            icon={forceSvg}
          />
          <Accessory
            title="Gasolina"
            icon={gasolineSvg}
          />
          <Accessory
            title="Auto"
            icon={exchangeSvg}
          />
          <Accessory
            title="2 pessoas"
            icon={peopleSvg}
          />
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
              <Date>18/06/2022</Date>
            </DateGroup>
            <Arrow
              name="chevron-right"
              color={theme.colors.text_detail}
            />
            <DateGroup>
              <Label>ATÉ</Label>
              <Date>20/06/2022</Date>
            </DateGroup>
          </PeriodContainer>
        </RentPeriod>

        <Separator />

        <Totals>
          <Label>TOTAL</Label>
          <Values>
            <Math>
              R$ 580 x3 diárias
            </Math>

            <Total>
              R$ 2.900
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