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

  const getCorTexto = (extrato) => {
    const banco = extrato.banco.toLowerCase();
    if (banco === 'banco do brasil') {
      return styles.corBancoBDB;
    } else if (banco === 'bradesco') {
      return styles.corBancoBra;
    } else if (banco === 'banco itau') {
      return styles.corBancoItu;
    } else if (banco === 'caixa economica federal') {
      return styles.corBancoCax;
    } else if (banco === 'banco santander') {
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
                getCorTexto(extrato),
                extrato.tipo === 'pagamento'
                  ? styles.pagamento
                  : styles.recebimento,
              ]}
            >
                {extrato.nome}
                {'\n'}
                {extrato.banco + ' ' + extrato.tipo_conta}
                {'\n'}
                {extrato.tipo}
                {'\n'}
                {extrato.natureza + ' de R$ ' + extrato.valor}
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
