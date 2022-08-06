import React from 'react';

import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
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
interface Props {
    data: CarDTO,
    handleNavigate: () => void;
}

export function Car({ data, handleNavigate }: Props) {
    const MotorIcon = getAccessoryIcon(data.fuel_type);

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
                        <Price>R$ {data.rent.price}</Price>
                    </Rent>

                    <Type>
                        <MotorIcon />
                    </Type>
                </About>
            </Details>
            <Photo
                source={{ uri: data.thumbnail }}
            />
        </Container>
    );
}