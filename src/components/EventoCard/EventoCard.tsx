import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { fonts } from '@/styles/globalStyles'

export default function EventoCard() {
  return (
    <Pressable style={styles.containerEvento}>
      <View>
        <Image style={styles.eventoImg} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStoifDEIk97WuePRZ4WpOzsZo7QxMDy4xQC7z3_6NQDogYtOo8N6o_-Ek&s=10"}}/>
      </View>
        <View style={styles.conatinerDescricao}>
          <Text style={styles.titulo}>Wicked: A História Não Contada Das Bruxas de Oz</Text>
          <Text style={styles.descricao}>São Paulo</Text>
          <Text style={styles.descricao}>06/01/2027</Text>
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
