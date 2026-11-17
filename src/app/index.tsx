
import CategoriaCard from "@/components/CategoriaCard/CategoriaCard";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import MarqueeComponente from "@/components/Marquee/MarqueeComponente";
import CarouselComponente from "@/components/CarroselComponente/CarouselComponente";
import EventoCard from "@/components/EventoCard/EventoCard";
import { fonts } from '@/styles/globalStyles'
import Header from "@/components/Header/Header";
import Menu from '@/components/Menu'


const data = ["Wicked: A História Não Contada Das Bruxas de Oz", "item2", "item3"];

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Header/>

          <MarqueeComponente/>

          <CarouselComponente 
            data={data}
            height={250}
            autoPlay
            renderItem={({ item }) => (
              <View style={styles.containerCarrosel}>
                
                <Image style={styles.CarroselImg} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStoifDEIk97WuePRZ4WpOzsZo7QxMDy4xQC7z3_6NQDogYtOo8N6o_-Ek&s=10"}}/>

                <Text style={styles.carroselText}>{item}</Text>

                <Text style={styles.carroselText}>Local . Horário . Data</Text>

              </View>
            )}
          />

          <View>
            <Text style={styles.titulo}>Categorias</Text>
            <View style={styles.containerCategorias}>
              <CategoriaCard categoryName="Festas" icon={<FontAwesome6
                name="champagne-glasses"
                size={30}
                color="#000"
                iconStyle="solid"
              />}/>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.titulo}>Eventos</Text>

          <View style={styles.containerEventos}>
            <EventoCard/>
            <EventoCard/>
          </View>
        </View>
      </ScrollView>
      <Menu/>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  carrosel:{
    marginVertical:20
  },
  containerCarrosel: {
    height: 350,
    width: "100%",
    textAlign: "center"
  },
  CarroselImg: {
    height: 190,
    width: "100%",
    resizeMode: "cover",
  },
  carroselText:{
    textAlign: "center",
    fontFamily: fonts.dmSans,
    fontSize: 15,
    marginVertical: 5
  },
  containerCategorias:{
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10
  },
  containerEventos:{
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 10
  },
  titulo:{
    fontFamily: fonts.dmSansMedium,
    fontSize: 20,
    marginLeft: 15

  }
})
