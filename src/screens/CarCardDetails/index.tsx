import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
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
  Description,
  Acessories,
  Footer,
} from './styles';

export function CarCardDetails() {
  const { navigate } = useNavigation();

  function handleNavigate() {
    navigate('Schedule')
  }
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton
          onPress={() => { console.log('opa') }}
        />
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
          <Acessory
            title="380km/h"
            icon={speedSvg}
          />
          <Acessory
            title="3.2s"
            icon={accelerationSvg}
          />
          <Acessory
            title="800 HP"
            icon={forceSvg}
          />
          <Acessory
            title="Gasolina"
            icon={gasolineSvg}
          />
          <Acessory
            title="Auto"
            icon={exchangeSvg}
          />
          <Acessory
            title="2 pessoas"
            icon={peopleSvg}
          />
        </Acessories>

        <Description>
          Este é automóvel desportivo. Surgiu do lendário 
          touro de lide indultado na praça Real 
          Maestranza de Sevilla. É um belíssimo carro 
          para quem gosta de acelerar.
        </Description>
      </Content>

      <Footer>
          <Button
            onPress={handleNavigate}
            title="Escolher período do aluguel"
          />
      </Footer>

    </Container>
  );
}