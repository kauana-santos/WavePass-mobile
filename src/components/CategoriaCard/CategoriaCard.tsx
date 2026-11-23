import { ReactNode } from "react";
import { Image, ImageSource, Pressable, StyleSheet, Text, View } from "react-native";
import { fonts } from '@/styles/globalStyles'

interface CardProps{
    icon: any;
    categoryName: string
}

export default function CategoriaCard({ icon, categoryName }: CardProps) {
  return (
    <Pressable style={style.containerCategory}>
      <Image style={style.iconImg} source={icon}/>
      <Text style={style.texto}>{categoryName}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  containerCategory:{
    height: 150,
    width: 130,
    marginHorizontal:10,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3F3F3F"
  },
  iconImg:{
    height:100,
    width:100
  },
  texto:{
    fontFamily: fonts.caprasimo,
    fontSize: 19
  }
})
