import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";

function AdicionarCartao({ navigation }) {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [vencimento, setVencimento] = useState("");
  const [codigo, setCodigo] = useState("");

  const handleAdicionarCartao = async () => {
    if (nome === "" || numero === "" || vencimento === "" || codigo === "") {
      Alert.alert("Preencha os campos corretamente");
      return;
    }

    if (nome && numero && vencimento && codigo) {
      const cartao = {
        nome,
        numero,
        vencimento,
        codigo,
      };

      try {
        // Salvar os detalhes do cartão
        const oldCartoes = await AsyncStorage.getItem("@cartoes");
        let cartoes = [];

        if (oldCartoes) {
          cartoes = JSON.parse(oldCartoes); // Converter para array se existir
        }

        // Adicionar o novo cartão aos cartões existentes
        cartoes.push(cartao);

        // Salvar os cartões atualizados no AsyncStorage
        await AsyncStorage.setItem("@cartoes", JSON.stringify(cartoes));

        // Limpar os campos após adicionar o cartão
        setNome("");
        setNumero("");
        setVencimento("");
        setCodigo("");

        // Navegar para a tela "Cartao" e passar os parâmetros
        navigation.navigate("Cartao", { cartao });

        console.log("Cartão adicionado com sucesso!");
      } catch (error) {
        console.log("Erro ao salvar o cartão:", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Adicionar Cartão de Crédito</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número"
        value={numero}
        onChangeText={(text) => setNumero(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Vencimento"
        value={vencimento}
        onChangeText={(text) => setVencimento(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Codigo"
        value={codigo}
        onChangeText={(text) => setCodigo(text)}
      />
      <Button title="Adicionar" onPress={handleAdicionarCartao} />
    </View>
  );
}

export default AdicionarCartao;
