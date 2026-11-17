
import CategoriaCard from "@/components/CategoriaCard/CategoriaCard";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import MarqueeComponente from "@/components/Marquee/MarqueeComponente";
import CarouselComponente from "@/components/CarroselComponente/CarouselComponente";
import EventoCard from "@/components/EventoCard/EventoCard";


const data = ["Wicked: A História Não Contada Das Bruxas de Oz", "item2", "item3"];

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <View style={styles.containerImg}>
            <Image style={styles.logo} source={require('@/assets/logo.png')}/>
          </View>

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
            <Text>Categorias</Text>
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
          <Text>Eventos</Text>


          <View style={styles.containerEventos}>
            <EventoCard/>
            <EventoCard/>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  containerImg:{
    height:60,
    backgroundColor: "#F5E6C8",
    alignItems: "center",
    justifyContent: "center"
  },
  logo:{
    width: 160,
    height: 70,
    resizeMode: "contain",
  },
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
    textAlign: "center"
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
  }
})
