import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
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
  Description,
  Accessories,
  Footer,
} from './styles';

export function CarCardDetails() {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { car } = params as { car: CarDTO };

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

        <Accessories>
          {car.accessories.map(item => (
            <Accessory
              key={item.type}
              icon={getAccessoryIcon(item.type)}
              title={item.name}
            />
          ))}
        </Accessories>

        <Description>{car.about}</Description>
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