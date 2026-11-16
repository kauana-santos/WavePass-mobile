import { Image, Text, View, Pressable, StyleSheet } from 'react-native'
import { fonts } from '@/styles/globalStyles'

export default function error404() {
  return (
    <View style={styles.container}>
        <View style={styles.containerImage}>
            <Image source={require('@/assets/images/not-found-404.png')}/>
        </View>

        <View>
            <View>
                <Text style={styles.texto}>Ops! Algo não está certo com este link (Erro 404)</Text>
            </View>

            <View>
                <Pressable style={styles.btnPg}>
                    <Text style={styles.btnTexto}>Página Inicial</Text>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffcf6",
        alignItems:"center",
        justifyContent:"center"
    },
    containerImage: {
        height: 300,
    },
    texto: {
        fontFamily: fonts.caprasimo,
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
        fontFamily: fonts.dmSansMedium,
    },
})