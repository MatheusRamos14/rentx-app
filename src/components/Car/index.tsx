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
    thumbnail: string;
}

interface Props {
    data: CarCardProps,
    handleNavigate: () => void;
}

export function Car({ data, handleNavigate }: Props) {
  return (
    <Container
        onPress={handleNavigate}
    >
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
            source={{ uri: data.thumbnail }}
        />
    </Container>
  );
}