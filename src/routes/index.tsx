import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { LoadingCar } from "../components/LoadingCar";
import { useAuth } from "../hooks/auth";
import { AppTabRoutes } from "./app.tab.routes";
import { AuthRoutes } from "./auth.routes";

export function AppRoutes() {
    const { user, loading } = useAuth();

    return !loading ? <LoadingCar /> :
        <NavigationContainer>
            {user.id ? <AppTabRoutes /> : <AuthRoutes />}
        </NavigationContainer>
}