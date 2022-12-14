import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

import theme from './src/styles/theme';
import { StackRoutes } from './src/routes/stack.routes';

export function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  useEffect(() => {
    async function extendSplash() {
      await preventAutoHideAsync();
    }
    extendSplash();
  }, [])

  const onLayoutRootView = useCallback(async ()  => {
    if (fontsLoaded)
      await hideAsync();
  }, [fontsLoaded])
  
  if (!fontsLoaded)
    return null;

  return (
    <GestureHandlerRootView
      style={{ flex: 1, }}
      onLayout={onLayoutRootView}
    >
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <NavigationContainer>
          <StackRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}