import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import styles from "./styles.js";
import { useNavigation } from '@react-navigation/native';

export default function DetalheExtrato({ route, navigation }) {
  const { item } = route.params;

  const handleEditar = () => {
    navigation.navigate("FormularioEdicao", {
      item: extrato,
      onSave: handleSalvarEdicao,
    });
  };

  const BackButton = () => {
    const navigation = useNavigation();
  
    const handlePress = () => {
      navigation.goBack();
    };
  
    return (
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <View>
          <Text style={styles.buttonText}>Voltar</Text>
        </View>
      </TouchableOpacity>
    );
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
      <BackButton />
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
              {item.conta}
              {"\n"}
              {item.tipo}
              {"\n"}
              {item.opcaoSelecionada + " de R$ " + item.valor}
              {"\n"}
              {item.date.toString()}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}