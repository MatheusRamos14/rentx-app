import React, { useState, useEffect } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Car } from '../../components/Car';
import { LoadingCar } from '../../components/LoadingCar';
import {
  Container,
  Header,
  Total,
  CarList
} from './styles';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function handleNavigateDetails(carDetails: CarDTO) {
    navigation.navigate('CarCardDetails', { car: carDetails })
  }  

  useEffect(() => {
    async function fetchCarList() {
      setLoading(true)
      try {
        const { data } = await api.get('/cars');

        setCars(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCarList();
  }, []);

  return (
    <Container>
      <Header>
        <Logo
          width={RFValue(108)}
          height={RFValue(12)}
        />
        {
          !loading &&
          <Total>
            Total de {cars.length} carros
          </Total>
        }
      </Header>

      {loading ? <LoadingCar /> : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Car
              data={item}
              handleNavigate={() => handleNavigateDetails(item)}
            />
          )}
        />
      )}
    </Container>
  );
}