
import { View } from "react-native";
import { ReactElement } from "react";
import { Carousel } from "react-native-reanimated-carousel";

interface CarouselComponenteProps<T> {
  data: T[];
  renderItem: (info: { item: T; index: number }) => ReactElement;
  height?: number;
  autoPlay?: boolean;
  loop?: boolean;
}

export default function CarouselComponente<T>({
  data,
  renderItem,
  height = 150,
  autoPlay = true,
  loop = true,
}: CarouselComponenteProps<T>) {

  return (
    <View>
      <Carousel
        data={data}
        renderItem={renderItem}
        style={{ height }}
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
