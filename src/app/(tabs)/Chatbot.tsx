import React, { useState, useRef } from 'react';
import { View, Image, Text, TextInput, Pressable, StyleSheet, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform} from 'react-native';
import { Feather } from "@react-native-vector-icons/feather";
import { fonts } from '@/styles/globalStyles';

interface Mensagem {
  id: string;
  remetente: 'ia' | 'cliente';
  texto: string;
}

export default function Chatbot() {
  const [textoDigitado, setTextoDigitado] = useState('') 
  
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    {
      id: '1',
      remetente: 'ia',
      texto: 'Olá! Me chamo Wave, como posso te ajudar hoje?',
    }
  ])

  const [carregando, setCarregando] = useState(false)

  const flatListRef = useRef<FlatList>(null)

  async function enviarMensagem() {
    if (!textoDigitado.trim() || carregando) return

    const pergunta = textoDigitado.trim()
    
    const novaMsgCliente: Mensagem = {
      id: Date.now().toString(),
      remetente: 'cliente',
      texto: pergunta,
    };

    setMensagens((prev) => [...prev, novaMsgCliente])
    setTextoDigitado('') // Limpa
    setCarregando(true)

    try {
      // Envia a pergunta para o backend
      const response = await fetch('_______', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mensagem: pergunta }), // Ajustar conforme o backend
      });

      const data = await response.json()

      const novaMsgIA: Mensagem = {
        id: (Date.now() + 1).toString(),
        remetente: 'ia',
        texto: data.resposta || 'Não consegui entender a resposta.', // Ajustar 'data.resposta' para o nome que está no backend
      }

      setMensagens((prev) => [...prev, novaMsgIA])
    } catch (error) {
      // mensagem de erro
      const msgErro: Mensagem = {
        id: (Date.now() + 1).toString(),
        remetente: 'ia',
        texto: 'Desculpe, tive um problema para me conectar com o servidor.',
      }
      setMensagens((prev) => [...prev, msgErro])
      console.error('Erro ao chamar API:', error)
    } finally {
      setCarregando(false)
    }
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} //teclado da tela do celular
    >
      <View style={styles.header}>
        <Image source={require('@/assets/images/ticket.png')} />
      </View>

      {/* balão de mensagem */}
      <FlatList
        ref={flatListRef}
        data={mensagens}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chat}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
        renderItem={({ item }) => {
          const isIA = item.remetente === 'ia';
          return (
            <View style={isIA ? styles.balaoIA : styles.balaoCliente}>
              <Text style={styles.nome}>{isIA ? 'Wave' : 'Você'}</Text>
              <Text>{item.texto}</Text>
            </View>
          );
        }}
        ListFooterComponent={
          carregando ? (
            <View style={styles.balaoIA}>
              <Text style={styles.nome}>Wave</Text>
              <ActivityIndicator size="small" color="#253B70" />
            </View>
          ) : null
        }
      />

      <View style={styles.envioMsg}>
        <TextInput
          style={styles.caixaMsg}
          placeholder="Escreva aqui..."
          placeholderTextColor="#929292"
          value={textoDigitado}
          onChangeText={setTextoDigitado}
        />
        <Pressable 
          style={[styles.btnEnviar, carregando && { opacity: 0.6 }]} 
          onPress={enviarMensagem}
          disabled={carregando}
        >
          <Feather 
            name="send" 
            size={24}
            color="#ffffff"
          />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    backgroundColor: '#F5E6C8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
  },
  chat: {
    padding: 16,
    gap: 16,
    flexGrow: 1,
  },
  balaoIA: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    maxWidth: '75%',
    padding: 12,
    borderRadius: 12,
  },
  nome: {
    fontSize: 10,
    color: '#929292',
    fontFamily: fonts.dmSans,
    marginBottom: 4,
  },
  balaoCliente: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    padding: 12,
    maxWidth: '75%',
    borderRadius: 12,
  },
  envioMsg: {
    backgroundColor: '#F5E6C8',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
  caixaMsg: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    paddingHorizontal: 10,
    color: '#000000',
    fontFamily: fonts.dmSans,
    height: 46,
  },
  btnEnviar: {
    backgroundColor: '#253B70',
    borderRadius: 2,
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
})