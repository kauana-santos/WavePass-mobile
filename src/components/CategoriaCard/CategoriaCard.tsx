
import { Image, Pressable, StyleSheet, Text } from "react-native";

interface CardProps {
  icon: any;
  categoryName: string;
}

export default function CategoriaCard({ icon, categoryName }: CardProps) {
  return (
    <Pressable style={styles.containerCategory}>
      {icon && (
        <Image
          source={icon}
          style={styles.categoryImage}
          resizeMode="contain"
        />
      )}

      <Text>{categoryName}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  containerCategory: {
    height: 150,
    width: 130,
    marginHorizontal: 10,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3F3F3F",
  },

  categoryImage: {
    width: 70,
    height: 70,
  },
});
