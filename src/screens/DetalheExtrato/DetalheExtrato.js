import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import styles from "./styles.js";

export default function DetalheExtrato({ route, navigation }) {
  const { item } = route.params;

  const handleEditar = () => {
    navigation.navigate("FormularioEdicao", {
      item: extrato,
      onSave: handleSalvarEdicao,
    });
  };

  const handleSalvarEdicao = (data) => {
    // Lógica para salvar as alterações
    console.log("Dados editados:", data);
    // ...
  };

  const getCorTexto = (item) => {
    const conta = item.conta;
    if (conta === "banco do brasil") {
      return styles.corBancoBDB;
    } else if (conta === "bradesco") {
      return styles.corBancoBra;
    } else if (conta === "banco itau") {
      return styles.corBancoItu;
    } else if (conta === "caixa economica federal") {
      return styles.corBancoCax;
    } else if (conta === "banco santander") {
      return styles.corBancoStd;
    } else {
      return styles.corPadrao;
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Text
              style={[
                getCorTexto(item),
                item.tipo === "pagamento"
                  ? styles.pagamento
                  : styles.recebimento,
              ]}
            >
              {item.nome}
              {"\n"}
              {item.banco + " " + item.tipo_conta}
              {"\n"}
              {item.tipo}
              {"\n"}
              {item.natureza + " de R$ " + item.valor}
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
