import { Text, View, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import { Carousel} from "react-native-reanimated-carousel"

const data = ["item1", "item2", "item3"]

export default function Index() {
  const {width} = useWindowDimensions();

  return (
    <ScrollView >
      <View style={styles.container}>
        <Text>Inicio</Text>

        <GestureHandlerRootView>
          <View>
            <Carousel loop autoplay autoplayInterval={3000} autoplayDirection="forward" style={{ width: 320, height: 50 }} data={data} renderItem={({item, index}) => (
              <View
                style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: index % 2 ? "#DCE7F7" : "#F5E7D3",
              }}
              > <Text>{item}</Text></View>
            )}/>
          </View>
        </GestureHandlerRootView>
      </View>
      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
