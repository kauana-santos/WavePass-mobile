import { ReactNode } from "react";
import { Image, ImageSource, Pressable, StyleSheet, Text, View } from "react-native";
import { fonts } from '@/styles/globalStyles'

interface CardProps{
    icon: any;
    categoryName: string;
    onPress:() => void;
    selecionado?: boolean
}

export default function CategoriaCard({ icon, categoryName, onPress, selecionado }: CardProps) {
  return (
    <Pressable style={[style.containerCategory, selecionado && style.selecionada]} onPress={onPress}>
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
  selecionada: {
    borderColor: "#722F37",
    borderWidth: 3
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
