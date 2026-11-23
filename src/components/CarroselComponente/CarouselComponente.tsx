
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { ReactElement } from "react";
import { Carousel } from "react-native-reanimated-carousel";

interface CarouselComponenteProps<T> {
  data: T[];
  renderItem: (info: { item: T; index: number }) => ReactElement;
  height?: number;
  width?: number;
  autoPlay?: boolean;
  loop?: boolean;
}

export default function CarouselComponente<T>({
  data,
  renderItem,
  height = 350,
  width,
  autoPlay ,
  loop = true,
}: CarouselComponenteProps<T>) {

  const { width: screenWidth } = useWindowDimensions();

  const carouselWidth = width ?? screenWidth - 20;

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        style={{
          width: carouselWidth,
          height: height,
        }}
        autoplay={autoPlay}
        autoplayInterval={3000}
        loop={loop}
        animation={{
          type: "timing",
          duration: 5000,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    width: "100%",
    alignItems: "center",
  },
});
