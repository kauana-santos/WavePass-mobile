import { Link } from "expo-router";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function singup() {
  return (
    <View style={style.container}>
        <View style={style.containerImage}>
            <Image source={require('@/assets/logo.png')}/>
        </View>

        <View style={style.containerForm}>
            <View style={style.inputContainer}>
                <Text style={style.formLabel}>E-mail</Text>
                <TextInput style={style.formInput} placeholder="Digite seu e-mail"/>
            </View>

            <View style={style.inputContainer}>
                <Text style={style.formLabel}>Senha</Text>
                <TextInput style={style.formInput} placeholder="Senha"/>
            </View>

            <View style={style.inputContainer}>
                <Text style={style.formLabel}>Confirme a senha</Text>
                <TextInput style={style.formInput} placeholder="Confirmar senha"/>
            </View>
        </View>

        <View style={style.containerBtn}>
            <TouchableOpacity style={style.btn}>
                <Text style={style.btnText}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={style.textSingup}>Já tem conta? <Link href="/login">Faça login</Link></Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F5E6C8",
        alignItems: "center",
        justifyContent:"center"
        
    },
    containerImage:{
        height:130
    },
    containerForm:{
        marginHorizontal: 10,
        marginVertical:20,
        padding: 5
    },
    inputContainer:{
        marginVertical: 10
    },
    formLabel:{
        fontSize: 16,
        fontWeight: "600"
    },
    formInput:{
        width: 312,
        backgroundColor: "#FFFAFA",
        borderWidth: 1,
        borderColor: "#3F3F3F",
        paddingVertical: 10,
        paddingHorizontal:9,
        marginTop: 5,
        borderRadius: 2
    },
    containerBtn:{
        alignItems: "center",
    },
    btn:{
        backgroundColor: "#722F37",
        width: 290,
        paddingVertical: 9,
        borderWidth: 1,
        borderColor: "#3F3F3F",
        borderRadius: 2
    },
    
    btnText:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center"
    },
    textSingup:{
        marginTop: 6,
        fontSize: 14
        
    }
    

    

})