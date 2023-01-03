import { StackScreenProps } from '@react-navigation/stack';

 type ConfirmationData = {
    title: string;
    auxiliar?: string;
    nextScreen: keyof AppStackRoutes;
}

type FirstStepData = {
    name: string;
    email: string;
    driverLicense: string;
}

type AppStackRoutes = {
    Home: any;
    CarCardDetails: any;
    Schedule: any;
    ScheduleDetails: any;
    Confirmation: ConfirmationData;
    MyCars: any;
    SignUpFirstStep: any;
    SignUpSecondStep: FirstStepData;
    Login: any;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppStackRoutes {}
    }
}