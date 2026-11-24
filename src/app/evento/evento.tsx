import Header from "@/components/Header/Header";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { fonts } from '@/styles/globalStyles'
import CalendarioEvento from "@/components/CalendarioEvento/CalendarioEvento";

interface EventoProps{
  imagem: string,
  titulo: string,
  local: string,
  descricao: string
}

const horariosTeste = {
  '2026-11-25': [
    { id: 1, horario: '14:00', disponivel: true },
    { id: 2, horario: '16:00', disponivel: true },
    { id: 3, horario: '19:00', disponivel: true },
  ],

  '2026-11-26': [
    { id: 4, horario: '15:00', disponivel: true },
    { id: 5, horario: '20:00', disponivel: true },
  ],

  '2026-11-28': [
    { id: 6, horario: '18:00', disponivel: false },
  ],

  '2026-11-30': [
    { id: 7, horario: '13:00', disponivel: true },
  ],
};

export default function Evento() {
  return (
    <ScrollView>
        <Header/>

        <View style={styles.conatinerImg}>
            <Image />
        </View>
        <View style={styles.containerDescricao}>
            <Text style={styles.titulo}>Titulo</Text>
            <Text>Local</Text>
            <Text>Descrição</Text>
            <Text>Texto de descrição</Text>
        </View>
        <View>
          <CalendarioEvento horariosPorData={horariosTeste}/>
        </View>
        
    </ScrollView>
  )
}

const styles =StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10
  },
  conatinerImg:{
    borderWidth: 1,
    height: 290,
    marginVertical: 20,
    marginHorizontal:10
  },
  containerDescricao:{
    marginHorizontal: 15
  },
  titulo:{
    fontSize: 20,
    fontFamily: fonts.dmSansMedium
  },
  local:{
    
  }
})
