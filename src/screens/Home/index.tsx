import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import {
  Container,
  Header,
  Total,
  CarList,
} from './styles';

export function Home() {
  const navigation = useNavigation();

  const carCard1 = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 'R$ 120'
    },
    thumbnail: 'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png',
  }

  const carCard2 = {
    brand: 'Porsche',
    name: 'Panamera',
    rent: {
      period: 'Ao dia',
      price: 'R$ 340'
    },
    thumbnail: 'http://assets.stickpng.com/images/580b585b2edbce24c47b2cae.png'
  }

  function handleNavigate() {
    navigation.navigate('CarCardDetails')
  }

  return (
    <Container>
      <Header>
        <Logo
          width={RFValue(108)}
          height={RFValue(12)}
        />
        <Total>
          Total de 12 carros
        </Total>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6,]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => (
          <Car
            data={carCard1}
            handleNavigate={handleNavigate}
          />
        )}
      />
    </Container>
  );
}
