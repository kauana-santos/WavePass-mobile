
import CarouselComponente from "@/components/CarouselComponente";
import CategoriaCard from "@/components/CategoriaCard/CategoriaCard";
import { Text, View, ScrollView, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";
import MarqueeComponente from "@/components/Marquee/MarqueeComponente";


const data = ["item1", "item2", "item3"];

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <View>
            <Image source={require('@/assets/logo.png')}/>
          </View>

          <MarqueeComponente/>

          <CarouselComponente
            data={data}
            height={100}
            autoPlay
            renderItem={({ item }) => (
              <View>
                <Text>{item}</Text>
              </View>
            )}
          />

          <View>
            <Text>Categorias</Text>
            <CategoriaCard categoryName="Festas" icon={<FontAwesome6
              name="champagne-glasses"
              size={30}
              color="#000"
              iconStyle="solid"
            />}/>
          </View>

        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
