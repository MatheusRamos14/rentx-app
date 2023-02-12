import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";

import { AppStackRoutes } from "./app.stack.routes";
import { MyCars } from "../screens/MyCars";
import { Home } from "../screens/Home";

import HomeSVG from '../assets/home.svg';
import PeopleSVG from '../assets/people.svg';
import CarSVG from '../assets/car.svg';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: theme.colors.text_detail,
                tabBarActiveTintColor: theme.colors.main,
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 78,
                    backgroundColor: theme.colors.background_primary
                }
            }}
        >
            <Screen
                name="Home" component={AppStackRoutes}
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeSVG width={24} height={24} fill={color} />
                    )
                }}
            />
            <Screen
                name="Profile" component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <PeopleSVG width={24} height={24} fill={color} />
                    )
                }}
            />
            <Screen
                name="MyCars" component={MyCars}
                options={{
                    tabBarIcon: ({ color }) => (
                        <CarSVG width={24} height={24} fill={color} />
                    )
                }}
            />
        </Navigator>
    )
}