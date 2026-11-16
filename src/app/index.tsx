
import CarouselComponente from "@/components/CarouselComponente";
import { Text, View, ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const data = ["item1", "item2", "item3"];

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <View>
            <Text>Logo</Text>
          </View>
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

          <Text>Carrossel 2</Text>

          <CarouselComponente
            data={data}
            height={200}
            renderItem={({ item }) => (
              <View>
                <Text>{item}</Text>
              </View>
            )}
          />
          
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
