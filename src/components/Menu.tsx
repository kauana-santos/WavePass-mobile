import React from 'react'
import {Image, StyleSheet, View} from "react-native";
import { Feather } from "@react-native-vector-icons/feather";
import { Foundation } from "@react-native-vector-icons/foundation";

export default function menu() {
  return (
    <View style={styles.container}>
        <Foundation 
            name="home"
            size={30}
            color="#000"
        />

        <Image style={styles.chat} source={require('@/assets/images/ticket.png')}/>

        <Feather
            name="user"
            size={30}
            color="#000"
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        backgroundColor: "#f5e6c8",
        flexDirection: "row",          
        justifyContent: "space-between", 
        alignItems: "center",          
        paddingHorizontal: 30,         
    },
    chat: {
        width: 55,
        height: 55,
        resizeMode: "contain", 
    }
});