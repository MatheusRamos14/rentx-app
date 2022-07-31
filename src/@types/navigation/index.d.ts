import { StackScreenProps } from '@react-navigation/stack';

type AppStackRoutes = {
    Home: any;
    CarCardDetails: any;
    Schedule: any;
    ScheduleDetails: any;
    Confirmation: any;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppStackRoutes {}
    }
}