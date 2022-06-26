import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import {
  Container,
  Header,
  Total,
  Main,
} from './styles';

export function Home() {
  const carCard1 = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 'R$ 120'
    },
    photo: 'https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png',
  }

  const carCard2 = {
    brand: 'Porsche',
    name: 'Panamera',
    rent: {
      period: 'Ao dia',
      price: 'R$ 340'
    },
    photo: 'http://assets.stickpng.com/images/580b585b2edbce24c47b2cae.png'
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
      <Main>
        <Car
          data={carCard1}
        />
        <Car
          data={carCard2}
        />
      </Main>
    </Container>
  );
}
