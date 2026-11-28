
import { Link, useRouter } from "expo-router";
import {Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { fonts } from "@/styles/globalStyles";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Signup() {

    

    const { onRegister } = useAuth();
    const router = useRouter();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSingup = async () => {

        // Verifica se todos os campos foram preenchidos
        if (!email || !senha|| !confirmPassword) {
            Alert.alert("Atenção", "O preenchimento é obrigatório.");
            return;
        }

        // Verifica se as senhas são iguais
        if (senha!== confirmPassword) {
            Alert.alert("Atenção", "As senhas não coincidem.");
            return;
        }

        try {
            setLoading(true);

            if (!onRegister) {
                Alert.alert("Erro", "Função de cadastro não encontrada.");
                return;
            }

            const result = await onRegister(email, senha, cpf, telefone, dataNascimento, nome);

            if (result?.error) {
                Alert.alert("Erro", result.msg);
                return;
            }

            Alert.alert(
                "Sucesso!",
                "Cadastro realizado com sucesso!",
                [
                    {
                        text: "OK",
                        onPress: () => router.push("/login")
                    }
                ]
            );
            setNome("")
            setEmail("");
            setSenha("");
            setDataNascimento("");
            setTelefone("");
            setCpf("");
            setConfirmPassword("");

        } catch (error) {
            console.log("Erro no cadastro:", error);
            Alert.alert("Erro", "Não foi possível realizar o cadastro.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={style.container}>

            <View style={style.containerImage}>
                <Image source={require("@/assets/logo.png")} />
            </View>

            <View style={style.containerForm}>

                <View style={style.inputContainer}>
                    <Text style={style.formLabel}>Nome</Text>

                    <TextInput
                        value={nome}
                        onChangeText={setNome}
                        style={style.formInput}
                        placeholder="Digite seu nome"
                    />
                </View>

                <View style={style.inputContainer}>
                    <Text style={style.formLabel}>E-mail</Text>

                    <TextInput
                    value={email}
                    onChangeText={setEmail}
                    style={style.formInput}
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    />
                </View>

                <View style={style.inputContainer}>
                    <Text style={style.formLabel}>Senha</Text>

                    <TextInput
                        value={senha}
                        onChangeText={setSenha}
                        style={style.formInput}
                        placeholder="Senha"
                        secureTextEntry/>
                </View>

                <View style={style.inputContainer}>
                    <Text style={style.formLabel}>Confirme a senha</Text>

                    <TextInput
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        style={style.formInput}
                        placeholder="Confirmar senha"
                        secureTextEntry/>
                </View>

            </View>

            <View style={style.containerBtn}>

                <Pressable
                    style={style.btn}
                    onPress={handleSingup}
                    disabled={loading}>
                    <Text style={style.btnText}>
                        {loading ? "Cadastrando..." : "Cadastrar"}
                    </Text>
                </Pressable>

                <Text style={style.textSingup}>
                    Já tem conta? <Link href="/login">Faça login</Link>
                </Text>

            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5E6C8",
        alignItems: "center",
        justifyContent: "center",
    },
    containerImage: {
        height: 130
    },

    containerForm: {
        marginHorizontal: 10,
        marginVertical:20,
        padding: 5
    },

    inputContainer: {
        marginVertical: 10
    },
    formLabel:{
        fontSize: 16,
        fontWeight: "600"
    },
    formInput: {
        width: 312,
        backgroundColor: "#FFFAFA",
        borderWidth: 1,
        borderColor: "#3F3F3F",
        paddingVertical: 10,
        paddingHorizontal: 9,
        marginTop: 5,
        borderRadius: 2
    },

    containerBtn: {
        alignItems: "center",
    },

    btn: {
        backgroundColor: "#722F37",
        width: 290,
        paddingVertical: 9,
        borderWidth: 1,
        borderColor: "#3F3F3F",
        borderRadius: 2
    },

    btnText: {
        fontFamily: fonts.caprasimo,
        color: "#fff",
        fontSize: 18,
        fontWeight: "500",
        textAlign: "center"
    },
    textSingup: {
        marginTop: 6,
        fontSize: 14
    }
});
