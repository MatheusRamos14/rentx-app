import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

import Logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Car } from '../../components/Car';
import { LoadingCar } from '../../components/LoadingCar';
import {
  Container,
  Header,
  Total,
  CarList,
  ButtonContainer,
  Button,
  ButtonIcon,
} from './styles';

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function handleNavigateDetails(carDetails: CarDTO) {
    navigation.navigate('CarCardDetails', { car: carDetails })
  }

  function handleNavigateMyCars() {
    navigation.navigate('MyCars')
  }

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  const handleGestureEvent = useAnimatedGestureHandler({
    onActive(event, ctx: any) {
      positionX.value = event.translationX;
      positionY.value = event.translationY;
    },
    onEnd() {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    }
  })

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: positionX.value },
        { translateY: positionY.value }
      ]
    }
  })

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
      <PanGestureHandler onGestureEvent={handleGestureEvent}>
        <Animated.View
          style={[styles.button, buttonAnimatedStyle]}
        >
          <ButtonContainer>
            <Button onPress={handleNavigateMyCars}>
              <ButtonIcon />
            </Button>
          </ButtonContainer>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    right: 0,
  }
})