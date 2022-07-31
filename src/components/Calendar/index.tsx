import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
    Calendar as CustomCalendar,
    LocaleConfig
} from 'react-native-calendars';
import { useTheme } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

LocaleConfig.locales['pt-br'] = {
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
      today: "Hoje"
}
LocaleConfig.defaultLocale = 'pt-br'

export function Calendar() {
    const theme = useTheme();

    return (
        <CustomCalendar
            firstDay={1}
            minDate={String(new Date())}
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