import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Confirmation } from "../screens/Confirmation";
import { Splash } from "../screens/Splash";
import { Login } from "../screens/Login";
import { SignUpFirstStep } from "../screens/SignUp/StepOne";
import { SignUpSecondStep } from "../screens/SignUp/StepTwo";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            <Screen name="Splash" component={Splash} />
            <Screen name="Login" component={Login} />
            <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
            <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
            <Screen name="Confirmation" component={Confirmation} />
        </Navigator>
    )
}