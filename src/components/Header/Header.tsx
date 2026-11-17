import { View, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.containerImg}>
        <Image style={styles.logo} source={require('@/assets/logo.png')}/>
    </View>
  )
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
})
