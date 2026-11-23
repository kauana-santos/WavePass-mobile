import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, Platform} from 'react-native'
import Header from '@/components/Header/Header'
import Menu from '@/components/Menu'
import { fonts } from '@/styles/globalStyles'
import ToastManager, { Toast } from 'toastify-react-native'

export default function Filtro() {
  const [eventos, setEventos] = useState([])
  const [carregando, setCarregando] = useState(false)

  const [localizacao, setLocalizacao] = useState('')
  const [precoMax, setPrecoMax] = useState('')

  const BASE_URL =
    Platform.OS === 'web'
      ? 'http://localhost:8080'
      : 'http://10.92.198.4:8080'

  async function buscarEventos(filtrosAtuais = { localizacao, precoMax }) {
    setCarregando(true);
    try {
      // Usa o BASE_URL dinâmico aqui
      let url = `${BASE_URL}/api/wavepass/evento?size=100`

      if (filtrosAtuais.localizacao.trim()) {
        url += `&localizacao=${encodeURIComponent(filtrosAtuais.localizacao.trim())}`
      }
      if (filtrosAtuais.precoMax.trim()) {
        const precoFormatado = filtrosAtuais.precoMax.replace(',', '.').trim()
        url += `&precoMax=${encodeURIComponent(precoFormatado)}`
      }

      const resposta = await fetch(url)

      if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`)
      }

      const dados = await resposta.json()
      const lista = dados.content || [];

      setEventos(lista);
      Toast.success(`${lista.length} evento(s) encontrado(s)!`)
    } catch (erro: any) {
      console.error('Erro ao buscar eventos:', erro);

      Toast.error('Não foi possível buscar os eventos.');
    } finally {
      setCarregando(false);
    }
  }

  function limparFiltros() {
    setLocalizacao('');
    setPrecoMax('');
    buscarEventos({ localizacao: '', precoMax: '' });
  }

  useEffect(() => {
    buscarEventos();
  }, []);

  return (
    <View style={styles.tela}>
      <ToastManager />

      <Header />
      <View style={styles.conteudo}>
        <View>
          <View style={styles.container}>
            <Text style={styles.titleFiltro}>Filtros:</Text>
          </View>

          <View style={styles.containerFiltro}>
            <Text style={styles.textFiltro}>Preço Máximo</Text>
            <View style={[styles.inputPrecoContainer, { marginBottom: 16 }]}>
              <Text style={styles.prefixoPreco}>R$</Text>
              <TextInput
                style={styles.inputPreco}
                placeholder="Preço Máximo"
                placeholderTextColor="#B0B0B0"
                keyboardType="numeric"
                value={precoMax}
                onChangeText={setPrecoMax}
              />
            </View>

            <Text style={styles.textFiltro}>Estado/Cidade</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Estado/Cidade"
              placeholderTextColor="#B0B0B0"
              value={localizacao}
              onChangeText={setLocalizacao}
            />
          </View>
        </View>

        <View style={styles.containerBtn}>
          <Pressable
            style={styles.btnAplicar}
            onPress={() => buscarEventos()}
            disabled={carregando}
          >
            <Text style={styles.btnTexto}>
              {carregando ? 'Buscando...' : 'Aplicar Filtros'}
            </Text>
          </Pressable>

          <Pressable style={styles.btnLimpar} onPress={limparFiltros}>
            <Text style={styles.textLimpar}>Limpar Filtros</Text>
          </Pressable>
        </View>
      </View>

      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#fffcf6',
  },
  conteudo: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 32,
  },
  container: {
    marginBottom: 24,
  },
  titleFiltro: {
    fontFamily: fonts.caprasimo,
    fontSize: 22,
    color: '#000000',
  },
  containerFiltro: {
    paddingHorizontal: 10,
  },
  textFiltro: {
    fontFamily: fonts.dmSans,
    fontSize: 13,
    color: '#1a1a1a',
    marginBottom: 6,
  },
  inputPrecoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFFAFA',
    borderColor: '#3f3f3f',
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 12,
    height: 44,
  },
  prefixoPreco: {
    fontFamily: fonts.dmSansMedium,
    fontSize: 13,
    color: '#1a1a1a',
    marginRight: 10,
  },
  inputPreco: {
    flex: 1,
    fontFamily: fonts.dmSans,
    fontSize: 13,
    color: '#1a1a1a',
  },
  formInput: {
    width: '100%',
    backgroundColor: '#FFFAFA',
    borderColor: '#3f3f3f',
    borderWidth: 1,
    borderRadius: 2,
    paddingLeft: 36,
    paddingRight: 12,
    height: 44,
    fontFamily: fonts.dmSans,
    fontSize: 13,
    color: '#1a1a1a',
  },
  containerBtn: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  btnAplicar: {
    width: '100%',
    backgroundColor: '#632B2E',
    borderColor: '#3f3f3f',
    borderWidth: 1,
    borderRadius: 2,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTexto: {
    fontFamily: fonts.caprasimo,
    fontSize: 18,
    color: '#FFFFFF',
  },
  btnLimpar: {
    marginTop: 22,
    paddingVertical: 6,
  },
  textLimpar: {
    fontFamily: fonts.caprasimo,
    fontSize: 15,
    color: '#000000',
  },
});