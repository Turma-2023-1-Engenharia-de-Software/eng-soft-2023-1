import React from "react";
import { View, Text, Button, Alert } from "react-native";

import styles from "./styles.js";
import { removeReceitasEDespesas } from "../../utils/storage.js";

export default function DetalheExtrato({ route, navigation }) {
  const { item, index } = route.params;

  const handleEditar = () => {
    navigation.navigate("FormularioEdicao", {
      item: item,
      onSave: handleSalvarEdicao,
      index: index,
    });
  };

  const handleSalvarEdicao = (data) => {
    // Lógica para salvar as alterações
    console.log("Dados editados:", data);
    // ...
  };

  const dialogDeleteTransacao = (index) => {
    Alert.alert("Apagar transação", "Deseja realmente apagar?", [
      {
        text: "Cancelar",
      },
      {
        text: "Confirmar",
        onPress: () => {
          removeReceitasEDespesas(index);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{item.nome}</Text>
      <View style={styles.divider}></View>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Conta: </Text>
        {item.conta}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Tipo: </Text>
        {item.tipo}
      </Text>
      <Text style={styles.text}>
        <Text style={[styles.textBold, { textTransform: "capitalize" }]}>
          {item.opcaoSelecionada}
        </Text>
        {" de R$ " + item.valor}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.textBold}>Data: </Text>
        {item.date.getDate()}/{item.date.getMonth()}/{item.date.getFullYear()}
      </Text>

      <View style={styles.buttonsView}>
        <Button title="Editar" onPress={handleEditar}></Button>
        <Button
          color="red"
          title="Apagar"
          onPress={() => dialogDeleteTransacao(index)}
        ></Button>
        <Button
          color="#757de8"
          title="Voltar"
          onPress={() => {
            navigation.goBack();
          }}
        ></Button>
      </View>
    </View>
  );
}
