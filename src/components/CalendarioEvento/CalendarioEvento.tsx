
import { useState, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

interface Horario {
  id: number;
  horario: string;
  disponivel: boolean;
}

interface Props {
  horariosPorData: Record<string, Horario[]>;
}

// Configuração do calendário em português
LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],

  monthNamesShort: [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ],

  dayNames: [
    'Domingo', 'Segunda-feira', 'Terça-feira',
    'Quarta-feira', 'Quinta-feira', 'Sexta-feira',
    'Sábado'
  ],

  dayNamesShort: [
    'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'
  ],

  today: 'Hoje'
};

LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarioEvento({ horariosPorData }: Props) {

  const [dataSelecionada, setDataSelecionada] = useState('');

  // Marca os dias que possuem horários disponíveis
  const datasMarcadas = useMemo(() => {
    const marcacoes: Record<string, any> = {};

    Object.entries(horariosPorData ?? {}).forEach(([data, horarios]) => {
      if (horarios.some(h => h.disponivel)) {
        marcacoes[data] = {
          marked: true,
          dotColor: '#722F37',
        };
      }
    });

    return marcacoes;
  }, [horariosPorData]);

  // Permite selecionar apenas uma data
  const marcacoes = {
    ...datasMarcadas,

    ...(dataSelecionada
      ? {
          [dataSelecionada]: {
            ...datasMarcadas[dataSelecionada],
            selected: true,
            selectedColor: '#722F37',
            selectedTextColor: '#FFFFFF',
          }
        }
      : {})
  };

  return (
    <View style={styles.container}>

      <Calendar
        firstDay={0}
        hideExtraDays
        enableSwipeMonths
        markedDates={marcacoes}

        onDayPress={(day) => {
          setDataSelecionada(day.dateString);
        }}

        theme={{
          textDayHeaderFontSize: 11,
          textDayFontSize: 13,
          textMonthFontSize: 15,
          textMonthFontWeight: 'bold',
          arrowColor: '#722F37',
          selectedDayBackgroundColor: '#722F37',
          selectedDayTextColor: '#FFFFFF',
          todayTextColor: '#722F37',
          dayTextColor: '#333333',
          textDisabledColor: '#CCCCCC',
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
  },
});
