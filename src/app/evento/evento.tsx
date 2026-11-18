import Header from "@/components/Header/Header";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { fonts } from '@/styles/globalStyles'

interface EventoProps{
  imagem: string,
  titulo: string,
  local: string,
  descricao: string
}

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
        
    </ScrollView>
  )
}

const styles =StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center"
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
