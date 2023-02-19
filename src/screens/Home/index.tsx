import React, { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { synchronize } from '@nozbe/watermelondb/sync';
import { database } from '../../database';
import NetInfo from '@react-native-community/netinfo';

import Logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { Car } from '../../components/Car';
import { Car as CarModel } from '../../database/models/Car';
import { LoadingCar } from '../../components/LoadingCar';
import {
  Container,
  Header,
  Total,
  CarList
} from './styles';
import { LogBox } from 'react-native';

export function Home() {
  const [cars, setCars] = useState<CarModel[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function handleNavigateDetails(carDetails: CarModel) {
    navigation.navigate('CarCardDetails', { car: carDetails })
  }

  async function offlineSync() {
    console.log("RODANDO OFFLINESYNC")
    await synchronize({
      database,
      pullChanges: async ({ lastPulledAt }) => {
        const response = await api.get(`cars/sync/pull?lastPulledVersion=${lastPulledAt || 0}`)

        const { changes, latestVersion } = response.data;
        console.log("BACKEND PARA APP")
        console.log(changes.cars.updated)

        return { changes, timestamp: latestVersion }
      },
      pushChanges: async ({ changes }) => {
        const user = changes.users;

        console.log("APP PARA BACKEND")
        console.log(user)

        if (user.created.length > 0 || user.updated.length > 0 || user.deleted.length > 0)
          await api.post('/users/sync', user);
      }
    })
  }

  useEffect(() => {
    LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'."])
    let isMounted = true;

    async function fetchCarList() {
      setLoading(true)
      try {
        const carsCollection = database.get<CarModel>('cars');
        const cars = await carsCollection.query().fetch();
        // const { data: cars } = await api.get('/cars');


        if (isMounted)
          setCars(cars)
      } catch (err) {
        console.log(err)
      } finally {
        if (isMounted)
          setLoading(false)
      }
    }

    fetchCarList();

    return () => {
      isMounted = false;
    }
  }, []);

  async function fetchCars() {
    try {
      const carCollection = database.get<CarModel>('cars');
      const cars = await carCollection.query().fetch();

      console.log(cars);
      // const { data: cars } = await api.get<CarDTO[]>('/cars');

      // for await (let car of cars) {
      //   await database.write(async () => {
      //     const carCollection = database.get<CarModel>('cars');
      //     await carCollection.create(newCar => {
      //       newCar.car_id = car.id;
      //       newCar.name = car.name;
      //       newCar.brand = car.brand;
      //       newCar.about = car.about;
      //       newCar.fuel_type = car.fuel_type;
      //       newCar.period = car.period;
      //       newCar.price = car.period;
      //       // newCar.thumbnail = car.photos
      //     });
      //   })
      // }
    } catch (error) {
      const err = error as any;
      console.log(err)
    }
  }

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected === true) {
        offlineSync();
      }
    });

    return () => {
      unsubscribe()
    }
  }, [])

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