import { ReactNode } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface CardProps{
    icon: ReactNode;
    categoryName: string

}

export default function CategoriaCard({ icon, categoryName }: CardProps) {
  return (
    <Pressable style={style.containerCategory}>
      {icon}
      <Text>{categoryName}</Text>
    </Pressable>
  )
}

const style = StyleSheet.create({
  containerCategory:{
    height: 90,
    width: 90,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3F3F3F"
  }
})
