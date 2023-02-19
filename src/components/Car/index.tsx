import React from 'react';

import { Car as CarModel } from '../../database/models/Car';
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
    data: CarModel,
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
                        <Period>{data.period}</Period>
                        <Price>R$ {data.price}</Price>
                    </Rent>

                    <Type>
                        <MotorIcon />
                    </Type>
                </About>
            </Details>
            {!!data.thumbnail && <Photo
                source={{ uri: data.thumbnail }}
            />}
        </Container>
    );
}