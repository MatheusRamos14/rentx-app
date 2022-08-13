import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
    Calendar as CustomCalendar,
    LocaleConfig,
    DateData,
} from 'react-native-calendars';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

import { generateInterval } from './generateInterval';
import { ptBR } from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps {
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disableTouchEvent?: boolean;
    }
}
interface CalendarProps {
    markedDates: MarkedDateProps;
    onDayPress: (date: DateData) => void;
}

function Calendar({ markedDates, onDayPress }: CalendarProps) {
    const theme = useTheme();

    return (
        <CustomCalendar
            firstDay={1}
            minDate={String(new Date())}
            markingType="period"
            markedDates={markedDates}
            onDayPress={onDayPress}
            renderArrow={(direction) => (
                <Feather
                    name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                    color={theme.colors.text}
                    size={RFValue(24)}
                />
            )}
            theme={{           
                textDayHeaderFontFamily: theme.fonts.primary_500,                
                textDayHeaderFontSize: RFValue(10),
                textDayFontFamily: theme.fonts.primary_400,
                textMonthFontFamily: theme.fonts.secondary_600,
                textMonthFontSize: RFValue(20),
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15
                },
            }}
            headerStyle={{
                backgroundColor: theme.colors.background_secondary,
                borderBottomWidth: 0.5,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10
            }}
        />
    )
}

export {
    Calendar,
    DateData,
    MarkedDateProps,
    generateInterval,
}