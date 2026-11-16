import { Background } from "expo-router/build/react-navigation/index.js";
import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function login() {
  return (
    <View style={styles.container}>
        <View style={styles.containerImage}>
            <Image source={require('@/assets/logo.png')}/>
        </View>

        <View style={styles.form}>
            <View style={styles.input}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.formInput} placeholder="Digite seu e-mail"/>
            </View>
            <View style={styles.input}>
                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.formInput} placeholder="Senha"/>
                <Text style={styles.senha}>Esqueceu a senha?</Text>
            </View>

            <View style={styles.input}>
                <Pressable style={styles.btnEntrar}>
                    <Text style={styles.btnTexto}>Entrar</Text>
                </Pressable>
                <Text style={styles.textConta}>Não tem conta? Cadastre-se</Text>
                
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5e6c8",
        alignItems:"center",
        justifyContent:"center"
    },
    containerImage: {
        height: 130,
    },
    form: {
        marginHorizontal: 10,
        marginVertical: 20,
        padding: 5
    },
    input: {
       marginVertical: 10,
       flexDirection: "column"
    },  
    label: {
        fontSize: 16,
        fontWeight: "600"
    },
    formInput: {
        width: 312,
        backgroundColor: "#FFFAFA",
        borderColor: "#3f3f3f",
        paddingHorizontal: 9,
        paddingVertical: 10,
        marginTop: 5,
        borderRadius: 2,
        borderWidth: 1
    },
    senha: {
        padding: 2,
        marginLeft: 194
    },
    btnEntrar: {
        width: 290,
        backgroundColor: "#722f37",
        paddingVertical: 9,
        alignItems: "center",
        borderRadius: 2,
        marginLeft: 13,
        borderColor: "#3f3f3f",
    },
    btnTexto: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "500",
    },
    textConta: {
        marginTop: 4,
        fontSize:14,
        textAlign: "center"
    }

})
