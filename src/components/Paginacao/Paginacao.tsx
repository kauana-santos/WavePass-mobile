import { View, Text, Pressable, StyleSheet } from "react-native";

interface PaginacaoProps {
    paginaAtual: number;
    totalPaginas: number;
    onPageChange: (pagina: number) => void;
}

export default function Paginacao({ paginaAtual, totalPaginas, onPageChange }: PaginacaoProps) {
    if (totalPaginas <= 1) return null;

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.botao, paginaAtual === 0 && styles.desabilitado]}
                disabled={paginaAtual === 0}
                onPress={() => onPageChange(paginaAtual - 1)}
            >
                <Text style={styles.texto}>Anterior</Text>
            </Pressable>

            {Array.from({ length: totalPaginas }, (_, index) => (
                <Pressable
                    key={index}
                    style={[styles.numero, paginaAtual === index && styles.selecionado]}
                    onPress={() => onPageChange(index)}
                >
                    <Text style={[styles.texto, paginaAtual === index && styles.textoSelecionado]}>
                        {index + 1}
                    </Text>
                </Pressable>
            ))}

            <Pressable
                style={[styles.botao, paginaAtual === totalPaginas - 1 && styles.desabilitado]}
                disabled={paginaAtual === totalPaginas - 1}
                onPress={() => onPageChange(paginaAtual + 1)}
            >
                <Text style={styles.texto}>Próximo</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
        marginVertical: 20,
    },
    botao: {
        padding: 10,
        backgroundColor: "#722F37",
        borderRadius: 6,
    },
    numero: {
        width: 35,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
        backgroundColor: "#f0f0f0",
    },
    selecionado: {
        backgroundColor: "#722F37",
    },
    texto: {
        color: "#333",
    },
    textoSelecionado: {
        color: "#fff",
    },
    desabilitado: {
        opacity: 0.4,
    },
});