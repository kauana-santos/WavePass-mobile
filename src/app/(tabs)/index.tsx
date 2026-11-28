import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import CarouselComponente from "@/components/CarroselComponente/CarouselComponente";
import CategoriaCard from "@/components/CategoriaCard/CategoriaCard";
import EventoCard from "@/components/EventoCard/EventoCard";
import Header from "@/components/Header/Header";
import MarqueeComponente from "@/components/Marquee/MarqueeComponente";
import { listarEventos } from "../../services/eventoService";

import { fonts } from '@/styles/globalStyles';

const data = ["Wicked: A História Não Contada Das Bruxas de Oz", "item2", "item3"];
const categorias = [
    { id: 1, nome: "Shows", categoriaApi: "SHOWS", imagem: require("@/assets/images/mascotes/shows.png") },
    { id: 2, nome: "Festas", categoriaApi: "FESTAS", imagem: require("@/assets/images/mascotes/DISCO.png") },
    { id: 3, nome: "Teatros", categoriaApi: "TEATRO", imagem: require("@/assets/images/mascotes/teatro.png") },
    { id: 4, nome: "Exposições", categoriaApi: "EXPOSICOES", imagem: require("@/assets/images/mascotes/artes.png") },
    { id: 5, nome: "Jogos", categoriaApi: "JOGOS", imagem: require("@/assets/images/mascotes/jogos.png") },
    { id: 6, nome: "Filmes", categoriaApi: "CINEMA", imagem: require("@/assets/images/mascotes/cinema.png") },
    { id: 7, nome: "Gastronomia", categoriaApi: "GASTRONOMIA", imagem: require("@/assets/images/mascotes/gastronomia.png") },
];

interface Evento {
    id: number;
    nome: string;
    cidade: string;
    estado: string;
    imagemCard: string;
    imagemBanner?: string;
    sessoes: {
        id: number;
        dataHora: string;
    }[];
}

export default function Index() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [carregando, setCarregando] =useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null)

  async function buscarEventos(categoria?: string){
    try{
      setCarregando(true);
      const resultado = await listarEventos(
        categorias ? {categoria} : {}
      );
      setEventos(resultado.content)
    } catch(error){
      console.log("Erro ao buscar eventos:", error);
      Alert.alert("Erro", "Não foi possível carregar os eventos.");
    } finally{
      setCarregando(false)
    }
  }

  useEffect(() => {
    buscarEventos();
  }, [])

  function selecionarCategoria(categoria: string) {
    const novaCategoria = categoriaSelecionada === categoria ? null : categoria;

    setCategoriaSelecionada(novaCategoria);
    buscarEventos(novaCategoria ?? undefined);
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <Header/>

          <MarqueeComponente/>

          <CarouselComponente 
            data={eventos}
            height={300}
            width={360}
            autoPlay
            renderItem={({ item }) => {
              const dataHora = item.sessoes?.[0]?.dataHora;

              return(
                <View style={styles.containerCarrosel}>
                
                <Image style={styles.CarroselImg} source={{uri:item.imagemBanner || item.imagemCard}}/>

                <Text style={styles.carroselText}>{item.nome}</Text>

                <Text style={styles.carroselText}>{item.cidade} - {item.estado}</Text>

                <Text style={styles.carroselText}>
                  {dataHora
                    ? new Date(dataHora).toLocaleString("pt-BR")
                    : "Data não informada"}
                </Text>
              </View>
              )
            }}
          />

          <View>
            <Text style={styles.titulo}>Categorias</Text>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.containerCategorias}>
              {categorias.map((cat) => (
                <CategoriaCard 
                key={cat.id} 
                categoryName={cat.nome} 
                icon={cat.imagem}
                onPress={()=> selecionarCategoria(cat.categoriaApi)}
                selecionado={categoriaSelecionada === cat.categoriaApi}/>
              ))}
            </ScrollView>
          </View>
        </View>

        <View>
          <Text style={styles.titulo}>Eventos</Text>

          <View style={styles.containerEventos}>
            {carregando ? (
              <ActivityIndicator size="large" color="#722F37"/>
            ): eventos.length > 0 ? (
              eventos.map((evento) => (
                <EventoCard
                key={evento.id}
                imagem={evento.imagemCard}
                titulo={evento.nome}
                local={`${evento.cidade} - ${evento.estado}`}
                data={
                    evento.sessoes?.[0]?.dataHora
                        ? new Date(evento.sessoes[0].dataHora).toLocaleDateString("pt-BR")
                        : "Data não informada"
                }/>
              )) 
            ): ( <Text></Text>)}
            
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  carrosel:{
    marginVertical:20
  },
  containerCarrosel: {
    height: 350,
    width: "100%",
    textAlign: "center"
  },
  CarroselImg: {
    height: 190,
    width: "100%",
    resizeMode: "cover",
  },
  carroselText:{
    textAlign: "center",
    fontFamily: fonts.dmSans,
    fontSize: 15,
    marginVertical: 5
  },
  containerCategorias:{
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10
  },
  containerEventos:{
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginVertical: 10
  },
  titulo:{
    fontFamily: fonts.dmSansMedium,
    fontSize: 20,
    marginLeft: 15

  }
})
