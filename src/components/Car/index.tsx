import React from 'react';

import GasolineSVG from '../../assets/gasoline.svg'
import { 
    Container,
    Details,
    Photo,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
} from './styles';

interface CarCardProps {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: string;
    }
    photo: string;
}

interface Props {
    data: CarCardProps
}

export function Car({ data }: Props) {
  return (
    <Container>
        <Details>
            <Brand>{data.brand}</Brand>
            <Name>{data.name}</Name>

            <About>
                <Rent>
                    <Period>{data.rent.period}</Period>
                    <Price>{data.rent.price}</Price>
                </Rent>

                <Type>
                    <GasolineSVG />
                </Type>
            </About>
        </Details>
        <Photo
            source={{ uri: data.photo }}
        />
    </Container>
  );
}