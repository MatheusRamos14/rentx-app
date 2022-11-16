import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  interpolate,
  useAnimatedStyle,
  Extrapolate,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native'

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
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { car } = params as { car: CarDTO };

  const scrollAnimation = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    console.log(event.contentOffset.y);
    scrollAnimation.value = event.contentOffset.y
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollAnimation.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      )
    }
  })

  const CarStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollAnimation.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  })

  function handleNavigate() {
    navigate('Schedule', { car, })
  }
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Animated.View style={[
        headerStyleAnimation,
        styles.header,
        { backgroundColor: theme.colors.background_secondary }
      ]}>
        <Header>
          <BackButton />
        </Header>

        <Animated.View style={CarStyleAnimation}>
          <CarImages>
            <ImageSlider
              imagesUrl={car.photos}
            />
          </CarImages>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160,
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
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

        <Description>
          {car.about}
        </Description>
      </Animated.ScrollView>

      <Footer>
        <Button
          onPress={handleNavigate}
          title="Escolher período do aluguel"
        />
      </Footer>

    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },
})