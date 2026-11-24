import React, { useState } from "react";
import {Text, View, StyleSheet,TouchableOpacity, Alert, ActivityIndicator} from "react-native";
import Header from "@/components/Header/Header";
import { fonts } from "@/styles/globalStyles";
import Menu from "@/components/Menu";
import { Feather } from "@react-native-vector-icons/feather";
import { router } from "expo-router"; 
export default function Usuario() {
  const [saindo, setSaindo] = useState(false);

  async function executarLogout() {
    try {
      setSaindo(true);

      router.replace("/login");
    } catch (error) {
      console.log("Erro", "Não foi possível sair da conta.");
    } finally {
      setSaindo(false);
    }
  }

  function handleSair() {
    Alert.alert(
      "Sair da conta",
      "Tem certeza que deseja encerrar sua sessão?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sair", style: "destructive", onPress: executarLogout },
      ]
    );
  }

  return (
    <View style={styles.screen}>
      <Header />

      <View style={styles.container}>
        <Feather 
          name="user" 
          size={90} 
          color="#000" 
        />

        <Text style={styles.nome}>Nome do usuário</Text>
        <Text style={styles.email}>usuario@email.com</Text>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
          console.log("1. Botão pressionado");
          router.replace("/(auth)/login");
        }}
        activeOpacity={0.6}
          >
          {saindo ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <>
              <Feather 
                name="log-out" 
                size={30} 
                color="#000" 
              />
              <Text style={styles.logoutText}>Sair</Text>
            </>
          )}
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nome: {
    fontFamily: fonts.caprasimo,
    fontSize: 24,
    marginTop: 12,
  },
  email: {
    fontSize: 16,
    marginTop: 4,
  },
  logoutButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 28,
    padding: 12,
  },
  logoutText: {
    fontSize: 16,
    marginTop: 4,
    color: "#000",
  },
});