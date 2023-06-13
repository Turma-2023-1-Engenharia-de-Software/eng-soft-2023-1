import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "./styles";

function AdicionarCartao({ navigation }) {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [vencimento, setVencimento] = useState("");

  const handleAdicionarCartao = async () => {
    if (nome && numero && vencimento) {
      const cartao = {
        nome,
        numero,
        vencimento,
      };

      try {
        // Salvar os detalhes do cartão
        // (lógica de salvamento aqui)

        // Limpar os campos após adicionar o cartão
        setNome("");
        setNumero("");
        setVencimento("");

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
      <Button title="Adicionar" onPress={handleAdicionarCartao} />
    </View>
  );
}

export default AdicionarCartao;