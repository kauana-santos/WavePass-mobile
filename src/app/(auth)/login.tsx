import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function login() {
  return (
    <View>
        <View>
            <Image/>
        </View>

        <View>
            <View>
                <Text>E-mail</Text>
                <TextInput placeholder="Digite seu e-mail"/>
            </View>
            <View>
                <Text>Senha</Text>
                <TextInput placeholder="Senha"/>
                <Text>Esqueceu a senha?</Text>
            </View>

            <View>
                <TouchableOpacity>Entrar</TouchableOpacity>
                <Text>Não tem conta? Cadastre-se</Text>
            </View>
        </View>
    </View>
  )
}
