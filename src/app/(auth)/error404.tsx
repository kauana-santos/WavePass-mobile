import { Image, Text, View, Pressable, StyleSheet } from 'react-native'
import { fonts } from '@/styles/globalStyles'
import Header from '@/components/Header/Header'

export default function error404() {
  return (
    <View style={styles.container}>
        <Header/>
        <View style={styles.containerErro}>
            <View style={styles.containerImage}>
                <Image style={styles.img} source={require('@/assets/images/not-found-404.png')}/>
            </View>
            <View>
                <View>
                    <Text style={styles.texto}>Ops! {"\n"}Algo não está certo com este link {"\n"}(Erro 404)</Text>
                </View>
                <View style={styles.btnContainer}>
                    <Pressable style={styles.btnPg}>
                        <Text style={styles.btnTexto}>Página Inicial</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffcf6",
        
    },
    containerErro: {
        height: "100%",
        alignItems:"center",
        justifyContent:"center"
    },
    containerImage: {
        height: 300
    },
    img: {
        width: 300,
        height: 300
    },
    texto: {
        marginTop: 5,
        textAlign: "center",
        fontFamily: fonts.caprasimo,
        fontSize: 18
    },
    btnContainer: {
        alignItems: "center"
    },
    btnPg: {
        marginTop: 20,
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
        fontFamily: fonts.caprasimo,
    },
})