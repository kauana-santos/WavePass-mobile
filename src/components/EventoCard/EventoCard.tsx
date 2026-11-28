import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { fonts } from '@/styles/globalStyles'

interface EventoCardProps {
  imagem: string;
  titulo: string;
  local: string;
  data: string;
  onPress?: () => void;
}

 

export default function EventoCard({imagem, titulo, local, data, onPress}: EventoCardProps) {
  return (
    <Pressable style={styles.containerEvento} onPress={onPress}>
      <View>
        <Image style={styles.eventoImg} source={{uri: imagem}}/>
      </View>
        <View style={styles.conatinerDescricao}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.descricao}>{local}</Text>
          <Text style={styles.descricao}>{data}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  containerEvento:{
    borderWidth: 1,
    borderRightWidth: 3,
    borderRadius: 2,
    width:320,
    height:280,
    marginVertical: 10,
  },
  eventoImg: {
    height: 160,
    width: "100%",
    resizeMode: "cover",
  },
  conatinerDescricao:{
    marginVertical: 5,
    marginHorizontal:10
  },
  titulo:{
    fontFamily: fonts.dmSansMedium,
    fontSize: 15
  },
  descricao:{
    fontFamily: fonts.dmSans,
    fontSize: 14,
    marginVertical:4
  }
  
})
