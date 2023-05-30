import { View, Text, ScrollView } from "react-native";
import styles from "./styles.js";

export default function DetalheExtrato({ route }) {
  const { extrato } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Text
              style={
                extrato.tipo === "pagamento"
                  ? styles.pagamento
                  : styles.recebimento
              }
            >
              {extrato.banco}
              {"\n"}
              {"R$"}
              {extrato.valor}
              {"\n"}
              {extrato.natureza}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}