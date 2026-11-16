import { Marquee } from "@animatereactnative/marquee";
import { View, Text, StyleSheet } from "react-native";

const categorias = [
  "Shows",
  "Festas",
  "Teatros",
  "Exposições",
  "Jogos",
  "Cinema",
  "Gastronomia",
  "Feiras",
];

export default function MarqueeComponente() {
  return (
    <View style={styles.container}>
      <Marquee spacing={20}>
        <View style={styles.lista}>
          {categorias.map((categoria, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.texto}>
                {categoria.toUpperCase()}
              </Text>

              <Text style={styles.separador}>▪</Text>
            </View>
          ))}
        </View>
      </Marquee>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#263D73",
    paddingVertical: 10,
  },

  lista: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "nowrap",
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
  },

  texto: {
    color: "#F5E6C8",
    fontSize: 20,
    fontWeight: "900",
  },

  separador: {
    color: "#E5B52D",
    fontSize: 22,
    marginHorizontal: 15,
  },
});