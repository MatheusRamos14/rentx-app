import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { CarCardDetails } from "../screens/CarCardDetails";
import { Schedule } from "../screens/Schedule";
import { ScheduleDetails } from "../screens/ScheduleDetails";
import { Confirmation } from "../screens/Confirmation";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen name="Splash" component={Splash} />
            <Screen name="Home" component={Home} />
            <Screen name="CarCardDetails" component={CarCardDetails} />
            <Screen name="Schedule" component={Schedule} />
            <Screen name="ScheduleDetails" component={ScheduleDetails} />
            <Screen name="Confirmation" component={Confirmation} />
            <Screen name="MyCars" component={MyCars} />
        </Navigator>
    )
}