import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles.js";

export default function DetalheExtrato({ route, navigation }) {
  const { extrato } = route.params;

  const handleEditar = () => {
    navigation.navigate("FormularioEdicao", { item: extrato, onSave: handleSalvarEdicao });
  };

  const handleSalvarEdicao = (data) => {
    // Lógica para salvar as alterações
    console.log("Dados editados:", data);
    // ...
  };

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

        <TouchableOpacity style={styles.buttonEditar} onPress={handleEditar}>
          <Text style={styles.buttonLabel}>Editar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
