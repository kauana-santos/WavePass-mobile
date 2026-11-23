import { View, Image, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Feather } from "@react-native-vector-icons/feather";
import { fonts } from '@/styles/globalStyles';

export default function Chatbot() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/ticket.png')}/>
      </View>

      <View style={styles.chat}>
        <View style={styles.balaoIA}>
           <Text style={styles.nome}>Wave</Text>
           <Text>Olá! Me chamo Wave, como posso te ajudar hoje?</Text>
        </View>

        <View style={styles.balaoCliente}>
           <Text style={styles.nome}>Você</Text>
           <Text>Quais eventos de jogos para o mês de dezembro</Text>
        </View>
      </View>

      <View style={styles.envioMsg}>
        <TextInput style={styles.caixaMsg} placeholder="Escreva aqui..." placeholderTextColor={"#929292"}/>
        <Pressable style={styles.btnEnviar}>
           <Feather
              name="send"
              size={30}
              color="#ffffff"
            />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#F5E6C8",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 7
  },
  chat: {
    flex: 1,                  
    padding: 16,
    gap: 16,
  },
  balaoIA: {
    backgroundColor: "#FFFFFF",
    fontFamily: fonts.dmSans,
    alignSelf: "flex-start",
    maxWidth: "75%",
    padding: 12,
    borderRadius: 12,
  },
  nome: {
    fontSize: 10,
    color: "#929292",
    fontFamily: fonts.dmSans,
  },
  balaoCliente: {
    backgroundColor: "#FFFFFF",
    fontFamily: fonts.dmSans,
    alignSelf: "flex-end",
    padding: 12,
    maxWidth: "75%",
    borderRadius: 12
  },
  envioMsg: {
    backgroundColor: "#F5E6C8",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10
  },
  caixaMsg: {
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    margin: 5,
    paddingLeft: 10,
    color: "#000000",
    fontFamily: fonts.dmSans,
    width: 580,
    height: 46
  },
  btnEnviar: {
    backgroundColor: "#253B70",
    borderRadius: 2, 
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center"
  }
})